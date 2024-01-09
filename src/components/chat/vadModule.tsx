import { FC, memo, useEffect, useState } from "react";
import { THandleEndRecord } from "@/utils/types/THandleEndRecord";
import { useMicVAD, utils } from "@ricky0123/vad-react"
import type LibAVJS from "libav.js";
//@ts-ignore
import * as LibAVdef from "./libav/libav-4.8.6.0.1-default.js";
//@ts-ignore
let LibAV: LibAVJS.LibAVWrapper = (LibAVdef as any);

// fix problems of not working vad module,
// cause without this it cant see necessary files to initialize webassembly
// take fix from here https://github.com/ricky0123/vad/issues/24#issuecomment-1826408126
// where "/_next/static/*" path to files, copied in next.config.js file by CopyPlugin 
// from here https://wiki.vad.ricky0123.com/en/docs/user/browser in Bundling section
import * as ort from "onnxruntime-web";
ort.env.wasm.wasmPaths = "/_next/static/";
const staticVadOptions = {
  modelURL: "/_next/static/silero_vad.onnx",
  workletURL: "/_next/static/vad.worklet.bundle.min.js",
  startOnLoad: true,
}

type Props = {
  options: any;
  handleEndRecord: THandleEndRecord;
  handleStopRecording: () => void;
  handleStartRecording: () => void;
};

const VadModule: FC<Props> = ({
  options,
  handleEndRecord,
  handleStopRecording,
  handleStartRecording,
}) => {
  const [micStream, setMicStream] = useState<MediaStream>();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: false,
      },
    }).then((stream) => {
      console.log('stream: ', stream);
      const context = new AudioContext();
      
      const compressor = context.createDynamicsCompressor();
      compressor.threshold.value = -50;
      compressor.knee.value = 40;
      compressor.ratio.value = 12;
      compressor.attack.value = 0;
      compressor.release.value = 0.25;

      const filter = context.createBiquadFilter();
      filter.Q.value = 8.30;
      filter.frequency.value = 355;
      filter.gain.value = 3.0;
      filter.type = 'bandpass';
      filter.connect(compressor);


      compressor.connect(context.destination)
      filter.connect(context.destination)

      const source = context.createMediaStreamSource(stream);

      source.connect( filter );
      console.log('source: ', source);
      setMicStream(source.mediaStream)
    })

  }, []);

  useMicVAD({
    ...staticVadOptions,
    stream: micStream,
    onSpeechEnd: async (audio) => {
      console.log('audio: ', audio);
      const wavBuffer = utils.encodeWAV(audio, 1)
      const wav = new Blob([wavBuffer], { type: 'audio/wav' })
      handleStopRecording()
      // handleEndRecord(wav)

      
      const libav = await LibAV.LibAV({noworker: true});
      const arrBuff2 = await wav.arrayBuffer()
      const arrBuff = await (await fetch("https://www.dwsamplefiles.com/?dl_id=489")).arrayBuffer()
      console.log('arrBuff: ', arrBuff);
      console.log('arrBuff2: ', arrBuff2);
      const file = new Uint8Array(arrBuff)
      
      console.log('file: ', new Uint8Array(arrBuff));
      console.log('file2: ', new Uint8Array(arrBuff2));
      await libav.writeFile("tmp.wav", file);
      const [fmt_ctx, [stream]] = await libav.ff_init_demuxer_file("tmp.wav");
      console.log('fmt_ctx: ', fmt_ctx);
      console.log('stream: ', stream);

      const [q, c, pkt, frame] = await libav.ff_init_decoder(stream.codec_id, stream.codecpar);
      console.log('q: ', q);
      console.log('c: ', c);
      console.log('pkt: ', pkt);
      console.log('frame: ', frame);
      const [a, packets] = await libav.ff_read_multi(fmt_ctx, pkt);
      console.log('a: ', a);
      console.log('packets: ', packets);
      const frames = await libav.ff_decode_multi(c, pkt, frame, packets[stream.index]);
      console.log('frames: ', frames);
      
      const initEncoder = await libav.ff_init_encoder("libopus", {
          ctx: {
              bit_rate: 48000,
              sample_fmt: libav.AV_SAMPLE_FMT_FLT,
              sample_rate: 48000,
              channel_layout: 4,
              channels: 1
          }
      });
      console.log('initEncoder: ', initEncoder);
      const [codec2, c2, frame2, pkt2, frame_size] = initEncoder

      // Get a filter graph that won't really do anything
      const [filter_graph, buffersrc_ctx, buffersink_ctx] =
          await libav.ff_init_filter_graph("volume=0.4", {
              sample_rate: 48000,
              sample_fmt: libav.AV_SAMPLE_FMT_FLT,
              channel_layout: 3
          }, {
              sample_rate: 48000,
              sample_fmt: libav.AV_SAMPLE_FMT_FLT,
              channel_layout: 3,
              frame_size: frame_size
          });

      // Filter
      const filterFrames = await libav.ff_filter_multi(buffersrc_ctx, buffersink_ctx, frame, frames, true);
      console.log('filterFrames: ', filterFrames);


      const initMuxer = await  libav.ff_init_muxer({filename: "tmp2.opus", open: true}, [[initEncoder[1], 1, 48000]]);
      console.log('initMuxer: ', initMuxer);
      const [oc, fmt, pb, st] = initMuxer

      await libav.avformat_write_header(oc, 0);
      
      
      const packets2 = await libav.ff_encode_multi(c2, frame2, pkt2, filterFrames, true);
      console.log('packets2: ', packets2);

      await libav.ff_write_multi(oc, pkt, packets2);

      await libav.av_write_trailer(oc);

      await libav.ff_free_muxer(oc, pb);
      await libav.ff_free_encoder(c, frame, pkt);

      // Free the decoder
      await libav.ff_free_decoder(c, pkt, frame);

      // Free the filter
      await libav.avfilter_graph_free_js(filter_graph);

      const out = await libav.readFile("tmp2.opus");
      console.log('out: ', out);

      const element = document.createElement('a')
      // element.style = 'display:none'
      document.body.appendChild(element)
      // const view = new Uint8Array(Module.HEAPU8.buffer, dataPtr, size)
      var blob = new Blob([out.buffer]);

      const url = window.URL.createObjectURL(blob)
      element.href = url
      // const filename = UTF8ToString("tmp.opus")
      element.download = "tmp.opus"
      element.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(element)
    },
    onSpeechStart: () => {
      handleStartRecording()
    }
  })

  return (false);
};

export default memo(VadModule);
