(function() {
    function r(e) {
        e = e || [0, 97, 115, 109, 1, 0, 0, 0];
        if (typeof WebAssembly !== "object" || typeof WebAssembly.instantiate !== "function") return false;
        try {
            var e = new WebAssembly.Module(new Uint8Array(e));
            if (e instanceof WebAssembly.Module) return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
        } catch (e) {}
        return false
    }

    function o() {
        try {
            var e = new WebAssembly.Memory({
                initial: 1,
                maximum: 1,
                shared: true
            });
            if (!(e.buffer instanceof SharedArrayBuffer)) return false;
            return true
        } catch (e) {}
        return false
    }

    function s() {
        return r([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])
    }

    function n() {
        try {
            importScripts("data:text/javascript,0");
            return false
        } catch (e) {}
        return true
    }
    var f;
    var c = typeof process !== "undefined";
    var LibAV = {};
    f = LibAV;
    if (!f.base) f.base = ".";
    f.isWebAssemblySupported = r;
    f.isThreadingSupported = o;
    f.isSIMDSupported = s;
    f.isModule = n;

    function i(e) {
        e = e || {};
        var _ = !e.nowasm && r();
        var t = e.yesthreads && _ && !e.nothreads && o();
        var a = _ && !e.nosimd && s();
        if (!_) return "asm";
        else if (!t && !a) return "wasm";
        else return (t ? "thr" : "") + (a ? "simd" : "")
    }
    f.target = i;
    f.VER = "4.8.6.0.1";
    f.CONFIG = "default";
    f.DBG = "";
    var A = {};
    A.i64tof64 = function(e, _) {
        if (!_ && e >= 0) return e;
        if (_ === -1 && e < 0) return e;
        return _ * 4294967296 + e + (e < 0 ? 4294967296 : 0)
    };
    A.f64toi64 = function(e) {
        return [~~e, Math.floor(e / 4294967296)]
    };
    A.i64ToBigInt = function(e, _) {
        var t = new DataView(new ArrayBuffer(8));
        t.setInt32(0, e, true);
        t.setInt32(4, _, true);
        return t.getBigInt64(0, true)
    };
    A.bigIntToi64 = function(e) {
        var _ = new DataView(new ArrayBuffer(8));
        _.setBigInt64(0, e, true);
        return [_.getInt32(0, true), _.getInt32(4, true)]
    };

    function e(e, _) {
        if (typeof _ === undefined) _ = 0;
        var t = _;
        e.forEach(function(e) {
            A[e] = t++
        })
    }
    A.AV_OPT_SEARCH_CHILDREN = 1;
    e(["AVMEDIA_TYPE_UNKNOWN", "AVMEDIA_TYPE_VIDEO", "AVMEDIA_TYPE_AUDIO", "AVMEDIA_TYPE_DATA", "AVMEDIA_TYPE_SUBTITLE", "AVMEDIA_TYPE_ATTACHMENT"], -1);
    e(["AV_SAMPLE_FMT_NONE", "AV_SAMPLE_FMT_U8", "AV_SAMPLE_FMT_S16", "AV_SAMPLE_FMT_S32", "AV_SAMPLE_FMT_FLT", "AV_SAMPLE_FMT_DBL", "AV_SAMPLE_FMT_U8P", "AV_SAMPLE_FMT_S16P", "AV_SAMPLE_FMT_S32P", "AV_SAMPLE_FMT_FLTP", "AV_SAMPLE_FMT_DBLP", "AV_SAMPLE_FMT_S64", "AV_SAMPLE_FMT_S64P", "AV_SAMPLE_FMT_NB"], -1);
    e(["AV_PIX_FMT_NONE", "AV_PIX_FMT_YUV420P", "AV_PIX_FMT_YUYV422", "AV_PIX_FMT_RGB24", "AV_PIX_FMT_BGR24", "AV_PIX_FMT_YUV422P", "AV_PIX_FMT_YUV444P", "AV_PIX_FMT_YUV410P", "AV_PIX_FMT_YUV411P", "AV_PIX_FMT_GRAY8", "AV_PIX_FMT_MONOWHITE", "AV_PIX_FMT_MONOBLACK", "AV_PIX_FMT_PAL8", "AV_PIX_FMT_YUVJ420P", "AV_PIX_FMT_YUVJ422P", "AV_PIX_FMT_YUVJ444P", "AV_PIX_FMT_UYVY422", "AV_PIX_FMT_UYYVYY411", "AV_PIX_FMT_BGR8", "AV_PIX_FMT_BGR4", "AV_PIX_FMT_BGR4_BYTE", "AV_PIX_FMT_RGB8", "AV_PIX_FMT_RGB4", "AV_PIX_FMT_RGB4_BYTE", "AV_PIX_FMT_NV12", "AV_PIX_FMT_NV21", "AV_PIX_FMT_ARGB", "AV_PIX_FMT_RGBA", "AV_PIX_FMT_ABGR", "AV_PIX_FMT_BGRA", "AV_PIX_FMT_GRAY16BE", "AV_PIX_FMT_GRAY16LE", "AV_PIX_FMT_YUV440P", "AV_PIX_FMT_YUVJ440P", "AV_PIX_FMT_YUVA420P", "AV_PIX_FMT_RGB48BE", "AV_PIX_FMT_RGB48LE", "AV_PIX_FMT_RGB565BE", "AV_PIX_FMT_RGB565LE", "AV_PIX_FMT_RGB555BE", "AV_PIX_FMT_RGB555LE", "AV_PIX_FMT_BGR565BE", "AV_PIX_FMT_BGR565LE", "AV_PIX_FMT_BGR555BE", "AV_PIX_FMT_BGR555LE"], -1);
    A.AVIO_FLAG_READ = 1;
    A.AVIO_FLAG_WRITE = 2;
    A.AVIO_FLAG_READ_WRITE = 3;
    A.AVIO_FLAG_NONBLOCK = 8;
    A.AVIO_FLAG_DIRECT = 32768;
    A.AVFMT_FLAG_NOBUFFER = 64;
    A.AVFMT_FLAG_FLUSH_PACKETS = 512;
    A.AVSEEK_FLAG_BACKWARD = 1;
    A.AVSEEK_FLAG_BYTE = 2;
    A.AVSEEK_FLAG_ANY = 4;
    A.AVSEEK_FLAG_FRAME = 8;
    A.AVDISCARD_NONE = -16;
    A.AVDISCARD_DEFAULT = 0;
    A.AVDISCARD_NONREF = 8;
    A.AVDISCARD_BIDIR = 16;
    A.AVDISCARD_NONINTRA = 24;
    A.AVDISCARD_NONKEY = 32;
    A.AVDISCARD_ALL = 48;
    A.AV_LOG_QUIET = -8;
    A.AV_LOG_PANIC = 0;
    A.AV_LOG_FATAL = 8;
    A.AV_LOG_ERROR = 16;
    A.AV_LOG_WARNING = 24;
    A.AV_LOG_INFO = 32;
    A.AV_LOG_VERBOSE = 40;
    A.AV_LOG_DEBUG = 48;
    A.AV_LOG_TRACE = 56;
    A.AV_PKT_FLAG_KEY = 1;
    A.AV_PKT_FLAG_CORRUPT = 2;
    A.AV_PKT_FLAG_DISCARD = 4;
    A.AV_PKT_FLAG_TRUSTED = 8;
    A.AV_PKT_FLAG_DISPOSABLE = 16;
    e(["E2BIG", "EPERM", "EADDRINUSE", "EADDRNOTAVAIL", "EAFNOSUPPORT", "EAGAIN", "EALREADY", "EBADF", "EBADMSG", "EBUSY", "ECANCELED", "ECHILD", "ECONNABORTED", "ECONNREFUSED", "ECONNRESET", "EDEADLOCK", "EDESTADDRREQ", "EDOM", "EDQUOT", "EEXIST", "EFAULT", "EFBIG", "EHOSTUNREACH", "EIDRM", "EILSEQ", "EINPROGRESS", "EINTR", "EINVAL", "EIO", "EISCONN", "EISDIR", "ELOOP", "EMFILE", "EMLINK", "EMSGSIZE", "EMULTIHOP", "ENAMETOOLONG", "ENETDOWN", "ENETRESET", "ENETUNREACH", "ENFILE", "ENOBUFS", "ENODEV", "ENOENT"], 1);
    A.AVERROR_EOF = -541478725;
    Object.assign(f, A);
    f.LibAV = function(e) {
        e = e || {};
        var _ = e.base || f.base;
        var t = i(e);
        var a = './libav-4.8.6.0.1-default.simd.js'; //f.toImport || _ + "/libav-4.8.6.0.1-default." + t + ".js";
        var d;
        var r = "direct";
        if (t.indexOf("thr") === 0) r = "threads";
        else if (!c && !e.noworker && typeof Worker !== "undefined") r = "worker";
        return Promise.all([]).then(async function() {
            if (!f.LibAVFactory) {
                console.log('========= a: ', a);
                // f.LibAVFactory = require(a)
                f.LibAVFactory = (() => {
                    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
                    if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
                    return (
                        function(config) {
                            var LibAVFactory = config || {};

                            var Module = typeof LibAVFactory != "undefined" ? LibAVFactory : {};
                            var readyPromiseResolve, readyPromiseReject;
                            Module["ready"] = new Promise(function(resolve, reject) {
                                readyPromiseResolve = resolve;
                                readyPromiseReject = reject
                            });
                            if (typeof _scriptDir === "undefined") {
                                if (typeof LibAV === "object" && LibAV && LibAV.base) _scriptDir = LibAV.base + "/";
                                else _scriptDir = self.location.href
                            }
                            Module.locateFile = function(path, prefix) {
                                if (path.lastIndexOf(".wasm") === path.length - 5 && path.indexOf("libav-") !== -1) {
                                    var gt;
                                    if (typeof globalThis !== "undefined") gt = globalThis;
                                    else if (typeof self !== "undefined") gt = self;
                                    else gt = window;
                                    if (gt.LibAV && gt.LibAV.wasmurl) return gt.LibAV.wasmurl;
                                    if (gt.LibAV && gt.LibAV.variant) return prefix + "libav-4.8.6.0.1-" + gt.LibAV.variant + ".simd.wasm"
                                }
                                return prefix + path
                            };
                            var moduleOverrides = Object.assign({}, Module);
                            var arguments_ = [];
                            var thisProgram = "./this.program";
                            var quit_ = (status, toThrow) => {
                                throw toThrow
                            };
                            var ENVIRONMENT_IS_WEB = typeof window == "object";
                            var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
                            var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
                            var scriptDirectory = "";

                            function locateFile(path) {
                                if (Module["locateFile"]) {
                                    return Module["locateFile"](path, scriptDirectory)
                                }
                                return scriptDirectory + path
                            }
                            var read_, readAsync, readBinary, setWindowTitle;

                            function logExceptionOnExit(e) {
                                if (e instanceof ExitStatus) return;
                                let toLog = e;
                                err("exiting due to exception: " + toLog)
                            }
                            if (ENVIRONMENT_IS_NODE) {
                                if (ENVIRONMENT_IS_WORKER) {
                                    scriptDirectory = nodePath.dirname(scriptDirectory) + "/"
                                } else {
                                    scriptDirectory = __dirname + "/"
                                }
                                read_ = (filename, binary) => {
                                    filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
                                    return fs.readFileSync(filename, binary ? undefined : "utf8")
                                };
                                readBinary = filename => {
                                    var ret = read_(filename, true);
                                    if (!ret.buffer) {
                                        ret = new Uint8Array(ret)
                                    }
                                    return ret
                                };
                                readAsync = (filename, onload, onerror) => {
                                    filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
                                    fs.readFile(filename, function(err, data) {
                                        if (err) onerror(err);
                                        else onload(data.buffer)
                                    })
                                };
                                if (process["argv"].length > 1) {
                                    thisProgram = process["argv"][1].replace(/\\/g, "/")
                                }
                                arguments_ = process["argv"].slice(2);
                                process["on"]("uncaughtException", function(ex) {
                                    if (!(ex instanceof ExitStatus)) {
                                        throw ex
                                    }
                                });
                                process["on"]("unhandledRejection", function(reason) {
                                    throw reason
                                });
                                quit_ = (status, toThrow) => {
                                    if (keepRuntimeAlive()) {
                                        process["exitCode"] = status;
                                        throw toThrow
                                    }
                                    logExceptionOnExit(toThrow);
                                    process["exit"](status)
                                };
                                Module["inspect"] = function() {
                                    return "[Emscripten Module object]"
                                }
                            } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
                                if (ENVIRONMENT_IS_WORKER) {
                                    scriptDirectory = self.location.href
                                } else if (typeof document != "undefined" && document.currentScript) {
                                    scriptDirectory = document.currentScript.src
                                }
                                if (_scriptDir) {
                                    scriptDirectory = _scriptDir
                                }
                                if (scriptDirectory.indexOf("blob:") !== 0) {
                                    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1)
                                } else {
                                    scriptDirectory = ""
                                } {
                                    read_ = url => {
                                        var xhr = new XMLHttpRequest;
                                        xhr.open("GET", url, false);
                                        xhr.send(null);
                                        return xhr.responseText
                                    };
                                    if (ENVIRONMENT_IS_WORKER) {
                                        readBinary = url => {
                                            var xhr = new XMLHttpRequest;
                                            xhr.open("GET", url, false);
                                            xhr.responseType = "arraybuffer";
                                            xhr.send(null);
                                            return new Uint8Array(xhr.response)
                                        }
                                    }
                                    readAsync = (url, onload, onerror) => {
                                        var xhr = new XMLHttpRequest;
                                        xhr.open("GET", url, true);
                                        xhr.responseType = "arraybuffer";
                                        xhr.onload = () => {
                                            if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                                                onload(xhr.response);
                                                return
                                            }
                                            onerror()
                                        };
                                        xhr.onerror = onerror;
                                        xhr.send(null)
                                    }
                                }
                                setWindowTitle = title => document.title = title
                            } else {}
                            var out = Module["print"] || console.log.bind(console);
                            var err = Module["printErr"] || console.warn.bind(console);
                            Object.assign(Module, moduleOverrides);
                            moduleOverrides = null;
                            if (Module["arguments"]) arguments_ = Module["arguments"];
                            if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
                            if (Module["quit"]) quit_ = Module["quit"];
                            var wasmBinary;
                            if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
                            var noExitRuntime = Module["noExitRuntime"] || true;
                            if (typeof WebAssembly != "object") {
                                abort("no native wasm support detected")
                            }
                            var wasmMemory;
                            var ABORT = false;
                            var EXITSTATUS;

                            function assert(condition, text) {
                                if (!condition) {
                                    abort(text)
                                }
                            }
                            var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;

                            function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
                                var endIdx = idx + maxBytesToRead;
                                var endPtr = idx;
                                while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
                                if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
                                    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr))
                                }
                                var str = "";
                                while (idx < endPtr) {
                                    var u0 = heapOrArray[idx++];
                                    if (!(u0 & 128)) {
                                        str += String.fromCharCode(u0);
                                        continue
                                    }
                                    var u1 = heapOrArray[idx++] & 63;
                                    if ((u0 & 224) == 192) {
                                        str += String.fromCharCode((u0 & 31) << 6 | u1);
                                        continue
                                    }
                                    var u2 = heapOrArray[idx++] & 63;
                                    if ((u0 & 240) == 224) {
                                        u0 = (u0 & 15) << 12 | u1 << 6 | u2
                                    } else {
                                        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63
                                    }
                                    if (u0 < 65536) {
                                        str += String.fromCharCode(u0)
                                    } else {
                                        var ch = u0 - 65536;
                                        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
                                    }
                                }
                                return str
                            }

                            function UTF8ToString(ptr, maxBytesToRead) {
                                return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
                            }

                            function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
                                if (!(maxBytesToWrite > 0)) return 0;
                                var startIdx = outIdx;
                                var endIdx = outIdx + maxBytesToWrite - 1;
                                for (var i = 0; i < str.length; ++i) {
                                    var u = str.charCodeAt(i);
                                    if (u >= 55296 && u <= 57343) {
                                        var u1 = str.charCodeAt(++i);
                                        u = 65536 + ((u & 1023) << 10) | u1 & 1023
                                    }
                                    if (u <= 127) {
                                        if (outIdx >= endIdx) break;
                                        heap[outIdx++] = u
                                    } else if (u <= 2047) {
                                        if (outIdx + 1 >= endIdx) break;
                                        heap[outIdx++] = 192 | u >> 6;
                                        heap[outIdx++] = 128 | u & 63
                                    } else if (u <= 65535) {
                                        if (outIdx + 2 >= endIdx) break;
                                        heap[outIdx++] = 224 | u >> 12;
                                        heap[outIdx++] = 128 | u >> 6 & 63;
                                        heap[outIdx++] = 128 | u & 63
                                    } else {
                                        if (outIdx + 3 >= endIdx) break;
                                        heap[outIdx++] = 240 | u >> 18;
                                        heap[outIdx++] = 128 | u >> 12 & 63;
                                        heap[outIdx++] = 128 | u >> 6 & 63;
                                        heap[outIdx++] = 128 | u & 63
                                    }
                                }
                                heap[outIdx] = 0;
                                return outIdx - startIdx
                            }

                            function stringToUTF8(str, outPtr, maxBytesToWrite) {
                                return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite)
                            }

                            function lengthBytesUTF8(str) {
                                var len = 0;
                                for (var i = 0; i < str.length; ++i) {
                                    var c = str.charCodeAt(i);
                                    if (c <= 127) {
                                        len++
                                    } else if (c <= 2047) {
                                        len += 2
                                    } else if (c >= 55296 && c <= 57343) {
                                        len += 4;
                                        ++i
                                    } else {
                                        len += 3
                                    }
                                }
                                return len
                            }
                            var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

                            function updateMemoryViews() {
                                var b = wasmMemory.buffer;
                                Module["HEAP8"] = HEAP8 = new Int8Array(b);
                                Module["HEAP16"] = HEAP16 = new Int16Array(b);
                                Module["HEAP32"] = HEAP32 = new Int32Array(b);
                                Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
                                Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
                                Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
                                Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
                                Module["HEAPF64"] = HEAPF64 = new Float64Array(b)
                            }
                            var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 25165824;
                            var wasmTable;
                            var __ATPRERUN__ = [];
                            var __ATINIT__ = [];
                            var __ATPOSTRUN__ = [];
                            var runtimeInitialized = false;

                            function keepRuntimeAlive() {
                                return noExitRuntime
                            }

                            function preRun() {
                                if (Module["preRun"]) {
                                    if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
                                    while (Module["preRun"].length) {
                                        addOnPreRun(Module["preRun"].shift())
                                    }
                                }
                                callRuntimeCallbacks(__ATPRERUN__)
                            }

                            function initRuntime() {
                                runtimeInitialized = true;
                                if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
                                FS.ignorePermissions = false;
                                TTY.init();
                                callRuntimeCallbacks(__ATINIT__)
                            }

                            function postRun() {
                                if (Module["postRun"]) {
                                    if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
                                    while (Module["postRun"].length) {
                                        addOnPostRun(Module["postRun"].shift())
                                    }
                                }
                                callRuntimeCallbacks(__ATPOSTRUN__)
                            }

                            function addOnPreRun(cb) {
                                __ATPRERUN__.unshift(cb)
                            }

                            function addOnInit(cb) {
                                __ATINIT__.unshift(cb)
                            }

                            function addOnPostRun(cb) {
                                __ATPOSTRUN__.unshift(cb)
                            }
                            var runDependencies = 0;
                            var runDependencyWatcher = null;
                            var dependenciesFulfilled = null;

                            function getUniqueRunDependency(id) {
                                return id
                            }

                            function addRunDependency(id) {
                                runDependencies++;
                                if (Module["monitorRunDependencies"]) {
                                    Module["monitorRunDependencies"](runDependencies)
                                }
                            }

                            function removeRunDependency(id) {
                                runDependencies--;
                                if (Module["monitorRunDependencies"]) {
                                    Module["monitorRunDependencies"](runDependencies)
                                }
                                if (runDependencies == 0) {
                                    if (runDependencyWatcher !== null) {
                                        clearInterval(runDependencyWatcher);
                                        runDependencyWatcher = null
                                    }
                                    if (dependenciesFulfilled) {
                                        var callback = dependenciesFulfilled;
                                        dependenciesFulfilled = null;
                                        callback()
                                    }
                                }
                            }

                            function abort(what) {
                                if (Module["onAbort"]) {
                                    Module["onAbort"](what)
                                }
                                what = "Aborted(" + what + ")";
                                err(what);
                                ABORT = true;
                                EXITSTATUS = 1;
                                what += ". Build with -sASSERTIONS for more info.";
                                var e = new WebAssembly.RuntimeError(what);
                                readyPromiseReject(e);
                                throw e
                            }
                            var dataURIPrefix = "data:application/octet-stream;base64,";

                            function isDataURI(filename) {
                                return filename.startsWith(dataURIPrefix)
                            }

                            function isFileURI(filename) {
                                return filename.startsWith("file://")
                            }
                            var wasmBinaryFile;
                            wasmBinaryFile = "libav-4.8.6.0.1-default.simd.wasm";
                            if (!isDataURI(wasmBinaryFile)) {
                                wasmBinaryFile = locateFile(wasmBinaryFile)
                            }

                            function getBinary(file) {
                                try {
                                    if (file == wasmBinaryFile && wasmBinary) {
                                        return new Uint8Array(wasmBinary)
                                    }
                                    if (readBinary) {
                                        return readBinary(file)
                                    }
                                    throw "both async and sync fetching of the wasm failed"
                                } catch (err) {
                                    abort(err)
                                }
                            }

                            function getBinaryPromise() {
                                if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
                                    if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
                                        return fetch('https://unpkg.com/libav.js@4.8.6/dist/libav-4.8.6.0.1-default.simd.wasm', {
                                            credentials: "same-origin"
                                        }).then(function(response) {
                                            if (!response["ok"]) {
                                                throw "failed to load wasm binary file at '" + wasmBinaryFile + "'"
                                            }
                                            return response["arrayBuffer"]()
                                        }).catch(function() {
                                            return getBinary(wasmBinaryFile)
                                        })
                                    } else {
                                        if (readAsync) {
                                            return new Promise(function(resolve, reject) {
                                                readAsync(wasmBinaryFile, function(response) {
                                                    resolve(new Uint8Array(response))
                                                }, reject)
                                            })
                                        }
                                    }
                                }
                                return Promise.resolve().then(function() {
                                    return getBinary(wasmBinaryFile)
                                })
                            }

                            function createWasm() {
                                var info = {
                                    "a": asmLibraryArg
                                };

                                function receiveInstance(instance, module) {
                                    var exports = instance.exports;
                                    exports = Asyncify.instrumentWasmExports(exports);
                                    Module["asm"] = exports;
                                    wasmMemory = Module["asm"]["E"];
                                    updateMemoryViews();
                                    wasmTable = Module["asm"]["Ce"];
                                    addOnInit(Module["asm"]["F"]);
                                    removeRunDependency("wasm-instantiate")
                                }
                                addRunDependency("wasm-instantiate");

                                function receiveInstantiationResult(result) {
                                    receiveInstance(result["instance"])
                                }

                                function instantiateArrayBuffer(receiver) {
                                    return getBinaryPromise().then(function(binary) {
                                        return WebAssembly.instantiate(binary, info)
                                    }).then(function(instance) {
                                        return instance
                                    }).then(receiver, function(reason) {
                                        err("failed to asynchronously prepare wasm: " + reason);
                                        abort(reason)
                                    })
                                }

                                function instantiateAsync() {
                                    if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
                                        return fetch('https://unpkg.com/libav.js@4.8.6/dist/libav-4.8.6.0.1-default.simd.wasm', {
                                            credentials: "same-origin"
                                        }).then(function(response) {
                                            var result = WebAssembly.instantiateStreaming(response, info);
                                            return result.then(receiveInstantiationResult, function(reason) {
                                                err("wasm streaming compile failed: " + reason);
                                                err("falling back to ArrayBuffer instantiation");
                                                return instantiateArrayBuffer(receiveInstantiationResult)
                                            })
                                        })
                                    } else {
                                        return instantiateArrayBuffer(receiveInstantiationResult)
                                    }
                                }
                                if (Module["instantiateWasm"]) {
                                    try {
                                        var exports = Module["instantiateWasm"](info, receiveInstance);
                                        exports = Asyncify.instrumentWasmExports(exports);
                                        return exports
                                    } catch (e) {
                                        err("Module.instantiateWasm callback failed with error: " + e);
                                        readyPromiseReject(e)
                                    }
                                }
                                instantiateAsync().catch(readyPromiseReject);
                                return {}
                            }
                            var tempDouble;
                            var tempI64;

                            function libavjs_wait_reader(fd) {
                                return Asyncify.handleAsync(function() {
                                    return new Promise(function(res) {
                                        Module.ff_reader_dev_waiters.push(res)
                                    })
                                })
                            }

                            function ExitStatus(status) {
                                this.name = "ExitStatus";
                                this.message = "Program terminated with exit(" + status + ")";
                                this.status = status
                            }

                            function callRuntimeCallbacks(callbacks) {
                                while (callbacks.length > 0) {
                                    callbacks.shift()(Module)
                                }
                            }
                            var PATH = {
                                isAbs: path => path.charAt(0) === "/",
                                splitPath: filename => {
                                    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                                    return splitPathRe.exec(filename).slice(1)
                                },
                                normalizeArray: (parts, allowAboveRoot) => {
                                    var up = 0;
                                    for (var i = parts.length - 1; i >= 0; i--) {
                                        var last = parts[i];
                                        if (last === ".") {
                                            parts.splice(i, 1)
                                        } else if (last === "..") {
                                            parts.splice(i, 1);
                                            up++
                                        } else if (up) {
                                            parts.splice(i, 1);
                                            up--
                                        }
                                    }
                                    if (allowAboveRoot) {
                                        for (; up; up--) {
                                            parts.unshift("..")
                                        }
                                    }
                                    return parts
                                },
                                normalize: path => {
                                    var isAbsolute = PATH.isAbs(path),
                                        trailingSlash = path.substr(-1) === "/";
                                    path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
                                    if (!path && !isAbsolute) {
                                        path = "."
                                    }
                                    if (path && trailingSlash) {
                                        path += "/"
                                    }
                                    return (isAbsolute ? "/" : "") + path
                                },
                                dirname: path => {
                                    var result = PATH.splitPath(path),
                                        root = result[0],
                                        dir = result[1];
                                    if (!root && !dir) {
                                        return "."
                                    }
                                    if (dir) {
                                        dir = dir.substr(0, dir.length - 1)
                                    }
                                    return root + dir
                                },
                                basename: path => {
                                    if (path === "/") return "/";
                                    path = PATH.normalize(path);
                                    path = path.replace(/\/$/, "");
                                    var lastSlash = path.lastIndexOf("/");
                                    if (lastSlash === -1) return path;
                                    return path.substr(lastSlash + 1)
                                },
                                join: function() {
                                    var paths = Array.prototype.slice.call(arguments);
                                    return PATH.normalize(paths.join("/"))
                                },
                                join2: (l, r) => {
                                    return PATH.normalize(l + "/" + r)
                                }
                            };

                            function getRandomDevice() {
                                if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
                                    var randomBuffer = new Uint8Array(1);
                                    return () => {
                                        crypto.getRandomValues(randomBuffer);
                                        return randomBuffer[0]
                                    }
                                } else if (ENVIRONMENT_IS_NODE) {
                                    try {
                                        var crypto_module = require("crypto");
                                        return () => crypto_module["randomBytes"](1)[0]
                                    } catch (e) {}
                                }
                                return () => abort("randomDevice")
                            }
                            var PATH_FS = {
                                resolve: function() {
                                    var resolvedPath = "",
                                        resolvedAbsolute = false;
                                    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                                        var path = i >= 0 ? arguments[i] : FS.cwd();
                                        if (typeof path != "string") {
                                            throw new TypeError("Arguments to path.resolve must be strings")
                                        } else if (!path) {
                                            return ""
                                        }
                                        resolvedPath = path + "/" + resolvedPath;
                                        resolvedAbsolute = PATH.isAbs(path)
                                    }
                                    resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
                                    return (resolvedAbsolute ? "/" : "") + resolvedPath || "."
                                },
                                relative: (from, to) => {
                                    from = PATH_FS.resolve(from).substr(1);
                                    to = PATH_FS.resolve(to).substr(1);

                                    function trim(arr) {
                                        var start = 0;
                                        for (; start < arr.length; start++) {
                                            if (arr[start] !== "") break
                                        }
                                        var end = arr.length - 1;
                                        for (; end >= 0; end--) {
                                            if (arr[end] !== "") break
                                        }
                                        if (start > end) return [];
                                        return arr.slice(start, end - start + 1)
                                    }
                                    var fromParts = trim(from.split("/"));
                                    var toParts = trim(to.split("/"));
                                    var length = Math.min(fromParts.length, toParts.length);
                                    var samePartsLength = length;
                                    for (var i = 0; i < length; i++) {
                                        if (fromParts[i] !== toParts[i]) {
                                            samePartsLength = i;
                                            break
                                        }
                                    }
                                    var outputParts = [];
                                    for (var i = samePartsLength; i < fromParts.length; i++) {
                                        outputParts.push("..")
                                    }
                                    outputParts = outputParts.concat(toParts.slice(samePartsLength));
                                    return outputParts.join("/")
                                }
                            };

                            function intArrayFromString(stringy, dontAddNull, length) {
                                var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
                                var u8array = new Array(len);
                                var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
                                if (dontAddNull) u8array.length = numBytesWritten;
                                return u8array
                            }
                            var TTY = {
                                ttys: [],
                                init: function() {},
                                shutdown: function() {},
                                register: function(dev, ops) {
                                    TTY.ttys[dev] = {
                                        input: [],
                                        output: [],
                                        ops: ops
                                    };
                                    FS.registerDevice(dev, TTY.stream_ops)
                                },
                                stream_ops: {
                                    open: function(stream) {
                                        var tty = TTY.ttys[stream.node.rdev];
                                        if (!tty) {
                                            throw new FS.ErrnoError(43)
                                        }
                                        stream.tty = tty;
                                        stream.seekable = false
                                    },
                                    close: function(stream) {
                                        stream.tty.ops.fsync(stream.tty)
                                    },
                                    fsync: function(stream) {
                                        stream.tty.ops.fsync(stream.tty)
                                    },
                                    read: function(stream, buffer, offset, length, pos) {
                                        if (!stream.tty || !stream.tty.ops.get_char) {
                                            throw new FS.ErrnoError(60)
                                        }
                                        var bytesRead = 0;
                                        for (var i = 0; i < length; i++) {
                                            var result;
                                            try {
                                                result = stream.tty.ops.get_char(stream.tty)
                                            } catch (e) {
                                                throw new FS.ErrnoError(29)
                                            }
                                            if (result === undefined && bytesRead === 0) {
                                                throw new FS.ErrnoError(6)
                                            }
                                            if (result === null || result === undefined) break;
                                            bytesRead++;
                                            buffer[offset + i] = result
                                        }
                                        if (bytesRead) {
                                            stream.node.timestamp = Date.now()
                                        }
                                        return bytesRead
                                    },
                                    write: function(stream, buffer, offset, length, pos) {
                                        if (!stream.tty || !stream.tty.ops.put_char) {
                                            throw new FS.ErrnoError(60)
                                        }
                                        try {
                                            for (var i = 0; i < length; i++) {
                                                stream.tty.ops.put_char(stream.tty, buffer[offset + i])
                                            }
                                        } catch (e) {
                                            throw new FS.ErrnoError(29)
                                        }
                                        if (length) {
                                            stream.node.timestamp = Date.now()
                                        }
                                        return i
                                    }
                                },
                                default_tty_ops: {
                                    get_char: function(tty) {
                                        if (!tty.input.length) {
                                            var result = null;
                                            if (ENVIRONMENT_IS_NODE) {
                                                var BUFSIZE = 256;
                                                var buf = Buffer.alloc(BUFSIZE);
                                                var bytesRead = 0;
                                                try {
                                                    bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE, -1)
                                                } catch (e) {
                                                    if (e.toString().includes("EOF")) bytesRead = 0;
                                                    else throw e
                                                }
                                                if (bytesRead > 0) {
                                                    result = buf.slice(0, bytesRead).toString("utf-8")
                                                } else {
                                                    result = null
                                                }
                                            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
                                                result = window.prompt("Input: ");
                                                if (result !== null) {
                                                    result += "\n"
                                                }
                                            } else if (typeof readline == "function") {
                                                result = readline();
                                                if (result !== null) {
                                                    result += "\n"
                                                }
                                            }
                                            if (!result) {
                                                return null
                                            }
                                            tty.input = intArrayFromString(result, true)
                                        }
                                        return tty.input.shift()
                                    },
                                    put_char: function(tty, val) {
                                        if (val === null || val === 10) {
                                            out(UTF8ArrayToString(tty.output, 0));
                                            tty.output = []
                                        } else {
                                            if (val != 0) tty.output.push(val)
                                        }
                                    },
                                    fsync: function(tty) {
                                        if (tty.output && tty.output.length > 0) {
                                            out(UTF8ArrayToString(tty.output, 0));
                                            tty.output = []
                                        }
                                    }
                                },
                                default_tty1_ops: {
                                    put_char: function(tty, val) {
                                        if (val === null || val === 10) {
                                            err(UTF8ArrayToString(tty.output, 0));
                                            tty.output = []
                                        } else {
                                            if (val != 0) tty.output.push(val)
                                        }
                                    },
                                    fsync: function(tty) {
                                        if (tty.output && tty.output.length > 0) {
                                            err(UTF8ArrayToString(tty.output, 0));
                                            tty.output = []
                                        }
                                    }
                                }
                            };

                            function zeroMemory(address, size) {
                                HEAPU8.fill(0, address, address + size);
                                return address
                            }

                            function alignMemory(size, alignment) {
                                return Math.ceil(size / alignment) * alignment
                            }

                            function mmapAlloc(size) {
                                size = alignMemory(size, 65536);
                                var ptr = _emscripten_builtin_memalign(65536, size);
                                if (!ptr) return 0;
                                return zeroMemory(ptr, size)
                            }
                            var MEMFS = {
                                ops_table: null,
                                mount: function(mount) {
                                    return MEMFS.createNode(null, "/", 16384 | 511, 0)
                                },
                                createNode: function(parent, name, mode, dev) {
                                    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    if (!MEMFS.ops_table) {
                                        MEMFS.ops_table = {
                                            dir: {
                                                node: {
                                                    getattr: MEMFS.node_ops.getattr,
                                                    setattr: MEMFS.node_ops.setattr,
                                                    lookup: MEMFS.node_ops.lookup,
                                                    mknod: MEMFS.node_ops.mknod,
                                                    rename: MEMFS.node_ops.rename,
                                                    unlink: MEMFS.node_ops.unlink,
                                                    rmdir: MEMFS.node_ops.rmdir,
                                                    readdir: MEMFS.node_ops.readdir,
                                                    symlink: MEMFS.node_ops.symlink
                                                },
                                                stream: {
                                                    llseek: MEMFS.stream_ops.llseek
                                                }
                                            },
                                            file: {
                                                node: {
                                                    getattr: MEMFS.node_ops.getattr,
                                                    setattr: MEMFS.node_ops.setattr
                                                },
                                                stream: {
                                                    llseek: MEMFS.stream_ops.llseek,
                                                    read: MEMFS.stream_ops.read,
                                                    write: MEMFS.stream_ops.write,
                                                    allocate: MEMFS.stream_ops.allocate,
                                                    mmap: MEMFS.stream_ops.mmap,
                                                    msync: MEMFS.stream_ops.msync
                                                }
                                            },
                                            link: {
                                                node: {
                                                    getattr: MEMFS.node_ops.getattr,
                                                    setattr: MEMFS.node_ops.setattr,
                                                    readlink: MEMFS.node_ops.readlink
                                                },
                                                stream: {}
                                            },
                                            chrdev: {
                                                node: {
                                                    getattr: MEMFS.node_ops.getattr,
                                                    setattr: MEMFS.node_ops.setattr
                                                },
                                                stream: FS.chrdev_stream_ops
                                            }
                                        }
                                    }
                                    var node = FS.createNode(parent, name, mode, dev);
                                    if (FS.isDir(node.mode)) {
                                        node.node_ops = MEMFS.ops_table.dir.node;
                                        node.stream_ops = MEMFS.ops_table.dir.stream;
                                        node.contents = {}
                                    } else if (FS.isFile(node.mode)) {
                                        node.node_ops = MEMFS.ops_table.file.node;
                                        node.stream_ops = MEMFS.ops_table.file.stream;
                                        node.usedBytes = 0;
                                        node.contents = null
                                    } else if (FS.isLink(node.mode)) {
                                        node.node_ops = MEMFS.ops_table.link.node;
                                        node.stream_ops = MEMFS.ops_table.link.stream
                                    } else if (FS.isChrdev(node.mode)) {
                                        node.node_ops = MEMFS.ops_table.chrdev.node;
                                        node.stream_ops = MEMFS.ops_table.chrdev.stream
                                    }
                                    node.timestamp = Date.now();
                                    if (parent) {
                                        parent.contents[name] = node;
                                        parent.timestamp = node.timestamp
                                    }
                                    return node
                                },
                                getFileDataAsTypedArray: function(node) {
                                    if (!node.contents) return new Uint8Array(0);
                                    if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
                                    return new Uint8Array(node.contents)
                                },
                                expandFileStorage: function(node, newCapacity) {
                                    var prevCapacity = node.contents ? node.contents.length : 0;
                                    if (prevCapacity >= newCapacity) return;
                                    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
                                    newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
                                    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
                                    var oldContents = node.contents;
                                    node.contents = new Uint8Array(newCapacity);
                                    if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0)
                                },
                                resizeFileStorage: function(node, newSize) {
                                    if (node.usedBytes == newSize) return;
                                    if (newSize == 0) {
                                        node.contents = null;
                                        node.usedBytes = 0
                                    } else {
                                        var oldContents = node.contents;
                                        node.contents = new Uint8Array(newSize);
                                        if (oldContents) {
                                            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
                                        }
                                        node.usedBytes = newSize
                                    }
                                },
                                node_ops: {
                                    getattr: function(node) {
                                        var attr = {};
                                        attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
                                        attr.ino = node.id;
                                        attr.mode = node.mode;
                                        attr.nlink = 1;
                                        attr.uid = 0;
                                        attr.gid = 0;
                                        attr.rdev = node.rdev;
                                        if (FS.isDir(node.mode)) {
                                            attr.size = 4096
                                        } else if (FS.isFile(node.mode)) {
                                            attr.size = node.usedBytes
                                        } else if (FS.isLink(node.mode)) {
                                            attr.size = node.link.length
                                        } else {
                                            attr.size = 0
                                        }
                                        attr.atime = new Date(node.timestamp);
                                        attr.mtime = new Date(node.timestamp);
                                        attr.ctime = new Date(node.timestamp);
                                        attr.blksize = 4096;
                                        attr.blocks = Math.ceil(attr.size / attr.blksize);
                                        return attr
                                    },
                                    setattr: function(node, attr) {
                                        if (attr.mode !== undefined) {
                                            node.mode = attr.mode
                                        }
                                        if (attr.timestamp !== undefined) {
                                            node.timestamp = attr.timestamp
                                        }
                                        if (attr.size !== undefined) {
                                            MEMFS.resizeFileStorage(node, attr.size)
                                        }
                                    },
                                    lookup: function(parent, name) {
                                        throw FS.genericErrors[44]
                                    },
                                    mknod: function(parent, name, mode, dev) {
                                        return MEMFS.createNode(parent, name, mode, dev)
                                    },
                                    rename: function(old_node, new_dir, new_name) {
                                        if (FS.isDir(old_node.mode)) {
                                            var new_node;
                                            try {
                                                new_node = FS.lookupNode(new_dir, new_name)
                                            } catch (e) {}
                                            if (new_node) {
                                                for (var i in new_node.contents) {
                                                    throw new FS.ErrnoError(55)
                                                }
                                            }
                                        }
                                        delete old_node.parent.contents[old_node.name];
                                        old_node.parent.timestamp = Date.now();
                                        old_node.name = new_name;
                                        new_dir.contents[new_name] = old_node;
                                        new_dir.timestamp = old_node.parent.timestamp;
                                        old_node.parent = new_dir
                                    },
                                    unlink: function(parent, name) {
                                        delete parent.contents[name];
                                        parent.timestamp = Date.now()
                                    },
                                    rmdir: function(parent, name) {
                                        var node = FS.lookupNode(parent, name);
                                        for (var i in node.contents) {
                                            throw new FS.ErrnoError(55)
                                        }
                                        delete parent.contents[name];
                                        parent.timestamp = Date.now()
                                    },
                                    readdir: function(node) {
                                        var entries = [".", ".."];
                                        for (var key in node.contents) {
                                            if (!node.contents.hasOwnProperty(key)) {
                                                continue
                                            }
                                            entries.push(key)
                                        }
                                        return entries
                                    },
                                    symlink: function(parent, newname, oldpath) {
                                        var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
                                        node.link = oldpath;
                                        return node
                                    },
                                    readlink: function(node) {
                                        if (!FS.isLink(node.mode)) {
                                            throw new FS.ErrnoError(28)
                                        }
                                        return node.link
                                    }
                                },
                                stream_ops: {
                                    read: function(stream, buffer, offset, length, position) {
                                        var contents = stream.node.contents;
                                        if (position >= stream.node.usedBytes) return 0;
                                        var size = Math.min(stream.node.usedBytes - position, length);
                                        if (size > 8 && contents.subarray) {
                                            buffer.set(contents.subarray(position, position + size), offset)
                                        } else {
                                            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i]
                                        }
                                        return size
                                    },
                                    write: function(stream, buffer, offset, length, position, canOwn) {
                                        if (buffer.buffer === HEAP8.buffer) {
                                            canOwn = false
                                        }
                                        if (!length) return 0;
                                        var node = stream.node;
                                        node.timestamp = Date.now();
                                        if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                                            if (canOwn) {
                                                node.contents = buffer.subarray(offset, offset + length);
                                                node.usedBytes = length;
                                                return length
                                            } else if (node.usedBytes === 0 && position === 0) {
                                                node.contents = buffer.slice(offset, offset + length);
                                                node.usedBytes = length;
                                                return length
                                            } else if (position + length <= node.usedBytes) {
                                                node.contents.set(buffer.subarray(offset, offset + length), position);
                                                return length
                                            }
                                        }
                                        MEMFS.expandFileStorage(node, position + length);
                                        if (node.contents.subarray && buffer.subarray) {
                                            node.contents.set(buffer.subarray(offset, offset + length), position)
                                        } else {
                                            for (var i = 0; i < length; i++) {
                                                node.contents[position + i] = buffer[offset + i]
                                            }
                                        }
                                        node.usedBytes = Math.max(node.usedBytes, position + length);
                                        return length
                                    },
                                    llseek: function(stream, offset, whence) {
                                        var position = offset;
                                        if (whence === 1) {
                                            position += stream.position
                                        } else if (whence === 2) {
                                            if (FS.isFile(stream.node.mode)) {
                                                position += stream.node.usedBytes
                                            }
                                        }
                                        if (position < 0) {
                                            throw new FS.ErrnoError(28)
                                        }
                                        return position
                                    },
                                    allocate: function(stream, offset, length) {
                                        MEMFS.expandFileStorage(stream.node, offset + length);
                                        stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
                                    },
                                    mmap: function(stream, length, position, prot, flags) {
                                        if (!FS.isFile(stream.node.mode)) {
                                            throw new FS.ErrnoError(43)
                                        }
                                        var ptr;
                                        var allocated;
                                        var contents = stream.node.contents;
                                        if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
                                            allocated = false;
                                            ptr = contents.byteOffset
                                        } else {
                                            if (position > 0 || position + length < contents.length) {
                                                if (contents.subarray) {
                                                    contents = contents.subarray(position, position + length)
                                                } else {
                                                    contents = Array.prototype.slice.call(contents, position, position + length)
                                                }
                                            }
                                            allocated = true;
                                            ptr = mmapAlloc(length);
                                            if (!ptr) {
                                                throw new FS.ErrnoError(48)
                                            }
                                            HEAP8.set(contents, ptr)
                                        }
                                        return {
                                            ptr: ptr,
                                            allocated: allocated
                                        }
                                    },
                                    msync: function(stream, buffer, offset, length, mmapFlags) {
                                        MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
                                        return 0
                                    }
                                }
                            };

                            function asyncLoad(url, onload, onerror, noRunDep) {
                                var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
                                readAsync(url, arrayBuffer => {
                                    assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
                                    onload(new Uint8Array(arrayBuffer));
                                    if (dep) removeRunDependency(dep)
                                }, event => {
                                    if (onerror) {
                                        onerror()
                                    } else {
                                        throw 'Loading data file "' + url + '" failed.'
                                    }
                                });
                                if (dep) addRunDependency(dep)
                            }
                            var FS = {
                                root: null,
                                mounts: [],
                                devices: {},
                                streams: [],
                                nextInode: 1,
                                nameTable: null,
                                currentPath: "/",
                                initialized: false,
                                ignorePermissions: true,
                                ErrnoError: null,
                                genericErrors: {},
                                filesystems: null,
                                syncFSRequests: 0,
                                lookupPath: (path, opts = {}) => {
                                    path = PATH_FS.resolve(path);
                                    if (!path) return {
                                        path: "",
                                        node: null
                                    };
                                    var defaults = {
                                        follow_mount: true,
                                        recurse_count: 0
                                    };
                                    opts = Object.assign(defaults, opts);
                                    if (opts.recurse_count > 8) {
                                        throw new FS.ErrnoError(32)
                                    }
                                    var parts = path.split("/").filter(p => !!p);
                                    var current = FS.root;
                                    var current_path = "/";
                                    for (var i = 0; i < parts.length; i++) {
                                        var islast = i === parts.length - 1;
                                        if (islast && opts.parent) {
                                            break
                                        }
                                        current = FS.lookupNode(current, parts[i]);
                                        current_path = PATH.join2(current_path, parts[i]);
                                        if (FS.isMountpoint(current)) {
                                            if (!islast || islast && opts.follow_mount) {
                                                current = current.mounted.root
                                            }
                                        }
                                        if (!islast || opts.follow) {
                                            var count = 0;
                                            while (FS.isLink(current.mode)) {
                                                var link = FS.readlink(current_path);
                                                current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                                                var lookup = FS.lookupPath(current_path, {
                                                    recurse_count: opts.recurse_count + 1
                                                });
                                                current = lookup.node;
                                                if (count++ > 40) {
                                                    throw new FS.ErrnoError(32)
                                                }
                                            }
                                        }
                                    }
                                    return {
                                        path: current_path,
                                        node: current
                                    }
                                },
                                getPath: node => {
                                    var path;
                                    while (true) {
                                        if (FS.isRoot(node)) {
                                            var mount = node.mount.mountpoint;
                                            if (!path) return mount;
                                            return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path
                                        }
                                        path = path ? node.name + "/" + path : node.name;
                                        node = node.parent
                                    }
                                },
                                hashName: (parentid, name) => {
                                    var hash = 0;
                                    for (var i = 0; i < name.length; i++) {
                                        hash = (hash << 5) - hash + name.charCodeAt(i) | 0
                                    }
                                    return (parentid + hash >>> 0) % FS.nameTable.length
                                },
                                hashAddNode: node => {
                                    var hash = FS.hashName(node.parent.id, node.name);
                                    node.name_next = FS.nameTable[hash];
                                    FS.nameTable[hash] = node
                                },
                                hashRemoveNode: node => {
                                    var hash = FS.hashName(node.parent.id, node.name);
                                    if (FS.nameTable[hash] === node) {
                                        FS.nameTable[hash] = node.name_next
                                    } else {
                                        var current = FS.nameTable[hash];
                                        while (current) {
                                            if (current.name_next === node) {
                                                current.name_next = node.name_next;
                                                break
                                            }
                                            current = current.name_next
                                        }
                                    }
                                },
                                lookupNode: (parent, name) => {
                                    var errCode = FS.mayLookup(parent);
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode, parent)
                                    }
                                    var hash = FS.hashName(parent.id, name);
                                    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
                                        var nodeName = node.name;
                                        if (node.parent.id === parent.id && nodeName === name) {
                                            return node
                                        }
                                    }
                                    return FS.lookup(parent, name)
                                },
                                createNode: (parent, name, mode, rdev) => {
                                    var node = new FS.FSNode(parent, name, mode, rdev);
                                    FS.hashAddNode(node);
                                    return node
                                },
                                destroyNode: node => {
                                    FS.hashRemoveNode(node)
                                },
                                isRoot: node => {
                                    return node === node.parent
                                },
                                isMountpoint: node => {
                                    return !!node.mounted
                                },
                                isFile: mode => {
                                    return (mode & 61440) === 32768
                                },
                                isDir: mode => {
                                    return (mode & 61440) === 16384
                                },
                                isLink: mode => {
                                    return (mode & 61440) === 40960
                                },
                                isChrdev: mode => {
                                    return (mode & 61440) === 8192
                                },
                                isBlkdev: mode => {
                                    return (mode & 61440) === 24576
                                },
                                isFIFO: mode => {
                                    return (mode & 61440) === 4096
                                },
                                isSocket: mode => {
                                    return (mode & 49152) === 49152
                                },
                                flagModes: {
                                    "r": 0,
                                    "r+": 2,
                                    "w": 577,
                                    "w+": 578,
                                    "a": 1089,
                                    "a+": 1090
                                },
                                modeStringToFlags: str => {
                                    var flags = FS.flagModes[str];
                                    if (typeof flags == "undefined") {
                                        throw new Error("Unknown file open mode: " + str)
                                    }
                                    return flags
                                },
                                flagsToPermissionString: flag => {
                                    var perms = ["r", "w", "rw"][flag & 3];
                                    if (flag & 512) {
                                        perms += "w"
                                    }
                                    return perms
                                },
                                nodePermissions: (node, perms) => {
                                    if (FS.ignorePermissions) {
                                        return 0
                                    }
                                    if (perms.includes("r") && !(node.mode & 292)) {
                                        return 2
                                    } else if (perms.includes("w") && !(node.mode & 146)) {
                                        return 2
                                    } else if (perms.includes("x") && !(node.mode & 73)) {
                                        return 2
                                    }
                                    return 0
                                },
                                mayLookup: dir => {
                                    var errCode = FS.nodePermissions(dir, "x");
                                    if (errCode) return errCode;
                                    if (!dir.node_ops.lookup) return 2;
                                    return 0
                                },
                                mayCreate: (dir, name) => {
                                    try {
                                        var node = FS.lookupNode(dir, name);
                                        return 20
                                    } catch (e) {}
                                    return FS.nodePermissions(dir, "wx")
                                },
                                mayDelete: (dir, name, isdir) => {
                                    var node;
                                    try {
                                        node = FS.lookupNode(dir, name)
                                    } catch (e) {
                                        return e.errno
                                    }
                                    var errCode = FS.nodePermissions(dir, "wx");
                                    if (errCode) {
                                        return errCode
                                    }
                                    if (isdir) {
                                        if (!FS.isDir(node.mode)) {
                                            return 54
                                        }
                                        if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                                            return 10
                                        }
                                    } else {
                                        if (FS.isDir(node.mode)) {
                                            return 31
                                        }
                                    }
                                    return 0
                                },
                                mayOpen: (node, flags) => {
                                    if (!node) {
                                        return 44
                                    }
                                    if (FS.isLink(node.mode)) {
                                        return 32
                                    } else if (FS.isDir(node.mode)) {
                                        if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                                            return 31
                                        }
                                    }
                                    return FS.nodePermissions(node, FS.flagsToPermissionString(flags))
                                },
                                MAX_OPEN_FDS: 4096,
                                nextfd: (fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
                                    for (var fd = fd_start; fd <= fd_end; fd++) {
                                        if (!FS.streams[fd]) {
                                            return fd
                                        }
                                    }
                                    throw new FS.ErrnoError(33)
                                },
                                getStream: fd => FS.streams[fd],
                                createStream: (stream, fd_start, fd_end) => {
                                    if (!FS.FSStream) {
                                        FS.FSStream = function() {
                                            this.shared = {}
                                        };
                                        FS.FSStream.prototype = {};
                                        Object.defineProperties(FS.FSStream.prototype, {
                                            object: {
                                                get: function() {
                                                    return this.node
                                                },
                                                set: function(val) {
                                                    this.node = val
                                                }
                                            },
                                            isRead: {
                                                get: function() {
                                                    return (this.flags & 2097155) !== 1
                                                }
                                            },
                                            isWrite: {
                                                get: function() {
                                                    return (this.flags & 2097155) !== 0
                                                }
                                            },
                                            isAppend: {
                                                get: function() {
                                                    return this.flags & 1024
                                                }
                                            },
                                            flags: {
                                                get: function() {
                                                    return this.shared.flags
                                                },
                                                set: function(val) {
                                                    this.shared.flags = val
                                                }
                                            },
                                            position: {
                                                get: function() {
                                                    return this.shared.position
                                                },
                                                set: function(val) {
                                                    this.shared.position = val
                                                }
                                            }
                                        })
                                    }
                                    stream = Object.assign(new FS.FSStream, stream);
                                    var fd = FS.nextfd(fd_start, fd_end);
                                    stream.fd = fd;
                                    FS.streams[fd] = stream;
                                    return stream
                                },
                                closeStream: fd => {
                                    FS.streams[fd] = null
                                },
                                chrdev_stream_ops: {
                                    open: stream => {
                                        var device = FS.getDevice(stream.node.rdev);
                                        stream.stream_ops = device.stream_ops;
                                        if (stream.stream_ops.open) {
                                            stream.stream_ops.open(stream)
                                        }
                                    },
                                    llseek: () => {
                                        throw new FS.ErrnoError(70)
                                    }
                                },
                                major: dev => dev >> 8,
                                minor: dev => dev & 255,
                                makedev: (ma, mi) => ma << 8 | mi,
                                registerDevice: (dev, ops) => {
                                    FS.devices[dev] = {
                                        stream_ops: ops
                                    }
                                },
                                getDevice: dev => FS.devices[dev],
                                getMounts: mount => {
                                    var mounts = [];
                                    var check = [mount];
                                    while (check.length) {
                                        var m = check.pop();
                                        mounts.push(m);
                                        check.push.apply(check, m.mounts)
                                    }
                                    return mounts
                                },
                                syncfs: (populate, callback) => {
                                    if (typeof populate == "function") {
                                        callback = populate;
                                        populate = false
                                    }
                                    FS.syncFSRequests++;
                                    if (FS.syncFSRequests > 1) {
                                        err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work")
                                    }
                                    var mounts = FS.getMounts(FS.root.mount);
                                    var completed = 0;

                                    function doCallback(errCode) {
                                        FS.syncFSRequests--;
                                        return callback(errCode)
                                    }

                                    function done(errCode) {
                                        if (errCode) {
                                            if (!done.errored) {
                                                done.errored = true;
                                                return doCallback(errCode)
                                            }
                                            return
                                        }
                                        if (++completed >= mounts.length) {
                                            doCallback(null)
                                        }
                                    }
                                    mounts.forEach(mount => {
                                        if (!mount.type.syncfs) {
                                            return done(null)
                                        }
                                        mount.type.syncfs(mount, populate, done)
                                    })
                                },
                                mount: (type, opts, mountpoint) => {
                                    var root = mountpoint === "/";
                                    var pseudo = !mountpoint;
                                    var node;
                                    if (root && FS.root) {
                                        throw new FS.ErrnoError(10)
                                    } else if (!root && !pseudo) {
                                        var lookup = FS.lookupPath(mountpoint, {
                                            follow_mount: false
                                        });
                                        mountpoint = lookup.path;
                                        node = lookup.node;
                                        if (FS.isMountpoint(node)) {
                                            throw new FS.ErrnoError(10)
                                        }
                                        if (!FS.isDir(node.mode)) {
                                            throw new FS.ErrnoError(54)
                                        }
                                    }
                                    var mount = {
                                        type: type,
                                        opts: opts,
                                        mountpoint: mountpoint,
                                        mounts: []
                                    };
                                    var mountRoot = type.mount(mount);
                                    mountRoot.mount = mount;
                                    mount.root = mountRoot;
                                    if (root) {
                                        FS.root = mountRoot
                                    } else if (node) {
                                        node.mounted = mount;
                                        if (node.mount) {
                                            node.mount.mounts.push(mount)
                                        }
                                    }
                                    return mountRoot
                                },
                                unmount: mountpoint => {
                                    var lookup = FS.lookupPath(mountpoint, {
                                        follow_mount: false
                                    });
                                    if (!FS.isMountpoint(lookup.node)) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    var node = lookup.node;
                                    var mount = node.mounted;
                                    var mounts = FS.getMounts(mount);
                                    Object.keys(FS.nameTable).forEach(hash => {
                                        var current = FS.nameTable[hash];
                                        while (current) {
                                            var next = current.name_next;
                                            if (mounts.includes(current.mount)) {
                                                FS.destroyNode(current)
                                            }
                                            current = next
                                        }
                                    });
                                    node.mounted = null;
                                    var idx = node.mount.mounts.indexOf(mount);
                                    node.mount.mounts.splice(idx, 1)
                                },
                                lookup: (parent, name) => {
                                    return parent.node_ops.lookup(parent, name)
                                },
                                mknod: (path, mode, dev) => {
                                    var lookup = FS.lookupPath(path, {
                                        parent: true
                                    });
                                    var parent = lookup.node;
                                    var name = PATH.basename(path);
                                    if (!name || name === "." || name === "..") {
                                        throw new FS.ErrnoError(28)
                                    }
                                    var errCode = FS.mayCreate(parent, name);
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode)
                                    }
                                    if (!parent.node_ops.mknod) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    return parent.node_ops.mknod(parent, name, mode, dev)
                                },
                                create: (path, mode) => {
                                    mode = mode !== undefined ? mode : 438;
                                    mode &= 4095;
                                    mode |= 32768;
                                    return FS.mknod(path, mode, 0)
                                },
                                mkdir: (path, mode) => {
                                    mode = mode !== undefined ? mode : 511;
                                    mode &= 511 | 512;
                                    mode |= 16384;
                                    return FS.mknod(path, mode, 0)
                                },
                                mkdirTree: (path, mode) => {
                                    var dirs = path.split("/");
                                    var d = "";
                                    for (var i = 0; i < dirs.length; ++i) {
                                        if (!dirs[i]) continue;
                                        d += "/" + dirs[i];
                                        try {
                                            FS.mkdir(d, mode)
                                        } catch (e) {
                                            if (e.errno != 20) throw e
                                        }
                                    }
                                },
                                mkdev: (path, mode, dev) => {
                                    if (typeof dev == "undefined") {
                                        dev = mode;
                                        mode = 438
                                    }
                                    mode |= 8192;
                                    return FS.mknod(path, mode, dev)
                                },
                                symlink: (oldpath, newpath) => {
                                    if (!PATH_FS.resolve(oldpath)) {
                                        throw new FS.ErrnoError(44)
                                    }
                                    var lookup = FS.lookupPath(newpath, {
                                        parent: true
                                    });
                                    var parent = lookup.node;
                                    if (!parent) {
                                        throw new FS.ErrnoError(44)
                                    }
                                    var newname = PATH.basename(newpath);
                                    var errCode = FS.mayCreate(parent, newname);
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode)
                                    }
                                    if (!parent.node_ops.symlink) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    return parent.node_ops.symlink(parent, newname, oldpath)
                                },
                                rename: (old_path, new_path) => {
                                    var old_dirname = PATH.dirname(old_path);
                                    var new_dirname = PATH.dirname(new_path);
                                    var old_name = PATH.basename(old_path);
                                    var new_name = PATH.basename(new_path);
                                    var lookup, old_dir, new_dir;
                                    lookup = FS.lookupPath(old_path, {
                                        parent: true
                                    });
                                    old_dir = lookup.node;
                                    lookup = FS.lookupPath(new_path, {
                                        parent: true
                                    });
                                    new_dir = lookup.node;
                                    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
                                    if (old_dir.mount !== new_dir.mount) {
                                        throw new FS.ErrnoError(75)
                                    }
                                    var old_node = FS.lookupNode(old_dir, old_name);
                                    var relative = PATH_FS.relative(old_path, new_dirname);
                                    if (relative.charAt(0) !== ".") {
                                        throw new FS.ErrnoError(28)
                                    }
                                    relative = PATH_FS.relative(new_path, old_dirname);
                                    if (relative.charAt(0) !== ".") {
                                        throw new FS.ErrnoError(55)
                                    }
                                    var new_node;
                                    try {
                                        new_node = FS.lookupNode(new_dir, new_name)
                                    } catch (e) {}
                                    if (old_node === new_node) {
                                        return
                                    }
                                    var isdir = FS.isDir(old_node.mode);
                                    var errCode = FS.mayDelete(old_dir, old_name, isdir);
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode)
                                    }
                                    errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode)
                                    }
                                    if (!old_dir.node_ops.rename) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
                                        throw new FS.ErrnoError(10)
                                    }
                                    if (new_dir !== old_dir) {
                                        errCode = FS.nodePermissions(old_dir, "w");
                                        if (errCode) {
                                            throw new FS.ErrnoError(errCode)
                                        }
                                    }
                                    FS.hashRemoveNode(old_node);
                                    try {
                                        old_dir.node_ops.rename(old_node, new_dir, new_name)
                                    } catch (e) {
                                        throw e
                                    } finally {
                                        FS.hashAddNode(old_node)
                                    }
                                },
                                rmdir: path => {
                                    var lookup = FS.lookupPath(path, {
                                        parent: true
                                    });
                                    var parent = lookup.node;
                                    var name = PATH.basename(path);
                                    var node = FS.lookupNode(parent, name);
                                    var errCode = FS.mayDelete(parent, name, true);
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode)
                                    }
                                    if (!parent.node_ops.rmdir) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    if (FS.isMountpoint(node)) {
                                        throw new FS.ErrnoError(10)
                                    }
                                    parent.node_ops.rmdir(parent, name);
                                    FS.destroyNode(node)
                                },
                                readdir: path => {
                                    var lookup = FS.lookupPath(path, {
                                        follow: true
                                    });
                                    var node = lookup.node;
                                    if (!node.node_ops.readdir) {
                                        throw new FS.ErrnoError(54)
                                    }
                                    return node.node_ops.readdir(node)
                                },
                                unlink: path => {
                                    var lookup = FS.lookupPath(path, {
                                        parent: true
                                    });
                                    var parent = lookup.node;
                                    if (!parent) {
                                        throw new FS.ErrnoError(44)
                                    }
                                    var name = PATH.basename(path);
                                    var node = FS.lookupNode(parent, name);
                                    var errCode = FS.mayDelete(parent, name, false);
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode)
                                    }
                                    if (!parent.node_ops.unlink) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    if (FS.isMountpoint(node)) {
                                        throw new FS.ErrnoError(10)
                                    }
                                    parent.node_ops.unlink(parent, name);
                                    FS.destroyNode(node)
                                },
                                readlink: path => {
                                    var lookup = FS.lookupPath(path);
                                    var link = lookup.node;
                                    if (!link) {
                                        throw new FS.ErrnoError(44)
                                    }
                                    if (!link.node_ops.readlink) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
                                },
                                stat: (path, dontFollow) => {
                                    var lookup = FS.lookupPath(path, {
                                        follow: !dontFollow
                                    });
                                    var node = lookup.node;
                                    if (!node) {
                                        throw new FS.ErrnoError(44)
                                    }
                                    if (!node.node_ops.getattr) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    return node.node_ops.getattr(node)
                                },
                                lstat: path => {
                                    return FS.stat(path, true)
                                },
                                chmod: (path, mode, dontFollow) => {
                                    var node;
                                    if (typeof path == "string") {
                                        var lookup = FS.lookupPath(path, {
                                            follow: !dontFollow
                                        });
                                        node = lookup.node
                                    } else {
                                        node = path
                                    }
                                    if (!node.node_ops.setattr) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    node.node_ops.setattr(node, {
                                        mode: mode & 4095 | node.mode & ~4095,
                                        timestamp: Date.now()
                                    })
                                },
                                lchmod: (path, mode) => {
                                    FS.chmod(path, mode, true)
                                },
                                fchmod: (fd, mode) => {
                                    var stream = FS.getStream(fd);
                                    if (!stream) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    FS.chmod(stream.node, mode)
                                },
                                chown: (path, uid, gid, dontFollow) => {
                                    var node;
                                    if (typeof path == "string") {
                                        var lookup = FS.lookupPath(path, {
                                            follow: !dontFollow
                                        });
                                        node = lookup.node
                                    } else {
                                        node = path
                                    }
                                    if (!node.node_ops.setattr) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    node.node_ops.setattr(node, {
                                        timestamp: Date.now()
                                    })
                                },
                                lchown: (path, uid, gid) => {
                                    FS.chown(path, uid, gid, true)
                                },
                                fchown: (fd, uid, gid) => {
                                    var stream = FS.getStream(fd);
                                    if (!stream) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    FS.chown(stream.node, uid, gid)
                                },
                                truncate: (path, len) => {
                                    if (len < 0) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    var node;
                                    if (typeof path == "string") {
                                        var lookup = FS.lookupPath(path, {
                                            follow: true
                                        });
                                        node = lookup.node
                                    } else {
                                        node = path
                                    }
                                    if (!node.node_ops.setattr) {
                                        throw new FS.ErrnoError(63)
                                    }
                                    if (FS.isDir(node.mode)) {
                                        throw new FS.ErrnoError(31)
                                    }
                                    if (!FS.isFile(node.mode)) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    var errCode = FS.nodePermissions(node, "w");
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode)
                                    }
                                    node.node_ops.setattr(node, {
                                        size: len,
                                        timestamp: Date.now()
                                    })
                                },
                                ftruncate: (fd, len) => {
                                    var stream = FS.getStream(fd);
                                    if (!stream) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if ((stream.flags & 2097155) === 0) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    FS.truncate(stream.node, len)
                                },
                                utime: (path, atime, mtime) => {
                                    var lookup = FS.lookupPath(path, {
                                        follow: true
                                    });
                                    var node = lookup.node;
                                    node.node_ops.setattr(node, {
                                        timestamp: Math.max(atime, mtime)
                                    })
                                },
                                open: (path, flags, mode) => {
                                    if (path === "") {
                                        throw new FS.ErrnoError(44)
                                    }
                                    flags = typeof flags == "string" ? FS.modeStringToFlags(flags) : flags;
                                    mode = typeof mode == "undefined" ? 438 : mode;
                                    if (flags & 64) {
                                        mode = mode & 4095 | 32768
                                    } else {
                                        mode = 0
                                    }
                                    var node;
                                    if (typeof path == "object") {
                                        node = path
                                    } else {
                                        path = PATH.normalize(path);
                                        try {
                                            var lookup = FS.lookupPath(path, {
                                                follow: !(flags & 131072)
                                            });
                                            node = lookup.node
                                        } catch (e) {}
                                    }
                                    var created = false;
                                    if (flags & 64) {
                                        if (node) {
                                            if (flags & 128) {
                                                throw new FS.ErrnoError(20)
                                            }
                                        } else {
                                            node = FS.mknod(path, mode, 0);
                                            created = true
                                        }
                                    }
                                    if (!node) {
                                        throw new FS.ErrnoError(44)
                                    }
                                    if (FS.isChrdev(node.mode)) {
                                        flags &= ~512
                                    }
                                    if (flags & 65536 && !FS.isDir(node.mode)) {
                                        throw new FS.ErrnoError(54)
                                    }
                                    if (!created) {
                                        var errCode = FS.mayOpen(node, flags);
                                        if (errCode) {
                                            throw new FS.ErrnoError(errCode)
                                        }
                                    }
                                    if (flags & 512 && !created) {
                                        FS.truncate(node, 0)
                                    }
                                    flags &= ~(128 | 512 | 131072);
                                    var stream = FS.createStream({
                                        node: node,
                                        path: FS.getPath(node),
                                        flags: flags,
                                        seekable: true,
                                        position: 0,
                                        stream_ops: node.stream_ops,
                                        ungotten: [],
                                        error: false
                                    });
                                    if (stream.stream_ops.open) {
                                        stream.stream_ops.open(stream)
                                    }
                                    if (Module["logReadFiles"] && !(flags & 1)) {
                                        if (!FS.readFiles) FS.readFiles = {};
                                        if (!(path in FS.readFiles)) {
                                            FS.readFiles[path] = 1
                                        }
                                    }
                                    return stream
                                },
                                close: stream => {
                                    if (FS.isClosed(stream)) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if (stream.getdents) stream.getdents = null;
                                    try {
                                        if (stream.stream_ops.close) {
                                            stream.stream_ops.close(stream)
                                        }
                                    } catch (e) {
                                        throw e
                                    } finally {
                                        FS.closeStream(stream.fd)
                                    }
                                    stream.fd = null
                                },
                                isClosed: stream => {
                                    return stream.fd === null
                                },
                                llseek: (stream, offset, whence) => {
                                    if (FS.isClosed(stream)) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if (!stream.seekable || !stream.stream_ops.llseek) {
                                        throw new FS.ErrnoError(70)
                                    }
                                    if (whence != 0 && whence != 1 && whence != 2) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    stream.position = stream.stream_ops.llseek(stream, offset, whence);
                                    stream.ungotten = [];
                                    return stream.position
                                },
                                read: (stream, buffer, offset, length, position) => {
                                    if (length < 0 || position < 0) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    if (FS.isClosed(stream)) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if ((stream.flags & 2097155) === 1) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if (FS.isDir(stream.node.mode)) {
                                        throw new FS.ErrnoError(31)
                                    }
                                    if (!stream.stream_ops.read) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    var seeking = typeof position != "undefined";
                                    if (!seeking) {
                                        position = stream.position
                                    } else if (!stream.seekable) {
                                        throw new FS.ErrnoError(70)
                                    }
                                    var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
                                    if (!seeking) stream.position += bytesRead;
                                    return bytesRead
                                },
                                write: (stream, buffer, offset, length, position, canOwn) => {
                                    if (length < 0 || position < 0) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    if (FS.isClosed(stream)) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if ((stream.flags & 2097155) === 0) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if (FS.isDir(stream.node.mode)) {
                                        throw new FS.ErrnoError(31)
                                    }
                                    if (!stream.stream_ops.write) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    if (stream.seekable && stream.flags & 1024) {
                                        FS.llseek(stream, 0, 2)
                                    }
                                    var seeking = typeof position != "undefined";
                                    if (!seeking) {
                                        position = stream.position
                                    } else if (!stream.seekable) {
                                        throw new FS.ErrnoError(70)
                                    }
                                    var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
                                    if (!seeking) stream.position += bytesWritten;
                                    return bytesWritten
                                },
                                allocate: (stream, offset, length) => {
                                    if (FS.isClosed(stream)) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if (offset < 0 || length <= 0) {
                                        throw new FS.ErrnoError(28)
                                    }
                                    if ((stream.flags & 2097155) === 0) {
                                        throw new FS.ErrnoError(8)
                                    }
                                    if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
                                        throw new FS.ErrnoError(43)
                                    }
                                    if (!stream.stream_ops.allocate) {
                                        throw new FS.ErrnoError(138)
                                    }
                                    stream.stream_ops.allocate(stream, offset, length)
                                },
                                mmap: (stream, length, position, prot, flags) => {
                                    if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
                                        throw new FS.ErrnoError(2)
                                    }
                                    if ((stream.flags & 2097155) === 1) {
                                        throw new FS.ErrnoError(2)
                                    }
                                    if (!stream.stream_ops.mmap) {
                                        throw new FS.ErrnoError(43)
                                    }
                                    return stream.stream_ops.mmap(stream, length, position, prot, flags)
                                },
                                msync: (stream, buffer, offset, length, mmapFlags) => {
                                    if (!stream.stream_ops.msync) {
                                        return 0
                                    }
                                    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags)
                                },
                                munmap: stream => 0,
                                ioctl: (stream, cmd, arg) => {
                                    if (!stream.stream_ops.ioctl) {
                                        throw new FS.ErrnoError(59)
                                    }
                                    return stream.stream_ops.ioctl(stream, cmd, arg)
                                },
                                readFile: (path, opts = {}) => {
                                    opts.flags = opts.flags || 0;
                                    opts.encoding = opts.encoding || "binary";
                                    if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
                                        throw new Error('Invalid encoding type "' + opts.encoding + '"')
                                    }
                                    var ret;
                                    var stream = FS.open(path, opts.flags);
                                    var stat = FS.stat(path);
                                    var length = stat.size;
                                    var buf = new Uint8Array(length);
                                    FS.read(stream, buf, 0, length, 0);
                                    if (opts.encoding === "utf8") {
                                        ret = UTF8ArrayToString(buf, 0)
                                    } else if (opts.encoding === "binary") {
                                        ret = buf
                                    }
                                    FS.close(stream);
                                    return ret
                                },
                                writeFile: (path, data, opts = {}) => {
                                    opts.flags = opts.flags || 577;
                                    var stream = FS.open(path, opts.flags, opts.mode);
                                    if (typeof data == "string") {
                                        var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
                                        var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
                                        FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn)
                                    } else if (ArrayBuffer.isView(data)) {
                                        FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn)
                                    } else {
                                        throw new Error("Unsupported data type")
                                    }
                                    FS.close(stream)
                                },
                                cwd: () => FS.currentPath,
                                chdir: path => {
                                    var lookup = FS.lookupPath(path, {
                                        follow: true
                                    });
                                    if (lookup.node === null) {
                                        throw new FS.ErrnoError(44)
                                    }
                                    if (!FS.isDir(lookup.node.mode)) {
                                        throw new FS.ErrnoError(54)
                                    }
                                    var errCode = FS.nodePermissions(lookup.node, "x");
                                    if (errCode) {
                                        throw new FS.ErrnoError(errCode)
                                    }
                                    FS.currentPath = lookup.path
                                },
                                createDefaultDirectories: () => {
                                    FS.mkdir("/tmp");
                                    FS.mkdir("/home");
                                    FS.mkdir("/home/web_user")
                                },
                                createDefaultDevices: () => {
                                    FS.mkdir("/dev");
                                    FS.registerDevice(FS.makedev(1, 3), {
                                        read: () => 0,
                                        write: (stream, buffer, offset, length, pos) => length
                                    });
                                    FS.mkdev("/dev/null", FS.makedev(1, 3));
                                    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
                                    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
                                    FS.mkdev("/dev/tty", FS.makedev(5, 0));
                                    FS.mkdev("/dev/tty1", FS.makedev(6, 0));
                                    var random_device = getRandomDevice();
                                    FS.createDevice("/dev", "random", random_device);
                                    FS.createDevice("/dev", "urandom", random_device);
                                    FS.mkdir("/dev/shm");
                                    FS.mkdir("/dev/shm/tmp")
                                },
                                createSpecialDirectories: () => {
                                    FS.mkdir("/proc");
                                    var proc_self = FS.mkdir("/proc/self");
                                    FS.mkdir("/proc/self/fd");
                                    FS.mount({
                                        mount: () => {
                                            var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
                                            node.node_ops = {
                                                lookup: (parent, name) => {
                                                    var fd = +name;
                                                    var stream = FS.getStream(fd);
                                                    if (!stream) throw new FS.ErrnoError(8);
                                                    var ret = {
                                                        parent: null,
                                                        mount: {
                                                            mountpoint: "fake"
                                                        },
                                                        node_ops: {
                                                            readlink: () => stream.path
                                                        }
                                                    };
                                                    ret.parent = ret;
                                                    return ret
                                                }
                                            };
                                            return node
                                        }
                                    }, {}, "/proc/self/fd")
                                },
                                createStandardStreams: () => {
                                    if (Module["stdin"]) {
                                        FS.createDevice("/dev", "stdin", Module["stdin"])
                                    } else {
                                        FS.symlink("/dev/tty", "/dev/stdin")
                                    }
                                    if (Module["stdout"]) {
                                        FS.createDevice("/dev", "stdout", null, Module["stdout"])
                                    } else {
                                        FS.symlink("/dev/tty", "/dev/stdout")
                                    }
                                    if (Module["stderr"]) {
                                        FS.createDevice("/dev", "stderr", null, Module["stderr"])
                                    } else {
                                        FS.symlink("/dev/tty1", "/dev/stderr")
                                    }
                                    var stdin = FS.open("/dev/stdin", 0);
                                    var stdout = FS.open("/dev/stdout", 1);
                                    var stderr = FS.open("/dev/stderr", 1)
                                },
                                ensureErrnoError: () => {
                                    if (FS.ErrnoError) return;
                                    FS.ErrnoError = function ErrnoError(errno, node) {
                                        this.node = node;
                                        this.setErrno = function(errno) {
                                            this.errno = errno
                                        };
                                        this.setErrno(errno);
                                        this.message = "FS error"
                                    };
                                    FS.ErrnoError.prototype = new Error;
                                    FS.ErrnoError.prototype.constructor = FS.ErrnoError;
                                    [44].forEach(code => {
                                        FS.genericErrors[code] = new FS.ErrnoError(code);
                                        FS.genericErrors[code].stack = "<generic error, no stack>"
                                    })
                                },
                                staticInit: () => {
                                    FS.ensureErrnoError();
                                    FS.nameTable = new Array(4096);
                                    FS.mount(MEMFS, {}, "/");
                                    FS.createDefaultDirectories();
                                    FS.createDefaultDevices();
                                    FS.createSpecialDirectories();
                                    FS.filesystems = {
                                        "MEMFS": MEMFS
                                    }
                                },
                                init: (input, output, error) => {
                                    FS.init.initialized = true;
                                    FS.ensureErrnoError();
                                    Module["stdin"] = input || Module["stdin"];
                                    Module["stdout"] = output || Module["stdout"];
                                    Module["stderr"] = error || Module["stderr"];
                                    FS.createStandardStreams()
                                },
                                quit: () => {
                                    FS.init.initialized = false;
                                    for (var i = 0; i < FS.streams.length; i++) {
                                        var stream = FS.streams[i];
                                        if (!stream) {
                                            continue
                                        }
                                        FS.close(stream)
                                    }
                                },
                                getMode: (canRead, canWrite) => {
                                    var mode = 0;
                                    if (canRead) mode |= 292 | 73;
                                    if (canWrite) mode |= 146;
                                    return mode
                                },
                                findObject: (path, dontResolveLastLink) => {
                                    var ret = FS.analyzePath(path, dontResolveLastLink);
                                    if (!ret.exists) {
                                        return null
                                    }
                                    return ret.object
                                },
                                analyzePath: (path, dontResolveLastLink) => {
                                    try {
                                        var lookup = FS.lookupPath(path, {
                                            follow: !dontResolveLastLink
                                        });
                                        path = lookup.path
                                    } catch (e) {}
                                    var ret = {
                                        isRoot: false,
                                        exists: false,
                                        error: 0,
                                        name: null,
                                        path: null,
                                        object: null,
                                        parentExists: false,
                                        parentPath: null,
                                        parentObject: null
                                    };
                                    try {
                                        var lookup = FS.lookupPath(path, {
                                            parent: true
                                        });
                                        ret.parentExists = true;
                                        ret.parentPath = lookup.path;
                                        ret.parentObject = lookup.node;
                                        ret.name = PATH.basename(path);
                                        lookup = FS.lookupPath(path, {
                                            follow: !dontResolveLastLink
                                        });
                                        ret.exists = true;
                                        ret.path = lookup.path;
                                        ret.object = lookup.node;
                                        ret.name = lookup.node.name;
                                        ret.isRoot = lookup.path === "/"
                                    } catch (e) {
                                        ret.error = e.errno
                                    }
                                    return ret
                                },
                                createPath: (parent, path, canRead, canWrite) => {
                                    parent = typeof parent == "string" ? parent : FS.getPath(parent);
                                    var parts = path.split("/").reverse();
                                    while (parts.length) {
                                        var part = parts.pop();
                                        if (!part) continue;
                                        var current = PATH.join2(parent, part);
                                        try {
                                            FS.mkdir(current)
                                        } catch (e) {}
                                        parent = current
                                    }
                                    return current
                                },
                                createFile: (parent, name, properties, canRead, canWrite) => {
                                    var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
                                    var mode = FS.getMode(canRead, canWrite);
                                    return FS.create(path, mode)
                                },
                                createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
                                    var path = name;
                                    if (parent) {
                                        parent = typeof parent == "string" ? parent : FS.getPath(parent);
                                        path = name ? PATH.join2(parent, name) : parent
                                    }
                                    var mode = FS.getMode(canRead, canWrite);
                                    var node = FS.create(path, mode);
                                    if (data) {
                                        if (typeof data == "string") {
                                            var arr = new Array(data.length);
                                            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                                            data = arr
                                        }
                                        FS.chmod(node, mode | 146);
                                        var stream = FS.open(node, 577);
                                        FS.write(stream, data, 0, data.length, 0, canOwn);
                                        FS.close(stream);
                                        FS.chmod(node, mode)
                                    }
                                    return node
                                },
                                createDevice: (parent, name, input, output) => {
                                    var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
                                    var mode = FS.getMode(!!input, !!output);
                                    if (!FS.createDevice.major) FS.createDevice.major = 64;
                                    var dev = FS.makedev(FS.createDevice.major++, 0);
                                    FS.registerDevice(dev, {
                                        open: stream => {
                                            stream.seekable = false
                                        },
                                        close: stream => {
                                            if (output && output.buffer && output.buffer.length) {
                                                output(10)
                                            }
                                        },
                                        read: (stream, buffer, offset, length, pos) => {
                                            var bytesRead = 0;
                                            for (var i = 0; i < length; i++) {
                                                var result;
                                                try {
                                                    result = input()
                                                } catch (e) {
                                                    throw new FS.ErrnoError(29)
                                                }
                                                if (result === undefined && bytesRead === 0) {
                                                    throw new FS.ErrnoError(6)
                                                }
                                                if (result === null || result === undefined) break;
                                                bytesRead++;
                                                buffer[offset + i] = result
                                            }
                                            if (bytesRead) {
                                                stream.node.timestamp = Date.now()
                                            }
                                            return bytesRead
                                        },
                                        write: (stream, buffer, offset, length, pos) => {
                                            for (var i = 0; i < length; i++) {
                                                try {
                                                    output(buffer[offset + i])
                                                } catch (e) {
                                                    throw new FS.ErrnoError(29)
                                                }
                                            }
                                            if (length) {
                                                stream.node.timestamp = Date.now()
                                            }
                                            return i
                                        }
                                    });
                                    return FS.mkdev(path, mode, dev)
                                },
                                forceLoadFile: obj => {
                                    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
                                    if (typeof XMLHttpRequest != "undefined") {
                                        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")
                                    } else if (read_) {
                                        try {
                                            obj.contents = intArrayFromString(read_(obj.url), true);
                                            obj.usedBytes = obj.contents.length
                                        } catch (e) {
                                            throw new FS.ErrnoError(29)
                                        }
                                    } else {
                                        throw new Error("Cannot load without read() or XMLHttpRequest.")
                                    }
                                },
                                createLazyFile: (parent, name, url, canRead, canWrite) => {
                                    function LazyUint8Array() {
                                        this.lengthKnown = false;
                                        this.chunks = []
                                    }
                                    LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
                                        if (idx > this.length - 1 || idx < 0) {
                                            return undefined
                                        }
                                        var chunkOffset = idx % this.chunkSize;
                                        var chunkNum = idx / this.chunkSize | 0;
                                        return this.getter(chunkNum)[chunkOffset]
                                    };
                                    LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
                                        this.getter = getter
                                    };
                                    LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
                                        var xhr = new XMLHttpRequest;
                                        xhr.open("HEAD", url, false);
                                        xhr.send(null);
                                        if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                                        var datalength = Number(xhr.getResponseHeader("Content-length"));
                                        var header;
                                        var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
                                        var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
                                        var chunkSize = 1024 * 1024;
                                        if (!hasByteServing) chunkSize = datalength;
                                        var doXHR = (from, to) => {
                                            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                                            if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                                            var xhr = new XMLHttpRequest;
                                            xhr.open("GET", url, false);
                                            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                                            xhr.responseType = "arraybuffer";
                                            if (xhr.overrideMimeType) {
                                                xhr.overrideMimeType("text/plain; charset=x-user-defined")
                                            }
                                            xhr.send(null);
                                            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                                            if (xhr.response !== undefined) {
                                                return new Uint8Array(xhr.response || [])
                                            }
                                            return intArrayFromString(xhr.responseText || "", true)
                                        };
                                        var lazyArray = this;
                                        lazyArray.setDataGetter(chunkNum => {
                                            var start = chunkNum * chunkSize;
                                            var end = (chunkNum + 1) * chunkSize - 1;
                                            end = Math.min(end, datalength - 1);
                                            if (typeof lazyArray.chunks[chunkNum] == "undefined") {
                                                lazyArray.chunks[chunkNum] = doXHR(start, end)
                                            }
                                            if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
                                            return lazyArray.chunks[chunkNum]
                                        });
                                        if (usesGzip || !datalength) {
                                            chunkSize = datalength = 1;
                                            datalength = this.getter(0).length;
                                            chunkSize = datalength;
                                            out("LazyFiles on gzip forces download of the whole file when length is accessed")
                                        }
                                        this._length = datalength;
                                        this._chunkSize = chunkSize;
                                        this.lengthKnown = true
                                    };
                                    if (typeof XMLHttpRequest != "undefined") {
                                        if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                                        var lazyArray = new LazyUint8Array;
                                        Object.defineProperties(lazyArray, {
                                            length: {
                                                get: function() {
                                                    if (!this.lengthKnown) {
                                                        this.cacheLength()
                                                    }
                                                    return this._length
                                                }
                                            },
                                            chunkSize: {
                                                get: function() {
                                                    if (!this.lengthKnown) {
                                                        this.cacheLength()
                                                    }
                                                    return this._chunkSize
                                                }
                                            }
                                        });
                                        var properties = {
                                            isDevice: false,
                                            contents: lazyArray
                                        }
                                    } else {
                                        var properties = {
                                            isDevice: false,
                                            url: url
                                        }
                                    }
                                    var node = FS.createFile(parent, name, properties, canRead, canWrite);
                                    if (properties.contents) {
                                        node.contents = properties.contents
                                    } else if (properties.url) {
                                        node.contents = null;
                                        node.url = properties.url
                                    }
                                    Object.defineProperties(node, {
                                        usedBytes: {
                                            get: function() {
                                                return this.contents.length
                                            }
                                        }
                                    });
                                    var stream_ops = {};
                                    var keys = Object.keys(node.stream_ops);
                                    keys.forEach(key => {
                                        var fn = node.stream_ops[key];
                                        stream_ops[key] = function forceLoadLazyFile() {
                                            FS.forceLoadFile(node);
                                            return fn.apply(null, arguments)
                                        }
                                    });

                                    function writeChunks(stream, buffer, offset, length, position) {
                                        var contents = stream.node.contents;
                                        if (position >= contents.length) return 0;
                                        var size = Math.min(contents.length - position, length);
                                        if (contents.slice) {
                                            for (var i = 0; i < size; i++) {
                                                buffer[offset + i] = contents[position + i]
                                            }
                                        } else {
                                            for (var i = 0; i < size; i++) {
                                                buffer[offset + i] = contents.get(position + i)
                                            }
                                        }
                                        return size
                                    }
                                    stream_ops.read = (stream, buffer, offset, length, position) => {
                                        FS.forceLoadFile(node);
                                        return writeChunks(stream, buffer, offset, length, position)
                                    };
                                    stream_ops.mmap = (stream, length, position, prot, flags) => {
                                        FS.forceLoadFile(node);
                                        var ptr = mmapAlloc(length);
                                        if (!ptr) {
                                            throw new FS.ErrnoError(48)
                                        }
                                        writeChunks(stream, HEAP8, ptr, length, position);
                                        return {
                                            ptr: ptr,
                                            allocated: true
                                        }
                                    };
                                    node.stream_ops = stream_ops;
                                    return node
                                },
                                createPreloadedFile: (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
                                    var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
                                    var dep = getUniqueRunDependency("cp " + fullname);

                                    function processData(byteArray) {
                                        function finish(byteArray) {
                                            if (preFinish) preFinish();
                                            if (!dontCreateFile) {
                                                FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn)
                                            }
                                            if (onload) onload();
                                            removeRunDependency(dep)
                                        }
                                        if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
                                                if (onerror) onerror();
                                                removeRunDependency(dep)
                                            })) {
                                            return
                                        }
                                        finish(byteArray)
                                    }
                                    addRunDependency(dep);
                                    if (typeof url == "string") {
                                        asyncLoad(url, byteArray => processData(byteArray), onerror)
                                    } else {
                                        processData(url)
                                    }
                                },
                                indexedDB: () => {
                                    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
                                },
                                DB_NAME: () => {
                                    return "EM_FS_" + window.location.pathname
                                },
                                DB_VERSION: 20,
                                DB_STORE_NAME: "FILE_DATA",
                                saveFilesToDB: (paths, onload, onerror) => {
                                    onload = onload || (() => {});
                                    onerror = onerror || (() => {});
                                    var indexedDB = FS.indexedDB();
                                    try {
                                        var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
                                    } catch (e) {
                                        return onerror(e)
                                    }
                                    openRequest.onupgradeneeded = () => {
                                        out("creating db");
                                        var db = openRequest.result;
                                        db.createObjectStore(FS.DB_STORE_NAME)
                                    };
                                    openRequest.onsuccess = () => {
                                        var db = openRequest.result;
                                        var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
                                        var files = transaction.objectStore(FS.DB_STORE_NAME);
                                        var ok = 0,
                                            fail = 0,
                                            total = paths.length;

                                        function finish() {
                                            if (fail == 0) onload();
                                            else onerror()
                                        }
                                        paths.forEach(path => {
                                            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
                                            putRequest.onsuccess = () => {
                                                ok++;
                                                if (ok + fail == total) finish()
                                            };
                                            putRequest.onerror = () => {
                                                fail++;
                                                if (ok + fail == total) finish()
                                            }
                                        });
                                        transaction.onerror = onerror
                                    };
                                    openRequest.onerror = onerror
                                },
                                loadFilesFromDB: (paths, onload, onerror) => {
                                    onload = onload || (() => {});
                                    onerror = onerror || (() => {});
                                    var indexedDB = FS.indexedDB();
                                    try {
                                        var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
                                    } catch (e) {
                                        return onerror(e)
                                    }
                                    openRequest.onupgradeneeded = onerror;
                                    openRequest.onsuccess = () => {
                                        var db = openRequest.result;
                                        try {
                                            var transaction = db.transaction([FS.DB_STORE_NAME], "readonly")
                                        } catch (e) {
                                            onerror(e);
                                            return
                                        }
                                        var files = transaction.objectStore(FS.DB_STORE_NAME);
                                        var ok = 0,
                                            fail = 0,
                                            total = paths.length;

                                        function finish() {
                                            if (fail == 0) onload();
                                            else onerror()
                                        }
                                        paths.forEach(path => {
                                            var getRequest = files.get(path);
                                            getRequest.onsuccess = () => {
                                                if (FS.analyzePath(path).exists) {
                                                    FS.unlink(path)
                                                }
                                                FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                                                ok++;
                                                if (ok + fail == total) finish()
                                            };
                                            getRequest.onerror = () => {
                                                fail++;
                                                if (ok + fail == total) finish()
                                            }
                                        });
                                        transaction.onerror = onerror
                                    };
                                    openRequest.onerror = onerror
                                }
                            };
                            var SYSCALLS = {
                                DEFAULT_POLLMASK: 5,
                                calculateAt: function(dirfd, path, allowEmpty) {
                                    if (PATH.isAbs(path)) {
                                        return path
                                    }
                                    var dir;
                                    if (dirfd === -100) {
                                        dir = FS.cwd()
                                    } else {
                                        var dirstream = SYSCALLS.getStreamFromFD(dirfd);
                                        dir = dirstream.path
                                    }
                                    if (path.length == 0) {
                                        if (!allowEmpty) {
                                            throw new FS.ErrnoError(44)
                                        }
                                        return dir
                                    }
                                    return PATH.join2(dir, path)
                                },
                                doStat: function(func, path, buf) {
                                    try {
                                        var stat = func(path)
                                    } catch (e) {
                                        if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
                                            return -54
                                        }
                                        throw e
                                    }
                                    HEAP32[buf >> 2] = stat.dev;
                                    HEAP32[buf + 8 >> 2] = stat.ino;
                                    HEAP32[buf + 12 >> 2] = stat.mode;
                                    HEAPU32[buf + 16 >> 2] = stat.nlink;
                                    HEAP32[buf + 20 >> 2] = stat.uid;
                                    HEAP32[buf + 24 >> 2] = stat.gid;
                                    HEAP32[buf + 28 >> 2] = stat.rdev;
                                    tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
                                    HEAP32[buf + 48 >> 2] = 4096;
                                    HEAP32[buf + 52 >> 2] = stat.blocks;
                                    var atime = stat.atime.getTime();
                                    var mtime = stat.mtime.getTime();
                                    var ctime = stat.ctime.getTime();
                                    tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
                                    HEAPU32[buf + 64 >> 2] = atime % 1e3 * 1e3;
                                    tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
                                    HEAPU32[buf + 80 >> 2] = mtime % 1e3 * 1e3;
                                    tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
                                    HEAPU32[buf + 96 >> 2] = ctime % 1e3 * 1e3;
                                    tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 104 >> 2] = tempI64[0], HEAP32[buf + 108 >> 2] = tempI64[1];
                                    return 0
                                },
                                doMsync: function(addr, stream, len, flags, offset) {
                                    if (!FS.isFile(stream.node.mode)) {
                                        throw new FS.ErrnoError(43)
                                    }
                                    if (flags & 2) {
                                        return 0
                                    }
                                    var buffer = HEAPU8.slice(addr, addr + len);
                                    FS.msync(stream, buffer, offset, len, flags)
                                },
                                varargs: undefined,
                                get: function() {
                                    SYSCALLS.varargs += 4;
                                    var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
                                    return ret
                                },
                                getStr: function(ptr) {
                                    var ret = UTF8ToString(ptr);
                                    return ret
                                },
                                getStreamFromFD: function(fd) {
                                    var stream = FS.getStream(fd);
                                    if (!stream) throw new FS.ErrnoError(8);
                                    return stream
                                }
                            };

                            function ___syscall_dup3(fd, suggestFD, flags) {
                                try {
                                    var old = SYSCALLS.getStreamFromFD(fd);
                                    if (old.fd === suggestFD) return -28;
                                    var suggest = FS.getStream(suggestFD);
                                    if (suggest) FS.close(suggest);
                                    return FS.createStream(old, suggestFD, suggestFD + 1).fd
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_faccessat(dirfd, path, amode, flags) {
                                try {
                                    path = SYSCALLS.getStr(path);
                                    path = SYSCALLS.calculateAt(dirfd, path);
                                    if (amode & ~7) {
                                        return -28
                                    }
                                    var lookup = FS.lookupPath(path, {
                                        follow: true
                                    });
                                    var node = lookup.node;
                                    if (!node) {
                                        return -44
                                    }
                                    var perms = "";
                                    if (amode & 4) perms += "r";
                                    if (amode & 2) perms += "w";
                                    if (amode & 1) perms += "x";
                                    if (perms && FS.nodePermissions(node, perms)) {
                                        return -2
                                    }
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function setErrNo(value) {
                                HEAP32[___errno_location() >> 2] = value;
                                return value
                            }

                            function ___syscall_fcntl64(fd, cmd, varargs) {
                                SYSCALLS.varargs = varargs;
                                try {
                                    var stream = SYSCALLS.getStreamFromFD(fd);
                                    switch (cmd) {
                                        case 0: {
                                            var arg = SYSCALLS.get();
                                            if (arg < 0) {
                                                return -28
                                            }
                                            var newStream;
                                            newStream = FS.createStream(stream, arg);
                                            return newStream.fd
                                        }
                                        case 1:
                                        case 2:
                                            return 0;
                                        case 3:
                                            return stream.flags;
                                        case 4: {
                                            var arg = SYSCALLS.get();
                                            stream.flags |= arg;
                                            return 0
                                        }
                                        case 5: {
                                            var arg = SYSCALLS.get();
                                            var offset = 0;
                                            HEAP16[arg + offset >> 1] = 2;
                                            return 0
                                        }
                                        case 6:
                                        case 7:
                                            return 0;
                                        case 16:
                                        case 8:
                                            return -28;
                                        case 9:
                                            setErrNo(28);
                                            return -1;
                                        default: {
                                            return -28
                                        }
                                    }
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_fstat64(fd, buf) {
                                try {
                                    var stream = SYSCALLS.getStreamFromFD(fd);
                                    return SYSCALLS.doStat(FS.stat, stream.path, buf)
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_getdents64(fd, dirp, count) {
                                try {
                                    var stream = SYSCALLS.getStreamFromFD(fd);
                                    if (!stream.getdents) {
                                        stream.getdents = FS.readdir(stream.path)
                                    }
                                    var struct_size = 280;
                                    var pos = 0;
                                    var off = FS.llseek(stream, 0, 1);
                                    var idx = Math.floor(off / struct_size);
                                    while (idx < stream.getdents.length && pos + struct_size <= count) {
                                        var id;
                                        var type;
                                        var name = stream.getdents[idx];
                                        if (name === ".") {
                                            id = stream.node.id;
                                            type = 4
                                        } else if (name === "..") {
                                            var lookup = FS.lookupPath(stream.path, {
                                                parent: true
                                            });
                                            id = lookup.node.id;
                                            type = 4
                                        } else {
                                            var child = FS.lookupNode(stream.node, name);
                                            id = child.id;
                                            type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8
                                        }
                                        tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
                                        tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
                                        HEAP16[dirp + pos + 16 >> 1] = 280;
                                        HEAP8[dirp + pos + 18 >> 0] = type;
                                        stringToUTF8(name, dirp + pos + 19, 256);
                                        pos += struct_size;
                                        idx += 1
                                    }
                                    FS.llseek(stream, idx * struct_size, 0);
                                    return pos
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_lstat64(path, buf) {
                                try {
                                    path = SYSCALLS.getStr(path);
                                    return SYSCALLS.doStat(FS.lstat, path, buf)
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_newfstatat(dirfd, path, buf, flags) {
                                try {
                                    path = SYSCALLS.getStr(path);
                                    var nofollow = flags & 256;
                                    var allowEmpty = flags & 4096;
                                    flags = flags & ~6400;
                                    path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
                                    return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf)
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_openat(dirfd, path, flags, varargs) {
                                SYSCALLS.varargs = varargs;
                                try {
                                    path = SYSCALLS.getStr(path);
                                    path = SYSCALLS.calculateAt(dirfd, path);
                                    var mode = varargs ? SYSCALLS.get() : 0;
                                    return FS.open(path, flags, mode).fd
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
                                try {
                                    oldpath = SYSCALLS.getStr(oldpath);
                                    newpath = SYSCALLS.getStr(newpath);
                                    oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
                                    newpath = SYSCALLS.calculateAt(newdirfd, newpath);
                                    FS.rename(oldpath, newpath);
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_rmdir(path) {
                                try {
                                    path = SYSCALLS.getStr(path);
                                    FS.rmdir(path);
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_stat64(path, buf) {
                                try {
                                    path = SYSCALLS.getStr(path);
                                    return SYSCALLS.doStat(FS.stat, path, buf)
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }

                            function ___syscall_unlinkat(dirfd, path, flags) {
                                try {
                                    path = SYSCALLS.getStr(path);
                                    path = SYSCALLS.calculateAt(dirfd, path);
                                    if (flags === 0) {
                                        FS.unlink(path)
                                    } else if (flags === 512) {
                                        FS.rmdir(path)
                                    } else {
                                        abort("Invalid flags passed to unlinkat")
                                    }
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return -e.errno
                                }
                            }
                            var nowIsMonotonic = true;

                            function __emscripten_get_now_is_monotonic() {
                                return nowIsMonotonic
                            }

                            function readI53FromI64(ptr) {
                                return HEAPU32[ptr >> 2] + HEAP32[ptr + 4 >> 2] * 4294967296
                            }

                            function __gmtime_js(time, tmPtr) {
                                var date = new Date(readI53FromI64(time) * 1e3);
                                HEAP32[tmPtr >> 2] = date.getUTCSeconds();
                                HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
                                HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
                                HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
                                HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
                                HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
                                HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
                                var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
                                var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
                                HEAP32[tmPtr + 28 >> 2] = yday
                            }

                            function __isLeapYear(year) {
                                return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
                            }
                            var __MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
                            var __MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

                            function __yday_from_date(date) {
                                var isLeapYear = __isLeapYear(date.getFullYear());
                                var monthDaysCumulative = isLeapYear ? __MONTH_DAYS_LEAP_CUMULATIVE : __MONTH_DAYS_REGULAR_CUMULATIVE;
                                var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
                                return yday
                            }

                            function __localtime_js(time, tmPtr) {
                                var date = new Date(readI53FromI64(time) * 1e3);
                                HEAP32[tmPtr >> 2] = date.getSeconds();
                                HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
                                HEAP32[tmPtr + 8 >> 2] = date.getHours();
                                HEAP32[tmPtr + 12 >> 2] = date.getDate();
                                HEAP32[tmPtr + 16 >> 2] = date.getMonth();
                                HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
                                HEAP32[tmPtr + 24 >> 2] = date.getDay();
                                var yday = __yday_from_date(date) | 0;
                                HEAP32[tmPtr + 28 >> 2] = yday;
                                HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
                                var start = new Date(date.getFullYear(), 0, 1);
                                var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
                                var winterOffset = start.getTimezoneOffset();
                                var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
                                HEAP32[tmPtr + 32 >> 2] = dst
                            }

                            function __mktime_js(tmPtr) {
                                var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
                                var dst = HEAP32[tmPtr + 32 >> 2];
                                var guessedOffset = date.getTimezoneOffset();
                                var start = new Date(date.getFullYear(), 0, 1);
                                var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
                                var winterOffset = start.getTimezoneOffset();
                                var dstOffset = Math.min(winterOffset, summerOffset);
                                if (dst < 0) {
                                    HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset)
                                } else if (dst > 0 != (dstOffset == guessedOffset)) {
                                    var nonDstOffset = Math.max(winterOffset, summerOffset);
                                    var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
                                    date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4)
                                }
                                HEAP32[tmPtr + 24 >> 2] = date.getDay();
                                var yday = __yday_from_date(date) | 0;
                                HEAP32[tmPtr + 28 >> 2] = yday;
                                HEAP32[tmPtr >> 2] = date.getSeconds();
                                HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
                                HEAP32[tmPtr + 8 >> 2] = date.getHours();
                                HEAP32[tmPtr + 12 >> 2] = date.getDate();
                                HEAP32[tmPtr + 16 >> 2] = date.getMonth();
                                HEAP32[tmPtr + 20 >> 2] = date.getYear();
                                return date.getTime() / 1e3 | 0
                            }

                            function allocateUTF8(str) {
                                var size = lengthBytesUTF8(str) + 1;
                                var ret = _malloc(size);
                                if (ret) stringToUTF8Array(str, HEAP8, ret, size);
                                return ret
                            }

                            function __tzset_js(timezone, daylight, tzname) {
                                var currentYear = (new Date).getFullYear();
                                var winter = new Date(currentYear, 0, 1);
                                var summer = new Date(currentYear, 6, 1);
                                var winterOffset = winter.getTimezoneOffset();
                                var summerOffset = summer.getTimezoneOffset();
                                var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
                                HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
                                HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);

                                function extractZone(date) {
                                    var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                                    return match ? match[1] : "GMT"
                                }
                                var winterName = extractZone(winter);
                                var summerName = extractZone(summer);
                                var winterNamePtr = allocateUTF8(winterName);
                                var summerNamePtr = allocateUTF8(summerName);
                                if (summerOffset < winterOffset) {
                                    HEAPU32[tzname >> 2] = winterNamePtr;
                                    HEAPU32[tzname + 4 >> 2] = summerNamePtr
                                } else {
                                    HEAPU32[tzname >> 2] = summerNamePtr;
                                    HEAPU32[tzname + 4 >> 2] = winterNamePtr
                                }
                            }

                            function _abort() {
                                abort("")
                            }

                            function _emscripten_date_now() {
                                return Date.now()
                            }
                            var _emscripten_get_now;
                            if (ENVIRONMENT_IS_NODE) {
                                _emscripten_get_now = () => {
                                    var t = process["hrtime"]();
                                    return t[0] * 1e3 + t[1] / 1e6
                                }
                            } else _emscripten_get_now = () => performance.now();

                            function getHeapMax() {
                                return 2147483648
                            }

                            function emscripten_realloc_buffer(size) {
                                var b = wasmMemory.buffer;
                                try {
                                    wasmMemory.grow(size - b.byteLength + 65535 >>> 16);
                                    updateMemoryViews();
                                    return 1
                                } catch (e) {}
                            }

                            function _emscripten_resize_heap(requestedSize) {
                                var oldSize = HEAPU8.length;
                                requestedSize = requestedSize >>> 0;
                                var maxHeapSize = getHeapMax();
                                if (requestedSize > maxHeapSize) {
                                    return false
                                }
                                let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
                                for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
                                    var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
                                    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
                                    var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
                                    var replacement = emscripten_realloc_buffer(newSize);
                                    if (replacement) {
                                        return true
                                    }
                                }
                                return false
                            }
                            var ENV = {};

                            function getExecutableName() {
                                return thisProgram || "./this.program"
                            }

                            function getEnvStrings() {
                                if (!getEnvStrings.strings) {
                                    var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
                                    var env = {
                                        "USER": "web_user",
                                        "LOGNAME": "web_user",
                                        "PATH": "/",
                                        "PWD": "/",
                                        "HOME": "/home/web_user",
                                        "LANG": lang,
                                        "_": getExecutableName()
                                    };
                                    for (var x in ENV) {
                                        if (ENV[x] === undefined) delete env[x];
                                        else env[x] = ENV[x]
                                    }
                                    var strings = [];
                                    for (var x in env) {
                                        strings.push(x + "=" + env[x])
                                    }
                                    getEnvStrings.strings = strings
                                }
                                return getEnvStrings.strings
                            }

                            function writeAsciiToMemory(str, buffer, dontAddNull) {
                                for (var i = 0; i < str.length; ++i) {
                                    HEAP8[buffer++ >> 0] = str.charCodeAt(i)
                                }
                                if (!dontAddNull) HEAP8[buffer >> 0] = 0
                            }

                            function _environ_get(__environ, environ_buf) {
                                var bufSize = 0;
                                getEnvStrings().forEach(function(string, i) {
                                    var ptr = environ_buf + bufSize;
                                    HEAPU32[__environ + i * 4 >> 2] = ptr;
                                    writeAsciiToMemory(string, ptr);
                                    bufSize += string.length + 1
                                });
                                return 0
                            }

                            function _environ_sizes_get(penviron_count, penviron_buf_size) {
                                var strings = getEnvStrings();
                                HEAPU32[penviron_count >> 2] = strings.length;
                                var bufSize = 0;
                                strings.forEach(function(string) {
                                    bufSize += string.length + 1
                                });
                                HEAPU32[penviron_buf_size >> 2] = bufSize;
                                return 0
                            }

                            function _fd_close(fd) {
                                try {
                                    var stream = SYSCALLS.getStreamFromFD(fd);
                                    FS.close(stream);
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return e.errno
                                }
                            }

                            function _fd_fdstat_get(fd, pbuf) {
                                try {
                                    var stream = SYSCALLS.getStreamFromFD(fd);
                                    var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
                                    HEAP8[pbuf >> 0] = type;
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return e.errno
                                }
                            }

                            function doReadv(stream, iov, iovcnt, offset) {
                                var ret = 0;
                                for (var i = 0; i < iovcnt; i++) {
                                    var ptr = HEAPU32[iov >> 2];
                                    var len = HEAPU32[iov + 4 >> 2];
                                    iov += 8;
                                    var curr = FS.read(stream, HEAP8, ptr, len, offset);
                                    if (curr < 0) return -1;
                                    ret += curr;
                                    if (curr < len) break;
                                    if (typeof offset !== "undefined") {
                                        offset += curr
                                    }
                                }
                                return ret
                            }

                            function _fd_read(fd, iov, iovcnt, pnum) {
                                try {
                                    var stream = SYSCALLS.getStreamFromFD(fd);
                                    var num = doReadv(stream, iov, iovcnt);
                                    HEAPU32[pnum >> 2] = num;
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return e.errno
                                }
                            }

                            function convertI32PairToI53Checked(lo, hi) {
                                return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN
                            }

                            function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
                                try {
                                    var offset = convertI32PairToI53Checked(offset_low, offset_high);
                                    if (isNaN(offset)) return 61;
                                    var stream = SYSCALLS.getStreamFromFD(fd);
                                    FS.llseek(stream, offset, whence);
                                    tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
                                    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return e.errno
                                }
                            }

                            function doWritev(stream, iov, iovcnt, offset) {
                                var ret = 0;
                                for (var i = 0; i < iovcnt; i++) {
                                    var ptr = HEAPU32[iov >> 2];
                                    var len = HEAPU32[iov + 4 >> 2];
                                    iov += 8;
                                    var curr = FS.write(stream, HEAP8, ptr, len, offset);
                                    if (curr < 0) return -1;
                                    ret += curr;
                                    if (typeof offset !== "undefined") {
                                        offset += curr
                                    }
                                }
                                return ret
                            }

                            function _fd_write(fd, iov, iovcnt, pnum) {
                                try {
                                    var stream = SYSCALLS.getStreamFromFD(fd);
                                    var num = doWritev(stream, iov, iovcnt);
                                    HEAPU32[pnum >> 2] = num;
                                    return 0
                                } catch (e) {
                                    if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
                                    return e.errno
                                }
                            }

                            function __arraySum(array, index) {
                                var sum = 0;
                                for (var i = 0; i <= index; sum += array[i++]) {}
                                return sum
                            }
                            var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                            var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                            function __addDays(date, days) {
                                var newDate = new Date(date.getTime());
                                while (days > 0) {
                                    var leap = __isLeapYear(newDate.getFullYear());
                                    var currentMonth = newDate.getMonth();
                                    var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
                                    if (days > daysInCurrentMonth - newDate.getDate()) {
                                        days -= daysInCurrentMonth - newDate.getDate() + 1;
                                        newDate.setDate(1);
                                        if (currentMonth < 11) {
                                            newDate.setMonth(currentMonth + 1)
                                        } else {
                                            newDate.setMonth(0);
                                            newDate.setFullYear(newDate.getFullYear() + 1)
                                        }
                                    } else {
                                        newDate.setDate(newDate.getDate() + days);
                                        return newDate
                                    }
                                }
                                return newDate
                            }

                            function writeArrayToMemory(array, buffer) {
                                HEAP8.set(array, buffer)
                            }

                            function _strftime(s, maxsize, format, tm) {
                                var tm_zone = HEAP32[tm + 40 >> 2];
                                var date = {
                                    tm_sec: HEAP32[tm >> 2],
                                    tm_min: HEAP32[tm + 4 >> 2],
                                    tm_hour: HEAP32[tm + 8 >> 2],
                                    tm_mday: HEAP32[tm + 12 >> 2],
                                    tm_mon: HEAP32[tm + 16 >> 2],
                                    tm_year: HEAP32[tm + 20 >> 2],
                                    tm_wday: HEAP32[tm + 24 >> 2],
                                    tm_yday: HEAP32[tm + 28 >> 2],
                                    tm_isdst: HEAP32[tm + 32 >> 2],
                                    tm_gmtoff: HEAP32[tm + 36 >> 2],
                                    tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
                                };
                                var pattern = UTF8ToString(format);
                                var EXPANSION_RULES_1 = {
                                    "%c": "%a %b %d %H:%M:%S %Y",
                                    "%D": "%m/%d/%y",
                                    "%F": "%Y-%m-%d",
                                    "%h": "%b",
                                    "%r": "%I:%M:%S %p",
                                    "%R": "%H:%M",
                                    "%T": "%H:%M:%S",
                                    "%x": "%m/%d/%y",
                                    "%X": "%H:%M:%S",
                                    "%Ec": "%c",
                                    "%EC": "%C",
                                    "%Ex": "%m/%d/%y",
                                    "%EX": "%H:%M:%S",
                                    "%Ey": "%y",
                                    "%EY": "%Y",
                                    "%Od": "%d",
                                    "%Oe": "%e",
                                    "%OH": "%H",
                                    "%OI": "%I",
                                    "%Om": "%m",
                                    "%OM": "%M",
                                    "%OS": "%S",
                                    "%Ou": "%u",
                                    "%OU": "%U",
                                    "%OV": "%V",
                                    "%Ow": "%w",
                                    "%OW": "%W",
                                    "%Oy": "%y"
                                };
                                for (var rule in EXPANSION_RULES_1) {
                                    pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule])
                                }
                                var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                                var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                                function leadingSomething(value, digits, character) {
                                    var str = typeof value == "number" ? value.toString() : value || "";
                                    while (str.length < digits) {
                                        str = character[0] + str
                                    }
                                    return str
                                }

                                function leadingNulls(value, digits) {
                                    return leadingSomething(value, digits, "0")
                                }

                                function compareByDay(date1, date2) {
                                    function sgn(value) {
                                        return value < 0 ? -1 : value > 0 ? 1 : 0
                                    }
                                    var compare;
                                    if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
                                        if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                                            compare = sgn(date1.getDate() - date2.getDate())
                                        }
                                    }
                                    return compare
                                }

                                function getFirstWeekStartDate(janFourth) {
                                    switch (janFourth.getDay()) {
                                        case 0:
                                            return new Date(janFourth.getFullYear() - 1, 11, 29);
                                        case 1:
                                            return janFourth;
                                        case 2:
                                            return new Date(janFourth.getFullYear(), 0, 3);
                                        case 3:
                                            return new Date(janFourth.getFullYear(), 0, 2);
                                        case 4:
                                            return new Date(janFourth.getFullYear(), 0, 1);
                                        case 5:
                                            return new Date(janFourth.getFullYear() - 1, 11, 31);
                                        case 6:
                                            return new Date(janFourth.getFullYear() - 1, 11, 30)
                                    }
                                }

                                function getWeekBasedYear(date) {
                                    var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
                                    var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
                                    var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
                                    var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
                                    var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
                                    if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
                                        if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                                            return thisDate.getFullYear() + 1
                                        }
                                        return thisDate.getFullYear()
                                    }
                                    return thisDate.getFullYear() - 1
                                }
                                var EXPANSION_RULES_2 = {
                                    "%a": function(date) {
                                        return WEEKDAYS[date.tm_wday].substring(0, 3)
                                    },
                                    "%A": function(date) {
                                        return WEEKDAYS[date.tm_wday]
                                    },
                                    "%b": function(date) {
                                        return MONTHS[date.tm_mon].substring(0, 3)
                                    },
                                    "%B": function(date) {
                                        return MONTHS[date.tm_mon]
                                    },
                                    "%C": function(date) {
                                        var year = date.tm_year + 1900;
                                        return leadingNulls(year / 100 | 0, 2)
                                    },
                                    "%d": function(date) {
                                        return leadingNulls(date.tm_mday, 2)
                                    },
                                    "%e": function(date) {
                                        return leadingSomething(date.tm_mday, 2, " ")
                                    },
                                    "%g": function(date) {
                                        return getWeekBasedYear(date).toString().substring(2)
                                    },
                                    "%G": function(date) {
                                        return getWeekBasedYear(date)
                                    },
                                    "%H": function(date) {
                                        return leadingNulls(date.tm_hour, 2)
                                    },
                                    "%I": function(date) {
                                        var twelveHour = date.tm_hour;
                                        if (twelveHour == 0) twelveHour = 12;
                                        else if (twelveHour > 12) twelveHour -= 12;
                                        return leadingNulls(twelveHour, 2)
                                    },
                                    "%j": function(date) {
                                        return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3)
                                    },
                                    "%m": function(date) {
                                        return leadingNulls(date.tm_mon + 1, 2)
                                    },
                                    "%M": function(date) {
                                        return leadingNulls(date.tm_min, 2)
                                    },
                                    "%n": function() {
                                        return "\n"
                                    },
                                    "%p": function(date) {
                                        if (date.tm_hour >= 0 && date.tm_hour < 12) {
                                            return "AM"
                                        }
                                        return "PM"
                                    },
                                    "%S": function(date) {
                                        return leadingNulls(date.tm_sec, 2)
                                    },
                                    "%t": function() {
                                        return "\t"
                                    },
                                    "%u": function(date) {
                                        return date.tm_wday || 7
                                    },
                                    "%U": function(date) {
                                        var days = date.tm_yday + 7 - date.tm_wday;
                                        return leadingNulls(Math.floor(days / 7), 2)
                                    },
                                    "%V": function(date) {
                                        var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7) / 7);
                                        if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
                                            val++
                                        }
                                        if (!val) {
                                            val = 52;
                                            var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
                                            if (dec31 == 4 || dec31 == 5 && __isLeapYear(date.tm_year % 400 - 1)) {
                                                val++
                                            }
                                        } else if (val == 53) {
                                            var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
                                            if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date.tm_year))) val = 1
                                        }
                                        return leadingNulls(val, 2)
                                    },
                                    "%w": function(date) {
                                        return date.tm_wday
                                    },
                                    "%W": function(date) {
                                        var days = date.tm_yday + 7 - (date.tm_wday + 6) % 7;
                                        return leadingNulls(Math.floor(days / 7), 2)
                                    },
                                    "%y": function(date) {
                                        return (date.tm_year + 1900).toString().substring(2)
                                    },
                                    "%Y": function(date) {
                                        return date.tm_year + 1900
                                    },
                                    "%z": function(date) {
                                        var off = date.tm_gmtoff;
                                        var ahead = off >= 0;
                                        off = Math.abs(off) / 60;
                                        off = off / 60 * 100 + off % 60;
                                        return (ahead ? "+" : "-") + String("0000" + off).slice(-4)
                                    },
                                    "%Z": function(date) {
                                        return date.tm_zone
                                    },
                                    "%%": function() {
                                        return "%"
                                    }
                                };
                                pattern = pattern.replace(/%%/g, "\0\0");
                                for (var rule in EXPANSION_RULES_2) {
                                    if (pattern.includes(rule)) {
                                        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date))
                                    }
                                }
                                pattern = pattern.replace(/\0\0/g, "%");
                                var bytes = intArrayFromString(pattern, false);
                                if (bytes.length > maxsize) {
                                    return 0
                                }
                                writeArrayToMemory(bytes, s);
                                return bytes.length - 1
                            }

                            function runAndAbortIfError(func) {
                                try {
                                    return func()
                                } catch (e) {
                                    abort(e)
                                }
                            }

                            function handleException(e) {
                                if (e instanceof ExitStatus || e == "unwind") {
                                    return EXITSTATUS
                                }
                                quit_(1, e)
                            }

                            function callUserCallback(func) {
                                if (ABORT) {
                                    return
                                }
                                try {
                                    func()
                                } catch (e) {
                                    handleException(e)
                                }
                            }

                            function runtimeKeepalivePush() {}

                            function runtimeKeepalivePop() {}
                            var Asyncify = {
                                instrumentWasmImports: function(imports) {
                                    var ASYNCIFY_IMPORTS = ["env.libavjs_wait_reader", "env.invoke_*", "env.emscripten_sleep", "env.emscripten_wget", "env.emscripten_wget_data", "env.emscripten_idb_load", "env.emscripten_idb_store", "env.emscripten_idb_delete", "env.emscripten_idb_exists", "env.emscripten_idb_load_blob", "env.emscripten_idb_store_blob", "env.SDL_Delay", "env.emscripten_scan_registers", "env.emscripten_lazy_load_code", "env.emscripten_fiber_swap", "wasi_snapshot_preview1.fd_sync", "env.__wasi_fd_sync", "env._emval_await", "env._dlopen_js", "env.__asyncjs__*"].map(x => x.split(".")[1]);
                                    for (var x in imports) {
                                        (function(x) {
                                            var original = imports[x];
                                            var sig = original.sig;
                                            if (typeof original == "function") {
                                                var isAsyncifyImport = ASYNCIFY_IMPORTS.indexOf(x) >= 0 || x.startsWith("__asyncjs__")
                                            }
                                        })(x)
                                    }
                                },
                                instrumentWasmExports: function(exports) {
                                    var ret = {};
                                    for (var x in exports) {
                                        (function(x) {
                                            var original = exports[x];
                                            if (typeof original == "function") {
                                                ret[x] = function() {
                                                    Asyncify.exportCallStack.push(x);
                                                    try {
                                                        return original.apply(null, arguments)
                                                    } finally {
                                                        if (!ABORT) {
                                                            var y = Asyncify.exportCallStack.pop();
                                                            assert(y === x);
                                                            Asyncify.maybeStopUnwind()
                                                        }
                                                    }
                                                }
                                            } else {
                                                ret[x] = original
                                            }
                                        })(x)
                                    }
                                    return ret
                                },
                                State: {
                                    Normal: 0,
                                    Unwinding: 1,
                                    Rewinding: 2,
                                    Disabled: 3
                                },
                                state: 0,
                                StackSize: 4096,
                                currData: null,
                                handleSleepReturnValue: 0,
                                exportCallStack: [],
                                callStackNameToId: {},
                                callStackIdToName: {},
                                callStackId: 0,
                                asyncPromiseHandlers: null,
                                sleepCallbacks: [],
                                getCallStackId: function(funcName) {
                                    var id = Asyncify.callStackNameToId[funcName];
                                    if (id === undefined) {
                                        id = Asyncify.callStackId++;
                                        Asyncify.callStackNameToId[funcName] = id;
                                        Asyncify.callStackIdToName[id] = funcName
                                    }
                                    return id
                                },
                                maybeStopUnwind: function() {
                                    if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
                                        Asyncify.state = Asyncify.State.Normal;
                                        runAndAbortIfError(_asyncify_stop_unwind);
                                        if (typeof Fibers != "undefined") {
                                            Fibers.trampoline()
                                        }
                                    }
                                },
                                whenDone: function() {
                                    return new Promise((resolve, reject) => {
                                        Asyncify.asyncPromiseHandlers = {
                                            resolve: resolve,
                                            reject: reject
                                        }
                                    })
                                },
                                allocateData: function() {
                                    var ptr = _malloc(12 + Asyncify.StackSize);
                                    Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
                                    Asyncify.setDataRewindFunc(ptr);
                                    return ptr
                                },
                                setDataHeader: function(ptr, stack, stackSize) {
                                    HEAP32[ptr >> 2] = stack;
                                    HEAP32[ptr + 4 >> 2] = stack + stackSize
                                },
                                setDataRewindFunc: function(ptr) {
                                    var bottomOfCallStack = Asyncify.exportCallStack[0];
                                    var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
                                    HEAP32[ptr + 8 >> 2] = rewindId
                                },
                                getDataRewindFunc: function(ptr) {
                                    var id = HEAP32[ptr + 8 >> 2];
                                    var name = Asyncify.callStackIdToName[id];
                                    var func = Module["asm"][name];
                                    return func
                                },
                                doRewind: function(ptr) {
                                    var start = Asyncify.getDataRewindFunc(ptr);
                                    return start()
                                },
                                handleSleep: function(startAsync) {
                                    if (ABORT) return;
                                    if (Asyncify.state === Asyncify.State.Normal) {
                                        var reachedCallback = false;
                                        var reachedAfterCallback = false;
                                        startAsync(handleSleepReturnValue => {
                                            if (ABORT) return;
                                            Asyncify.handleSleepReturnValue = handleSleepReturnValue || 0;
                                            reachedCallback = true;
                                            if (!reachedAfterCallback) {
                                                return
                                            }
                                            Asyncify.state = Asyncify.State.Rewinding;
                                            runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
                                            if (typeof Browser != "undefined" && Browser.mainLoop.func) {
                                                Browser.mainLoop.resume()
                                            }
                                            var asyncWasmReturnValue, isError = false;
                                            try {
                                                asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData)
                                            } catch (err) {
                                                asyncWasmReturnValue = err;
                                                isError = true
                                            }
                                            var handled = false;
                                            if (!Asyncify.currData) {
                                                var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
                                                if (asyncPromiseHandlers) {
                                                    Asyncify.asyncPromiseHandlers = null;
                                                    (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
                                                    handled = true
                                                }
                                            }
                                            if (isError && !handled) {
                                                throw asyncWasmReturnValue
                                            }
                                        });
                                        reachedAfterCallback = true;
                                        if (!reachedCallback) {
                                            Asyncify.state = Asyncify.State.Unwinding;
                                            Asyncify.currData = Asyncify.allocateData();
                                            if (typeof Browser != "undefined" && Browser.mainLoop.func) {
                                                Browser.mainLoop.pause()
                                            }
                                            runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData))
                                        }
                                    } else if (Asyncify.state === Asyncify.State.Rewinding) {
                                        Asyncify.state = Asyncify.State.Normal;
                                        runAndAbortIfError(_asyncify_stop_rewind);
                                        _free(Asyncify.currData);
                                        Asyncify.currData = null;
                                        Asyncify.sleepCallbacks.forEach(func => callUserCallback(func))
                                    } else {
                                        abort("invalid state: " + Asyncify.state)
                                    }
                                    return Asyncify.handleSleepReturnValue
                                },
                                handleAsync: function(startAsync) {
                                    return Asyncify.handleSleep(wakeUp => {
                                        startAsync().then(wakeUp)
                                    })
                                }
                            };

                            function getCFunc(ident) {
                                var func = Module["_" + ident];
                                return func
                            }

                            function ccall(ident, returnType, argTypes, args, opts) {
                                var toC = {
                                    "string": str => {
                                        var ret = 0;
                                        if (str !== null && str !== undefined && str !== 0) {
                                            var len = (str.length << 2) + 1;
                                            ret = stackAlloc(len);
                                            stringToUTF8(str, ret, len)
                                        }
                                        return ret
                                    },
                                    "array": arr => {
                                        var ret = stackAlloc(arr.length);
                                        writeArrayToMemory(arr, ret);
                                        return ret
                                    }
                                };

                                function convertReturnValue(ret) {
                                    if (returnType === "string") {
                                        return UTF8ToString(ret)
                                    }
                                    if (returnType === "boolean") return Boolean(ret);
                                    return ret
                                }
                                var func = getCFunc(ident);
                                var cArgs = [];
                                var stack = 0;
                                if (args) {
                                    for (var i = 0; i < args.length; i++) {
                                        var converter = toC[argTypes[i]];
                                        if (converter) {
                                            if (stack === 0) stack = stackSave();
                                            cArgs[i] = converter(args[i])
                                        } else {
                                            cArgs[i] = args[i]
                                        }
                                    }
                                }
                                var previousAsync = Asyncify.currData;
                                var ret = func.apply(null, cArgs);

                                function onDone(ret) {
                                    runtimeKeepalivePop();
                                    if (stack !== 0) stackRestore(stack);
                                    return convertReturnValue(ret)
                                }
                                runtimeKeepalivePush();
                                var asyncMode = opts && opts.async;
                                if (Asyncify.currData != previousAsync) {
                                    return Asyncify.whenDone().then(onDone)
                                }
                                ret = onDone(ret);
                                if (asyncMode) return Promise.resolve(ret);
                                return ret
                            }

                            function cwrap(ident, returnType, argTypes, opts) {
                                argTypes = argTypes || [];
                                var numericArgs = argTypes.every(type => type === "number" || type === "boolean");
                                var numericRet = returnType !== "string";
                                if (numericRet && numericArgs && !opts) {
                                    return getCFunc(ident)
                                }
                                return function() {
                                    return ccall(ident, returnType, argTypes, arguments, opts)
                                }
                            }
                            var FSNode = function(parent, name, mode, rdev) {
                                if (!parent) {
                                    parent = this
                                }
                                this.parent = parent;
                                this.mount = parent.mount;
                                this.mounted = null;
                                this.id = FS.nextInode++;
                                this.name = name;
                                this.mode = mode;
                                this.node_ops = {};
                                this.stream_ops = {};
                                this.rdev = rdev
                            };
                            var readMode = 292 | 73;
                            var writeMode = 146;
                            Object.defineProperties(FSNode.prototype, {
                                read: {
                                    get: function() {
                                        return (this.mode & readMode) === readMode
                                    },
                                    set: function(val) {
                                        val ? this.mode |= readMode : this.mode &= ~readMode
                                    }
                                },
                                write: {
                                    get: function() {
                                        return (this.mode & writeMode) === writeMode
                                    },
                                    set: function(val) {
                                        val ? this.mode |= writeMode : this.mode &= ~writeMode
                                    }
                                },
                                isFolder: {
                                    get: function() {
                                        return FS.isDir(this.mode)
                                    }
                                },
                                isDevice: {
                                    get: function() {
                                        return FS.isChrdev(this.mode)
                                    }
                                }
                            });
                            FS.FSNode = FSNode;
                            FS.staticInit();
                            var asmLibraryArg = {
                                "n": ___syscall_dup3,
                                "j": ___syscall_faccessat,
                                "l": ___syscall_fcntl64,
                                "z": ___syscall_fstat64,
                                "s": ___syscall_getdents64,
                                "w": ___syscall_lstat64,
                                "x": ___syscall_newfstatat,
                                "t": ___syscall_openat,
                                "r": ___syscall_renameat,
                                "q": ___syscall_rmdir,
                                "y": ___syscall_stat64,
                                "p": ___syscall_unlinkat,
                                "A": __emscripten_get_now_is_monotonic,
                                "B": __gmtime_js,
                                "C": __localtime_js,
                                "h": __mktime_js,
                                "i": __tzset_js,
                                "a": _abort,
                                "e": _emscripten_date_now,
                                "d": _emscripten_get_now,
                                "o": _emscripten_resize_heap,
                                "u": _environ_get,
                                "v": _environ_sizes_get,
                                "c": _fd_close,
                                "f": _fd_fdstat_get,
                                "k": _fd_read,
                                "m": _fd_seek,
                                "b": _fd_write,
                                "D": libavjs_wait_reader,
                                "g": _strftime
                            };
                            var asm = createWasm();
                            var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
                                return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["F"]).apply(null, arguments)
                            };
                            var _ff_nothing = Module["_ff_nothing"] = function() {
                                return (_ff_nothing = Module["_ff_nothing"] = Module["asm"]["G"]).apply(null, arguments)
                            };
                            var _AVFrame_data_a = Module["_AVFrame_data_a"] = function() {
                                return (_AVFrame_data_a = Module["_AVFrame_data_a"] = Module["asm"]["H"]).apply(null, arguments)
                            };
                            var _AVFrame_data_a_s = Module["_AVFrame_data_a_s"] = function() {
                                return (_AVFrame_data_a_s = Module["_AVFrame_data_a_s"] = Module["asm"]["I"]).apply(null, arguments)
                            };
                            var _AVFrame_format = Module["_AVFrame_format"] = function() {
                                return (_AVFrame_format = Module["_AVFrame_format"] = Module["asm"]["J"]).apply(null, arguments)
                            };
                            var _AVFrame_format_s = Module["_AVFrame_format_s"] = function() {
                                return (_AVFrame_format_s = Module["_AVFrame_format_s"] = Module["asm"]["K"]).apply(null, arguments)
                            };
                            var _AVFrame_height = Module["_AVFrame_height"] = function() {
                                return (_AVFrame_height = Module["_AVFrame_height"] = Module["asm"]["L"]).apply(null, arguments)
                            };
                            var _AVFrame_height_s = Module["_AVFrame_height_s"] = function() {
                                return (_AVFrame_height_s = Module["_AVFrame_height_s"] = Module["asm"]["M"]).apply(null, arguments)
                            };
                            var _AVFrame_key_frame = Module["_AVFrame_key_frame"] = function() {
                                return (_AVFrame_key_frame = Module["_AVFrame_key_frame"] = Module["asm"]["N"]).apply(null, arguments)
                            };
                            var _AVFrame_key_frame_s = Module["_AVFrame_key_frame_s"] = function() {
                                return (_AVFrame_key_frame_s = Module["_AVFrame_key_frame_s"] = Module["asm"]["O"]).apply(null, arguments)
                            };
                            var _AVFrame_linesize_a = Module["_AVFrame_linesize_a"] = function() {
                                return (_AVFrame_linesize_a = Module["_AVFrame_linesize_a"] = Module["asm"]["P"]).apply(null, arguments)
                            };
                            var _AVFrame_linesize_a_s = Module["_AVFrame_linesize_a_s"] = function() {
                                return (_AVFrame_linesize_a_s = Module["_AVFrame_linesize_a_s"] = Module["asm"]["Q"]).apply(null, arguments)
                            };
                            var _AVFrame_nb_samples = Module["_AVFrame_nb_samples"] = function() {
                                return (_AVFrame_nb_samples = Module["_AVFrame_nb_samples"] = Module["asm"]["R"]).apply(null, arguments)
                            };
                            var _AVFrame_nb_samples_s = Module["_AVFrame_nb_samples_s"] = function() {
                                return (_AVFrame_nb_samples_s = Module["_AVFrame_nb_samples_s"] = Module["asm"]["S"]).apply(null, arguments)
                            };
                            var _AVFrame_pict_type = Module["_AVFrame_pict_type"] = function() {
                                return (_AVFrame_pict_type = Module["_AVFrame_pict_type"] = Module["asm"]["T"]).apply(null, arguments)
                            };
                            var _AVFrame_pict_type_s = Module["_AVFrame_pict_type_s"] = function() {
                                return (_AVFrame_pict_type_s = Module["_AVFrame_pict_type_s"] = Module["asm"]["U"]).apply(null, arguments)
                            };
                            var _AVFrame_pts = Module["_AVFrame_pts"] = function() {
                                return (_AVFrame_pts = Module["_AVFrame_pts"] = Module["asm"]["V"]).apply(null, arguments)
                            };
                            var _AVFrame_ptshi = Module["_AVFrame_ptshi"] = function() {
                                return (_AVFrame_ptshi = Module["_AVFrame_ptshi"] = Module["asm"]["W"]).apply(null, arguments)
                            };
                            var _AVFrame_pts_s = Module["_AVFrame_pts_s"] = function() {
                                return (_AVFrame_pts_s = Module["_AVFrame_pts_s"] = Module["asm"]["X"]).apply(null, arguments)
                            };
                            var _AVFrame_ptshi_s = Module["_AVFrame_ptshi_s"] = function() {
                                return (_AVFrame_ptshi_s = Module["_AVFrame_ptshi_s"] = Module["asm"]["Y"]).apply(null, arguments)
                            };
                            var _AVFrame_sample_rate = Module["_AVFrame_sample_rate"] = function() {
                                return (_AVFrame_sample_rate = Module["_AVFrame_sample_rate"] = Module["asm"]["Z"]).apply(null, arguments)
                            };
                            var _AVFrame_sample_rate_s = Module["_AVFrame_sample_rate_s"] = function() {
                                return (_AVFrame_sample_rate_s = Module["_AVFrame_sample_rate_s"] = Module["asm"]["_"]).apply(null, arguments)
                            };
                            var _AVFrame_width = Module["_AVFrame_width"] = function() {
                                return (_AVFrame_width = Module["_AVFrame_width"] = Module["asm"]["$"]).apply(null, arguments)
                            };
                            var _AVFrame_width_s = Module["_AVFrame_width_s"] = function() {
                                return (_AVFrame_width_s = Module["_AVFrame_width_s"] = Module["asm"]["aa"]).apply(null, arguments)
                            };
                            var _AVFrame_channel_layoutmask_s = Module["_AVFrame_channel_layoutmask_s"] = function() {
                                return (_AVFrame_channel_layoutmask_s = Module["_AVFrame_channel_layoutmask_s"] = Module["asm"]["ba"]).apply(null, arguments)
                            };
                            var _AVFrame_channel_layoutmask = Module["_AVFrame_channel_layoutmask"] = function() {
                                return (_AVFrame_channel_layoutmask = Module["_AVFrame_channel_layoutmask"] = Module["asm"]["ca"]).apply(null, arguments)
                            };
                            var _AVFrame_channels = Module["_AVFrame_channels"] = function() {
                                return (_AVFrame_channels = Module["_AVFrame_channels"] = Module["asm"]["da"]).apply(null, arguments)
                            };
                            var _AVFrame_channels_s = Module["_AVFrame_channels_s"] = function() {
                                return (_AVFrame_channels_s = Module["_AVFrame_channels_s"] = Module["asm"]["ea"]).apply(null, arguments)
                            };
                            var _AVFrame_ch_layout_nb_channels = Module["_AVFrame_ch_layout_nb_channels"] = function() {
                                return (_AVFrame_ch_layout_nb_channels = Module["_AVFrame_ch_layout_nb_channels"] = Module["asm"]["fa"]).apply(null, arguments)
                            };
                            var _AVFrame_ch_layout_nb_channels_s = Module["_AVFrame_ch_layout_nb_channels_s"] = function() {
                                return (_AVFrame_ch_layout_nb_channels_s = Module["_AVFrame_ch_layout_nb_channels_s"] = Module["asm"]["ga"]).apply(null, arguments)
                            };
                            var _AVFrame_channel_layout = Module["_AVFrame_channel_layout"] = function() {
                                return (_AVFrame_channel_layout = Module["_AVFrame_channel_layout"] = Module["asm"]["ha"]).apply(null, arguments)
                            };
                            var _AVFrame_channel_layouthi = Module["_AVFrame_channel_layouthi"] = function() {
                                return (_AVFrame_channel_layouthi = Module["_AVFrame_channel_layouthi"] = Module["asm"]["ia"]).apply(null, arguments)
                            };
                            var _AVFrame_channel_layout_s = Module["_AVFrame_channel_layout_s"] = function() {
                                return (_AVFrame_channel_layout_s = Module["_AVFrame_channel_layout_s"] = Module["asm"]["ja"]).apply(null, arguments)
                            };
                            var _AVFrame_channel_layouthi_s = Module["_AVFrame_channel_layouthi_s"] = function() {
                                return (_AVFrame_channel_layouthi_s = Module["_AVFrame_channel_layouthi_s"] = Module["asm"]["ka"]).apply(null, arguments)
                            };
                            var _AVFrame_sample_aspect_ratio_num = Module["_AVFrame_sample_aspect_ratio_num"] = function() {
                                return (_AVFrame_sample_aspect_ratio_num = Module["_AVFrame_sample_aspect_ratio_num"] = Module["asm"]["la"]).apply(null, arguments)
                            };
                            var _AVFrame_sample_aspect_ratio_den = Module["_AVFrame_sample_aspect_ratio_den"] = function() {
                                return (_AVFrame_sample_aspect_ratio_den = Module["_AVFrame_sample_aspect_ratio_den"] = Module["asm"]["ma"]).apply(null, arguments)
                            };
                            var _AVFrame_sample_aspect_ratio_s = Module["_AVFrame_sample_aspect_ratio_s"] = function() {
                                return (_AVFrame_sample_aspect_ratio_s = Module["_AVFrame_sample_aspect_ratio_s"] = Module["asm"]["na"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_flags = Module["_AVPixFmtDescriptor_flags"] = function() {
                                return (_AVPixFmtDescriptor_flags = Module["_AVPixFmtDescriptor_flags"] = Module["asm"]["oa"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_flags_s = Module["_AVPixFmtDescriptor_flags_s"] = function() {
                                return (_AVPixFmtDescriptor_flags_s = Module["_AVPixFmtDescriptor_flags_s"] = Module["asm"]["pa"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_nb_components = Module["_AVPixFmtDescriptor_nb_components"] = function() {
                                return (_AVPixFmtDescriptor_nb_components = Module["_AVPixFmtDescriptor_nb_components"] = Module["asm"]["qa"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_nb_components_s = Module["_AVPixFmtDescriptor_nb_components_s"] = function() {
                                return (_AVPixFmtDescriptor_nb_components_s = Module["_AVPixFmtDescriptor_nb_components_s"] = Module["asm"]["ra"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_log2_chroma_h = Module["_AVPixFmtDescriptor_log2_chroma_h"] = function() {
                                return (_AVPixFmtDescriptor_log2_chroma_h = Module["_AVPixFmtDescriptor_log2_chroma_h"] = Module["asm"]["sa"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_log2_chroma_h_s = Module["_AVPixFmtDescriptor_log2_chroma_h_s"] = function() {
                                return (_AVPixFmtDescriptor_log2_chroma_h_s = Module["_AVPixFmtDescriptor_log2_chroma_h_s"] = Module["asm"]["ta"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_log2_chroma_w = Module["_AVPixFmtDescriptor_log2_chroma_w"] = function() {
                                return (_AVPixFmtDescriptor_log2_chroma_w = Module["_AVPixFmtDescriptor_log2_chroma_w"] = Module["asm"]["ua"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_log2_chroma_w_s = Module["_AVPixFmtDescriptor_log2_chroma_w_s"] = function() {
                                return (_AVPixFmtDescriptor_log2_chroma_w_s = Module["_AVPixFmtDescriptor_log2_chroma_w_s"] = Module["asm"]["va"]).apply(null, arguments)
                            };
                            var _AVPixFmtDescriptor_comp_depth = Module["_AVPixFmtDescriptor_comp_depth"] = function() {
                                return (_AVPixFmtDescriptor_comp_depth = Module["_AVPixFmtDescriptor_comp_depth"] = Module["asm"]["wa"]).apply(null, arguments)
                            };
                            var _av_opt_set_int_list_js = Module["_av_opt_set_int_list_js"] = function() {
                                return (_av_opt_set_int_list_js = Module["_av_opt_set_int_list_js"] = Module["asm"]["xa"]).apply(null, arguments)
                            };
                            var _AVCodec_sample_fmts = Module["_AVCodec_sample_fmts"] = function() {
                                return (_AVCodec_sample_fmts = Module["_AVCodec_sample_fmts"] = Module["asm"]["ya"]).apply(null, arguments)
                            };
                            var _AVCodec_sample_fmts_s = Module["_AVCodec_sample_fmts_s"] = function() {
                                return (_AVCodec_sample_fmts_s = Module["_AVCodec_sample_fmts_s"] = Module["asm"]["za"]).apply(null, arguments)
                            };
                            var _AVCodec_sample_fmts_a = Module["_AVCodec_sample_fmts_a"] = function() {
                                return (_AVCodec_sample_fmts_a = Module["_AVCodec_sample_fmts_a"] = Module["asm"]["Aa"]).apply(null, arguments)
                            };
                            var _AVCodec_sample_fmts_a_s = Module["_AVCodec_sample_fmts_a_s"] = function() {
                                return (_AVCodec_sample_fmts_a_s = Module["_AVCodec_sample_fmts_a_s"] = Module["asm"]["Ba"]).apply(null, arguments)
                            };
                            var _AVCodec_supported_samplerates = Module["_AVCodec_supported_samplerates"] = function() {
                                return (_AVCodec_supported_samplerates = Module["_AVCodec_supported_samplerates"] = Module["asm"]["Ca"]).apply(null, arguments)
                            };
                            var _AVCodec_supported_samplerates_s = Module["_AVCodec_supported_samplerates_s"] = function() {
                                return (_AVCodec_supported_samplerates_s = Module["_AVCodec_supported_samplerates_s"] = Module["asm"]["Da"]).apply(null, arguments)
                            };
                            var _AVCodec_supported_samplerates_a = Module["_AVCodec_supported_samplerates_a"] = function() {
                                return (_AVCodec_supported_samplerates_a = Module["_AVCodec_supported_samplerates_a"] = Module["asm"]["Ea"]).apply(null, arguments)
                            };
                            var _AVCodec_supported_samplerates_a_s = Module["_AVCodec_supported_samplerates_a_s"] = function() {
                                return (_AVCodec_supported_samplerates_a_s = Module["_AVCodec_supported_samplerates_a_s"] = Module["asm"]["Fa"]).apply(null, arguments)
                            };
                            var _AVCodec_type = Module["_AVCodec_type"] = function() {
                                return (_AVCodec_type = Module["_AVCodec_type"] = Module["asm"]["Ga"]).apply(null, arguments)
                            };
                            var _AVCodec_type_s = Module["_AVCodec_type_s"] = function() {
                                return (_AVCodec_type_s = Module["_AVCodec_type_s"] = Module["asm"]["Ha"]).apply(null, arguments)
                            };
                            var _AVCodecContext_codec_id = Module["_AVCodecContext_codec_id"] = function() {
                                return (_AVCodecContext_codec_id = Module["_AVCodecContext_codec_id"] = Module["asm"]["Ia"]).apply(null, arguments)
                            };
                            var _AVCodecContext_codec_id_s = Module["_AVCodecContext_codec_id_s"] = function() {
                                return (_AVCodecContext_codec_id_s = Module["_AVCodecContext_codec_id_s"] = Module["asm"]["Ja"]).apply(null, arguments)
                            };
                            var _AVCodecContext_codec_type = Module["_AVCodecContext_codec_type"] = function() {
                                return (_AVCodecContext_codec_type = Module["_AVCodecContext_codec_type"] = Module["asm"]["Ka"]).apply(null, arguments)
                            };
                            var _AVCodecContext_codec_type_s = Module["_AVCodecContext_codec_type_s"] = function() {
                                return (_AVCodecContext_codec_type_s = Module["_AVCodecContext_codec_type_s"] = Module["asm"]["La"]).apply(null, arguments)
                            };
                            var _AVCodecContext_bit_rate = Module["_AVCodecContext_bit_rate"] = function() {
                                return (_AVCodecContext_bit_rate = Module["_AVCodecContext_bit_rate"] = Module["asm"]["Ma"]).apply(null, arguments)
                            };
                            var _AVCodecContext_bit_ratehi = Module["_AVCodecContext_bit_ratehi"] = function() {
                                return (_AVCodecContext_bit_ratehi = Module["_AVCodecContext_bit_ratehi"] = Module["asm"]["Na"]).apply(null, arguments)
                            };
                            var _AVCodecContext_bit_rate_s = Module["_AVCodecContext_bit_rate_s"] = function() {
                                return (_AVCodecContext_bit_rate_s = Module["_AVCodecContext_bit_rate_s"] = Module["asm"]["Oa"]).apply(null, arguments)
                            };
                            var _AVCodecContext_bit_ratehi_s = Module["_AVCodecContext_bit_ratehi_s"] = function() {
                                return (_AVCodecContext_bit_ratehi_s = Module["_AVCodecContext_bit_ratehi_s"] = Module["asm"]["Pa"]).apply(null, arguments)
                            };
                            var _AVCodecContext_extradata = Module["_AVCodecContext_extradata"] = function() {
                                return (_AVCodecContext_extradata = Module["_AVCodecContext_extradata"] = Module["asm"]["Qa"]).apply(null, arguments)
                            };
                            var _AVCodecContext_extradata_s = Module["_AVCodecContext_extradata_s"] = function() {
                                return (_AVCodecContext_extradata_s = Module["_AVCodecContext_extradata_s"] = Module["asm"]["Ra"]).apply(null, arguments)
                            };
                            var _AVCodecContext_extradata_size = Module["_AVCodecContext_extradata_size"] = function() {
                                return (_AVCodecContext_extradata_size = Module["_AVCodecContext_extradata_size"] = Module["asm"]["Sa"]).apply(null, arguments)
                            };
                            var _AVCodecContext_extradata_size_s = Module["_AVCodecContext_extradata_size_s"] = function() {
                                return (_AVCodecContext_extradata_size_s = Module["_AVCodecContext_extradata_size_s"] = Module["asm"]["Ta"]).apply(null, arguments)
                            };
                            var _AVCodecContext_frame_size = Module["_AVCodecContext_frame_size"] = function() {
                                return (_AVCodecContext_frame_size = Module["_AVCodecContext_frame_size"] = Module["asm"]["Ua"]).apply(null, arguments)
                            };
                            var _AVCodecContext_frame_size_s = Module["_AVCodecContext_frame_size_s"] = function() {
                                return (_AVCodecContext_frame_size_s = Module["_AVCodecContext_frame_size_s"] = Module["asm"]["Va"]).apply(null, arguments)
                            };
                            var _AVCodecContext_gop_size = Module["_AVCodecContext_gop_size"] = function() {
                                return (_AVCodecContext_gop_size = Module["_AVCodecContext_gop_size"] = Module["asm"]["Wa"]).apply(null, arguments)
                            };
                            var _AVCodecContext_gop_size_s = Module["_AVCodecContext_gop_size_s"] = function() {
                                return (_AVCodecContext_gop_size_s = Module["_AVCodecContext_gop_size_s"] = Module["asm"]["Xa"]).apply(null, arguments)
                            };
                            var _AVCodecContext_height = Module["_AVCodecContext_height"] = function() {
                                return (_AVCodecContext_height = Module["_AVCodecContext_height"] = Module["asm"]["Ya"]).apply(null, arguments)
                            };
                            var _AVCodecContext_height_s = Module["_AVCodecContext_height_s"] = function() {
                                return (_AVCodecContext_height_s = Module["_AVCodecContext_height_s"] = Module["asm"]["Za"]).apply(null, arguments)
                            };
                            var _AVCodecContext_keyint_min = Module["_AVCodecContext_keyint_min"] = function() {
                                return (_AVCodecContext_keyint_min = Module["_AVCodecContext_keyint_min"] = Module["asm"]["_a"]).apply(null, arguments)
                            };
                            var _AVCodecContext_keyint_min_s = Module["_AVCodecContext_keyint_min_s"] = function() {
                                return (_AVCodecContext_keyint_min_s = Module["_AVCodecContext_keyint_min_s"] = Module["asm"]["$a"]).apply(null, arguments)
                            };
                            var _AVCodecContext_level = Module["_AVCodecContext_level"] = function() {
                                return (_AVCodecContext_level = Module["_AVCodecContext_level"] = Module["asm"]["ab"]).apply(null, arguments)
                            };
                            var _AVCodecContext_level_s = Module["_AVCodecContext_level_s"] = function() {
                                return (_AVCodecContext_level_s = Module["_AVCodecContext_level_s"] = Module["asm"]["bb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_max_b_frames = Module["_AVCodecContext_max_b_frames"] = function() {
                                return (_AVCodecContext_max_b_frames = Module["_AVCodecContext_max_b_frames"] = Module["asm"]["cb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_max_b_frames_s = Module["_AVCodecContext_max_b_frames_s"] = function() {
                                return (_AVCodecContext_max_b_frames_s = Module["_AVCodecContext_max_b_frames_s"] = Module["asm"]["db"]).apply(null, arguments)
                            };
                            var _AVCodecContext_pix_fmt = Module["_AVCodecContext_pix_fmt"] = function() {
                                return (_AVCodecContext_pix_fmt = Module["_AVCodecContext_pix_fmt"] = Module["asm"]["eb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_pix_fmt_s = Module["_AVCodecContext_pix_fmt_s"] = function() {
                                return (_AVCodecContext_pix_fmt_s = Module["_AVCodecContext_pix_fmt_s"] = Module["asm"]["fb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_profile = Module["_AVCodecContext_profile"] = function() {
                                return (_AVCodecContext_profile = Module["_AVCodecContext_profile"] = Module["asm"]["gb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_profile_s = Module["_AVCodecContext_profile_s"] = function() {
                                return (_AVCodecContext_profile_s = Module["_AVCodecContext_profile_s"] = Module["asm"]["hb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_rc_max_rate = Module["_AVCodecContext_rc_max_rate"] = function() {
                                return (_AVCodecContext_rc_max_rate = Module["_AVCodecContext_rc_max_rate"] = Module["asm"]["ib"]).apply(null, arguments)
                            };
                            var _AVCodecContext_rc_max_ratehi = Module["_AVCodecContext_rc_max_ratehi"] = function() {
                                return (_AVCodecContext_rc_max_ratehi = Module["_AVCodecContext_rc_max_ratehi"] = Module["asm"]["jb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_rc_max_rate_s = Module["_AVCodecContext_rc_max_rate_s"] = function() {
                                return (_AVCodecContext_rc_max_rate_s = Module["_AVCodecContext_rc_max_rate_s"] = Module["asm"]["kb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_rc_max_ratehi_s = Module["_AVCodecContext_rc_max_ratehi_s"] = function() {
                                return (_AVCodecContext_rc_max_ratehi_s = Module["_AVCodecContext_rc_max_ratehi_s"] = Module["asm"]["lb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_rc_min_rate = Module["_AVCodecContext_rc_min_rate"] = function() {
                                return (_AVCodecContext_rc_min_rate = Module["_AVCodecContext_rc_min_rate"] = Module["asm"]["mb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_rc_min_ratehi = Module["_AVCodecContext_rc_min_ratehi"] = function() {
                                return (_AVCodecContext_rc_min_ratehi = Module["_AVCodecContext_rc_min_ratehi"] = Module["asm"]["nb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_rc_min_rate_s = Module["_AVCodecContext_rc_min_rate_s"] = function() {
                                return (_AVCodecContext_rc_min_rate_s = Module["_AVCodecContext_rc_min_rate_s"] = Module["asm"]["ob"]).apply(null, arguments)
                            };
                            var _AVCodecContext_rc_min_ratehi_s = Module["_AVCodecContext_rc_min_ratehi_s"] = function() {
                                return (_AVCodecContext_rc_min_ratehi_s = Module["_AVCodecContext_rc_min_ratehi_s"] = Module["asm"]["pb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_fmt = Module["_AVCodecContext_sample_fmt"] = function() {
                                return (_AVCodecContext_sample_fmt = Module["_AVCodecContext_sample_fmt"] = Module["asm"]["qb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_fmt_s = Module["_AVCodecContext_sample_fmt_s"] = function() {
                                return (_AVCodecContext_sample_fmt_s = Module["_AVCodecContext_sample_fmt_s"] = Module["asm"]["rb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_rate = Module["_AVCodecContext_sample_rate"] = function() {
                                return (_AVCodecContext_sample_rate = Module["_AVCodecContext_sample_rate"] = Module["asm"]["sb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_rate_s = Module["_AVCodecContext_sample_rate_s"] = function() {
                                return (_AVCodecContext_sample_rate_s = Module["_AVCodecContext_sample_rate_s"] = Module["asm"]["tb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_qmax = Module["_AVCodecContext_qmax"] = function() {
                                return (_AVCodecContext_qmax = Module["_AVCodecContext_qmax"] = Module["asm"]["ub"]).apply(null, arguments)
                            };
                            var _AVCodecContext_qmax_s = Module["_AVCodecContext_qmax_s"] = function() {
                                return (_AVCodecContext_qmax_s = Module["_AVCodecContext_qmax_s"] = Module["asm"]["vb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_qmin = Module["_AVCodecContext_qmin"] = function() {
                                return (_AVCodecContext_qmin = Module["_AVCodecContext_qmin"] = Module["asm"]["wb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_qmin_s = Module["_AVCodecContext_qmin_s"] = function() {
                                return (_AVCodecContext_qmin_s = Module["_AVCodecContext_qmin_s"] = Module["asm"]["xb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_width = Module["_AVCodecContext_width"] = function() {
                                return (_AVCodecContext_width = Module["_AVCodecContext_width"] = Module["asm"]["yb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_width_s = Module["_AVCodecContext_width_s"] = function() {
                                return (_AVCodecContext_width_s = Module["_AVCodecContext_width_s"] = Module["asm"]["zb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_channel_layoutmask_s = Module["_AVCodecContext_channel_layoutmask_s"] = function() {
                                return (_AVCodecContext_channel_layoutmask_s = Module["_AVCodecContext_channel_layoutmask_s"] = Module["asm"]["Ab"]).apply(null, arguments)
                            };
                            var _AVCodecContext_channel_layoutmask = Module["_AVCodecContext_channel_layoutmask"] = function() {
                                return (_AVCodecContext_channel_layoutmask = Module["_AVCodecContext_channel_layoutmask"] = Module["asm"]["Bb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_channels = Module["_AVCodecContext_channels"] = function() {
                                return (_AVCodecContext_channels = Module["_AVCodecContext_channels"] = Module["asm"]["Cb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_channels_s = Module["_AVCodecContext_channels_s"] = function() {
                                return (_AVCodecContext_channels_s = Module["_AVCodecContext_channels_s"] = Module["asm"]["Db"]).apply(null, arguments)
                            };
                            var _AVCodecContext_ch_layout_nb_channels = Module["_AVCodecContext_ch_layout_nb_channels"] = function() {
                                return (_AVCodecContext_ch_layout_nb_channels = Module["_AVCodecContext_ch_layout_nb_channels"] = Module["asm"]["Eb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_ch_layout_nb_channels_s = Module["_AVCodecContext_ch_layout_nb_channels_s"] = function() {
                                return (_AVCodecContext_ch_layout_nb_channels_s = Module["_AVCodecContext_ch_layout_nb_channels_s"] = Module["asm"]["Fb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_channel_layout = Module["_AVCodecContext_channel_layout"] = function() {
                                return (_AVCodecContext_channel_layout = Module["_AVCodecContext_channel_layout"] = Module["asm"]["Gb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_channel_layouthi = Module["_AVCodecContext_channel_layouthi"] = function() {
                                return (_AVCodecContext_channel_layouthi = Module["_AVCodecContext_channel_layouthi"] = Module["asm"]["Hb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_channel_layout_s = Module["_AVCodecContext_channel_layout_s"] = function() {
                                return (_AVCodecContext_channel_layout_s = Module["_AVCodecContext_channel_layout_s"] = Module["asm"]["Ib"]).apply(null, arguments)
                            };
                            var _AVCodecContext_channel_layouthi_s = Module["_AVCodecContext_channel_layouthi_s"] = function() {
                                return (_AVCodecContext_channel_layouthi_s = Module["_AVCodecContext_channel_layouthi_s"] = Module["asm"]["Jb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_framerate_num = Module["_AVCodecContext_framerate_num"] = function() {
                                return (_AVCodecContext_framerate_num = Module["_AVCodecContext_framerate_num"] = Module["asm"]["Kb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_framerate_den = Module["_AVCodecContext_framerate_den"] = function() {
                                return (_AVCodecContext_framerate_den = Module["_AVCodecContext_framerate_den"] = Module["asm"]["Lb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_framerate_num_s = Module["_AVCodecContext_framerate_num_s"] = function() {
                                return (_AVCodecContext_framerate_num_s = Module["_AVCodecContext_framerate_num_s"] = Module["asm"]["Mb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_framerate_den_s = Module["_AVCodecContext_framerate_den_s"] = function() {
                                return (_AVCodecContext_framerate_den_s = Module["_AVCodecContext_framerate_den_s"] = Module["asm"]["Nb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_framerate_s = Module["_AVCodecContext_framerate_s"] = function() {
                                return (_AVCodecContext_framerate_s = Module["_AVCodecContext_framerate_s"] = Module["asm"]["Ob"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_aspect_ratio_num = Module["_AVCodecContext_sample_aspect_ratio_num"] = function() {
                                return (_AVCodecContext_sample_aspect_ratio_num = Module["_AVCodecContext_sample_aspect_ratio_num"] = Module["asm"]["Pb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_aspect_ratio_den = Module["_AVCodecContext_sample_aspect_ratio_den"] = function() {
                                return (_AVCodecContext_sample_aspect_ratio_den = Module["_AVCodecContext_sample_aspect_ratio_den"] = Module["asm"]["Qb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_aspect_ratio_num_s = Module["_AVCodecContext_sample_aspect_ratio_num_s"] = function() {
                                return (_AVCodecContext_sample_aspect_ratio_num_s = Module["_AVCodecContext_sample_aspect_ratio_num_s"] = Module["asm"]["Rb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_aspect_ratio_den_s = Module["_AVCodecContext_sample_aspect_ratio_den_s"] = function() {
                                return (_AVCodecContext_sample_aspect_ratio_den_s = Module["_AVCodecContext_sample_aspect_ratio_den_s"] = Module["asm"]["Sb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_sample_aspect_ratio_s = Module["_AVCodecContext_sample_aspect_ratio_s"] = function() {
                                return (_AVCodecContext_sample_aspect_ratio_s = Module["_AVCodecContext_sample_aspect_ratio_s"] = Module["asm"]["Tb"]).apply(null, arguments)
                            };
                            var _AVCodecContext_time_base_s = Module["_AVCodecContext_time_base_s"] = function() {
                                return (_AVCodecContext_time_base_s = Module["_AVCodecContext_time_base_s"] = Module["asm"]["Ub"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_id = Module["_AVCodecDescriptor_id"] = function() {
                                return (_AVCodecDescriptor_id = Module["_AVCodecDescriptor_id"] = Module["asm"]["Vb"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_id_s = Module["_AVCodecDescriptor_id_s"] = function() {
                                return (_AVCodecDescriptor_id_s = Module["_AVCodecDescriptor_id_s"] = Module["asm"]["Wb"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_long_name = Module["_AVCodecDescriptor_long_name"] = function() {
                                return (_AVCodecDescriptor_long_name = Module["_AVCodecDescriptor_long_name"] = Module["asm"]["Xb"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_long_name_s = Module["_AVCodecDescriptor_long_name_s"] = function() {
                                return (_AVCodecDescriptor_long_name_s = Module["_AVCodecDescriptor_long_name_s"] = Module["asm"]["Yb"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_mime_types_a = Module["_AVCodecDescriptor_mime_types_a"] = function() {
                                return (_AVCodecDescriptor_mime_types_a = Module["_AVCodecDescriptor_mime_types_a"] = Module["asm"]["Zb"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_mime_types_a_s = Module["_AVCodecDescriptor_mime_types_a_s"] = function() {
                                return (_AVCodecDescriptor_mime_types_a_s = Module["_AVCodecDescriptor_mime_types_a_s"] = Module["asm"]["_b"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_name = Module["_AVCodecDescriptor_name"] = function() {
                                return (_AVCodecDescriptor_name = Module["_AVCodecDescriptor_name"] = Module["asm"]["$b"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_name_s = Module["_AVCodecDescriptor_name_s"] = function() {
                                return (_AVCodecDescriptor_name_s = Module["_AVCodecDescriptor_name_s"] = Module["asm"]["ac"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_props = Module["_AVCodecDescriptor_props"] = function() {
                                return (_AVCodecDescriptor_props = Module["_AVCodecDescriptor_props"] = Module["asm"]["bc"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_props_s = Module["_AVCodecDescriptor_props_s"] = function() {
                                return (_AVCodecDescriptor_props_s = Module["_AVCodecDescriptor_props_s"] = Module["asm"]["cc"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_type = Module["_AVCodecDescriptor_type"] = function() {
                                return (_AVCodecDescriptor_type = Module["_AVCodecDescriptor_type"] = Module["asm"]["dc"]).apply(null, arguments)
                            };
                            var _AVCodecDescriptor_type_s = Module["_AVCodecDescriptor_type_s"] = function() {
                                return (_AVCodecDescriptor_type_s = Module["_AVCodecDescriptor_type_s"] = Module["asm"]["ec"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_codec_id = Module["_AVCodecParameters_codec_id"] = function() {
                                return (_AVCodecParameters_codec_id = Module["_AVCodecParameters_codec_id"] = Module["asm"]["fc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_codec_id_s = Module["_AVCodecParameters_codec_id_s"] = function() {
                                return (_AVCodecParameters_codec_id_s = Module["_AVCodecParameters_codec_id_s"] = Module["asm"]["gc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_codec_tag = Module["_AVCodecParameters_codec_tag"] = function() {
                                return (_AVCodecParameters_codec_tag = Module["_AVCodecParameters_codec_tag"] = Module["asm"]["hc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_codec_tag_s = Module["_AVCodecParameters_codec_tag_s"] = function() {
                                return (_AVCodecParameters_codec_tag_s = Module["_AVCodecParameters_codec_tag_s"] = Module["asm"]["ic"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_codec_type = Module["_AVCodecParameters_codec_type"] = function() {
                                return (_AVCodecParameters_codec_type = Module["_AVCodecParameters_codec_type"] = Module["asm"]["jc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_codec_type_s = Module["_AVCodecParameters_codec_type_s"] = function() {
                                return (_AVCodecParameters_codec_type_s = Module["_AVCodecParameters_codec_type_s"] = Module["asm"]["kc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_extradata = Module["_AVCodecParameters_extradata"] = function() {
                                return (_AVCodecParameters_extradata = Module["_AVCodecParameters_extradata"] = Module["asm"]["lc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_extradata_s = Module["_AVCodecParameters_extradata_s"] = function() {
                                return (_AVCodecParameters_extradata_s = Module["_AVCodecParameters_extradata_s"] = Module["asm"]["mc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_extradata_size = Module["_AVCodecParameters_extradata_size"] = function() {
                                return (_AVCodecParameters_extradata_size = Module["_AVCodecParameters_extradata_size"] = Module["asm"]["nc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_extradata_size_s = Module["_AVCodecParameters_extradata_size_s"] = function() {
                                return (_AVCodecParameters_extradata_size_s = Module["_AVCodecParameters_extradata_size_s"] = Module["asm"]["oc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_format = Module["_AVCodecParameters_format"] = function() {
                                return (_AVCodecParameters_format = Module["_AVCodecParameters_format"] = Module["asm"]["pc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_format_s = Module["_AVCodecParameters_format_s"] = function() {
                                return (_AVCodecParameters_format_s = Module["_AVCodecParameters_format_s"] = Module["asm"]["qc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_bit_rate = Module["_AVCodecParameters_bit_rate"] = function() {
                                return (_AVCodecParameters_bit_rate = Module["_AVCodecParameters_bit_rate"] = Module["asm"]["rc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_bit_rate_s = Module["_AVCodecParameters_bit_rate_s"] = function() {
                                return (_AVCodecParameters_bit_rate_s = Module["_AVCodecParameters_bit_rate_s"] = Module["asm"]["sc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_profile = Module["_AVCodecParameters_profile"] = function() {
                                return (_AVCodecParameters_profile = Module["_AVCodecParameters_profile"] = Module["asm"]["tc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_profile_s = Module["_AVCodecParameters_profile_s"] = function() {
                                return (_AVCodecParameters_profile_s = Module["_AVCodecParameters_profile_s"] = Module["asm"]["uc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_level = Module["_AVCodecParameters_level"] = function() {
                                return (_AVCodecParameters_level = Module["_AVCodecParameters_level"] = Module["asm"]["vc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_level_s = Module["_AVCodecParameters_level_s"] = function() {
                                return (_AVCodecParameters_level_s = Module["_AVCodecParameters_level_s"] = Module["asm"]["wc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_width = Module["_AVCodecParameters_width"] = function() {
                                return (_AVCodecParameters_width = Module["_AVCodecParameters_width"] = Module["asm"]["xc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_width_s = Module["_AVCodecParameters_width_s"] = function() {
                                return (_AVCodecParameters_width_s = Module["_AVCodecParameters_width_s"] = Module["asm"]["yc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_height = Module["_AVCodecParameters_height"] = function() {
                                return (_AVCodecParameters_height = Module["_AVCodecParameters_height"] = Module["asm"]["zc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_height_s = Module["_AVCodecParameters_height_s"] = function() {
                                return (_AVCodecParameters_height_s = Module["_AVCodecParameters_height_s"] = Module["asm"]["Ac"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_color_range = Module["_AVCodecParameters_color_range"] = function() {
                                return (_AVCodecParameters_color_range = Module["_AVCodecParameters_color_range"] = Module["asm"]["Bc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_color_range_s = Module["_AVCodecParameters_color_range_s"] = function() {
                                return (_AVCodecParameters_color_range_s = Module["_AVCodecParameters_color_range_s"] = Module["asm"]["Cc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_color_primaries = Module["_AVCodecParameters_color_primaries"] = function() {
                                return (_AVCodecParameters_color_primaries = Module["_AVCodecParameters_color_primaries"] = Module["asm"]["Dc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_color_primaries_s = Module["_AVCodecParameters_color_primaries_s"] = function() {
                                return (_AVCodecParameters_color_primaries_s = Module["_AVCodecParameters_color_primaries_s"] = Module["asm"]["Ec"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_color_trc = Module["_AVCodecParameters_color_trc"] = function() {
                                return (_AVCodecParameters_color_trc = Module["_AVCodecParameters_color_trc"] = Module["asm"]["Fc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_color_trc_s = Module["_AVCodecParameters_color_trc_s"] = function() {
                                return (_AVCodecParameters_color_trc_s = Module["_AVCodecParameters_color_trc_s"] = Module["asm"]["Gc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_color_space = Module["_AVCodecParameters_color_space"] = function() {
                                return (_AVCodecParameters_color_space = Module["_AVCodecParameters_color_space"] = Module["asm"]["Hc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_color_space_s = Module["_AVCodecParameters_color_space_s"] = function() {
                                return (_AVCodecParameters_color_space_s = Module["_AVCodecParameters_color_space_s"] = Module["asm"]["Ic"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_chroma_location = Module["_AVCodecParameters_chroma_location"] = function() {
                                return (_AVCodecParameters_chroma_location = Module["_AVCodecParameters_chroma_location"] = Module["asm"]["Jc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_chroma_location_s = Module["_AVCodecParameters_chroma_location_s"] = function() {
                                return (_AVCodecParameters_chroma_location_s = Module["_AVCodecParameters_chroma_location_s"] = Module["asm"]["Kc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_sample_rate = Module["_AVCodecParameters_sample_rate"] = function() {
                                return (_AVCodecParameters_sample_rate = Module["_AVCodecParameters_sample_rate"] = Module["asm"]["Lc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_sample_rate_s = Module["_AVCodecParameters_sample_rate_s"] = function() {
                                return (_AVCodecParameters_sample_rate_s = Module["_AVCodecParameters_sample_rate_s"] = Module["asm"]["Mc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_channel_layoutmask_s = Module["_AVCodecParameters_channel_layoutmask_s"] = function() {
                                return (_AVCodecParameters_channel_layoutmask_s = Module["_AVCodecParameters_channel_layoutmask_s"] = Module["asm"]["Nc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_channel_layoutmask = Module["_AVCodecParameters_channel_layoutmask"] = function() {
                                return (_AVCodecParameters_channel_layoutmask = Module["_AVCodecParameters_channel_layoutmask"] = Module["asm"]["Oc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_channels = Module["_AVCodecParameters_channels"] = function() {
                                return (_AVCodecParameters_channels = Module["_AVCodecParameters_channels"] = Module["asm"]["Pc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_channels_s = Module["_AVCodecParameters_channels_s"] = function() {
                                return (_AVCodecParameters_channels_s = Module["_AVCodecParameters_channels_s"] = Module["asm"]["Qc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_ch_layout_nb_channels = Module["_AVCodecParameters_ch_layout_nb_channels"] = function() {
                                return (_AVCodecParameters_ch_layout_nb_channels = Module["_AVCodecParameters_ch_layout_nb_channels"] = Module["asm"]["Rc"]).apply(null, arguments)
                            };
                            var _AVCodecParameters_ch_layout_nb_channels_s = Module["_AVCodecParameters_ch_layout_nb_channels_s"] = function() {
                                return (_AVCodecParameters_ch_layout_nb_channels_s = Module["_AVCodecParameters_ch_layout_nb_channels_s"] = Module["asm"]["Sc"]).apply(null, arguments)
                            };
                            var _AVPacket_data = Module["_AVPacket_data"] = function() {
                                return (_AVPacket_data = Module["_AVPacket_data"] = Module["asm"]["Tc"]).apply(null, arguments)
                            };
                            var _AVPacket_data_s = Module["_AVPacket_data_s"] = function() {
                                return (_AVPacket_data_s = Module["_AVPacket_data_s"] = Module["asm"]["Uc"]).apply(null, arguments)
                            };
                            var _AVPacket_dts = Module["_AVPacket_dts"] = function() {
                                return (_AVPacket_dts = Module["_AVPacket_dts"] = Module["asm"]["Vc"]).apply(null, arguments)
                            };
                            var _AVPacket_dtshi = Module["_AVPacket_dtshi"] = function() {
                                return (_AVPacket_dtshi = Module["_AVPacket_dtshi"] = Module["asm"]["Wc"]).apply(null, arguments)
                            };
                            var _AVPacket_dts_s = Module["_AVPacket_dts_s"] = function() {
                                return (_AVPacket_dts_s = Module["_AVPacket_dts_s"] = Module["asm"]["Xc"]).apply(null, arguments)
                            };
                            var _AVPacket_dtshi_s = Module["_AVPacket_dtshi_s"] = function() {
                                return (_AVPacket_dtshi_s = Module["_AVPacket_dtshi_s"] = Module["asm"]["Yc"]).apply(null, arguments)
                            };
                            var _AVPacket_duration = Module["_AVPacket_duration"] = function() {
                                return (_AVPacket_duration = Module["_AVPacket_duration"] = Module["asm"]["Zc"]).apply(null, arguments)
                            };
                            var _AVPacket_durationhi = Module["_AVPacket_durationhi"] = function() {
                                return (_AVPacket_durationhi = Module["_AVPacket_durationhi"] = Module["asm"]["_c"]).apply(null, arguments)
                            };
                            var _AVPacket_duration_s = Module["_AVPacket_duration_s"] = function() {
                                return (_AVPacket_duration_s = Module["_AVPacket_duration_s"] = Module["asm"]["$c"]).apply(null, arguments)
                            };
                            var _AVPacket_durationhi_s = Module["_AVPacket_durationhi_s"] = function() {
                                return (_AVPacket_durationhi_s = Module["_AVPacket_durationhi_s"] = Module["asm"]["ad"]).apply(null, arguments)
                            };
                            var _AVPacket_flags = Module["_AVPacket_flags"] = function() {
                                return (_AVPacket_flags = Module["_AVPacket_flags"] = Module["asm"]["bd"]).apply(null, arguments)
                            };
                            var _AVPacket_flags_s = Module["_AVPacket_flags_s"] = function() {
                                return (_AVPacket_flags_s = Module["_AVPacket_flags_s"] = Module["asm"]["cd"]).apply(null, arguments)
                            };
                            var _AVPacket_pos = Module["_AVPacket_pos"] = function() {
                                return (_AVPacket_pos = Module["_AVPacket_pos"] = Module["asm"]["dd"]).apply(null, arguments)
                            };
                            var _AVPacket_poshi = Module["_AVPacket_poshi"] = function() {
                                return (_AVPacket_poshi = Module["_AVPacket_poshi"] = Module["asm"]["ed"]).apply(null, arguments)
                            };
                            var _AVPacket_pos_s = Module["_AVPacket_pos_s"] = function() {
                                return (_AVPacket_pos_s = Module["_AVPacket_pos_s"] = Module["asm"]["fd"]).apply(null, arguments)
                            };
                            var _AVPacket_poshi_s = Module["_AVPacket_poshi_s"] = function() {
                                return (_AVPacket_poshi_s = Module["_AVPacket_poshi_s"] = Module["asm"]["gd"]).apply(null, arguments)
                            };
                            var _AVPacket_pts = Module["_AVPacket_pts"] = function() {
                                return (_AVPacket_pts = Module["_AVPacket_pts"] = Module["asm"]["hd"]).apply(null, arguments)
                            };
                            var _AVPacket_ptshi = Module["_AVPacket_ptshi"] = function() {
                                return (_AVPacket_ptshi = Module["_AVPacket_ptshi"] = Module["asm"]["id"]).apply(null, arguments)
                            };
                            var _AVPacket_pts_s = Module["_AVPacket_pts_s"] = function() {
                                return (_AVPacket_pts_s = Module["_AVPacket_pts_s"] = Module["asm"]["jd"]).apply(null, arguments)
                            };
                            var _AVPacket_ptshi_s = Module["_AVPacket_ptshi_s"] = function() {
                                return (_AVPacket_ptshi_s = Module["_AVPacket_ptshi_s"] = Module["asm"]["kd"]).apply(null, arguments)
                            };
                            var _AVPacket_side_data = Module["_AVPacket_side_data"] = function() {
                                return (_AVPacket_side_data = Module["_AVPacket_side_data"] = Module["asm"]["ld"]).apply(null, arguments)
                            };
                            var _AVPacket_side_data_s = Module["_AVPacket_side_data_s"] = function() {
                                return (_AVPacket_side_data_s = Module["_AVPacket_side_data_s"] = Module["asm"]["md"]).apply(null, arguments)
                            };
                            var _AVPacket_side_data_elems = Module["_AVPacket_side_data_elems"] = function() {
                                return (_AVPacket_side_data_elems = Module["_AVPacket_side_data_elems"] = Module["asm"]["nd"]).apply(null, arguments)
                            };
                            var _AVPacket_side_data_elems_s = Module["_AVPacket_side_data_elems_s"] = function() {
                                return (_AVPacket_side_data_elems_s = Module["_AVPacket_side_data_elems_s"] = Module["asm"]["od"]).apply(null, arguments)
                            };
                            var _AVPacket_size = Module["_AVPacket_size"] = function() {
                                return (_AVPacket_size = Module["_AVPacket_size"] = Module["asm"]["pd"]).apply(null, arguments)
                            };
                            var _AVPacket_size_s = Module["_AVPacket_size_s"] = function() {
                                return (_AVPacket_size_s = Module["_AVPacket_size_s"] = Module["asm"]["qd"]).apply(null, arguments)
                            };
                            var _AVPacket_stream_index = Module["_AVPacket_stream_index"] = function() {
                                return (_AVPacket_stream_index = Module["_AVPacket_stream_index"] = Module["asm"]["rd"]).apply(null, arguments)
                            };
                            var _AVPacket_stream_index_s = Module["_AVPacket_stream_index_s"] = function() {
                                return (_AVPacket_stream_index_s = Module["_AVPacket_stream_index_s"] = Module["asm"]["sd"]).apply(null, arguments)
                            };
                            var _AVPacketSideData_data = Module["_AVPacketSideData_data"] = function() {
                                return (_AVPacketSideData_data = Module["_AVPacketSideData_data"] = Module["asm"]["td"]).apply(null, arguments)
                            };
                            var _AVPacketSideData_size = Module["_AVPacketSideData_size"] = function() {
                                return (_AVPacketSideData_size = Module["_AVPacketSideData_size"] = Module["asm"]["ud"]).apply(null, arguments)
                            };
                            var _AVPacketSideData_type = Module["_AVPacketSideData_type"] = function() {
                                return (_AVPacketSideData_type = Module["_AVPacketSideData_type"] = Module["asm"]["vd"]).apply(null, arguments)
                            };
                            var _avcodec_open2_js = Module["_avcodec_open2_js"] = function() {
                                return (_avcodec_open2_js = Module["_avcodec_open2_js"] = Module["asm"]["wd"]).apply(null, arguments)
                            };
                            var _avcodec_open2 = Module["_avcodec_open2"] = function() {
                                return (_avcodec_open2 = Module["_avcodec_open2"] = Module["asm"]["xd"]).apply(null, arguments)
                            };
                            var _av_packet_rescale_ts_js = Module["_av_packet_rescale_ts_js"] = function() {
                                return (_av_packet_rescale_ts_js = Module["_av_packet_rescale_ts_js"] = Module["asm"]["yd"]).apply(null, arguments)
                            };
                            var _AVFormatContext_flags = Module["_AVFormatContext_flags"] = function() {
                                return (_AVFormatContext_flags = Module["_AVFormatContext_flags"] = Module["asm"]["zd"]).apply(null, arguments)
                            };
                            var _AVFormatContext_flags_s = Module["_AVFormatContext_flags_s"] = function() {
                                return (_AVFormatContext_flags_s = Module["_AVFormatContext_flags_s"] = Module["asm"]["Ad"]).apply(null, arguments)
                            };
                            var _AVFormatContext_nb_streams = Module["_AVFormatContext_nb_streams"] = function() {
                                return (_AVFormatContext_nb_streams = Module["_AVFormatContext_nb_streams"] = Module["asm"]["Bd"]).apply(null, arguments)
                            };
                            var _AVFormatContext_nb_streams_s = Module["_AVFormatContext_nb_streams_s"] = function() {
                                return (_AVFormatContext_nb_streams_s = Module["_AVFormatContext_nb_streams_s"] = Module["asm"]["Cd"]).apply(null, arguments)
                            };
                            var _AVFormatContext_oformat = Module["_AVFormatContext_oformat"] = function() {
                                return (_AVFormatContext_oformat = Module["_AVFormatContext_oformat"] = Module["asm"]["Dd"]).apply(null, arguments)
                            };
                            var _AVFormatContext_oformat_s = Module["_AVFormatContext_oformat_s"] = function() {
                                return (_AVFormatContext_oformat_s = Module["_AVFormatContext_oformat_s"] = Module["asm"]["Ed"]).apply(null, arguments)
                            };
                            var _AVFormatContext_pb = Module["_AVFormatContext_pb"] = function() {
                                return (_AVFormatContext_pb = Module["_AVFormatContext_pb"] = Module["asm"]["Fd"]).apply(null, arguments)
                            };
                            var _AVFormatContext_pb_s = Module["_AVFormatContext_pb_s"] = function() {
                                return (_AVFormatContext_pb_s = Module["_AVFormatContext_pb_s"] = Module["asm"]["Gd"]).apply(null, arguments)
                            };
                            var _AVFormatContext_streams_a = Module["_AVFormatContext_streams_a"] = function() {
                                return (_AVFormatContext_streams_a = Module["_AVFormatContext_streams_a"] = Module["asm"]["Hd"]).apply(null, arguments)
                            };
                            var _AVFormatContext_streams_a_s = Module["_AVFormatContext_streams_a_s"] = function() {
                                return (_AVFormatContext_streams_a_s = Module["_AVFormatContext_streams_a_s"] = Module["asm"]["Id"]).apply(null, arguments)
                            };
                            var _AVStream_codecpar = Module["_AVStream_codecpar"] = function() {
                                return (_AVStream_codecpar = Module["_AVStream_codecpar"] = Module["asm"]["Jd"]).apply(null, arguments)
                            };
                            var _AVStream_codecpar_s = Module["_AVStream_codecpar_s"] = function() {
                                return (_AVStream_codecpar_s = Module["_AVStream_codecpar_s"] = Module["asm"]["Kd"]).apply(null, arguments)
                            };
                            var _AVStream_discard = Module["_AVStream_discard"] = function() {
                                return (_AVStream_discard = Module["_AVStream_discard"] = Module["asm"]["Ld"]).apply(null, arguments)
                            };
                            var _AVStream_discard_s = Module["_AVStream_discard_s"] = function() {
                                return (_AVStream_discard_s = Module["_AVStream_discard_s"] = Module["asm"]["Md"]).apply(null, arguments)
                            };
                            var _AVStream_duration = Module["_AVStream_duration"] = function() {
                                return (_AVStream_duration = Module["_AVStream_duration"] = Module["asm"]["Nd"]).apply(null, arguments)
                            };
                            var _AVStream_durationhi = Module["_AVStream_durationhi"] = function() {
                                return (_AVStream_durationhi = Module["_AVStream_durationhi"] = Module["asm"]["Od"]).apply(null, arguments)
                            };
                            var _AVStream_duration_s = Module["_AVStream_duration_s"] = function() {
                                return (_AVStream_duration_s = Module["_AVStream_duration_s"] = Module["asm"]["Pd"]).apply(null, arguments)
                            };
                            var _AVStream_durationhi_s = Module["_AVStream_durationhi_s"] = function() {
                                return (_AVStream_durationhi_s = Module["_AVStream_durationhi_s"] = Module["asm"]["Qd"]).apply(null, arguments)
                            };
                            var _AVStream_time_base_num = Module["_AVStream_time_base_num"] = function() {
                                return (_AVStream_time_base_num = Module["_AVStream_time_base_num"] = Module["asm"]["Rd"]).apply(null, arguments)
                            };
                            var _AVStream_time_base_den = Module["_AVStream_time_base_den"] = function() {
                                return (_AVStream_time_base_den = Module["_AVStream_time_base_den"] = Module["asm"]["Sd"]).apply(null, arguments)
                            };
                            var _AVStream_time_base_s = Module["_AVStream_time_base_s"] = function() {
                                return (_AVStream_time_base_s = Module["_AVStream_time_base_s"] = Module["asm"]["Td"]).apply(null, arguments)
                            };
                            var _avformat_seek_file_min = Module["_avformat_seek_file_min"] = function() {
                                return (_avformat_seek_file_min = Module["_avformat_seek_file_min"] = Module["asm"]["Ud"]).apply(null, arguments)
                            };
                            var _avformat_seek_file = Module["_avformat_seek_file"] = function() {
                                return (_avformat_seek_file = Module["_avformat_seek_file"] = Module["asm"]["Vd"]).apply(null, arguments)
                            };
                            var _avformat_seek_file_max = Module["_avformat_seek_file_max"] = function() {
                                return (_avformat_seek_file_max = Module["_avformat_seek_file_max"] = Module["asm"]["Wd"]).apply(null, arguments)
                            };
                            var _avformat_seek_file_approx = Module["_avformat_seek_file_approx"] = function() {
                                return (_avformat_seek_file_approx = Module["_avformat_seek_file_approx"] = Module["asm"]["Xd"]).apply(null, arguments)
                            };
                            var _AVFilterInOut_filter_ctx = Module["_AVFilterInOut_filter_ctx"] = function() {
                                return (_AVFilterInOut_filter_ctx = Module["_AVFilterInOut_filter_ctx"] = Module["asm"]["Yd"]).apply(null, arguments)
                            };
                            var _AVFilterInOut_filter_ctx_s = Module["_AVFilterInOut_filter_ctx_s"] = function() {
                                return (_AVFilterInOut_filter_ctx_s = Module["_AVFilterInOut_filter_ctx_s"] = Module["asm"]["Zd"]).apply(null, arguments)
                            };
                            var _AVFilterInOut_name = Module["_AVFilterInOut_name"] = function() {
                                return (_AVFilterInOut_name = Module["_AVFilterInOut_name"] = Module["asm"]["_d"]).apply(null, arguments)
                            };
                            var _AVFilterInOut_name_s = Module["_AVFilterInOut_name_s"] = function() {
                                return (_AVFilterInOut_name_s = Module["_AVFilterInOut_name_s"] = Module["asm"]["$d"]).apply(null, arguments)
                            };
                            var _AVFilterInOut_next = Module["_AVFilterInOut_next"] = function() {
                                return (_AVFilterInOut_next = Module["_AVFilterInOut_next"] = Module["asm"]["ae"]).apply(null, arguments)
                            };
                            var _AVFilterInOut_next_s = Module["_AVFilterInOut_next_s"] = function() {
                                return (_AVFilterInOut_next_s = Module["_AVFilterInOut_next_s"] = Module["asm"]["be"]).apply(null, arguments)
                            };
                            var _AVFilterInOut_pad_idx = Module["_AVFilterInOut_pad_idx"] = function() {
                                return (_AVFilterInOut_pad_idx = Module["_AVFilterInOut_pad_idx"] = Module["asm"]["ce"]).apply(null, arguments)
                            };
                            var _AVFilterInOut_pad_idx_s = Module["_AVFilterInOut_pad_idx_s"] = function() {
                                return (_AVFilterInOut_pad_idx_s = Module["_AVFilterInOut_pad_idx_s"] = Module["asm"]["de"]).apply(null, arguments)
                            };
                            var _libavjs_with_swscale = Module["_libavjs_with_swscale"] = function() {
                                return (_libavjs_with_swscale = Module["_libavjs_with_swscale"] = Module["asm"]["ee"]).apply(null, arguments)
                            };
                            var _sws_getContext = Module["_sws_getContext"] = function() {
                                return (_sws_getContext = Module["_sws_getContext"] = Module["asm"]["fe"]).apply(null, arguments)
                            };
                            var _sws_freeContext = Module["_sws_freeContext"] = function() {
                                return (_sws_freeContext = Module["_sws_freeContext"] = Module["asm"]["ge"]).apply(null, arguments)
                            };
                            var _sws_scale_frame = Module["_sws_scale_frame"] = function() {
                                return (_sws_scale_frame = Module["_sws_scale_frame"] = Module["asm"]["he"]).apply(null, arguments)
                            };
                            var _ffmpeg_main = Module["_ffmpeg_main"] = function() {
                                return (_ffmpeg_main = Module["_ffmpeg_main"] = Module["asm"]["ie"]).apply(null, arguments)
                            };
                            var _ffprobe_main = Module["_ffprobe_main"] = function() {
                                return (_ffprobe_main = Module["_ffprobe_main"] = Module["asm"]["je"]).apply(null, arguments)
                            };
                            var _libavjs_create_main_thread = Module["_libavjs_create_main_thread"] = function() {
                                return (_libavjs_create_main_thread = Module["_libavjs_create_main_thread"] = Module["asm"]["ke"]).apply(null, arguments)
                            };
                            var _avformat_alloc_output_context2_js = Module["_avformat_alloc_output_context2_js"] = function() {
                                return (_avformat_alloc_output_context2_js = Module["_avformat_alloc_output_context2_js"] = Module["asm"]["le"]).apply(null, arguments)
                            };
                            var _avformat_open_input_js = Module["_avformat_open_input_js"] = function() {
                                return (_avformat_open_input_js = Module["_avformat_open_input_js"] = Module["asm"]["me"]).apply(null, arguments)
                            };
                            var _avformat_open_input = Module["_avformat_open_input"] = function() {
                                return (_avformat_open_input = Module["_avformat_open_input"] = Module["asm"]["ne"]).apply(null, arguments)
                            };
                            var _avio_open2_js = Module["_avio_open2_js"] = function() {
                                return (_avio_open2_js = Module["_avio_open2_js"] = Module["asm"]["oe"]).apply(null, arguments)
                            };
                            var _avfilter_graph_create_filter_js = Module["_avfilter_graph_create_filter_js"] = function() {
                                return (_avfilter_graph_create_filter_js = Module["_avfilter_graph_create_filter_js"] = Module["asm"]["pe"]).apply(null, arguments)
                            };
                            var _av_dict_copy_js = Module["_av_dict_copy_js"] = function() {
                                return (_av_dict_copy_js = Module["_av_dict_copy_js"] = Module["asm"]["qe"]).apply(null, arguments)
                            };
                            var _av_dict_set_js = Module["_av_dict_set_js"] = function() {
                                return (_av_dict_set_js = Module["_av_dict_set_js"] = Module["asm"]["re"]).apply(null, arguments)
                            };
                            var _av_compare_ts_js = Module["_av_compare_ts_js"] = function() {
                                return (_av_compare_ts_js = Module["_av_compare_ts_js"] = Module["asm"]["se"]).apply(null, arguments)
                            };
                            var _ff_error = Module["_ff_error"] = function() {
                                return (_ff_error = Module["_ff_error"] = Module["asm"]["te"]).apply(null, arguments)
                            };
                            var _mallinfo_uordblks = Module["_mallinfo_uordblks"] = function() {
                                return (_mallinfo_uordblks = Module["_mallinfo_uordblks"] = Module["asm"]["ue"]).apply(null, arguments)
                            };
                            var _avcodec_find_encoder = Module["_avcodec_find_encoder"] = function() {
                                return (_avcodec_find_encoder = Module["_avcodec_find_encoder"] = Module["asm"]["ve"]).apply(null, arguments)
                            };
                            var _avcodec_find_decoder = Module["_avcodec_find_decoder"] = function() {
                                return (_avcodec_find_decoder = Module["_avcodec_find_decoder"] = Module["asm"]["we"]).apply(null, arguments)
                            };
                            var _avcodec_find_encoder_by_name = Module["_avcodec_find_encoder_by_name"] = function() {
                                return (_avcodec_find_encoder_by_name = Module["_avcodec_find_encoder_by_name"] = Module["asm"]["xe"]).apply(null, arguments)
                            };
                            var _avcodec_find_decoder_by_name = Module["_avcodec_find_decoder_by_name"] = function() {
                                return (_avcodec_find_decoder_by_name = Module["_avcodec_find_decoder_by_name"] = Module["asm"]["ye"]).apply(null, arguments)
                            };
                            var _av_frame_alloc = Module["_av_frame_alloc"] = function() {
                                return (_av_frame_alloc = Module["_av_frame_alloc"] = Module["asm"]["ze"]).apply(null, arguments)
                            };
                            var _av_packet_alloc = Module["_av_packet_alloc"] = function() {
                                return (_av_packet_alloc = Module["_av_packet_alloc"] = Module["asm"]["Ae"]).apply(null, arguments)
                            };
                            var _avcodec_descriptor_get = Module["_avcodec_descriptor_get"] = function() {
                                return (_avcodec_descriptor_get = Module["_avcodec_descriptor_get"] = Module["asm"]["Be"]).apply(null, arguments)
                            };
                            var _av_frame_unref = Module["_av_frame_unref"] = function() {
                                return (_av_frame_unref = Module["_av_frame_unref"] = Module["asm"]["De"]).apply(null, arguments)
                            };
                            var _avcodec_close = Module["_avcodec_close"] = function() {
                                return (_avcodec_close = Module["_avcodec_close"] = Module["asm"]["Ee"]).apply(null, arguments)
                            };
                            var _av_frame_free = Module["_av_frame_free"] = function() {
                                return (_av_frame_free = Module["_av_frame_free"] = Module["asm"]["Fe"]).apply(null, arguments)
                            };
                            var _av_packet_free = Module["_av_packet_free"] = function() {
                                return (_av_packet_free = Module["_av_packet_free"] = Module["asm"]["Ge"]).apply(null, arguments)
                            };
                            var _av_packet_unref = Module["_av_packet_unref"] = function() {
                                return (_av_packet_unref = Module["_av_packet_unref"] = Module["asm"]["He"]).apply(null, arguments)
                            };
                            var _avcodec_get_name = Module["_avcodec_get_name"] = function() {
                                return (_avcodec_get_name = Module["_avcodec_get_name"] = Module["asm"]["Ie"]).apply(null, arguments)
                            };
                            var _av_log_get_level = Module["_av_log_get_level"] = function() {
                                return (_av_log_get_level = Module["_av_log_get_level"] = Module["asm"]["Je"]).apply(null, arguments)
                            };
                            var _av_pix_fmt_desc_get = Module["_av_pix_fmt_desc_get"] = function() {
                                return (_av_pix_fmt_desc_get = Module["_av_pix_fmt_desc_get"] = Module["asm"]["Ke"]).apply(null, arguments)
                            };
                            var _av_get_sample_fmt_name = Module["_av_get_sample_fmt_name"] = function() {
                                return (_av_get_sample_fmt_name = Module["_av_get_sample_fmt_name"] = Module["asm"]["Le"]).apply(null, arguments)
                            };
                            var _av_get_bytes_per_sample = Module["_av_get_bytes_per_sample"] = function() {
                                return (_av_get_bytes_per_sample = Module["_av_get_bytes_per_sample"] = Module["asm"]["Me"]).apply(null, arguments)
                            };
                            var _avcodec_receive_frame = Module["_avcodec_receive_frame"] = function() {
                                return (_avcodec_receive_frame = Module["_avcodec_receive_frame"] = Module["asm"]["Ne"]).apply(null, arguments)
                            };
                            var _av_shrink_packet = Module["_av_shrink_packet"] = function() {
                                return (_av_shrink_packet = Module["_av_shrink_packet"] = Module["asm"]["Oe"]).apply(null, arguments)
                            };
                            var _av_grow_packet = Module["_av_grow_packet"] = function() {
                                return (_av_grow_packet = Module["_av_grow_packet"] = Module["asm"]["Pe"]).apply(null, arguments)
                            };
                            var _av_packet_new_side_data = Module["_av_packet_new_side_data"] = function() {
                                return (_av_packet_new_side_data = Module["_av_packet_new_side_data"] = Module["asm"]["Qe"]).apply(null, arguments)
                            };
                            var _av_packet_ref = Module["_av_packet_ref"] = function() {
                                return (_av_packet_ref = Module["_av_packet_ref"] = Module["asm"]["Re"]).apply(null, arguments)
                            };
                            var _av_packet_clone = Module["_av_packet_clone"] = function() {
                                return (_av_packet_clone = Module["_av_packet_clone"] = Module["asm"]["Se"]).apply(null, arguments)
                            };
                            var _av_packet_make_writable = Module["_av_packet_make_writable"] = function() {
                                return (_av_packet_make_writable = Module["_av_packet_make_writable"] = Module["asm"]["Te"]).apply(null, arguments)
                            };
                            var _avcodec_parameters_free = Module["_avcodec_parameters_free"] = function() {
                                return (_avcodec_parameters_free = Module["_avcodec_parameters_free"] = Module["asm"]["Ue"]).apply(null, arguments)
                            };
                            var _avcodec_parameters_alloc = Module["_avcodec_parameters_alloc"] = function() {
                                return (_avcodec_parameters_alloc = Module["_avcodec_parameters_alloc"] = Module["asm"]["Ve"]).apply(null, arguments)
                            };
                            var _avcodec_parameters_copy = Module["_avcodec_parameters_copy"] = function() {
                                return (_avcodec_parameters_copy = Module["_avcodec_parameters_copy"] = Module["asm"]["We"]).apply(null, arguments)
                            };
                            var _avcodec_descriptor_next = Module["_avcodec_descriptor_next"] = function() {
                                return (_avcodec_descriptor_next = Module["_avcodec_descriptor_next"] = Module["asm"]["Xe"]).apply(null, arguments)
                            };
                            var _avcodec_descriptor_get_by_name = Module["_avcodec_descriptor_get_by_name"] = function() {
                                return (_avcodec_descriptor_get_by_name = Module["_avcodec_descriptor_get_by_name"] = Module["asm"]["Ye"]).apply(null, arguments)
                            };
                            var _avcodec_parameters_from_context = Module["_avcodec_parameters_from_context"] = function() {
                                return (_avcodec_parameters_from_context = Module["_avcodec_parameters_from_context"] = Module["asm"]["Ze"]).apply(null, arguments)
                            };
                            var _avcodec_parameters_to_context = Module["_avcodec_parameters_to_context"] = function() {
                                return (_avcodec_parameters_to_context = Module["_avcodec_parameters_to_context"] = Module["asm"]["_e"]).apply(null, arguments)
                            };
                            var _avcodec_send_packet = Module["_avcodec_send_packet"] = function() {
                                return (_avcodec_send_packet = Module["_avcodec_send_packet"] = Module["asm"]["$e"]).apply(null, arguments)
                            };
                            var _avcodec_send_frame = Module["_avcodec_send_frame"] = function() {
                                return (_avcodec_send_frame = Module["_avcodec_send_frame"] = Module["asm"]["af"]).apply(null, arguments)
                            };
                            var _av_frame_get_buffer = Module["_av_frame_get_buffer"] = function() {
                                return (_av_frame_get_buffer = Module["_av_frame_get_buffer"] = Module["asm"]["bf"]).apply(null, arguments)
                            };
                            var _av_frame_ref = Module["_av_frame_ref"] = function() {
                                return (_av_frame_ref = Module["_av_frame_ref"] = Module["asm"]["cf"]).apply(null, arguments)
                            };
                            var _avcodec_receive_packet = Module["_avcodec_receive_packet"] = function() {
                                return (_avcodec_receive_packet = Module["_avcodec_receive_packet"] = Module["asm"]["df"]).apply(null, arguments)
                            };
                            var _avcodec_alloc_context3 = Module["_avcodec_alloc_context3"] = function() {
                                return (_avcodec_alloc_context3 = Module["_avcodec_alloc_context3"] = Module["asm"]["ef"]).apply(null, arguments)
                            };
                            var _avcodec_free_context = Module["_avcodec_free_context"] = function() {
                                return (_avcodec_free_context = Module["_avcodec_free_context"] = Module["asm"]["ff"]).apply(null, arguments)
                            };
                            var _avfilter_get_by_name = Module["_avfilter_get_by_name"] = function() {
                                return (_avfilter_get_by_name = Module["_avfilter_get_by_name"] = Module["asm"]["gf"]).apply(null, arguments)
                            };
                            var _avfilter_link = Module["_avfilter_link"] = function() {
                                return (_avfilter_link = Module["_avfilter_link"] = Module["asm"]["hf"]).apply(null, arguments)
                            };
                            var _avfilter_free = Module["_avfilter_free"] = function() {
                                return (_avfilter_free = Module["_avfilter_free"] = Module["asm"]["jf"]).apply(null, arguments)
                            };
                            var _avfilter_graph_alloc = Module["_avfilter_graph_alloc"] = function() {
                                return (_avfilter_graph_alloc = Module["_avfilter_graph_alloc"] = Module["asm"]["kf"]).apply(null, arguments)
                            };
                            var _avfilter_graph_free = Module["_avfilter_graph_free"] = function() {
                                return (_avfilter_graph_free = Module["_avfilter_graph_free"] = Module["asm"]["lf"]).apply(null, arguments)
                            };
                            var _av_strdup = Module["_av_strdup"] = function() {
                                return (_av_strdup = Module["_av_strdup"] = Module["asm"]["mf"]).apply(null, arguments)
                            };
                            var _av_opt_set = Module["_av_opt_set"] = function() {
                                return (_av_opt_set = Module["_av_opt_set"] = Module["asm"]["nf"]).apply(null, arguments)
                            };
                            var _av_dict_free = Module["_av_dict_free"] = function() {
                                return (_av_dict_free = Module["_av_dict_free"] = Module["asm"]["of"]).apply(null, arguments)
                            };
                            var _avfilter_graph_config = Module["_avfilter_graph_config"] = function() {
                                return (_avfilter_graph_config = Module["_avfilter_graph_config"] = Module["asm"]["pf"]).apply(null, arguments)
                            };
                            var _av_buffersink_get_frame = Module["_av_buffersink_get_frame"] = function() {
                                return (_av_buffersink_get_frame = Module["_av_buffersink_get_frame"] = Module["asm"]["qf"]).apply(null, arguments)
                            };
                            var _av_buffersink_set_frame_size = Module["_av_buffersink_set_frame_size"] = function() {
                                return (_av_buffersink_set_frame_size = Module["_av_buffersink_set_frame_size"] = Module["asm"]["rf"]).apply(null, arguments)
                            };
                            var _av_buffersrc_add_frame_flags = Module["_av_buffersrc_add_frame_flags"] = function() {
                                return (_av_buffersrc_add_frame_flags = Module["_av_buffersrc_add_frame_flags"] = Module["asm"]["sf"]).apply(null, arguments)
                            };
                            var _avfilter_inout_alloc = Module["_avfilter_inout_alloc"] = function() {
                                return (_avfilter_inout_alloc = Module["_avfilter_inout_alloc"] = Module["asm"]["tf"]).apply(null, arguments)
                            };
                            var _avfilter_inout_free = Module["_avfilter_inout_free"] = function() {
                                return (_avfilter_inout_free = Module["_avfilter_inout_free"] = Module["asm"]["uf"]).apply(null, arguments)
                            };
                            var _avfilter_graph_parse = Module["_avfilter_graph_parse"] = function() {
                                return (_avfilter_graph_parse = Module["_avfilter_graph_parse"] = Module["asm"]["vf"]).apply(null, arguments)
                            };
                            var _avformat_free_context = Module["_avformat_free_context"] = function() {
                                return (_avformat_free_context = Module["_avformat_free_context"] = Module["asm"]["wf"]).apply(null, arguments)
                            };
                            var _av_find_best_stream = Module["_av_find_best_stream"] = function() {
                                return (_av_find_best_stream = Module["_av_find_best_stream"] = Module["asm"]["xf"]).apply(null, arguments)
                            };
                            var _avio_flush = Module["_avio_flush"] = function() {
                                return (_avio_flush = Module["_avio_flush"] = Module["asm"]["yf"]).apply(null, arguments)
                            };
                            var _avio_close = Module["_avio_close"] = function() {
                                return (_avio_close = Module["_avio_close"] = Module["asm"]["zf"]).apply(null, arguments)
                            };
                            var _avformat_alloc_context = Module["_avformat_alloc_context"] = function() {
                                return (_avformat_alloc_context = Module["_avformat_alloc_context"] = Module["asm"]["Af"]).apply(null, arguments)
                            };
                            var _avformat_new_stream = Module["_avformat_new_stream"] = function() {
                                return (_avformat_new_stream = Module["_avformat_new_stream"] = Module["asm"]["Bf"]).apply(null, arguments)
                            };
                            var _avformat_close_input = Module["_avformat_close_input"] = function() {
                                return (_avformat_close_input = Module["_avformat_close_input"] = Module["asm"]["Cf"]).apply(null, arguments)
                            };
                            var _av_read_frame = Module["_av_read_frame"] = function() {
                                return (_av_read_frame = Module["_av_read_frame"] = Module["asm"]["Df"]).apply(null, arguments)
                            };
                            var _avformat_find_stream_info = Module["_avformat_find_stream_info"] = function() {
                                return (_avformat_find_stream_info = Module["_avformat_find_stream_info"] = Module["asm"]["Ef"]).apply(null, arguments)
                            };
                            var _av_find_input_format = Module["_av_find_input_format"] = function() {
                                return (_av_find_input_format = Module["_av_find_input_format"] = Module["asm"]["Ff"]).apply(null, arguments)
                            };
                            var ___errno_location = Module["___errno_location"] = function() {
                                return (___errno_location = Module["___errno_location"] = Module["asm"]["Gf"]).apply(null, arguments)
                            };
                            var _avformat_write_header = Module["_avformat_write_header"] = function() {
                                return (_avformat_write_header = Module["_avformat_write_header"] = Module["asm"]["Hf"]).apply(null, arguments)
                            };
                            var _av_write_frame = Module["_av_write_frame"] = function() {
                                return (_av_write_frame = Module["_av_write_frame"] = Module["asm"]["If"]).apply(null, arguments)
                            };
                            var _av_write_trailer = Module["_av_write_trailer"] = function() {
                                return (_av_write_trailer = Module["_av_write_trailer"] = Module["asm"]["Jf"]).apply(null, arguments)
                            };
                            var _av_interleaved_write_frame = Module["_av_interleaved_write_frame"] = function() {
                                return (_av_interleaved_write_frame = Module["_av_interleaved_write_frame"] = Module["asm"]["Kf"]).apply(null, arguments)
                            };
                            var _close = Module["_close"] = function() {
                                return (_close = Module["_close"] = Module["asm"]["Lf"]).apply(null, arguments)
                            };
                            var _avformat_flush = Module["_avformat_flush"] = function() {
                                return (_avformat_flush = Module["_avformat_flush"] = Module["asm"]["Mf"]).apply(null, arguments)
                            };
                            var _open = Module["_open"] = function() {
                                return (_open = Module["_open"] = Module["asm"]["Nf"]).apply(null, arguments)
                            };
                            var _av_frame_clone = Module["_av_frame_clone"] = function() {
                                return (_av_frame_clone = Module["_av_frame_clone"] = Module["asm"]["Of"]).apply(null, arguments)
                            };
                            var _av_frame_make_writable = Module["_av_frame_make_writable"] = function() {
                                return (_av_frame_make_writable = Module["_av_frame_make_writable"] = Module["asm"]["Pf"]).apply(null, arguments)
                            };
                            var _av_log_set_level = Module["_av_log_set_level"] = function() {
                                return (_av_log_set_level = Module["_av_log_set_level"] = Module["asm"]["Qf"]).apply(null, arguments)
                            };
                            var _free = Module["_free"] = function() {
                                return (_free = Module["_free"] = Module["asm"]["Rf"]).apply(null, arguments)
                            };
                            var _malloc = Module["_malloc"] = function() {
                                return (_malloc = Module["_malloc"] = Module["asm"]["Sf"]).apply(null, arguments)
                            };
                            var _dup2 = Module["_dup2"] = function() {
                                return (_dup2 = Module["_dup2"] = Module["asm"]["Tf"]).apply(null, arguments)
                            };
                            var _calloc = Module["_calloc"] = function() {
                                return (_calloc = Module["_calloc"] = Module["asm"]["Uf"]).apply(null, arguments)
                            };
                            var _strerror = Module["_strerror"] = function() {
                                return (_strerror = Module["_strerror"] = Module["asm"]["Vf"]).apply(null, arguments)
                            };
                            var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = function() {
                                return (_emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = Module["asm"]["Wf"]).apply(null, arguments)
                            };
                            var stackSave = Module["stackSave"] = function() {
                                return (stackSave = Module["stackSave"] = Module["asm"]["Xf"]).apply(null, arguments)
                            };
                            var stackRestore = Module["stackRestore"] = function() {
                                return (stackRestore = Module["stackRestore"] = Module["asm"]["Yf"]).apply(null, arguments)
                            };
                            var stackAlloc = Module["stackAlloc"] = function() {
                                return (stackAlloc = Module["stackAlloc"] = Module["asm"]["Zf"]).apply(null, arguments)
                            };
                            var _asyncify_start_unwind = Module["_asyncify_start_unwind"] = function() {
                                return (_asyncify_start_unwind = Module["_asyncify_start_unwind"] = Module["asm"]["_f"]).apply(null, arguments)
                            };
                            var _asyncify_stop_unwind = Module["_asyncify_stop_unwind"] = function() {
                                return (_asyncify_stop_unwind = Module["_asyncify_stop_unwind"] = Module["asm"]["$f"]).apply(null, arguments)
                            };
                            var _asyncify_start_rewind = Module["_asyncify_start_rewind"] = function() {
                                return (_asyncify_start_rewind = Module["_asyncify_start_rewind"] = Module["asm"]["ag"]).apply(null, arguments)
                            };
                            var _asyncify_stop_rewind = Module["_asyncify_stop_rewind"] = function() {
                                return (_asyncify_stop_rewind = Module["_asyncify_stop_rewind"] = Module["asm"]["bg"]).apply(null, arguments)
                            };
                            var ___start_em_js = Module["___start_em_js"] = 416060;
                            var ___stop_em_js = Module["___stop_em_js"] = 416200;
                            Module["cwrap"] = cwrap;
                            var calledRun;
                            dependenciesFulfilled = function runCaller() {
                                if (!calledRun) run();
                                if (!calledRun) dependenciesFulfilled = runCaller
                            };

                            function run(args) {
                                args = args || arguments_;
                                if (runDependencies > 0) {
                                    return
                                }
                                preRun();
                                if (runDependencies > 0) {
                                    return
                                }

                                function doRun() {
                                    if (calledRun) return;
                                    calledRun = true;
                                    Module["calledRun"] = true;
                                    if (ABORT) return;
                                    initRuntime();
                                    readyPromiseResolve(Module);
                                    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
                                    postRun()
                                }
                                if (Module["setStatus"]) {
                                    Module["setStatus"]("Running...");
                                    setTimeout(function() {
                                        setTimeout(function() {
                                            Module["setStatus"]("")
                                        }, 1);
                                        doRun()
                                    }, 1)
                                } else {
                                    doRun()
                                }
                            }
                            if (Module["preInit"]) {
                                if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
                                while (Module["preInit"].length > 0) {
                                    Module["preInit"].pop()()
                                }
                            }
                            run();
                            Module.serializationPromise = Promise.all([]);
                            Module.fsThrownError = null;
                            var ERRNO_CODES = {
                                EPERM: 1,
                                EIO: 5,
                                EAGAIN: 6,
                                ECANCELED: 11,
                                ESPIPE: 29
                            };
                            var readerCallbacks = {
                                open: function(stream) {
                                    if (stream.flags & 3) {
                                        throw new FS.ErrnoError(ERRNO_CODES.EPERM)
                                    }
                                },
                                close: function(stream) {
                                    delete Module.readBuffers[stream.node.name]
                                },
                                read: function(stream, buffer, offset, length, position) {
                                    var data = Module.readBuffers[stream.node.name];
                                    if (!data) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                                    if (data.error) {
                                        Module.fsThrownError = data.error;
                                        throw new FS.ErrnoError(ERRNO_CODES.ECANCELED)
                                    }
                                    if (data.errorCode) throw new FS.ErrnoError(data.errorCode);
                                    if (data.buf.length === 0) {
                                        if (data.eof) {
                                            return 0
                                        } else {
                                            data.ready = false;
                                            throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)
                                        }
                                    }
                                    var ret;
                                    if (length < data.buf.length) {
                                        ret = data.buf.subarray(0, length);
                                        data.buf = data.buf.slice(length)
                                    } else {
                                        ret = data.buf;
                                        data.buf = new Uint8Array(0)
                                    }
                                    new Uint8Array(buffer.buffer).set(ret, offset);
                                    return ret.length
                                },
                                write: function() {
                                    throw new FS.ErrnoError(ERRNO_CODES.EIO)
                                },
                                llseek: function() {
                                    throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)
                                }
                            };
                            var blockReaderCallbacks = {
                                open: function(stream) {
                                    if (stream.flags & 3) throw new FS.ErrnoError(ERRNO_CODES.EPERM)
                                },
                                close: function(stream) {
                                    delete Module.readBuffers[stream.node.name]
                                },
                                read: function(stream, buffer, offset, length, position) {
                                    var data = Module.blockReadBuffers[stream.node.name];
                                    if (!data) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                                    if (data.error) {
                                        Module.fsThrownError = data.error;
                                        throw new FS.ErrnoError(ERRNO_CODES.ECANCELED)
                                    }
                                    if (data.errorCode) throw new FS.ErrnoError(data.errorCode);
                                    var bufMin = data.position;
                                    var bufMax = data.position + data.buf.length;
                                    if (position < bufMin || position >= bufMax) {
                                        if (position >= stream.node.ff_block_reader_dev_size) return 0;
                                        if (!Module.onblockread) throw new FS.ErrnoError(ERRNO_CODES.EIO);
                                        try {
                                            var brr = Module.onblockread(stream.node.name, position, length);
                                            if (brr && brr.then && brr.catch) {
                                                brr.catch(function(ex) {
                                                    ff_block_reader_dev_send(stream.node.name, position, null, {
                                                        error: ex
                                                    })
                                                })
                                            }
                                        } catch (ex) {
                                            Module.fsThrownError = ex;
                                            throw new FS.ErrnoError(ERRNO_CODES.ECANCELED)
                                        }
                                        bufMin = data.position;
                                        bufMax = data.position + data.buf.length;
                                        if (position < bufMin || position >= bufMax) {
                                            data.ready = false;
                                            throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)
                                        }
                                    }
                                    var bufPos = position - bufMin;
                                    var ret;
                                    if (bufPos + length < data.buf.length) {
                                        ret = data.buf.subarray(bufPos, bufPos + length)
                                    } else {
                                        ret = data.buf.subarray(bufPos, data.buf.length)
                                    }
                                    new Uint8Array(buffer.buffer).set(ret, offset);
                                    return ret.length
                                },
                                write: function() {
                                    throw new FS.ErrnoError(ERRNO_CODES.EIO)
                                },
                                llseek: function(stream, offset, whence) {
                                    if (whence === 2) offset = stream.node.size + offset;
                                    else if (whence === 1) offset += stream.position;
                                    return offset
                                }
                            };
                            var writerCallbacks = {
                                open: function(stream) {
                                    if (!(stream.flags & 1)) {
                                        throw new FS.ErrnoError(ERRNO_CODES.EPERM)
                                    }
                                },
                                close: function() {},
                                read: function() {
                                    throw new FS.ErrnoError(ERRNO_CODES.EIO)
                                },
                                write: function(stream, buffer, offset, length, position) {
                                    if (!Module.onwrite) throw new FS.ErrnoError(ERRNO_CODES.EIO);
                                    Module.onwrite(stream.node.name, position, buffer.subarray(offset, offset + length));
                                    return length
                                },
                                llseek: function(stream, offset, whence) {
                                    if (whence === 2) throw new FS.ErrnoError(ERRNO_CODES.EIO);
                                    else if (whence === 1) offset += stream.position;
                                    return offset
                                }
                            };
                            var streamWriterCallbacks = Object.create(writerCallbacks);
                            streamWriterCallbacks.write = function(stream, buffer, offset, length, position) {
                                if (position != stream.position) throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
                                return writerCallbacks.write(stream, buffer, offset, length, position)
                            };
                            streamWriterCallbacks.llseek = function() {
                                throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)
                            };
                            var streamWriterFS = Object.create(MEMFS);
                            streamWriterFS.mount = function(mount) {
                                return streamWriterFS.createNode(null, "/", 16384 | 511, 0)
                            };
                            streamWriterFS.createNode = function() {
                                var node = MEMFS.createNode.apply(MEMFS, arguments);
                                if (FS.isDir(node.mode)) {
                                    if (!streamWriterFS.dir_node_ops) {
                                        streamWriterFS.dir_node_ops = Object.create(node.node_ops);
                                        streamWriterFS.dir_node_ops.mknod = function(parent, name, mode, dev) {
                                            return streamWriterFS.createNode(parent, name, mode, dev)
                                        }
                                    }
                                    node.node_ops = streamWriterFS.dir_node_ops
                                } else if (FS.isFile(node.mode)) {
                                    node.stream_ops = writerCallbacks
                                }
                                return node
                            };
                            var CAccessors = {};
                            var av_get_bytes_per_sample = Module.av_get_bytes_per_sample = CAccessors.av_get_bytes_per_sample = Module.cwrap("av_get_bytes_per_sample", "number", ["number"]);
                            var av_compare_ts_js = Module.av_compare_ts_js = CAccessors.av_compare_ts_js = Module.cwrap("av_compare_ts_js", "number", ["number", "number", "number", "number", "number", "number", "number", "number"]);
                            var av_opt_set = Module.av_opt_set = CAccessors.av_opt_set = Module.cwrap("av_opt_set", "number", ["number", "string", "string", "number"]);
                            var av_opt_set_int_list_js = Module.av_opt_set_int_list_js = CAccessors.av_opt_set_int_list_js = Module.cwrap("av_opt_set_int_list_js", "number", ["number", "string", "number", "number", "number", "number"]);
                            var av_frame_alloc = Module.av_frame_alloc = CAccessors.av_frame_alloc = Module.cwrap("av_frame_alloc", "number", []);
                            var av_frame_clone = Module.av_frame_clone = CAccessors.av_frame_clone = Module.cwrap("av_frame_clone", "number", ["number", "number"]);
                            var av_frame_free = Module.av_frame_free = CAccessors.av_frame_free = Module.cwrap("av_frame_free", null, ["number"]);
                            var av_frame_get_buffer = Module.av_frame_get_buffer = CAccessors.av_frame_get_buffer = Module.cwrap("av_frame_get_buffer", "number", ["number", "number"]);
                            var av_frame_make_writable = Module.av_frame_make_writable = CAccessors.av_frame_make_writable = Module.cwrap("av_frame_make_writable", "number", ["number"]);
                            var av_frame_ref = Module.av_frame_ref = CAccessors.av_frame_ref = Module.cwrap("av_frame_ref", "number", ["number", "number"]);
                            var av_frame_unref = Module.av_frame_unref = CAccessors.av_frame_unref = Module.cwrap("av_frame_unref", null, ["number"]);
                            var av_log_get_level = Module.av_log_get_level = CAccessors.av_log_get_level = Module.cwrap("av_log_get_level", "number", []);
                            var av_log_set_level = Module.av_log_set_level = CAccessors.av_log_set_level = Module.cwrap("av_log_set_level", null, ["number"]);
                            var av_packet_alloc = Module.av_packet_alloc = CAccessors.av_packet_alloc = Module.cwrap("av_packet_alloc", "number", []);
                            var av_packet_clone = Module.av_packet_clone = CAccessors.av_packet_clone = Module.cwrap("av_packet_clone", "number", ["number"]);
                            var av_packet_free = Module.av_packet_free = CAccessors.av_packet_free = Module.cwrap("av_packet_free", null, ["number"]);
                            var av_packet_new_side_data = Module.av_packet_new_side_data = CAccessors.av_packet_new_side_data = Module.cwrap("av_packet_new_side_data", "number", ["number", "number", "number"]);
                            var av_packet_ref = Module.av_packet_ref = CAccessors.av_packet_ref = Module.cwrap("av_packet_ref", "number", ["number", "number"]);
                            var av_packet_rescale_ts_js = Module.av_packet_rescale_ts_js = CAccessors.av_packet_rescale_ts_js = Module.cwrap("av_packet_rescale_ts_js", null, ["number", "number", "number", "number", "number"]);
                            var av_packet_unref = Module.av_packet_unref = CAccessors.av_packet_unref = Module.cwrap("av_packet_unref", null, ["number"]);
                            var av_strdup = Module.av_strdup = CAccessors.av_strdup = Module.cwrap("av_strdup", "number", ["string"]);
                            var av_buffersink_get_frame = Module.av_buffersink_get_frame = CAccessors.av_buffersink_get_frame = Module.cwrap("av_buffersink_get_frame", "number", ["number", "number"]);
                            var av_buffersink_set_frame_size = Module.av_buffersink_set_frame_size = CAccessors.av_buffersink_set_frame_size = Module.cwrap("av_buffersink_set_frame_size", null, ["number", "number"]);
                            var av_buffersrc_add_frame_flags = Module.av_buffersrc_add_frame_flags = CAccessors.av_buffersrc_add_frame_flags = Module.cwrap("av_buffersrc_add_frame_flags", "number", ["number", "number", "number"]);
                            var avfilter_free = Module.avfilter_free = CAccessors.avfilter_free = Module.cwrap("avfilter_free", null, ["number"]);
                            var avfilter_get_by_name = Module.avfilter_get_by_name = CAccessors.avfilter_get_by_name = Module.cwrap("avfilter_get_by_name", "number", ["string"]);
                            var avfilter_graph_alloc = Module.avfilter_graph_alloc = CAccessors.avfilter_graph_alloc = Module.cwrap("avfilter_graph_alloc", "number", []);
                            var avfilter_graph_config = Module.avfilter_graph_config = CAccessors.avfilter_graph_config = Module.cwrap("avfilter_graph_config", "number", ["number", "number"]);
                            var avfilter_graph_create_filter_js = Module.avfilter_graph_create_filter_js = CAccessors.avfilter_graph_create_filter_js = Module.cwrap("avfilter_graph_create_filter_js", "number", ["number", "string", "string", "number", "number"]);
                            var avfilter_graph_free = Module.avfilter_graph_free = CAccessors.avfilter_graph_free = Module.cwrap("avfilter_graph_free", null, ["number"]);
                            var avfilter_graph_parse = Module.avfilter_graph_parse = CAccessors.avfilter_graph_parse = Module.cwrap("avfilter_graph_parse", "number", ["number", "string", "number", "number", "number"]);
                            var avfilter_inout_alloc = Module.avfilter_inout_alloc = CAccessors.avfilter_inout_alloc = Module.cwrap("avfilter_inout_alloc", "number", []);
                            var avfilter_inout_free = Module.avfilter_inout_free = CAccessors.avfilter_inout_free = Module.cwrap("avfilter_inout_free", null, ["number"]);
                            var avfilter_link = Module.avfilter_link = CAccessors.avfilter_link = Module.cwrap("avfilter_link", "number", ["number", "number", "number", "number"]);
                            var avcodec_alloc_context3 = Module.avcodec_alloc_context3 = CAccessors.avcodec_alloc_context3 = Module.cwrap("avcodec_alloc_context3", "number", ["number"]);
                            var avcodec_close = Module.avcodec_close = CAccessors.avcodec_close = Module.cwrap("avcodec_close", "number", ["number"]);
                            var avcodec_descriptor_get = Module.avcodec_descriptor_get = CAccessors.avcodec_descriptor_get = Module.cwrap("avcodec_descriptor_get", "number", ["number"]);
                            var avcodec_descriptor_get_by_name = Module.avcodec_descriptor_get_by_name = CAccessors.avcodec_descriptor_get_by_name = Module.cwrap("avcodec_descriptor_get_by_name", "number", ["string"]);
                            var avcodec_descriptor_next = Module.avcodec_descriptor_next = CAccessors.avcodec_descriptor_next = Module.cwrap("avcodec_descriptor_next", "number", ["number"]);
                            var avcodec_find_decoder = Module.avcodec_find_decoder = CAccessors.avcodec_find_decoder = Module.cwrap("avcodec_find_decoder", "number", ["number"]);
                            var avcodec_find_decoder_by_name = Module.avcodec_find_decoder_by_name = CAccessors.avcodec_find_decoder_by_name = Module.cwrap("avcodec_find_decoder_by_name", "number", ["string"]);
                            var avcodec_find_encoder = Module.avcodec_find_encoder = CAccessors.avcodec_find_encoder = Module.cwrap("avcodec_find_encoder", "number", ["number"]);
                            var avcodec_find_encoder_by_name = Module.avcodec_find_encoder_by_name = CAccessors.avcodec_find_encoder_by_name = Module.cwrap("avcodec_find_encoder_by_name", "number", ["string"]);
                            var avcodec_free_context = Module.avcodec_free_context = CAccessors.avcodec_free_context = Module.cwrap("avcodec_free_context", null, ["number"]);
                            var avcodec_get_name = Module.avcodec_get_name = CAccessors.avcodec_get_name = Module.cwrap("avcodec_get_name", "string", ["number"]);
                            var avcodec_open2 = Module.avcodec_open2 = CAccessors.avcodec_open2 = Module.cwrap("avcodec_open2", "number", ["number", "number", "number"]);
                            var avcodec_open2_js = Module.avcodec_open2_js = CAccessors.avcodec_open2_js = Module.cwrap("avcodec_open2_js", "number", ["number", "number", "number"]);
                            var avcodec_parameters_alloc = Module.avcodec_parameters_alloc = CAccessors.avcodec_parameters_alloc = Module.cwrap("avcodec_parameters_alloc", "number", []);
                            var avcodec_parameters_copy = Module.avcodec_parameters_copy = CAccessors.avcodec_parameters_copy = Module.cwrap("avcodec_parameters_copy", "number", ["number", "number"]);
                            var avcodec_parameters_free = Module.avcodec_parameters_free = CAccessors.avcodec_parameters_free = Module.cwrap("avcodec_parameters_free", null, ["number"]);
                            var avcodec_parameters_from_context = Module.avcodec_parameters_from_context = CAccessors.avcodec_parameters_from_context = Module.cwrap("avcodec_parameters_from_context", "number", ["number", "number"]);
                            var avcodec_parameters_to_context = Module.avcodec_parameters_to_context = CAccessors.avcodec_parameters_to_context = Module.cwrap("avcodec_parameters_to_context", "number", ["number", "number"]);
                            var avcodec_receive_frame = Module.avcodec_receive_frame = CAccessors.avcodec_receive_frame = Module.cwrap("avcodec_receive_frame", "number", ["number", "number"]);
                            var avcodec_receive_packet = Module.avcodec_receive_packet = CAccessors.avcodec_receive_packet = Module.cwrap("avcodec_receive_packet", "number", ["number", "number"]);
                            var avcodec_send_frame = Module.avcodec_send_frame = CAccessors.avcodec_send_frame = Module.cwrap("avcodec_send_frame", "number", ["number", "number"]);
                            var avcodec_send_packet = Module.avcodec_send_packet = CAccessors.avcodec_send_packet = Module.cwrap("avcodec_send_packet", "number", ["number", "number"]);
                            var av_find_input_format = Module.av_find_input_format = CAccessors.av_find_input_format = Module.cwrap("av_find_input_format", "number", ["string"]);
                            var avformat_alloc_context = Module.avformat_alloc_context = CAccessors.avformat_alloc_context = Module.cwrap("avformat_alloc_context", "number", []);
                            var avformat_alloc_output_context2_js = Module.avformat_alloc_output_context2_js = CAccessors.avformat_alloc_output_context2_js = Module.cwrap("avformat_alloc_output_context2_js", "number", ["number", "string", "string"]);
                            var avformat_close_input = Module.avformat_close_input = CAccessors.avformat_close_input = Module.cwrap("avformat_close_input", null, ["number"]);
                            var avformat_find_stream_info = Module.avformat_find_stream_info = CAccessors.avformat_find_stream_info = Module.cwrap("avformat_find_stream_info", "number", ["number", "number"], {
                                async: true
                            });
                            var avformat_find_stream_info__raw = avformat_find_stream_info;
                            avformat_find_stream_info = Module.avformat_find_stream_info = function() {
                                var args = arguments;
                                var ret = avformat_find_stream_info__raw.apply(void 0, args);
                                if (ret === -11) throw Module.fsThrownError;
                                else if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        if (ret === -11) throw Module.fsThrownError;
                                        return ret
                                    })
                                }
                                return ret
                            };
                            Module.avformat_find_stream_info = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return avformat_find_stream_info.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var avformat_flush = Module.avformat_flush = CAccessors.avformat_flush = Module.cwrap("avformat_flush", "number", ["number"]);
                            var avformat_free_context = Module.avformat_free_context = CAccessors.avformat_free_context = Module.cwrap("avformat_free_context", null, ["number"]);
                            var avformat_new_stream = Module.avformat_new_stream = CAccessors.avformat_new_stream = Module.cwrap("avformat_new_stream", "number", ["number", "number"]);
                            var avformat_open_input = Module.avformat_open_input = CAccessors.avformat_open_input = Module.cwrap("avformat_open_input", "number", ["number", "string", "number", "number"], {
                                async: true
                            });
                            var avformat_open_input__raw = avformat_open_input;
                            avformat_open_input = Module.avformat_open_input = function() {
                                var args = arguments;
                                var ret = avformat_open_input__raw.apply(void 0, args);
                                if (ret === -11) throw Module.fsThrownError;
                                else if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        if (ret === -11) throw Module.fsThrownError;
                                        return ret
                                    })
                                }
                                return ret
                            };
                            Module.avformat_open_input = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return avformat_open_input.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var avformat_open_input_js = Module.avformat_open_input_js = CAccessors.avformat_open_input_js = Module.cwrap("avformat_open_input_js", "number", ["string", "number", "number"], {
                                async: true
                            });
                            var avformat_open_input_js__raw = avformat_open_input_js;
                            avformat_open_input_js = Module.avformat_open_input_js = function() {
                                var args = arguments;
                                var ret = avformat_open_input_js__raw.apply(void 0, args);
                                if (ret === -11) throw Module.fsThrownError;
                                else if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        if (ret === -11) throw Module.fsThrownError;
                                        return ret
                                    })
                                }
                                return ret
                            };
                            Module.avformat_open_input_js = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return avformat_open_input_js.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var avformat_seek_file = Module.avformat_seek_file = CAccessors.avformat_seek_file = Module.cwrap("avformat_seek_file", "number", ["number", "number", "number", "number", "number", "number"], {
                                async: true
                            });
                            var avformat_seek_file__raw = avformat_seek_file;
                            avformat_seek_file = Module.avformat_seek_file = function() {
                                var args = arguments;
                                var ret = avformat_seek_file__raw.apply(void 0, args);
                                if (ret === -11) throw Module.fsThrownError;
                                else if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        if (ret === -11) throw Module.fsThrownError;
                                        return ret
                                    })
                                }
                                return ret
                            };
                            Module.avformat_seek_file = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return avformat_seek_file.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var avformat_seek_file_min = Module.avformat_seek_file_min = CAccessors.avformat_seek_file_min = Module.cwrap("avformat_seek_file_min", "number", ["number", "number", "number", "number"], {
                                async: true
                            });
                            var avformat_seek_file_min__raw = avformat_seek_file_min;
                            avformat_seek_file_min = Module.avformat_seek_file_min = function() {
                                var args = arguments;
                                var ret = avformat_seek_file_min__raw.apply(void 0, args);
                                if (ret === -11) throw Module.fsThrownError;
                                else if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        if (ret === -11) throw Module.fsThrownError;
                                        return ret
                                    })
                                }
                                return ret
                            };
                            Module.avformat_seek_file_min = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return avformat_seek_file_min.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var avformat_seek_file_max = Module.avformat_seek_file_max = CAccessors.avformat_seek_file_max = Module.cwrap("avformat_seek_file_max", "number", ["number", "number", "number", "number"], {
                                async: true
                            });
                            var avformat_seek_file_max__raw = avformat_seek_file_max;
                            avformat_seek_file_max = Module.avformat_seek_file_max = function() {
                                var args = arguments;
                                var ret = avformat_seek_file_max__raw.apply(void 0, args);
                                if (ret === -11) throw Module.fsThrownError;
                                else if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        if (ret === -11) throw Module.fsThrownError;
                                        return ret
                                    })
                                }
                                return ret
                            };
                            Module.avformat_seek_file_max = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return avformat_seek_file_max.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var avformat_seek_file_approx = Module.avformat_seek_file_approx = CAccessors.avformat_seek_file_approx = Module.cwrap("avformat_seek_file_approx", "number", ["number", "number", "number", "number"], {
                                async: true
                            });
                            var avformat_seek_file_approx__raw = avformat_seek_file_approx;
                            avformat_seek_file_approx = Module.avformat_seek_file_approx = function() {
                                var args = arguments;
                                var ret = avformat_seek_file_approx__raw.apply(void 0, args);
                                if (ret === -11) throw Module.fsThrownError;
                                else if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        if (ret === -11) throw Module.fsThrownError;
                                        return ret
                                    })
                                }
                                return ret
                            };
                            Module.avformat_seek_file_approx = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return avformat_seek_file_approx.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var avformat_write_header = Module.avformat_write_header = CAccessors.avformat_write_header = Module.cwrap("avformat_write_header", "number", ["number", "number"]);
                            var avio_open2_js = Module.avio_open2_js = CAccessors.avio_open2_js = Module.cwrap("avio_open2_js", "number", ["string", "number", "number", "number"]);
                            var avio_close = Module.avio_close = CAccessors.avio_close = Module.cwrap("avio_close", "number", ["number"]);
                            var avio_flush = Module.avio_flush = CAccessors.avio_flush = Module.cwrap("avio_flush", null, ["number"]);
                            var av_find_best_stream = Module.av_find_best_stream = CAccessors.av_find_best_stream = Module.cwrap("av_find_best_stream", "number", ["number", "number", "number", "number", "number", "number"]);
                            var av_get_sample_fmt_name = Module.av_get_sample_fmt_name = CAccessors.av_get_sample_fmt_name = Module.cwrap("av_get_sample_fmt_name", "string", ["number"]);
                            var av_grow_packet = Module.av_grow_packet = CAccessors.av_grow_packet = Module.cwrap("av_grow_packet", "number", ["number", "number"]);
                            var av_interleaved_write_frame = Module.av_interleaved_write_frame = CAccessors.av_interleaved_write_frame = Module.cwrap("av_interleaved_write_frame", "number", ["number", "number"]);
                            var av_packet_make_writable = Module.av_packet_make_writable = CAccessors.av_packet_make_writable = Module.cwrap("av_packet_make_writable", "number", ["number"]);
                            var av_pix_fmt_desc_get = Module.av_pix_fmt_desc_get = CAccessors.av_pix_fmt_desc_get = Module.cwrap("av_pix_fmt_desc_get", "number", ["number"]);
                            var av_read_frame = Module.av_read_frame = CAccessors.av_read_frame = Module.cwrap("av_read_frame", "number", ["number", "number"], {
                                async: true
                            });
                            var av_read_frame__raw = av_read_frame;
                            av_read_frame = Module.av_read_frame = function() {
                                var args = arguments;
                                var ret = av_read_frame__raw.apply(void 0, args);
                                if (ret === -11) throw Module.fsThrownError;
                                else if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        if (ret === -11) throw Module.fsThrownError;
                                        return ret
                                    })
                                }
                                return ret
                            };
                            Module.av_read_frame = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return av_read_frame.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var av_shrink_packet = Module.av_shrink_packet = CAccessors.av_shrink_packet = Module.cwrap("av_shrink_packet", null, ["number", "number"]);
                            var av_write_frame = Module.av_write_frame = CAccessors.av_write_frame = Module.cwrap("av_write_frame", "number", ["number", "number"]);
                            var av_write_trailer = Module.av_write_trailer = CAccessors.av_write_trailer = Module.cwrap("av_write_trailer", "number", ["number"]);
                            var av_dict_copy_js = Module.av_dict_copy_js = CAccessors.av_dict_copy_js = Module.cwrap("av_dict_copy_js", "number", ["number", "number", "number"]);
                            var av_dict_free = Module.av_dict_free = CAccessors.av_dict_free = Module.cwrap("av_dict_free", null, ["number"]);
                            var av_dict_set_js = Module.av_dict_set_js = CAccessors.av_dict_set_js = Module.cwrap("av_dict_set_js", "number", ["number", "string", "string", "number"]);
                            var sws_getContext = Module.sws_getContext = CAccessors.sws_getContext = Module.cwrap("sws_getContext", "number", ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]);
                            var sws_freeContext = Module.sws_freeContext = CAccessors.sws_freeContext = Module.cwrap("sws_freeContext", null, ["number"]);
                            var sws_scale_frame = Module.sws_scale_frame = CAccessors.sws_scale_frame = Module.cwrap("sws_scale_frame", "number", ["number", "number", "number"]);
                            var AVFrame_sample_aspect_ratio_num = Module.AVFrame_sample_aspect_ratio_num = CAccessors.AVFrame_sample_aspect_ratio_num = Module.cwrap("AVFrame_sample_aspect_ratio_num", "number", ["number"]);
                            var AVFrame_sample_aspect_ratio_den = Module.AVFrame_sample_aspect_ratio_den = CAccessors.AVFrame_sample_aspect_ratio_den = Module.cwrap("AVFrame_sample_aspect_ratio_den", "number", ["number"]);
                            var AVFrame_sample_aspect_ratio_s = Module.AVFrame_sample_aspect_ratio_s = CAccessors.AVFrame_sample_aspect_ratio_s = Module.cwrap("AVFrame_sample_aspect_ratio_s", null, ["number", "number", "number"]);
                            var AVCodecContext_framerate_num = Module.AVCodecContext_framerate_num = CAccessors.AVCodecContext_framerate_num = Module.cwrap("AVCodecContext_framerate_num", "number", ["number"]);
                            var AVCodecContext_framerate_den = Module.AVCodecContext_framerate_den = CAccessors.AVCodecContext_framerate_den = Module.cwrap("AVCodecContext_framerate_den", "number", ["number"]);
                            var AVCodecContext_framerate_num_s = Module.AVCodecContext_framerate_num_s = CAccessors.AVCodecContext_framerate_num_s = Module.cwrap("AVCodecContext_framerate_num_s", null, ["number", "number"]);
                            var AVCodecContext_framerate_den_s = Module.AVCodecContext_framerate_den_s = CAccessors.AVCodecContext_framerate_den_s = Module.cwrap("AVCodecContext_framerate_den_s", null, ["number", "number"]);
                            var AVCodecContext_framerate_s = Module.AVCodecContext_framerate_s = CAccessors.AVCodecContext_framerate_s = Module.cwrap("AVCodecContext_framerate_s", null, ["number", "number", "number"]);
                            var AVCodecContext_sample_aspect_ratio_num = Module.AVCodecContext_sample_aspect_ratio_num = CAccessors.AVCodecContext_sample_aspect_ratio_num = Module.cwrap("AVCodecContext_sample_aspect_ratio_num", "number", ["number"]);
                            var AVCodecContext_sample_aspect_ratio_den = Module.AVCodecContext_sample_aspect_ratio_den = CAccessors.AVCodecContext_sample_aspect_ratio_den = Module.cwrap("AVCodecContext_sample_aspect_ratio_den", "number", ["number"]);
                            var AVCodecContext_sample_aspect_ratio_num_s = Module.AVCodecContext_sample_aspect_ratio_num_s = CAccessors.AVCodecContext_sample_aspect_ratio_num_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_num_s", null, ["number", "number"]);
                            var AVCodecContext_sample_aspect_ratio_den_s = Module.AVCodecContext_sample_aspect_ratio_den_s = CAccessors.AVCodecContext_sample_aspect_ratio_den_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_den_s", null, ["number", "number"]);
                            var AVCodecContext_sample_aspect_ratio_s = Module.AVCodecContext_sample_aspect_ratio_s = CAccessors.AVCodecContext_sample_aspect_ratio_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_s", null, ["number", "number", "number"]);
                            var AVCodecContext_time_base_s = Module.AVCodecContext_time_base_s = CAccessors.AVCodecContext_time_base_s = Module.cwrap("AVCodecContext_time_base_s", null, ["number", "number", "number"]);
                            var AVStream_time_base_num = Module.AVStream_time_base_num = CAccessors.AVStream_time_base_num = Module.cwrap("AVStream_time_base_num", "number", ["number"]);
                            var AVStream_time_base_den = Module.AVStream_time_base_den = CAccessors.AVStream_time_base_den = Module.cwrap("AVStream_time_base_den", "number", ["number"]);
                            var AVStream_time_base_s = Module.AVStream_time_base_s = CAccessors.AVStream_time_base_s = Module.cwrap("AVStream_time_base_s", null, ["number", "number", "number"]);
                            var AVPacketSideData_data = Module.AVPacketSideData_data = CAccessors.AVPacketSideData_data = Module.cwrap("AVPacketSideData_data", "number", ["number", "number"]);
                            var AVPacketSideData_size = Module.AVPacketSideData_size = CAccessors.AVPacketSideData_size = Module.cwrap("AVPacketSideData_size", "number", ["number", "number"]);
                            var AVPacketSideData_type = Module.AVPacketSideData_type = CAccessors.AVPacketSideData_type = Module.cwrap("AVPacketSideData_type", "number", ["number", "number"]);
                            var AVPixFmtDescriptor_comp_depth = Module.AVPixFmtDescriptor_comp_depth = CAccessors.AVPixFmtDescriptor_comp_depth = Module.cwrap("AVPixFmtDescriptor_comp_depth", "number", ["number", "number"]);
                            var ff_error = Module.ff_error = CAccessors.ff_error = Module.cwrap("ff_error", "string", ["number"]);
                            var ff_nothing = Module.ff_nothing = CAccessors.ff_nothing = Module.cwrap("ff_nothing", null, [], {
                                async: true
                            });
                            Module.ff_nothing = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return ff_nothing.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var calloc = Module.calloc = CAccessors.calloc = Module.cwrap("calloc", "number", ["number", "number"]);
                            var close = Module.close = CAccessors.close = Module.cwrap("close", "number", ["number"]);
                            var dup2 = Module.dup2 = CAccessors.dup2 = Module.cwrap("dup2", "number", ["number", "number"]);
                            var free = Module.free = CAccessors.free = Module.cwrap("free", null, ["number"]);
                            var malloc = Module.malloc = CAccessors.malloc = Module.cwrap("malloc", "number", ["number"]);
                            var mallinfo_uordblks = Module.mallinfo_uordblks = CAccessors.mallinfo_uordblks = Module.cwrap("mallinfo_uordblks", "number", []);
                            var open = Module.open = CAccessors.open = Module.cwrap("open", "number", ["string", "number", "number"]);
                            var strerror = Module.strerror = CAccessors.strerror = Module.cwrap("strerror", "string", ["number"]);
                            var libavjs_with_swscale = Module.libavjs_with_swscale = CAccessors.libavjs_with_swscale = Module.cwrap("libavjs_with_swscale", "number", []);
                            var libavjs_create_main_thread = Module.libavjs_create_main_thread = CAccessors.libavjs_create_main_thread = Module.cwrap("libavjs_create_main_thread", "number", []);
                            var ffmpeg_main = Module.ffmpeg_main = CAccessors.ffmpeg_main = Module.cwrap("ffmpeg_main", "number", ["number", "number"], {
                                async: true
                            });
                            Module.ffmpeg_main = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return ffmpeg_main.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var ffprobe_main = Module.ffprobe_main = CAccessors.ffprobe_main = Module.cwrap("ffprobe_main", "number", ["number", "number"], {
                                async: true
                            });
                            Module.ffprobe_main = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return ffprobe_main.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var AVFrame_channel_layout = Module.AVFrame_channel_layout = CAccessors.AVFrame_channel_layout = Module.cwrap("AVFrame_channel_layout", "number", ["number"]);
                            var AVFrame_channel_layout_s = Module.AVFrame_channel_layout_s = CAccessors.AVFrame_channel_layout_s = Module.cwrap("AVFrame_channel_layout_s", null, ["number", "number"]);
                            var AVFrame_channel_layouthi = Module.AVFrame_channel_layouthi = CAccessors.AVFrame_channel_layouthi = Module.cwrap("AVFrame_channel_layouthi", "number", ["number"]);
                            var AVFrame_channel_layouthi_s = Module.AVFrame_channel_layouthi_s = CAccessors.AVFrame_channel_layouthi_s = Module.cwrap("AVFrame_channel_layouthi_s", null, ["number", "number"]);
                            var AVFrame_channels = Module.AVFrame_channels = CAccessors.AVFrame_channels = Module.cwrap("AVFrame_channels", "number", ["number"]);
                            var AVFrame_channels_s = Module.AVFrame_channels_s = CAccessors.AVFrame_channels_s = Module.cwrap("AVFrame_channels_s", null, ["number", "number"]);
                            var AVFrame_channel_layoutmask = Module.AVFrame_channel_layoutmask = CAccessors.AVFrame_channel_layoutmask = Module.cwrap("AVFrame_channel_layoutmask", "number", ["number"]);
                            var AVFrame_channel_layoutmask_s = Module.AVFrame_channel_layoutmask_s = CAccessors.AVFrame_channel_layoutmask_s = Module.cwrap("AVFrame_channel_layoutmask_s", null, ["number", "number"]);
                            var AVFrame_ch_layout_nb_channels = Module.AVFrame_ch_layout_nb_channels = CAccessors.AVFrame_ch_layout_nb_channels = Module.cwrap("AVFrame_ch_layout_nb_channels", "number", ["number"]);
                            var AVFrame_ch_layout_nb_channels_s = Module.AVFrame_ch_layout_nb_channels_s = CAccessors.AVFrame_ch_layout_nb_channels_s = Module.cwrap("AVFrame_ch_layout_nb_channels_s", null, ["number", "number"]);
                            var AVFrame_data_a = Module.AVFrame_data_a = CAccessors.AVFrame_data_a = Module.cwrap("AVFrame_data_a", "number", ["number", "number"]);
                            var AVFrame_data_a_s = Module.AVFrame_data_a_s = CAccessors.AVFrame_data_a_s = Module.cwrap("AVFrame_data_a_s", null, ["number", "number", "number"]);
                            var AVFrame_format = Module.AVFrame_format = CAccessors.AVFrame_format = Module.cwrap("AVFrame_format", "number", ["number"]);
                            var AVFrame_format_s = Module.AVFrame_format_s = CAccessors.AVFrame_format_s = Module.cwrap("AVFrame_format_s", null, ["number", "number"]);
                            var AVFrame_height = Module.AVFrame_height = CAccessors.AVFrame_height = Module.cwrap("AVFrame_height", "number", ["number"]);
                            var AVFrame_height_s = Module.AVFrame_height_s = CAccessors.AVFrame_height_s = Module.cwrap("AVFrame_height_s", null, ["number", "number"]);
                            var AVFrame_key_frame = Module.AVFrame_key_frame = CAccessors.AVFrame_key_frame = Module.cwrap("AVFrame_key_frame", "number", ["number"]);
                            var AVFrame_key_frame_s = Module.AVFrame_key_frame_s = CAccessors.AVFrame_key_frame_s = Module.cwrap("AVFrame_key_frame_s", null, ["number", "number"]);
                            var AVFrame_linesize_a = Module.AVFrame_linesize_a = CAccessors.AVFrame_linesize_a = Module.cwrap("AVFrame_linesize_a", "number", ["number", "number"]);
                            var AVFrame_linesize_a_s = Module.AVFrame_linesize_a_s = CAccessors.AVFrame_linesize_a_s = Module.cwrap("AVFrame_linesize_a_s", null, ["number", "number", "number"]);
                            var AVFrame_nb_samples = Module.AVFrame_nb_samples = CAccessors.AVFrame_nb_samples = Module.cwrap("AVFrame_nb_samples", "number", ["number"]);
                            var AVFrame_nb_samples_s = Module.AVFrame_nb_samples_s = CAccessors.AVFrame_nb_samples_s = Module.cwrap("AVFrame_nb_samples_s", null, ["number", "number"]);
                            var AVFrame_pict_type = Module.AVFrame_pict_type = CAccessors.AVFrame_pict_type = Module.cwrap("AVFrame_pict_type", "number", ["number"]);
                            var AVFrame_pict_type_s = Module.AVFrame_pict_type_s = CAccessors.AVFrame_pict_type_s = Module.cwrap("AVFrame_pict_type_s", null, ["number", "number"]);
                            var AVFrame_pts = Module.AVFrame_pts = CAccessors.AVFrame_pts = Module.cwrap("AVFrame_pts", "number", ["number"]);
                            var AVFrame_pts_s = Module.AVFrame_pts_s = CAccessors.AVFrame_pts_s = Module.cwrap("AVFrame_pts_s", null, ["number", "number"]);
                            var AVFrame_ptshi = Module.AVFrame_ptshi = CAccessors.AVFrame_ptshi = Module.cwrap("AVFrame_ptshi", "number", ["number"]);
                            var AVFrame_ptshi_s = Module.AVFrame_ptshi_s = CAccessors.AVFrame_ptshi_s = Module.cwrap("AVFrame_ptshi_s", null, ["number", "number"]);
                            var AVFrame_sample_rate = Module.AVFrame_sample_rate = CAccessors.AVFrame_sample_rate = Module.cwrap("AVFrame_sample_rate", "number", ["number"]);
                            var AVFrame_sample_rate_s = Module.AVFrame_sample_rate_s = CAccessors.AVFrame_sample_rate_s = Module.cwrap("AVFrame_sample_rate_s", null, ["number", "number"]);
                            var AVFrame_width = Module.AVFrame_width = CAccessors.AVFrame_width = Module.cwrap("AVFrame_width", "number", ["number"]);
                            var AVFrame_width_s = Module.AVFrame_width_s = CAccessors.AVFrame_width_s = Module.cwrap("AVFrame_width_s", null, ["number", "number"]);
                            var AVPixFmtDescriptor_flags = Module.AVPixFmtDescriptor_flags = CAccessors.AVPixFmtDescriptor_flags = Module.cwrap("AVPixFmtDescriptor_flags", "number", ["number"]);
                            var AVPixFmtDescriptor_flags_s = Module.AVPixFmtDescriptor_flags_s = CAccessors.AVPixFmtDescriptor_flags_s = Module.cwrap("AVPixFmtDescriptor_flags_s", null, ["number", "number"]);
                            var AVPixFmtDescriptor_log2_chroma_h = Module.AVPixFmtDescriptor_log2_chroma_h = CAccessors.AVPixFmtDescriptor_log2_chroma_h = Module.cwrap("AVPixFmtDescriptor_log2_chroma_h", "number", ["number"]);
                            var AVPixFmtDescriptor_log2_chroma_h_s = Module.AVPixFmtDescriptor_log2_chroma_h_s = CAccessors.AVPixFmtDescriptor_log2_chroma_h_s = Module.cwrap("AVPixFmtDescriptor_log2_chroma_h_s", null, ["number", "number"]);
                            var AVPixFmtDescriptor_log2_chroma_w = Module.AVPixFmtDescriptor_log2_chroma_w = CAccessors.AVPixFmtDescriptor_log2_chroma_w = Module.cwrap("AVPixFmtDescriptor_log2_chroma_w", "number", ["number"]);
                            var AVPixFmtDescriptor_log2_chroma_w_s = Module.AVPixFmtDescriptor_log2_chroma_w_s = CAccessors.AVPixFmtDescriptor_log2_chroma_w_s = Module.cwrap("AVPixFmtDescriptor_log2_chroma_w_s", null, ["number", "number"]);
                            var AVPixFmtDescriptor_nb_components = Module.AVPixFmtDescriptor_nb_components = CAccessors.AVPixFmtDescriptor_nb_components = Module.cwrap("AVPixFmtDescriptor_nb_components", "number", ["number"]);
                            var AVPixFmtDescriptor_nb_components_s = Module.AVPixFmtDescriptor_nb_components_s = CAccessors.AVPixFmtDescriptor_nb_components_s = Module.cwrap("AVPixFmtDescriptor_nb_components_s", null, ["number", "number"]);
                            var AVCodec_sample_fmts = Module.AVCodec_sample_fmts = CAccessors.AVCodec_sample_fmts = Module.cwrap("AVCodec_sample_fmts", "number", ["number"]);
                            var AVCodec_sample_fmts_s = Module.AVCodec_sample_fmts_s = CAccessors.AVCodec_sample_fmts_s = Module.cwrap("AVCodec_sample_fmts_s", null, ["number", "number"]);
                            var AVCodec_sample_fmts_a = Module.AVCodec_sample_fmts_a = CAccessors.AVCodec_sample_fmts_a = Module.cwrap("AVCodec_sample_fmts_a", "number", ["number", "number"]);
                            var AVCodec_sample_fmts_a_s = Module.AVCodec_sample_fmts_a_s = CAccessors.AVCodec_sample_fmts_a_s = Module.cwrap("AVCodec_sample_fmts_a_s", null, ["number", "number", "number"]);
                            var AVCodec_supported_samplerates = Module.AVCodec_supported_samplerates = CAccessors.AVCodec_supported_samplerates = Module.cwrap("AVCodec_supported_samplerates", "number", ["number"]);
                            var AVCodec_supported_samplerates_s = Module.AVCodec_supported_samplerates_s = CAccessors.AVCodec_supported_samplerates_s = Module.cwrap("AVCodec_supported_samplerates_s", null, ["number", "number"]);
                            var AVCodec_supported_samplerates_a = Module.AVCodec_supported_samplerates_a = CAccessors.AVCodec_supported_samplerates_a = Module.cwrap("AVCodec_supported_samplerates_a", "number", ["number", "number"]);
                            var AVCodec_supported_samplerates_a_s = Module.AVCodec_supported_samplerates_a_s = CAccessors.AVCodec_supported_samplerates_a_s = Module.cwrap("AVCodec_supported_samplerates_a_s", null, ["number", "number", "number"]);
                            var AVCodec_type = Module.AVCodec_type = CAccessors.AVCodec_type = Module.cwrap("AVCodec_type", "number", ["number"]);
                            var AVCodec_type_s = Module.AVCodec_type_s = CAccessors.AVCodec_type_s = Module.cwrap("AVCodec_type_s", null, ["number", "number"]);
                            var AVCodecContext_codec_id = Module.AVCodecContext_codec_id = CAccessors.AVCodecContext_codec_id = Module.cwrap("AVCodecContext_codec_id", "number", ["number"]);
                            var AVCodecContext_codec_id_s = Module.AVCodecContext_codec_id_s = CAccessors.AVCodecContext_codec_id_s = Module.cwrap("AVCodecContext_codec_id_s", null, ["number", "number"]);
                            var AVCodecContext_codec_type = Module.AVCodecContext_codec_type = CAccessors.AVCodecContext_codec_type = Module.cwrap("AVCodecContext_codec_type", "number", ["number"]);
                            var AVCodecContext_codec_type_s = Module.AVCodecContext_codec_type_s = CAccessors.AVCodecContext_codec_type_s = Module.cwrap("AVCodecContext_codec_type_s", null, ["number", "number"]);
                            var AVCodecContext_bit_rate = Module.AVCodecContext_bit_rate = CAccessors.AVCodecContext_bit_rate = Module.cwrap("AVCodecContext_bit_rate", "number", ["number"]);
                            var AVCodecContext_bit_rate_s = Module.AVCodecContext_bit_rate_s = CAccessors.AVCodecContext_bit_rate_s = Module.cwrap("AVCodecContext_bit_rate_s", null, ["number", "number"]);
                            var AVCodecContext_bit_ratehi = Module.AVCodecContext_bit_ratehi = CAccessors.AVCodecContext_bit_ratehi = Module.cwrap("AVCodecContext_bit_ratehi", "number", ["number"]);
                            var AVCodecContext_bit_ratehi_s = Module.AVCodecContext_bit_ratehi_s = CAccessors.AVCodecContext_bit_ratehi_s = Module.cwrap("AVCodecContext_bit_ratehi_s", null, ["number", "number"]);
                            var AVCodecContext_channel_layout = Module.AVCodecContext_channel_layout = CAccessors.AVCodecContext_channel_layout = Module.cwrap("AVCodecContext_channel_layout", "number", ["number"]);
                            var AVCodecContext_channel_layout_s = Module.AVCodecContext_channel_layout_s = CAccessors.AVCodecContext_channel_layout_s = Module.cwrap("AVCodecContext_channel_layout_s", null, ["number", "number"]);
                            var AVCodecContext_channel_layouthi = Module.AVCodecContext_channel_layouthi = CAccessors.AVCodecContext_channel_layouthi = Module.cwrap("AVCodecContext_channel_layouthi", "number", ["number"]);
                            var AVCodecContext_channel_layouthi_s = Module.AVCodecContext_channel_layouthi_s = CAccessors.AVCodecContext_channel_layouthi_s = Module.cwrap("AVCodecContext_channel_layouthi_s", null, ["number", "number"]);
                            var AVCodecContext_channels = Module.AVCodecContext_channels = CAccessors.AVCodecContext_channels = Module.cwrap("AVCodecContext_channels", "number", ["number"]);
                            var AVCodecContext_channels_s = Module.AVCodecContext_channels_s = CAccessors.AVCodecContext_channels_s = Module.cwrap("AVCodecContext_channels_s", null, ["number", "number"]);
                            var AVCodecContext_channel_layoutmask = Module.AVCodecContext_channel_layoutmask = CAccessors.AVCodecContext_channel_layoutmask = Module.cwrap("AVCodecContext_channel_layoutmask", "number", ["number"]);
                            var AVCodecContext_channel_layoutmask_s = Module.AVCodecContext_channel_layoutmask_s = CAccessors.AVCodecContext_channel_layoutmask_s = Module.cwrap("AVCodecContext_channel_layoutmask_s", null, ["number", "number"]);
                            var AVCodecContext_ch_layout_nb_channels = Module.AVCodecContext_ch_layout_nb_channels = CAccessors.AVCodecContext_ch_layout_nb_channels = Module.cwrap("AVCodecContext_ch_layout_nb_channels", "number", ["number"]);
                            var AVCodecContext_ch_layout_nb_channels_s = Module.AVCodecContext_ch_layout_nb_channels_s = CAccessors.AVCodecContext_ch_layout_nb_channels_s = Module.cwrap("AVCodecContext_ch_layout_nb_channels_s", null, ["number", "number"]);
                            var AVCodecContext_extradata = Module.AVCodecContext_extradata = CAccessors.AVCodecContext_extradata = Module.cwrap("AVCodecContext_extradata", "number", ["number"]);
                            var AVCodecContext_extradata_s = Module.AVCodecContext_extradata_s = CAccessors.AVCodecContext_extradata_s = Module.cwrap("AVCodecContext_extradata_s", null, ["number", "number"]);
                            var AVCodecContext_extradata_size = Module.AVCodecContext_extradata_size = CAccessors.AVCodecContext_extradata_size = Module.cwrap("AVCodecContext_extradata_size", "number", ["number"]);
                            var AVCodecContext_extradata_size_s = Module.AVCodecContext_extradata_size_s = CAccessors.AVCodecContext_extradata_size_s = Module.cwrap("AVCodecContext_extradata_size_s", null, ["number", "number"]);
                            var AVCodecContext_frame_size = Module.AVCodecContext_frame_size = CAccessors.AVCodecContext_frame_size = Module.cwrap("AVCodecContext_frame_size", "number", ["number"]);
                            var AVCodecContext_frame_size_s = Module.AVCodecContext_frame_size_s = CAccessors.AVCodecContext_frame_size_s = Module.cwrap("AVCodecContext_frame_size_s", null, ["number", "number"]);
                            var AVCodecContext_gop_size = Module.AVCodecContext_gop_size = CAccessors.AVCodecContext_gop_size = Module.cwrap("AVCodecContext_gop_size", "number", ["number"]);
                            var AVCodecContext_gop_size_s = Module.AVCodecContext_gop_size_s = CAccessors.AVCodecContext_gop_size_s = Module.cwrap("AVCodecContext_gop_size_s", null, ["number", "number"]);
                            var AVCodecContext_height = Module.AVCodecContext_height = CAccessors.AVCodecContext_height = Module.cwrap("AVCodecContext_height", "number", ["number"]);
                            var AVCodecContext_height_s = Module.AVCodecContext_height_s = CAccessors.AVCodecContext_height_s = Module.cwrap("AVCodecContext_height_s", null, ["number", "number"]);
                            var AVCodecContext_keyint_min = Module.AVCodecContext_keyint_min = CAccessors.AVCodecContext_keyint_min = Module.cwrap("AVCodecContext_keyint_min", "number", ["number"]);
                            var AVCodecContext_keyint_min_s = Module.AVCodecContext_keyint_min_s = CAccessors.AVCodecContext_keyint_min_s = Module.cwrap("AVCodecContext_keyint_min_s", null, ["number", "number"]);
                            var AVCodecContext_level = Module.AVCodecContext_level = CAccessors.AVCodecContext_level = Module.cwrap("AVCodecContext_level", "number", ["number"]);
                            var AVCodecContext_level_s = Module.AVCodecContext_level_s = CAccessors.AVCodecContext_level_s = Module.cwrap("AVCodecContext_level_s", null, ["number", "number"]);
                            var AVCodecContext_max_b_frames = Module.AVCodecContext_max_b_frames = CAccessors.AVCodecContext_max_b_frames = Module.cwrap("AVCodecContext_max_b_frames", "number", ["number"]);
                            var AVCodecContext_max_b_frames_s = Module.AVCodecContext_max_b_frames_s = CAccessors.AVCodecContext_max_b_frames_s = Module.cwrap("AVCodecContext_max_b_frames_s", null, ["number", "number"]);
                            var AVCodecContext_pix_fmt = Module.AVCodecContext_pix_fmt = CAccessors.AVCodecContext_pix_fmt = Module.cwrap("AVCodecContext_pix_fmt", "number", ["number"]);
                            var AVCodecContext_pix_fmt_s = Module.AVCodecContext_pix_fmt_s = CAccessors.AVCodecContext_pix_fmt_s = Module.cwrap("AVCodecContext_pix_fmt_s", null, ["number", "number"]);
                            var AVCodecContext_profile = Module.AVCodecContext_profile = CAccessors.AVCodecContext_profile = Module.cwrap("AVCodecContext_profile", "number", ["number"]);
                            var AVCodecContext_profile_s = Module.AVCodecContext_profile_s = CAccessors.AVCodecContext_profile_s = Module.cwrap("AVCodecContext_profile_s", null, ["number", "number"]);
                            var AVCodecContext_rc_max_rate = Module.AVCodecContext_rc_max_rate = CAccessors.AVCodecContext_rc_max_rate = Module.cwrap("AVCodecContext_rc_max_rate", "number", ["number"]);
                            var AVCodecContext_rc_max_rate_s = Module.AVCodecContext_rc_max_rate_s = CAccessors.AVCodecContext_rc_max_rate_s = Module.cwrap("AVCodecContext_rc_max_rate_s", null, ["number", "number"]);
                            var AVCodecContext_rc_max_ratehi = Module.AVCodecContext_rc_max_ratehi = CAccessors.AVCodecContext_rc_max_ratehi = Module.cwrap("AVCodecContext_rc_max_ratehi", "number", ["number"]);
                            var AVCodecContext_rc_max_ratehi_s = Module.AVCodecContext_rc_max_ratehi_s = CAccessors.AVCodecContext_rc_max_ratehi_s = Module.cwrap("AVCodecContext_rc_max_ratehi_s", null, ["number", "number"]);
                            var AVCodecContext_rc_min_rate = Module.AVCodecContext_rc_min_rate = CAccessors.AVCodecContext_rc_min_rate = Module.cwrap("AVCodecContext_rc_min_rate", "number", ["number"]);
                            var AVCodecContext_rc_min_rate_s = Module.AVCodecContext_rc_min_rate_s = CAccessors.AVCodecContext_rc_min_rate_s = Module.cwrap("AVCodecContext_rc_min_rate_s", null, ["number", "number"]);
                            var AVCodecContext_rc_min_ratehi = Module.AVCodecContext_rc_min_ratehi = CAccessors.AVCodecContext_rc_min_ratehi = Module.cwrap("AVCodecContext_rc_min_ratehi", "number", ["number"]);
                            var AVCodecContext_rc_min_ratehi_s = Module.AVCodecContext_rc_min_ratehi_s = CAccessors.AVCodecContext_rc_min_ratehi_s = Module.cwrap("AVCodecContext_rc_min_ratehi_s", null, ["number", "number"]);
                            var AVCodecContext_sample_fmt = Module.AVCodecContext_sample_fmt = CAccessors.AVCodecContext_sample_fmt = Module.cwrap("AVCodecContext_sample_fmt", "number", ["number"]);
                            var AVCodecContext_sample_fmt_s = Module.AVCodecContext_sample_fmt_s = CAccessors.AVCodecContext_sample_fmt_s = Module.cwrap("AVCodecContext_sample_fmt_s", null, ["number", "number"]);
                            var AVCodecContext_sample_rate = Module.AVCodecContext_sample_rate = CAccessors.AVCodecContext_sample_rate = Module.cwrap("AVCodecContext_sample_rate", "number", ["number"]);
                            var AVCodecContext_sample_rate_s = Module.AVCodecContext_sample_rate_s = CAccessors.AVCodecContext_sample_rate_s = Module.cwrap("AVCodecContext_sample_rate_s", null, ["number", "number"]);
                            var AVCodecContext_qmax = Module.AVCodecContext_qmax = CAccessors.AVCodecContext_qmax = Module.cwrap("AVCodecContext_qmax", "number", ["number"]);
                            var AVCodecContext_qmax_s = Module.AVCodecContext_qmax_s = CAccessors.AVCodecContext_qmax_s = Module.cwrap("AVCodecContext_qmax_s", null, ["number", "number"]);
                            var AVCodecContext_qmin = Module.AVCodecContext_qmin = CAccessors.AVCodecContext_qmin = Module.cwrap("AVCodecContext_qmin", "number", ["number"]);
                            var AVCodecContext_qmin_s = Module.AVCodecContext_qmin_s = CAccessors.AVCodecContext_qmin_s = Module.cwrap("AVCodecContext_qmin_s", null, ["number", "number"]);
                            var AVCodecContext_width = Module.AVCodecContext_width = CAccessors.AVCodecContext_width = Module.cwrap("AVCodecContext_width", "number", ["number"]);
                            var AVCodecContext_width_s = Module.AVCodecContext_width_s = CAccessors.AVCodecContext_width_s = Module.cwrap("AVCodecContext_width_s", null, ["number", "number"]);
                            var AVCodecDescriptor_id = Module.AVCodecDescriptor_id = CAccessors.AVCodecDescriptor_id = Module.cwrap("AVCodecDescriptor_id", "number", ["number"]);
                            var AVCodecDescriptor_id_s = Module.AVCodecDescriptor_id_s = CAccessors.AVCodecDescriptor_id_s = Module.cwrap("AVCodecDescriptor_id_s", null, ["number", "number"]);
                            var AVCodecDescriptor_long_name = Module.AVCodecDescriptor_long_name = CAccessors.AVCodecDescriptor_long_name = Module.cwrap("AVCodecDescriptor_long_name", "number", ["number"]);
                            var AVCodecDescriptor_long_name_s = Module.AVCodecDescriptor_long_name_s = CAccessors.AVCodecDescriptor_long_name_s = Module.cwrap("AVCodecDescriptor_long_name_s", null, ["number", "number"]);
                            var AVCodecDescriptor_mime_types_a = Module.AVCodecDescriptor_mime_types_a = CAccessors.AVCodecDescriptor_mime_types_a = Module.cwrap("AVCodecDescriptor_mime_types_a", "number", ["number", "number"]);
                            var AVCodecDescriptor_mime_types_a_s = Module.AVCodecDescriptor_mime_types_a_s = CAccessors.AVCodecDescriptor_mime_types_a_s = Module.cwrap("AVCodecDescriptor_mime_types_a_s", null, ["number", "number", "number"]);
                            var AVCodecDescriptor_name = Module.AVCodecDescriptor_name = CAccessors.AVCodecDescriptor_name = Module.cwrap("AVCodecDescriptor_name", "number", ["number"]);
                            var AVCodecDescriptor_name_s = Module.AVCodecDescriptor_name_s = CAccessors.AVCodecDescriptor_name_s = Module.cwrap("AVCodecDescriptor_name_s", null, ["number", "number"]);
                            var AVCodecDescriptor_props = Module.AVCodecDescriptor_props = CAccessors.AVCodecDescriptor_props = Module.cwrap("AVCodecDescriptor_props", "number", ["number"]);
                            var AVCodecDescriptor_props_s = Module.AVCodecDescriptor_props_s = CAccessors.AVCodecDescriptor_props_s = Module.cwrap("AVCodecDescriptor_props_s", null, ["number", "number"]);
                            var AVCodecDescriptor_type = Module.AVCodecDescriptor_type = CAccessors.AVCodecDescriptor_type = Module.cwrap("AVCodecDescriptor_type", "number", ["number"]);
                            var AVCodecDescriptor_type_s = Module.AVCodecDescriptor_type_s = CAccessors.AVCodecDescriptor_type_s = Module.cwrap("AVCodecDescriptor_type_s", null, ["number", "number"]);
                            var AVCodecParameters_codec_id = Module.AVCodecParameters_codec_id = CAccessors.AVCodecParameters_codec_id = Module.cwrap("AVCodecParameters_codec_id", "number", ["number"]);
                            var AVCodecParameters_codec_id_s = Module.AVCodecParameters_codec_id_s = CAccessors.AVCodecParameters_codec_id_s = Module.cwrap("AVCodecParameters_codec_id_s", null, ["number", "number"]);
                            var AVCodecParameters_codec_tag = Module.AVCodecParameters_codec_tag = CAccessors.AVCodecParameters_codec_tag = Module.cwrap("AVCodecParameters_codec_tag", "number", ["number"]);
                            var AVCodecParameters_codec_tag_s = Module.AVCodecParameters_codec_tag_s = CAccessors.AVCodecParameters_codec_tag_s = Module.cwrap("AVCodecParameters_codec_tag_s", null, ["number", "number"]);
                            var AVCodecParameters_codec_type = Module.AVCodecParameters_codec_type = CAccessors.AVCodecParameters_codec_type = Module.cwrap("AVCodecParameters_codec_type", "number", ["number"]);
                            var AVCodecParameters_codec_type_s = Module.AVCodecParameters_codec_type_s = CAccessors.AVCodecParameters_codec_type_s = Module.cwrap("AVCodecParameters_codec_type_s", null, ["number", "number"]);
                            var AVCodecParameters_extradata = Module.AVCodecParameters_extradata = CAccessors.AVCodecParameters_extradata = Module.cwrap("AVCodecParameters_extradata", "number", ["number"]);
                            var AVCodecParameters_extradata_s = Module.AVCodecParameters_extradata_s = CAccessors.AVCodecParameters_extradata_s = Module.cwrap("AVCodecParameters_extradata_s", null, ["number", "number"]);
                            var AVCodecParameters_extradata_size = Module.AVCodecParameters_extradata_size = CAccessors.AVCodecParameters_extradata_size = Module.cwrap("AVCodecParameters_extradata_size", "number", ["number"]);
                            var AVCodecParameters_extradata_size_s = Module.AVCodecParameters_extradata_size_s = CAccessors.AVCodecParameters_extradata_size_s = Module.cwrap("AVCodecParameters_extradata_size_s", null, ["number", "number"]);
                            var AVCodecParameters_format = Module.AVCodecParameters_format = CAccessors.AVCodecParameters_format = Module.cwrap("AVCodecParameters_format", "number", ["number"]);
                            var AVCodecParameters_format_s = Module.AVCodecParameters_format_s = CAccessors.AVCodecParameters_format_s = Module.cwrap("AVCodecParameters_format_s", null, ["number", "number"]);
                            var AVCodecParameters_bit_rate = Module.AVCodecParameters_bit_rate = CAccessors.AVCodecParameters_bit_rate = Module.cwrap("AVCodecParameters_bit_rate", "number", ["number"]);
                            var AVCodecParameters_bit_rate_s = Module.AVCodecParameters_bit_rate_s = CAccessors.AVCodecParameters_bit_rate_s = Module.cwrap("AVCodecParameters_bit_rate_s", null, ["number", "number"]);
                            var AVCodecParameters_profile = Module.AVCodecParameters_profile = CAccessors.AVCodecParameters_profile = Module.cwrap("AVCodecParameters_profile", "number", ["number"]);
                            var AVCodecParameters_profile_s = Module.AVCodecParameters_profile_s = CAccessors.AVCodecParameters_profile_s = Module.cwrap("AVCodecParameters_profile_s", null, ["number", "number"]);
                            var AVCodecParameters_level = Module.AVCodecParameters_level = CAccessors.AVCodecParameters_level = Module.cwrap("AVCodecParameters_level", "number", ["number"]);
                            var AVCodecParameters_level_s = Module.AVCodecParameters_level_s = CAccessors.AVCodecParameters_level_s = Module.cwrap("AVCodecParameters_level_s", null, ["number", "number"]);
                            var AVCodecParameters_width = Module.AVCodecParameters_width = CAccessors.AVCodecParameters_width = Module.cwrap("AVCodecParameters_width", "number", ["number"]);
                            var AVCodecParameters_width_s = Module.AVCodecParameters_width_s = CAccessors.AVCodecParameters_width_s = Module.cwrap("AVCodecParameters_width_s", null, ["number", "number"]);
                            var AVCodecParameters_height = Module.AVCodecParameters_height = CAccessors.AVCodecParameters_height = Module.cwrap("AVCodecParameters_height", "number", ["number"]);
                            var AVCodecParameters_height_s = Module.AVCodecParameters_height_s = CAccessors.AVCodecParameters_height_s = Module.cwrap("AVCodecParameters_height_s", null, ["number", "number"]);
                            var AVCodecParameters_color_range = Module.AVCodecParameters_color_range = CAccessors.AVCodecParameters_color_range = Module.cwrap("AVCodecParameters_color_range", "number", ["number"]);
                            var AVCodecParameters_color_range_s = Module.AVCodecParameters_color_range_s = CAccessors.AVCodecParameters_color_range_s = Module.cwrap("AVCodecParameters_color_range_s", null, ["number", "number"]);
                            var AVCodecParameters_color_primaries = Module.AVCodecParameters_color_primaries = CAccessors.AVCodecParameters_color_primaries = Module.cwrap("AVCodecParameters_color_primaries", "number", ["number"]);
                            var AVCodecParameters_color_primaries_s = Module.AVCodecParameters_color_primaries_s = CAccessors.AVCodecParameters_color_primaries_s = Module.cwrap("AVCodecParameters_color_primaries_s", null, ["number", "number"]);
                            var AVCodecParameters_color_trc = Module.AVCodecParameters_color_trc = CAccessors.AVCodecParameters_color_trc = Module.cwrap("AVCodecParameters_color_trc", "number", ["number"]);
                            var AVCodecParameters_color_trc_s = Module.AVCodecParameters_color_trc_s = CAccessors.AVCodecParameters_color_trc_s = Module.cwrap("AVCodecParameters_color_trc_s", null, ["number", "number"]);
                            var AVCodecParameters_color_space = Module.AVCodecParameters_color_space = CAccessors.AVCodecParameters_color_space = Module.cwrap("AVCodecParameters_color_space", "number", ["number"]);
                            var AVCodecParameters_color_space_s = Module.AVCodecParameters_color_space_s = CAccessors.AVCodecParameters_color_space_s = Module.cwrap("AVCodecParameters_color_space_s", null, ["number", "number"]);
                            var AVCodecParameters_chroma_location = Module.AVCodecParameters_chroma_location = CAccessors.AVCodecParameters_chroma_location = Module.cwrap("AVCodecParameters_chroma_location", "number", ["number"]);
                            var AVCodecParameters_chroma_location_s = Module.AVCodecParameters_chroma_location_s = CAccessors.AVCodecParameters_chroma_location_s = Module.cwrap("AVCodecParameters_chroma_location_s", null, ["number", "number"]);
                            var AVCodecParameters_channels = Module.AVCodecParameters_channels = CAccessors.AVCodecParameters_channels = Module.cwrap("AVCodecParameters_channels", "number", ["number"]);
                            var AVCodecParameters_channels_s = Module.AVCodecParameters_channels_s = CAccessors.AVCodecParameters_channels_s = Module.cwrap("AVCodecParameters_channels_s", null, ["number", "number"]);
                            var AVCodecParameters_channel_layoutmask = Module.AVCodecParameters_channel_layoutmask = CAccessors.AVCodecParameters_channel_layoutmask = Module.cwrap("AVCodecParameters_channel_layoutmask", "number", ["number"]);
                            var AVCodecParameters_channel_layoutmask_s = Module.AVCodecParameters_channel_layoutmask_s = CAccessors.AVCodecParameters_channel_layoutmask_s = Module.cwrap("AVCodecParameters_channel_layoutmask_s", null, ["number", "number"]);
                            var AVCodecParameters_ch_layout_nb_channels = Module.AVCodecParameters_ch_layout_nb_channels = CAccessors.AVCodecParameters_ch_layout_nb_channels = Module.cwrap("AVCodecParameters_ch_layout_nb_channels", "number", ["number"]);
                            var AVCodecParameters_ch_layout_nb_channels_s = Module.AVCodecParameters_ch_layout_nb_channels_s = CAccessors.AVCodecParameters_ch_layout_nb_channels_s = Module.cwrap("AVCodecParameters_ch_layout_nb_channels_s", null, ["number", "number"]);
                            var AVCodecParameters_sample_rate = Module.AVCodecParameters_sample_rate = CAccessors.AVCodecParameters_sample_rate = Module.cwrap("AVCodecParameters_sample_rate", "number", ["number"]);
                            var AVCodecParameters_sample_rate_s = Module.AVCodecParameters_sample_rate_s = CAccessors.AVCodecParameters_sample_rate_s = Module.cwrap("AVCodecParameters_sample_rate_s", null, ["number", "number"]);
                            var AVPacket_pos = Module.AVPacket_pos = CAccessors.AVPacket_pos = Module.cwrap("AVPacket_pos", "number", ["number"]);
                            var AVPacket_pos_s = Module.AVPacket_pos_s = CAccessors.AVPacket_pos_s = Module.cwrap("AVPacket_pos_s", null, ["number", "number"]);
                            var AVPacket_poshi = Module.AVPacket_poshi = CAccessors.AVPacket_poshi = Module.cwrap("AVPacket_poshi", "number", ["number"]);
                            var AVPacket_poshi_s = Module.AVPacket_poshi_s = CAccessors.AVPacket_poshi_s = Module.cwrap("AVPacket_poshi_s", null, ["number", "number"]);
                            var AVPacket_pts = Module.AVPacket_pts = CAccessors.AVPacket_pts = Module.cwrap("AVPacket_pts", "number", ["number"]);
                            var AVPacket_pts_s = Module.AVPacket_pts_s = CAccessors.AVPacket_pts_s = Module.cwrap("AVPacket_pts_s", null, ["number", "number"]);
                            var AVPacket_ptshi = Module.AVPacket_ptshi = CAccessors.AVPacket_ptshi = Module.cwrap("AVPacket_ptshi", "number", ["number"]);
                            var AVPacket_ptshi_s = Module.AVPacket_ptshi_s = CAccessors.AVPacket_ptshi_s = Module.cwrap("AVPacket_ptshi_s", null, ["number", "number"]);
                            var AVPacket_dts = Module.AVPacket_dts = CAccessors.AVPacket_dts = Module.cwrap("AVPacket_dts", "number", ["number"]);
                            var AVPacket_dts_s = Module.AVPacket_dts_s = CAccessors.AVPacket_dts_s = Module.cwrap("AVPacket_dts_s", null, ["number", "number"]);
                            var AVPacket_dtshi = Module.AVPacket_dtshi = CAccessors.AVPacket_dtshi = Module.cwrap("AVPacket_dtshi", "number", ["number"]);
                            var AVPacket_dtshi_s = Module.AVPacket_dtshi_s = CAccessors.AVPacket_dtshi_s = Module.cwrap("AVPacket_dtshi_s", null, ["number", "number"]);
                            var AVPacket_data = Module.AVPacket_data = CAccessors.AVPacket_data = Module.cwrap("AVPacket_data", "number", ["number"]);
                            var AVPacket_data_s = Module.AVPacket_data_s = CAccessors.AVPacket_data_s = Module.cwrap("AVPacket_data_s", null, ["number", "number"]);
                            var AVPacket_size = Module.AVPacket_size = CAccessors.AVPacket_size = Module.cwrap("AVPacket_size", "number", ["number"]);
                            var AVPacket_size_s = Module.AVPacket_size_s = CAccessors.AVPacket_size_s = Module.cwrap("AVPacket_size_s", null, ["number", "number"]);
                            var AVPacket_stream_index = Module.AVPacket_stream_index = CAccessors.AVPacket_stream_index = Module.cwrap("AVPacket_stream_index", "number", ["number"]);
                            var AVPacket_stream_index_s = Module.AVPacket_stream_index_s = CAccessors.AVPacket_stream_index_s = Module.cwrap("AVPacket_stream_index_s", null, ["number", "number"]);
                            var AVPacket_flags = Module.AVPacket_flags = CAccessors.AVPacket_flags = Module.cwrap("AVPacket_flags", "number", ["number"]);
                            var AVPacket_flags_s = Module.AVPacket_flags_s = CAccessors.AVPacket_flags_s = Module.cwrap("AVPacket_flags_s", null, ["number", "number"]);
                            var AVPacket_side_data = Module.AVPacket_side_data = CAccessors.AVPacket_side_data = Module.cwrap("AVPacket_side_data", "number", ["number"]);
                            var AVPacket_side_data_s = Module.AVPacket_side_data_s = CAccessors.AVPacket_side_data_s = Module.cwrap("AVPacket_side_data_s", null, ["number", "number"]);
                            var AVPacket_side_data_elems = Module.AVPacket_side_data_elems = CAccessors.AVPacket_side_data_elems = Module.cwrap("AVPacket_side_data_elems", "number", ["number"]);
                            var AVPacket_side_data_elems_s = Module.AVPacket_side_data_elems_s = CAccessors.AVPacket_side_data_elems_s = Module.cwrap("AVPacket_side_data_elems_s", null, ["number", "number"]);
                            var AVPacket_duration = Module.AVPacket_duration = CAccessors.AVPacket_duration = Module.cwrap("AVPacket_duration", "number", ["number"]);
                            var AVPacket_duration_s = Module.AVPacket_duration_s = CAccessors.AVPacket_duration_s = Module.cwrap("AVPacket_duration_s", null, ["number", "number"]);
                            var AVPacket_durationhi = Module.AVPacket_durationhi = CAccessors.AVPacket_durationhi = Module.cwrap("AVPacket_durationhi", "number", ["number"]);
                            var AVPacket_durationhi_s = Module.AVPacket_durationhi_s = CAccessors.AVPacket_durationhi_s = Module.cwrap("AVPacket_durationhi_s", null, ["number", "number"]);
                            var AVFormatContext_flags = Module.AVFormatContext_flags = CAccessors.AVFormatContext_flags = Module.cwrap("AVFormatContext_flags", "number", ["number"]);
                            var AVFormatContext_flags_s = Module.AVFormatContext_flags_s = CAccessors.AVFormatContext_flags_s = Module.cwrap("AVFormatContext_flags_s", null, ["number", "number"]);
                            var AVFormatContext_nb_streams = Module.AVFormatContext_nb_streams = CAccessors.AVFormatContext_nb_streams = Module.cwrap("AVFormatContext_nb_streams", "number", ["number"]);
                            var AVFormatContext_nb_streams_s = Module.AVFormatContext_nb_streams_s = CAccessors.AVFormatContext_nb_streams_s = Module.cwrap("AVFormatContext_nb_streams_s", null, ["number", "number"]);
                            var AVFormatContext_oformat = Module.AVFormatContext_oformat = CAccessors.AVFormatContext_oformat = Module.cwrap("AVFormatContext_oformat", "number", ["number"]);
                            var AVFormatContext_oformat_s = Module.AVFormatContext_oformat_s = CAccessors.AVFormatContext_oformat_s = Module.cwrap("AVFormatContext_oformat_s", null, ["number", "number"]);
                            var AVFormatContext_pb = Module.AVFormatContext_pb = CAccessors.AVFormatContext_pb = Module.cwrap("AVFormatContext_pb", "number", ["number"]);
                            var AVFormatContext_pb_s = Module.AVFormatContext_pb_s = CAccessors.AVFormatContext_pb_s = Module.cwrap("AVFormatContext_pb_s", null, ["number", "number"]);
                            var AVFormatContext_streams_a = Module.AVFormatContext_streams_a = CAccessors.AVFormatContext_streams_a = Module.cwrap("AVFormatContext_streams_a", "number", ["number", "number"]);
                            var AVFormatContext_streams_a_s = Module.AVFormatContext_streams_a_s = CAccessors.AVFormatContext_streams_a_s = Module.cwrap("AVFormatContext_streams_a_s", null, ["number", "number", "number"]);
                            var AVStream_codecpar = Module.AVStream_codecpar = CAccessors.AVStream_codecpar = Module.cwrap("AVStream_codecpar", "number", ["number"]);
                            var AVStream_codecpar_s = Module.AVStream_codecpar_s = CAccessors.AVStream_codecpar_s = Module.cwrap("AVStream_codecpar_s", null, ["number", "number"]);
                            var AVStream_discard = Module.AVStream_discard = CAccessors.AVStream_discard = Module.cwrap("AVStream_discard", "number", ["number"]);
                            var AVStream_discard_s = Module.AVStream_discard_s = CAccessors.AVStream_discard_s = Module.cwrap("AVStream_discard_s", null, ["number", "number"]);
                            var AVStream_duration = Module.AVStream_duration = CAccessors.AVStream_duration = Module.cwrap("AVStream_duration", "number", ["number"]);
                            var AVStream_duration_s = Module.AVStream_duration_s = CAccessors.AVStream_duration_s = Module.cwrap("AVStream_duration_s", null, ["number", "number"]);
                            var AVStream_durationhi = Module.AVStream_durationhi = CAccessors.AVStream_durationhi = Module.cwrap("AVStream_durationhi", "number", ["number"]);
                            var AVStream_durationhi_s = Module.AVStream_durationhi_s = CAccessors.AVStream_durationhi_s = Module.cwrap("AVStream_durationhi_s", null, ["number", "number"]);
                            var AVFilterInOut_filter_ctx = Module.AVFilterInOut_filter_ctx = CAccessors.AVFilterInOut_filter_ctx = Module.cwrap("AVFilterInOut_filter_ctx", "number", ["number"]);
                            var AVFilterInOut_filter_ctx_s = Module.AVFilterInOut_filter_ctx_s = CAccessors.AVFilterInOut_filter_ctx_s = Module.cwrap("AVFilterInOut_filter_ctx_s", null, ["number", "number"]);
                            var AVFilterInOut_name = Module.AVFilterInOut_name = CAccessors.AVFilterInOut_name = Module.cwrap("AVFilterInOut_name", "number", ["number"]);
                            var AVFilterInOut_name_s = Module.AVFilterInOut_name_s = CAccessors.AVFilterInOut_name_s = Module.cwrap("AVFilterInOut_name_s", null, ["number", "number"]);
                            var AVFilterInOut_next = Module.AVFilterInOut_next = CAccessors.AVFilterInOut_next = Module.cwrap("AVFilterInOut_next", "number", ["number"]);
                            var AVFilterInOut_next_s = Module.AVFilterInOut_next_s = CAccessors.AVFilterInOut_next_s = Module.cwrap("AVFilterInOut_next_s", null, ["number", "number"]);
                            var AVFilterInOut_pad_idx = Module.AVFilterInOut_pad_idx = CAccessors.AVFilterInOut_pad_idx = Module.cwrap("AVFilterInOut_pad_idx", "number", ["number"]);
                            var AVFilterInOut_pad_idx_s = Module.AVFilterInOut_pad_idx_s = CAccessors.AVFilterInOut_pad_idx_s = Module.cwrap("AVFilterInOut_pad_idx_s", null, ["number", "number"]);
                            var av_frame_free_js = Module.av_frame_free_js = CAccessors.av_frame_free_js = function(p) {
                                var p2 = malloc(4);
                                if (p2 === 0) throw new Error("Could not malloc");
                                new Uint32Array(Module.HEAPU8.buffer, p2, 1)[0] = p;
                                CAccessors.av_frame_free(p2);
                                free(p2)
                            };
                            var av_packet_free_js = Module.av_packet_free_js = CAccessors.av_packet_free_js = function(p) {
                                var p2 = malloc(4);
                                if (p2 === 0) throw new Error("Could not malloc");
                                new Uint32Array(Module.HEAPU8.buffer, p2, 1)[0] = p;
                                CAccessors.av_packet_free(p2);
                                free(p2)
                            };
                            var avformat_close_input_js = Module.avformat_close_input_js = CAccessors.avformat_close_input_js = function(p) {
                                var p2 = malloc(4);
                                if (p2 === 0) throw new Error("Could not malloc");
                                new Uint32Array(Module.HEAPU8.buffer, p2, 1)[0] = p;
                                CAccessors.avformat_close_input(p2);
                                free(p2)
                            };
                            var avcodec_free_context_js = Module.avcodec_free_context_js = CAccessors.avcodec_free_context_js = function(p) {
                                var p2 = malloc(4);
                                if (p2 === 0) throw new Error("Could not malloc");
                                new Uint32Array(Module.HEAPU8.buffer, p2, 1)[0] = p;
                                CAccessors.avcodec_free_context(p2);
                                free(p2)
                            };
                            var avcodec_parameters_free_js = Module.avcodec_parameters_free_js = CAccessors.avcodec_parameters_free_js = function(p) {
                                var p2 = malloc(4);
                                if (p2 === 0) throw new Error("Could not malloc");
                                new Uint32Array(Module.HEAPU8.buffer, p2, 1)[0] = p;
                                CAccessors.avcodec_parameters_free(p2);
                                free(p2)
                            };
                            var avfilter_graph_free_js = Module.avfilter_graph_free_js = CAccessors.avfilter_graph_free_js = function(p) {
                                var p2 = malloc(4);
                                if (p2 === 0) throw new Error("Could not malloc");
                                new Uint32Array(Module.HEAPU8.buffer, p2, 1)[0] = p;
                                CAccessors.avfilter_graph_free(p2);
                                free(p2)
                            };
                            var avfilter_inout_free_js = Module.avfilter_inout_free_js = CAccessors.avfilter_inout_free_js = function(p) {
                                var p2 = malloc(4);
                                if (p2 === 0) throw new Error("Could not malloc");
                                new Uint32Array(Module.HEAPU8.buffer, p2, 1)[0] = p;
                                CAccessors.avfilter_inout_free(p2);
                                free(p2)
                            };
                            var av_dict_free_js = Module.av_dict_free_js = CAccessors.av_dict_free_js = function(p) {
                                var p2 = malloc(4);
                                if (p2 === 0) throw new Error("Could not malloc");
                                new Uint32Array(Module.HEAPU8.buffer, p2, 1)[0] = p;
                                CAccessors.av_dict_free(p2);
                                free(p2)
                            };
                            var copyin_u8 = Module.copyin_u8 = CAccessors.copyin_u8 = function(ptr, arr) {
                                var buf = new Uint8Array(Module.HEAPU8.buffer, ptr);
                                buf.set(arr)
                            };
                            var copyout_u8 = Module.copyout_u8 = CAccessors.copyout_u8 = function(ptr, len) {
                                var ret = new Uint8Array(Module.HEAPU8.buffer, ptr, len).slice(0);
                                ret.libavjsTransfer = [ret.buffer];
                                return ret
                            };
                            var copyin_s16 = Module.copyin_s16 = CAccessors.copyin_s16 = function(ptr, arr) {
                                var buf = new Int16Array(Module.HEAPU8.buffer, ptr);
                                buf.set(arr)
                            };
                            var copyout_s16 = Module.copyout_s16 = CAccessors.copyout_s16 = function(ptr, len) {
                                var ret = new Int16Array(Module.HEAPU8.buffer, ptr, len).slice(0);
                                ret.libavjsTransfer = [ret.buffer];
                                return ret
                            };
                            var copyin_s32 = Module.copyin_s32 = CAccessors.copyin_s32 = function(ptr, arr) {
                                var buf = new Int32Array(Module.HEAPU8.buffer, ptr);
                                buf.set(arr)
                            };
                            var copyout_s32 = Module.copyout_s32 = CAccessors.copyout_s32 = function(ptr, len) {
                                var ret = new Int32Array(Module.HEAPU8.buffer, ptr, len).slice(0);
                                ret.libavjsTransfer = [ret.buffer];
                                return ret
                            };
                            var copyin_f32 = Module.copyin_f32 = CAccessors.copyin_f32 = function(ptr, arr) {
                                var buf = new Float32Array(Module.HEAPU8.buffer, ptr);
                                buf.set(arr)
                            };
                            var copyout_f32 = Module.copyout_f32 = CAccessors.copyout_f32 = function(ptr, len) {
                                var ret = new Float32Array(Module.HEAPU8.buffer, ptr, len).slice(0);
                                ret.libavjsTransfer = [ret.buffer];
                                return ret
                            };

                            function fsBinding(of) {
                                Module[of] = function() {
                                    try {
                                        return FS[of].apply(FS, arguments)
                                    } catch (ex) {
                                        if (ex && ex.name === "ErrnoError") {
                                            ex.message = strerror(ex.errno);
                                            if (typeof arguments[0] === "string") ex.message = arguments[0] + ": " + ex.message
                                        }
                                        throw ex
                                    }
                                }
                            }
                            var readerDev = FS.makedev(44, 0);
                            FS.registerDevice(readerDev, readerCallbacks);
                            Module.readBuffers = {};
                            Module.blockReadBuffers = {};
                            var writerDev = FS.makedev(44, 1);
                            FS.registerDevice(writerDev, writerCallbacks);
                            var streamWriterDev = FS.makedev(44, 2);
                            FS.registerDevice(streamWriterDev, streamWriterCallbacks);
                            fsBinding("readFile");
                            fsBinding("writeFile");
                            fsBinding("unlink");
                            fsBinding("unmount");
                            fsBinding("mkdev");
                            fsBinding("createLazyFile");
                            Module.mkreaderdev = function(loc, mode) {
                                FS.mkdev(loc, mode ? mode : 511, readerDev);
                                return 0
                            };
                            var mkblockreaderdev = Module.mkblockreaderdev = function(name, size) {
                                FS.writeFile(name, new Uint8Array(0));
                                var f = FS.open(name, 0);
                                var super_node_ops = f.node.node_ops;
                                var node_ops = f.node.node_ops = Object.create(super_node_ops);
                                node_ops.getattr = function(node) {
                                    var ret = super_node_ops.getattr(node);
                                    ret.size = size;
                                    ret.blksize = 4096;
                                    ret.blocks = Math.ceil(size / 4096);
                                    return ret
                                };
                                f.node.stream_ops = blockReaderCallbacks;
                                f.node.ff_block_reader_dev_size = size;
                                Module.blockReadBuffers[name] = {
                                    position: -1,
                                    buf: new Uint8Array(0),
                                    ready: false,
                                    errorCode: 0,
                                    error: null
                                };
                                FS.close(f)
                            };
                            var readaheads = {};
                            var preReadaheadOnBlockRead = null;

                            function readaheadOnBlockRead(name, position, length) {
                                if (!(name in readaheads)) {
                                    if (preReadaheadOnBlockRead) preReadaheadOnBlockRead(name, position, length);
                                    return
                                }
                                var ra = readaheads[name];

                                function then() {
                                    if (ra.position !== position) {
                                        ra.position = position;
                                        ra.buf = null;
                                        ra.bufPromise = ra.file.slice(position, position + length).arrayBuffer().then(function(ret) {
                                            ra.buf = ret
                                        }).catch(function(ex) {
                                            console.error(ex + "\n" + ex.stack);
                                            ra.buf = new Uint8Array(0)
                                        }).then(then);
                                        return
                                    }
                                    ff_block_reader_dev_send(name, position, new Uint8Array(ra.buf));
                                    position += length;
                                    ra.position = position;
                                    ra.buf = null;
                                    ra.bufPromise = ra.file.slice(position, position + length).arrayBuffer().then(function(ret) {
                                        ra.buf = ret
                                    }).catch(function(ex) {
                                        console.error(ex + "\n" + ex.stack);
                                        ra.buf = new Uint8Array(0)
                                    })
                                }
                                if (!ra.buf && ra.bufPromise) ra.bufPromise.then(then);
                                else then()
                            }
                            Module.mkreadaheadfile = function(name, file) {
                                if (Module.onblockread !== readaheadOnBlockRead) {
                                    preReadaheadOnBlockRead = Module.onblockread;
                                    Module.onblockread = readaheadOnBlockRead
                                }
                                mkblockreaderdev(name, file.size);
                                readaheads[name] = {
                                    file: file,
                                    position: -1,
                                    bufPromise: null,
                                    buf: null
                                }
                            };
                            Module.unlinkreadaheadfile = function(name) {
                                FS.unlink(name);
                                delete readaheads[name]
                            };
                            Module.mkwriterdev = function(loc, mode) {
                                FS.mkdev(loc, mode ? mode : 511, writerDev);
                                return 0
                            };
                            Module.mkstreamwriterdev = function(loc, mode) {
                                FS.mkdev(loc, mode ? mode : 511, streamWriterDev);
                                return 0
                            };
                            Module.mountwriterfs = function(mountpoint) {
                                try {
                                    FS.mkdir(mountpoint)
                                } catch (ex) {}
                                FS.mount(streamWriterFS, {}, mountpoint);
                                return 0
                            };
                            Module.ff_reader_dev_waiters = [];
                            Module.mkworkerfsfile = function(name, blob) {
                                FS.mkdir("/" + name + ".d");
                                FS.mount(WORKERFS, {
                                    blobs: [{
                                        name: name,
                                        data: blob
                                    }]
                                }, "/" + name + ".d");
                                return "/" + name + ".d/" + name
                            };
                            Module.unlinkworkerfsfile = function(name) {
                                FS.unmount("/" + name + ".d");
                                FS.rmdir("/" + name + ".d")
                            };
                            var ff_reader_dev_send = Module.ff_reader_dev_send = function(name, data, opts) {
                                opts = opts || {};
                                var idata;
                                if (!(name in Module.readBuffers)) {
                                    Module.readBuffers[name] = {
                                        buf: new Uint8Array(0),
                                        eof: false,
                                        errorCode: 0,
                                        error: null
                                    }
                                }
                                idata = Module.readBuffers[name];
                                if (data === null) {
                                    idata.eof = true
                                } else {
                                    var newbuf = new Uint8Array(idata.buf.length + data.length);
                                    newbuf.set(idata.buf);
                                    newbuf.set(data, idata.buf.length);
                                    idata.buf = newbuf
                                }
                                idata.ready = true;
                                idata.errorCode = 0;
                                if (typeof opts.errorCode === "number") idata.errorCode = opts.errorCode;
                                idata.error = null;
                                if (opts.error) idata.error = opts.error;
                                var waiters = Module.ff_reader_dev_waiters;
                                Module.ff_reader_dev_waiters = [];
                                for (var i = 0; i < waiters.length; i++) waiters[i]()
                            };
                            var ff_block_reader_dev_send = Module.ff_block_reader_dev_send = function(name, pos, data, opts) {
                                opts = opts || {};
                                if (!(name in Module.blockReadBuffers)) {
                                    Module.blockReadBuffers[name] = {
                                        position: pos,
                                        buf: data,
                                        ready: true,
                                        errorCode: 0,
                                        error: null
                                    }
                                } else {
                                    var idata = Module.blockReadBuffers[name];
                                    idata.position = pos;
                                    idata.buf = data;
                                    idata.ready = true;
                                    idata.errorCode = 0;
                                    idata.error = null
                                }
                                if (data === null) idata.buf = new Uint8Array(0);
                                if (typeof opts.errorCode === "number") idata.errorCode = opts.errorCode;
                                if (opts.error) idata.error = opts.error;
                                var waiters = Module.ff_reader_dev_waiters;
                                Module.ff_reader_dev_waiters = [];
                                for (var i = 0; i < waiters.length; i++) waiters[i]()
                            };
                            var ff_reader_dev_waiting = Module.ff_reader_dev_waiting = function() {
                                return ff_nothing().then(function() {
                                    return !!Module.ff_reader_dev_waiters.length
                                })
                            };
                            Module.readerDevReady = function(fd) {
                                var stream = FS.streams[fd].node.name;
                                if (stream in Module.readBuffers) return Module.readBuffers[stream].ready;
                                else if (stream in Module.blockReadBuffers) return Module.blockReadBuffers[stream].ready;
                                return false
                            };
                            var ff_init_encoder = Module.ff_init_encoder = function(name, opts) {
                                opts = opts || {};
                                var codec = avcodec_find_encoder_by_name(name);
                                if (codec === 0) throw new Error("Codec not found");
                                var c = avcodec_alloc_context3(codec);
                                if (c === 0) throw new Error("Could not allocate audio codec context");
                                var ctxProps = opts.ctx || {};
                                for (var prop in ctxProps) this["AVCodecContext_" + prop + "_s"](c, ctxProps[prop]);
                                var time_base = opts.time_base || [1, 1e3];
                                AVCodecContext_time_base_s(c, time_base[0], time_base[1]);
                                var options = 0;
                                if (opts.options) {
                                    for (var prop in opts.options) options = av_dict_set_js(options, prop, opts.options[prop], 0)
                                }
                                var ret = avcodec_open2_js(c, codec, options);
                                if (ret < 0) throw new Error("Could not open codec: " + ff_error(ret));
                                var frame = av_frame_alloc();
                                if (frame === 0) throw new Error("Could not allocate frame");
                                var pkt = av_packet_alloc();
                                if (pkt === 0) throw new Error("Could not allocate packet");
                                var frame_size = AVCodecContext_frame_size(c);
                                return [codec, c, frame, pkt, frame_size]
                            };
                            var ff_init_decoder = Module.ff_init_decoder = function(name, codecpar) {
                                var codec, ret;
                                if (typeof name === "string") codec = avcodec_find_decoder_by_name(name);
                                else codec = avcodec_find_decoder(name);
                                if (codec === 0) throw new Error("Codec not found");
                                var c = avcodec_alloc_context3(codec);
                                if (c === 0) throw new Error("Could not allocate audio codec context");
                                var codecid = AVCodecContext_codec_id(c);
                                if (codecpar) {
                                    ret = avcodec_parameters_to_context(c, codecpar);
                                    if (ret < 0) throw new Error("Could not set codec parameters: " + ff_error(ret))
                                }
                                if (AVCodecContext_codec_id(c) === 0) AVCodecContext_codec_id_s(c, codecid);
                                ret = avcodec_open2(c, codec, 0);
                                if (ret < 0) throw new Error("Could not open codec: " + ff_error(ret));
                                var pkt = av_packet_alloc();
                                if (pkt === 0) throw new Error("Could not allocate packet");
                                var frame = av_frame_alloc();
                                if (frame === 0) throw new Error("Could not allocate frame");
                                return [codec, c, pkt, frame]
                            };
                            var ff_free_encoder = Module.ff_free_encoder = function(c, frame, pkt) {
                                av_frame_free_js(frame);
                                av_packet_free_js(pkt);
                                avcodec_free_context_js(c)
                            };
                            var ff_free_decoder = Module.ff_free_decoder = function(c, pkt, frame) {
                                ff_free_encoder(c, frame, pkt)
                            };
                            var ff_encode_multi = Module.ff_encode_multi = function(ctx, frame, pkt, inFrames, fin) {
                                var outPackets = [];

                                function handleFrame(inFrame) {
                                    if (inFrame !== null) ff_copyin_frame(frame, inFrame);
                                    var ret = avcodec_send_frame(ctx, inFrame ? frame : 0);
                                    if (ret < 0) throw new Error("Error sending the frame to the encoder: " + ff_error(ret));
                                    if (inFrame) av_frame_unref(frame);
                                    while (true) {
                                        ret = avcodec_receive_packet(ctx, pkt);
                                        if (ret === -6 || ret === -541478725) return;
                                        else if (ret < 0) throw new Error("Error encoding audio frame: " + ff_error(ret));
                                        var outPacket = ff_copyout_packet(pkt);
                                        outPackets.push(outPacket);
                                        av_packet_unref(pkt)
                                    }
                                }
                                inFrames.forEach(handleFrame);
                                if (fin) handleFrame(null);
                                return outPackets
                            };
                            var ff_decode_multi = Module.ff_decode_multi = function(ctx, pkt, frame, inPackets, config) {
                                var outFrames = [];
                                var transfer = [];
                                if (typeof config === "boolean") {
                                    config = {
                                        fin: config
                                    }
                                } else {
                                    config = config || {}
                                }
                                var copyoutFrame = ff_copyout_frame;
                                if (config.copyoutFrame) copyoutFrame = ff_copyout_frame_versions[config.copyoutFrame];

                                function handlePacket(inPacket) {
                                    var ret;
                                    if (inPacket !== null) {
                                        ret = av_packet_make_writable(pkt);
                                        if (ret < 0) throw new Error("Failed to make packet writable: " + ff_error(ret));
                                        ff_copyin_packet(pkt, inPacket)
                                    } else {
                                        av_packet_unref(pkt)
                                    }
                                    ret = avcodec_send_packet(ctx, pkt);
                                    if (ret < 0) {
                                        var err = "Error submitting the packet to the decoder: " + ff_error(ret);
                                        if (!config.ignoreErrors) throw new Error(err);
                                        else {
                                            console.log(err);
                                            av_packet_unref(pkt);
                                            return
                                        }
                                    }
                                    av_packet_unref(pkt);
                                    while (true) {
                                        ret = avcodec_receive_frame(ctx, frame);
                                        if (ret === -6 || ret === -541478725) return;
                                        else if (ret < 0) throw new Error("Error decoding audio frame: " + ff_error(ret));
                                        var outFrame = copyoutFrame(frame);
                                        if (outFrame && outFrame.libavjsTransfer && outFrame.libavjsTransfer.length) transfer.push.apply(transfer, outFrame.libavjsTransfer);
                                        outFrames.push(outFrame);
                                        av_frame_unref(frame)
                                    }
                                }
                                inPackets.forEach(handlePacket);
                                if (config.fin) handlePacket(null);
                                outFrames.libavjsTransfer = transfer;
                                return outFrames
                            };
                            var ff_set_packet = Module.ff_set_packet = function(pkt, data) {
                                if (data.length === 0) {
                                    av_packet_unref(pkt)
                                } else {
                                    var size = AVPacket_size(pkt);
                                    if (size < data.length) {
                                        var ret = av_grow_packet(pkt, data.length - size);
                                        if (ret < 0) throw new Error("Error growing packet: " + ff_error(ret))
                                    } else if (size > data.length) av_shrink_packet(pkt, data.length)
                                }
                                var ptr = AVPacket_data(pkt);
                                Module.HEAPU8.set(data, ptr)
                            };
                            var ff_init_muxer = Module.ff_init_muxer = function(opts, streamCtxs) {
                                var oformat = opts.oformat ? opts.oformat : 0;
                                var format_name = opts.format_name ? opts.format_name : null;
                                var filename = opts.filename ? opts.filename : null;
                                var oc = avformat_alloc_output_context2_js(oformat, format_name, filename);
                                if (oc === 0) throw new Error("Failed to allocate output context");
                                var fmt = AVFormatContext_oformat(oc);
                                var sts = [];
                                streamCtxs.forEach(function(ctx) {
                                    var st = avformat_new_stream(oc, 0);
                                    if (st === 0) throw new Error("Could not allocate stream");
                                    sts.push(st);
                                    var codecpar = AVStream_codecpar(st);
                                    var ret;
                                    if (opts.codecpars) {
                                        ret = avcodec_parameters_copy(codecpar, ctx[0]);
                                        AVCodecParameters_codec_tag_s(codecpar, 0)
                                    } else {
                                        ret = avcodec_parameters_from_context(codecpar, ctx[0])
                                    }
                                    if (ret < 0) throw new Error("Could not copy the stream parameters: " + ff_error(ret));
                                    AVStream_time_base_s(st, ctx[1], ctx[2])
                                });
                                if (opts.device) FS.mkdev(opts.filename, 511, writerDev);
                                var pb = null;
                                if (opts.open) {
                                    pb = avio_open2_js(opts.filename, 2, 0, 0);
                                    if (pb === 0) throw new Error("Could not open file");
                                    AVFormatContext_pb_s(oc, pb)
                                }
                                return [oc, fmt, pb, sts]
                            };
                            var ff_free_muxer = Module.ff_free_muxer = function(oc, pb) {
                                avformat_free_context(oc);
                                if (pb) avio_close(pb)
                            };

                            function ff_init_demuxer_file(filename, fmt) {
                                var fmt_ctx;
                                return Promise.all([]).then(function() {
                                    return avformat_open_input_js(filename, fmt ? fmt : null, null)
                                }).then(function(ret) {
                                    fmt_ctx = ret;
                                    if (fmt_ctx === 0) throw new Error("Could not open source file");
                                    return avformat_find_stream_info(fmt_ctx, 0)
                                }).then(function() {
                                    var nb_streams = AVFormatContext_nb_streams(fmt_ctx);
                                    var streams = [];
                                    for (var i = 0; i < nb_streams; i++) {
                                        var inStream = AVFormatContext_streams_a(fmt_ctx, i);
                                        var outStream = {
                                            ptr: inStream,
                                            index: i
                                        };
                                        var codecpar = AVStream_codecpar(inStream);
                                        outStream.codecpar = codecpar;
                                        outStream.codec_type = AVCodecParameters_codec_type(codecpar);
                                        outStream.codec_id = AVCodecParameters_codec_id(codecpar);
                                        outStream.time_base_num = AVStream_time_base_num(inStream);
                                        outStream.time_base_den = AVStream_time_base_den(inStream);
                                        outStream.duration_time_base = AVStream_duration(inStream) + AVStream_durationhi(inStream) * 4294967296;
                                        outStream.duration = outStream.duration_time_base * outStream.time_base_num / outStream.time_base_den;
                                        streams.push(outStream)
                                    }
                                    return [fmt_ctx, streams]
                                })
                            }
                            Module.ff_init_demuxer_file = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return ff_init_demuxer_file.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var ff_write_multi = Module.ff_write_multi = function(oc, pkt, inPackets, interleave) {
                                var step = av_interleaved_write_frame;
                                if (interleave === false) step = av_write_frame;
                                inPackets.forEach(function(inPacket) {
                                    var ret = av_packet_make_writable(pkt);
                                    if (ret < 0) throw new Error("Error making packet writable: " + ff_error(ret));
                                    ff_copyin_packet(pkt, inPacket);
                                    step(oc, pkt);
                                    av_packet_unref(pkt)
                                });
                                av_packet_unref(pkt)
                            };

                            function ff_read_multi(fmt_ctx, pkt, devfile, opts) {
                                var sz = 0;
                                var outPackets = {};
                                var dev = Module.readBuffers[devfile];
                                if (typeof opts === "number") opts = {
                                    limit: opts
                                };
                                if (typeof opts === "undefined") opts = {};
                                var devLimit = 32 * 1024;
                                if (opts.devLimit) devLimit = opts.devLimit;
                                var unify = !!opts.unify;
                                var copyoutPacket = ff_copyout_packet;
                                if (opts.copyoutPacket) copyoutPacket = ff_copyout_packet_versions[opts.copyoutPacket];

                                function step() {
                                    if (dev && !dev.eof && dev.buf.length < devLimit) return [-6, outPackets];
                                    return Promise.all([]).then(function() {
                                        return av_read_frame(fmt_ctx, pkt)
                                    }).then(function(ret) {
                                        if (ret < 0) return [ret, outPackets];
                                        var packet = copyoutPacket(pkt);
                                        var idx = unify ? 0 : AVPacket_stream_index(pkt);
                                        if (!(idx in outPackets)) outPackets[idx] = [];
                                        outPackets[idx].push(packet);
                                        sz += AVPacket_size(pkt);
                                        av_packet_unref(pkt);
                                        if (opts.limit && sz >= opts.limit) return [-6, outPackets];
                                        return Promise.all([]).then(step)
                                    })
                                }
                                return Promise.all([]).then(step)
                            }
                            Module.ff_read_multi = function() {
                                var args = arguments;
                                Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
                                    return ff_read_multi.apply(void 0, args)
                                });
                                return Module.serializationPromise
                            };
                            var ff_init_filter_graph = Module.ff_init_filter_graph = function(filters_descr, input, output) {
                                var abuffersrc, abuffersink, filter_graph, tmp_src_ctx, tmp_sink_ctx, src_ctxs, sink_ctxs, io_outputs, io_inputs, int32s, int64s;
                                var instr, outstr;
                                var multiple_inputs = !!input.length;
                                if (!multiple_inputs) input = [input];
                                var multiple_outputs = !!output.length;
                                if (!multiple_outputs) output = [output];
                                src_ctxs = [];
                                sink_ctxs = [];
                                try {
                                    abuffersrc = avfilter_get_by_name("abuffer");
                                    if (abuffersrc === 0) throw new Error("Failed to load abuffer filter");
                                    abuffersink = avfilter_get_by_name("abuffersink");
                                    if (abuffersink === 0) throw new Error("Failed to load abuffersink filter");
                                    filter_graph = avfilter_graph_alloc();
                                    if (filter_graph === 0) throw new Error("Failed to allocate filter graph");
                                    io_outputs = 0;
                                    var ii = 0;
                                    input.forEach(function(input) {
                                        var next_io_outputs = avfilter_inout_alloc();
                                        if (next_io_outputs === 0) throw new Error("Failed to allocate outputs");
                                        AVFilterInOut_next_s(next_io_outputs, io_outputs);
                                        io_outputs = next_io_outputs;
                                        var nm = "in" + (multiple_inputs ? ii : "");
                                        tmp_src_ctx = avfilter_graph_create_filter_js(abuffersrc, nm, "time_base=1/" + (input.sample_rate ? input.sample_rate : 48e3) + ":sample_rate=" + (input.sample_rate ? input.sample_rate : 48e3) + ":sample_fmt=" + (input.sample_fmt ? input.sample_fmt : 3) + ":channel_layout=" + (input.channel_layout ? input.channel_layout : 4), null, filter_graph);
                                        if (tmp_src_ctx === 0) throw new Error("Cannot create audio buffer source");
                                        src_ctxs.push(tmp_src_ctx);
                                        instr = av_strdup(nm);
                                        if (instr === 0) throw new Error("Failed to allocate output");
                                        AVFilterInOut_name_s(io_outputs, instr);
                                        instr = 0;
                                        AVFilterInOut_filter_ctx_s(io_outputs, tmp_src_ctx);
                                        tmp_src_ctx = 0;
                                        AVFilterInOut_pad_idx_s(io_outputs, 0);
                                        ii++
                                    });
                                    io_inputs = 0;
                                    var oi = 0;
                                    output.forEach(function(output) {
                                        var next_io_inputs = avfilter_inout_alloc();
                                        if (next_io_inputs === 0) throw new Error("Failed to allocate inputs");
                                        AVFilterInOut_next_s(next_io_inputs, io_inputs);
                                        io_inputs = next_io_inputs;
                                        var nm = "out" + (multiple_outputs ? oi : "");
                                        tmp_sink_ctx = avfilter_graph_create_filter_js(abuffersink, nm, null, null, filter_graph);
                                        if (tmp_sink_ctx === 0) throw new Error("Cannot create audio buffer sink");
                                        sink_ctxs.push(tmp_sink_ctx);
                                        int32s = ff_malloc_int32_list([output.sample_fmt ? output.sample_fmt : 3, -1, output.sample_rate ? output.sample_rate : 48e3, -1]);
                                        int64s = ff_malloc_int64_list([output.channel_layout ? output.channel_layout : 4, -1]);
                                        outstr = av_strdup(nm);
                                        if (int32s === 0 || int64s === 0 || outstr === 0) throw new Error("Failed to transfer parameters");
                                        if (av_opt_set_int_list_js(tmp_sink_ctx, "sample_fmts", 4, int32s, -1, 1) < 0 || av_opt_set_int_list_js(tmp_sink_ctx, "channel_layouts", 8, int64s, -1, 1) < 0 || av_opt_set_int_list_js(tmp_sink_ctx, "sample_rates", 4, int32s + 8, -1, 1) < 0) {
                                            throw new Error("Failed to set filter parameters")
                                        }
                                        free(int32s);
                                        int32s = 0;
                                        free(int64s);
                                        int64s = 0;
                                        AVFilterInOut_name_s(io_inputs, outstr);
                                        outstr = 0;
                                        AVFilterInOut_filter_ctx_s(io_inputs, tmp_sink_ctx);
                                        tmp_sink_ctx = 0;
                                        AVFilterInOut_pad_idx_s(io_inputs, 0);
                                        oi++
                                    });
                                    var ret = avfilter_graph_parse(filter_graph, filters_descr, io_inputs, io_outputs, 0);
                                    if (ret < 0) throw new Error("Failed to initialize filters: " + ff_error(ret));
                                    io_inputs = io_outputs = 0;
                                    var oi = 0;
                                    output.forEach(function(output) {
                                        if (output.frame_size) av_buffersink_set_frame_size(sink_ctxs[oi], output.frame_size);
                                        oi++
                                    });
                                    ret = avfilter_graph_config(filter_graph, 0);
                                    if (ret < 0) throw new Error("Failed to configure filter graph: " + ff_error(ret))
                                } catch (ex) {
                                    if (io_outputs) avfilter_inout_free(io_outputs);
                                    if (io_inputs) avfilter_inout_free(io_inputs);
                                    if (filter_graph) avfilter_graph_free(filter_graph);
                                    if (tmp_src_ctx) avfilter_free(tmp_src_ctx);
                                    if (tmp_sink_ctx) avfilter_free(tmp_sink_ctx);
                                    if (int32s) free(int32s);
                                    if (int64s) free(int64s);
                                    if (instr) free(instr);
                                    if (outstr) free(outstr);
                                    throw ex
                                }
                                return [filter_graph, multiple_inputs ? src_ctxs : src_ctxs[0], multiple_outputs ? sink_ctxs : sink_ctxs[0]]
                            };
                            var ff_filter_multi = Module.ff_filter_multi = function(srcs, buffersink_ctx, framePtr, inFrames, config) {
                                var outFrames = [];
                                var transfer = [];
                                if (!srcs.length) {
                                    srcs = [srcs];
                                    inFrames = [inFrames];
                                    config = [config]
                                }
                                config = config.map(function(config) {
                                    if (config === true) return {
                                        fin: true
                                    };
                                    return config || {}
                                });
                                var max = inFrames.map(function(srcFrames) {
                                    return srcFrames.length
                                }).reduce(function(a, b) {
                                    return Math.max(a, b)
                                });

                                function handleFrame(buffersrc_ctx, inFrame, copyoutFrame) {
                                    if (inFrame !== null) ff_copyin_frame(framePtr, inFrame);
                                    var ret = av_buffersrc_add_frame_flags(buffersrc_ctx, inFrame ? framePtr : 0, 8);
                                    if (ret < 0) throw new Error("Error while feeding the audio filtergraph: " + ff_error(ret));
                                    av_frame_unref(framePtr);
                                    while (true) {
                                        ret = av_buffersink_get_frame(buffersink_ctx, framePtr);
                                        if (ret === -6 || ret === -541478725) break;
                                        if (ret < 0) throw new Error("Error while receiving a frame from the filtergraph: " + ff_error(ret));
                                        var outFrame = copyoutFrame(framePtr);
                                        if (outFrame && outFrame.libavjsTransfer && outFrame.libavjsTransfer.length) transfer.push.apply(transfer, outFrame.libavjsTransfer);
                                        outFrames.push(outFrame);
                                        av_frame_unref(framePtr)
                                    }
                                }
                                for (var fi = 0; fi <= max; fi++) {
                                    for (var ti = 0; ti < inFrames.length; ti++) {
                                        var inFrame = inFrames[ti][fi];
                                        var copyoutFrame = ff_copyout_frame;
                                        if (config[ti].copyoutFrame) copyoutFrame = ff_copyout_frame_versions[config[ti].copyoutFrame];
                                        if (inFrame) handleFrame(srcs[ti], inFrame, copyoutFrame);
                                        else if (config[ti].fin) handleFrame(srcs[ti], null, copyoutFrame)
                                    }
                                }
                                outFrames.libavjsTransfer = transfer;
                                return outFrames
                            };
                            var ff_decode_filter_multi = Module.ff_decode_filter_multi = function(ctx, buffersrc_ctx, buffersink_ctx, pkt, frame, inPackets, config) {
                                if (typeof config === "boolean") {
                                    config = {
                                        fin: config
                                    }
                                } else {
                                    config = config || {}
                                }
                                var decodedFrames = ff_decode_multi(ctx, pkt, frame, inPackets, {
                                    fin: !!config.fin,
                                    ignoreErrors: !!config.ignoreErrors,
                                    copyoutFrame: "ptr"
                                });
                                return ff_filter_multi(buffersrc_ctx, buffersink_ctx, frame, decodedFrames, {
                                    fin: !!config.fin,
                                    copyoutFrame: config.copyoutFrame || "default"
                                })
                            };
                            var ff_copyout_frame = Module.ff_copyout_frame = function(frame) {
                                var nb_samples = AVFrame_nb_samples(frame);
                                if (nb_samples === 0) {
                                    var width = AVFrame_width(frame);
                                    if (width) return ff_copyout_frame_video_width(frame, width)
                                }
                                var channels = AVFrame_channels(frame);
                                var format = AVFrame_format(frame);
                                var transfer = [];
                                var outFrame = {
                                    data: null,
                                    libavjsTransfer: transfer,
                                    channel_layout: AVFrame_channel_layout(frame),
                                    channels: channels,
                                    format: format,
                                    nb_samples: nb_samples,
                                    pts: AVFrame_pts(frame),
                                    ptshi: AVFrame_ptshi(frame),
                                    sample_rate: AVFrame_sample_rate(frame)
                                };
                                if (format >= 5) {
                                    var data = [];
                                    for (var ci = 0; ci < channels; ci++) {
                                        var inData = AVFrame_data_a(frame, ci);
                                        var outData = null;
                                        switch (format) {
                                            case 5:
                                                outData = copyout_u8(inData, nb_samples);
                                                break;
                                            case 6:
                                                outData = copyout_s16(inData, nb_samples);
                                                break;
                                            case 7:
                                                outData = copyout_s32(inData, nb_samples);
                                                break;
                                            case 8:
                                                outData = copyout_f32(inData, nb_samples);
                                                break
                                        }
                                        if (outData) {
                                            data.push(outData);
                                            transfer.push(outData.buffer)
                                        }
                                    }
                                    outFrame.data = data
                                } else {
                                    var ct = channels * nb_samples;
                                    var inData = AVFrame_data_a(frame, 0);
                                    var outData = null;
                                    switch (format) {
                                        case 0:
                                            outData = copyout_u8(inData, ct);
                                            break;
                                        case 1:
                                            outData = copyout_s16(inData, ct);
                                            break;
                                        case 2:
                                            outData = copyout_s32(inData, ct);
                                            break;
                                        case 3:
                                            outData = copyout_f32(inData, ct);
                                            break
                                    }
                                    if (outData) {
                                        outFrame.data = outData;
                                        transfer.push(outData.buffer)
                                    }
                                }
                                return outFrame
                            };
                            var ff_copyout_frame_video = Module.ff_copyout_frame_video = function(frame) {
                                return ff_copyout_frame_video_width(frame, AVFrame_width(frame))
                            };
                            var ff_copyout_frame_video_width = Module.ff_copyout_frame_video = function(frame, width) {
                                var data = [];
                                var height = AVFrame_height(frame);
                                var format = AVFrame_format(frame);
                                var desc = av_pix_fmt_desc_get(format);
                                var transfer = [];
                                var outFrame = {
                                    data: data,
                                    libavjsTransfer: transfer,
                                    width: width,
                                    height: height,
                                    format: AVFrame_format(frame),
                                    key_frame: AVFrame_key_frame(frame),
                                    pict_type: AVFrame_pict_type(frame),
                                    pts: AVFrame_pts(frame),
                                    ptshi: AVFrame_ptshi(frame),
                                    sample_aspect_ratio: [AVFrame_sample_aspect_ratio_num(frame), AVFrame_sample_aspect_ratio_den(frame)]
                                };
                                for (var i = 0; i < 8; i++) {
                                    var linesize = AVFrame_linesize_a(frame, i);
                                    if (!linesize) break;
                                    var inData = AVFrame_data_a(frame, i);
                                    var plane = [];
                                    var h = height;
                                    if (i === 1 || i === 2) h >>= AVPixFmtDescriptor_log2_chroma_h(desc);
                                    for (var y = 0; y < h; y++) {
                                        var line = copyout_u8(inData + y * linesize, linesize);
                                        plane.push(line);
                                        transfer.push(line.buffer)
                                    }
                                    data.push(plane)
                                }
                                return outFrame
                            };
                            var ff_frame_video_packed_size = Module.ff_frame_video_packed_size = function(frame) {
                                var width = AVFrame_width(frame);
                                var height = AVFrame_height(frame);
                                var format = AVFrame_format(frame);
                                var desc = av_pix_fmt_desc_get(format);
                                var bpp = 1;
                                if (!(AVPixFmtDescriptor_flags(desc) & 16)) bpp *= AVPixFmtDescriptor_nb_components(desc);
                                var dataSz = 0;
                                for (var i = 0; i < 8; i++) {
                                    var linesize = AVFrame_linesize_a(frame, i);
                                    if (!linesize) break;
                                    var w = width * bpp;
                                    var h = height;
                                    if (i === 1 || i === 2) {
                                        w >>= AVPixFmtDescriptor_log2_chroma_w(desc);
                                        h >>= AVPixFmtDescriptor_log2_chroma_h(desc)
                                    }
                                    dataSz += w * h
                                }
                                return dataSz
                            };
                            var ff_copyout_frame_data_packed = Module.ff_copyout_frame_data_packed = function(data, frame) {
                                var width = AVFrame_width(frame);
                                var height = AVFrame_height(frame);
                                var format = AVFrame_format(frame);
                                var desc = av_pix_fmt_desc_get(format);
                                var bpp = 1;
                                if (!(AVPixFmtDescriptor_flags(desc) & 16)) bpp *= AVPixFmtDescriptor_nb_components(desc);
                                var dIdx = 0;
                                for (var i = 0; i < 8; i++) {
                                    var linesize = AVFrame_linesize_a(frame, i);
                                    if (!linesize) break;
                                    var inData = AVFrame_data_a(frame, i);
                                    var w = width * bpp;
                                    var h = height;
                                    if (i === 1 || i === 2) {
                                        w >>= AVPixFmtDescriptor_log2_chroma_w(desc);
                                        h >>= AVPixFmtDescriptor_log2_chroma_h(desc)
                                    }
                                    for (var y = 0; y < h; y++) {
                                        var line = inData + y * linesize;
                                        data.set(Module.HEAPU8.subarray(line, line + w), dIdx);
                                        dIdx += w
                                    }
                                }
                            };
                            var ff_copyout_frame_video_packed = Module.ff_copyout_frame_video_packed = function(frame) {
                                var data = new Uint8Array(ff_frame_video_packed_size(frame));
                                ff_copyout_frame_data_packed(data, frame);
                                var outFrame = {
                                    data: data,
                                    libavjsTransfer: [data.buffer],
                                    width: AVFrame_width(frame),
                                    height: AVFrame_height(frame),
                                    format: AVFrame_format(frame),
                                    key_frame: AVFrame_key_frame(frame),
                                    pict_type: AVFrame_pict_type(frame),
                                    pts: AVFrame_pts(frame),
                                    ptshi: AVFrame_ptshi(frame),
                                    sample_aspect_ratio: [AVFrame_sample_aspect_ratio_num(frame), AVFrame_sample_aspect_ratio_den(frame)]
                                };
                                return outFrame
                            };
                            var ff_copyout_frame_video_imagedata = Module.ff_copyout_frame_video_imagedata = function(frame) {
                                var width = AVFrame_width(frame);
                                var height = AVFrame_height(frame);
                                var id = new ImageData(width, height);
                                ff_copyout_frame_data_packed(id.data, frame);
                                id.libavjsTransfer = [id.data.buffer];
                                return id
                            };
                            var ff_copyout_frame_ptr = Module.ff_copyout_frame_ptr = function(frame) {
                                var ret = av_frame_clone(frame);
                                if (!ret) throw new Error("Failed to allocate new frame");
                                return ret
                            };
                            var ff_copyout_frame_versions = {
                                default: ff_copyout_frame,
                                video: ff_copyout_frame_video,
                                video_packed: ff_copyout_frame_video_packed,
                                ImageData: ff_copyout_frame_video_imagedata,
                                ptr: ff_copyout_frame_ptr
                            };
                            var ff_copyin_frame = Module.ff_copyin_frame = function(framePtr, frame) {
                                if (typeof frame === "number") {
                                    av_frame_unref(framePtr);
                                    var ret = av_frame_ref(framePtr, frame);
                                    if (ret < 0) throw new Error("Failed to reference frame data: " + ff_error(ret));
                                    av_frame_unref(frame);
                                    av_frame_free_js(frame);
                                    return
                                }
                                if (frame.width) return ff_copyin_frame_video(framePtr, frame);
                                var format = frame.format;
                                var channels = frame.channels;
                                if (!channels) {
                                    var channel_layout = frame.channel_layout;
                                    channels = 0;
                                    while (channel_layout) {
                                        if (channel_layout & 1) channels++;
                                        channel_layout >>>= 1
                                    }
                                } ["channel_layout", "channels", "format", "pts", "ptshi", "sample_rate"].forEach(function(key) {
                                    if (key in frame) CAccessors["AVFrame_" + key + "_s"](framePtr, frame[key])
                                });
                                var nb_samples;
                                if (format >= 5) {
                                    nb_samples = frame.data[0].length
                                } else {
                                    nb_samples = frame.data.length / channels
                                }
                                AVFrame_nb_samples_s(framePtr, nb_samples);
                                if (av_frame_make_writable(framePtr) < 0) {
                                    var ret = av_frame_get_buffer(framePtr, 0);
                                    if (ret < 0) throw new Error("Failed to allocate frame buffers: " + ff_error(ret))
                                }
                                if (format >= 5) {
                                    for (var ci = 0; ci < channels; ci++) {
                                        var data = AVFrame_data_a(framePtr, ci);
                                        var inData = frame.data[ci];
                                        switch (format) {
                                            case 5:
                                                copyin_u8(data, inData);
                                                break;
                                            case 6:
                                                copyin_s16(data, inData);
                                                break;
                                            case 7:
                                                copyin_s32(data, inData);
                                                break;
                                            case 8:
                                                copyin_f32(data, inData);
                                                break
                                        }
                                    }
                                } else {
                                    var data = AVFrame_data_a(framePtr, 0);
                                    var inData = frame.data;
                                    switch (format) {
                                        case 0:
                                            copyin_u8(data, inData);
                                            break;
                                        case 1:
                                            copyin_s16(data, inData);
                                            break;
                                        case 2:
                                            copyin_s32(data, inData);
                                            break;
                                        case 3:
                                            copyin_f32(data, inData);
                                            break
                                    }
                                }
                            };
                            var ff_copyin_frame_video = Module.ff_copyin_frame_video = function(framePtr, frame) {
                                ["format", "height", "key_frame", "pict_type", "pts", "ptshi", "width"].forEach(function(key) {
                                    if (key in frame) CAccessors["AVFrame_" + key + "_s"](framePtr, frame[key])
                                });
                                if ("sample_aspect_ratio" in frame) {
                                    AVFrame_sample_aspect_ratio_s(framePtr, frame.sample_aspect_ratio[0], frame.sample_aspect_ratio[1])
                                }
                                if (av_frame_make_writable(framePtr) < 0) {
                                    var ret = av_frame_get_buffer(framePtr, 0);
                                    if (ret < 0) throw new Error("Failed to allocate frame buffers: " + ff_error(ret))
                                }
                                for (var i = 0; i < 8; i++) {
                                    var inData = frame.data[i];
                                    if (inData) {
                                        var linesize = AVFrame_linesize_a(framePtr, i);
                                        var data = AVFrame_data_a(framePtr, i);
                                        for (var y = 0; y < inData.length; y++) copyin_u8(data + y * linesize, inData[y].subarray(0, linesize))
                                    }
                                }
                            };
                            var ff_copyout_packet = Module.ff_copyout_packet = function(pkt) {
                                var data = AVPacket_data(pkt);
                                var size = AVPacket_size(pkt);
                                var data = copyout_u8(data, size);
                                return {
                                    data: data,
                                    libavjsTransfer: [data.buffer],
                                    pts: AVPacket_pts(pkt),
                                    ptshi: AVPacket_ptshi(pkt),
                                    dts: AVPacket_dts(pkt),
                                    dtshi: AVPacket_dtshi(pkt),
                                    stream_index: AVPacket_stream_index(pkt),
                                    flags: AVPacket_flags(pkt),
                                    duration: AVPacket_duration(pkt),
                                    durationhi: AVPacket_durationhi(pkt),
                                    side_data: ff_copyout_side_data(pkt)
                                }
                            };
                            var ff_copyout_side_data = Module.ff_copyout_side_data = function(pkt) {
                                var side_data = AVPacket_side_data(pkt);
                                var side_data_elems = AVPacket_side_data_elems(pkt);
                                if (!side_data) return null;
                                var ret = [];
                                for (var i = 0; i < side_data_elems; i++) {
                                    var data = AVPacketSideData_data(side_data, i);
                                    var size = AVPacketSideData_size(side_data, i);
                                    ret.push({
                                        data: copyout_u8(data, size),
                                        type: AVPacketSideData_type(side_data, i)
                                    })
                                }
                                return ret
                            };
                            var ff_copyout_packet_ptr = Module.ff_copyout_packet_ptr = function(pkt) {
                                var ret = av_packet_clone(pkt);
                                if (!ret) throw new Error("Failed to clone packet");
                                return ret
                            };
                            var ff_copyout_packet_versions = {
                                default: ff_copyout_packet,
                                ptr: ff_copyout_packet_ptr
                            };
                            var ff_copyin_packet = Module.ff_copyin_packet = function(pktPtr, packet) {
                                if (typeof packet === "number") {
                                    av_packet_unref(pktPtr);
                                    var res = av_packet_ref(pktPtr, packet);
                                    if (res < 0) throw new Error("Failed to reference packet: " + ff_error(res));
                                    av_packet_unref(packet);
                                    av_packet_free_js(packet);
                                    return
                                }
                                ff_set_packet(pktPtr, packet.data);
                                ["dts", "dtshi", "duration", "durationhi", "flags", "side_data", "side_data_elems", "stream_index", "pts", "ptshi"].forEach(function(key) {
                                    if (key in packet) CAccessors["AVPacket_" + key + "_s"](pktPtr, packet[key])
                                });
                                if (packet.side_data) ff_copyin_side_data(pktPtr, packet.side_data)
                            };
                            var ff_copyin_side_data = Module.ff_copyin_side_data = function(pktPtr, side_data) {
                                side_data.forEach(function(elem) {
                                    var data = av_packet_new_side_data(pktPtr, elem.type, elem.data.length);
                                    if (data === 0) throw new Error("Failed to allocate side data!");
                                    copyin_u8(data, elem.data)
                                })
                            };
                            var ff_malloc_int32_list = Module.ff_malloc_int32_list = function(list) {
                                var ptr = malloc(list.length * 4);
                                if (ptr === 0) throw new Error("Failed to malloc");
                                var arr = new Uint32Array(Module.HEAPU8.buffer, ptr, list.length);
                                for (var i = 0; i < list.length; i++) arr[i] = list[i];
                                return ptr
                            };
                            var ff_malloc_int64_list = Module.ff_malloc_int64_list = function(list) {
                                var ptr = malloc(list.length * 8);
                                if (ptr === 0) throw new Error("Failed to malloc");
                                var arr = new Int32Array(Module.HEAPU8.buffer, ptr, list.length * 2);
                                for (var i = 0; i < list.length; i++) {
                                    arr[i * 2] = list[i];
                                    arr[i * 2 + 1] = list[i] < 0 ? -1 : 0
                                }
                                return ptr
                            };
                            var ff_malloc_string_array = Module.ff_malloc_string_array = function(arr) {
                                var ptr = malloc((arr.length + 1) * 4);
                                if (ptr === 0) throw new Error("Failed to malloc");
                                var inArr = new Uint32Array(Module.HEAPU8.buffer, ptr, arr.length + 1);
                                var i;
                                for (i = 0; i < arr.length; i++) inArr[i] = av_strdup(arr[i]);
                                inArr[i] = 0;
                                return ptr
                            };
                            var ff_free_string_array = Module.ff_free_string_array = function(ptr) {
                                var iPtr = ptr / 4;
                                for (;; iPtr++) {
                                    var elPtr = Module.HEAPU32[iPtr];
                                    if (!elPtr) break;
                                    free(elPtr)
                                }
                                free(ptr)
                            };

                            function convertArgs(argv0, args) {
                                var ret = [argv0];
                                ret = ret.concat(Array.prototype.slice.call(args, 0));
                                for (var i = 0; i < ret.length; i++) {
                                    var arg = ret[i];
                                    if (typeof arg !== "string") {
                                        if ("length" in arg) {
                                            ret.splice.apply(ret, [i, 1].concat(arg))
                                        } else {
                                            ret[i] = "" + arg
                                        }
                                    }
                                }
                                return ret
                            }

                            function runMain(main, name, args) {
                                args = convertArgs(name, args);
                                var argv = ff_malloc_string_array(args);
                                Module.fsThrownError = null;
                                var ret = null;
                                try {
                                    ret = main(args.length, argv)
                                } catch (ex) {
                                    if (ex && ex.name === "ExitStatus") ret = ex.status;
                                    else if (ex === "unwind") ret = EXITSTATUS;
                                    else throw ex
                                }

                                function cleanup() {
                                    ff_free_string_array(argv)
                                }
                                if (ret && ret.then) {
                                    return ret.then(function(ret) {
                                        cleanup();
                                        return ret
                                    }).catch(function(ex) {
                                        cleanup();
                                        if (ex && ex.name === "ExitStatus") return Promise.resolve(ex.status);
                                        else if (ex === "unwind") return Promise.resolve(EXITSTATUS);
                                        else return Promise.reject(ex)
                                    }).then(function(ret) {
                                        if (Module.fsThrownError) {
                                            var thr = Module.fsThrownError;
                                            Module.fsThrownError = null;
                                            throw thr
                                        }
                                        return ret
                                    })
                                } else {
                                    cleanup();
                                    if (Module.fsThrownError) {
                                        var thr = Module.fsThrownError;
                                        Module.fsThrownError = null;
                                        throw thr
                                    }
                                    return ret
                                }
                            }
                            var ffmpeg = Module.ffmpeg = function() {
                                return runMain(ffmpeg_main, "ffmpeg", arguments)
                            };
                            var ffprobe = Module.ffprobe = function() {
                                return runMain(ffprobe_main, "ffprobe", arguments)
                            };


                            return LibAVFactory.ready
                        }
                    );
                })();
            }
        }).then(function() {
            if (r === "worker") {
                d = {};
                d.worker = new Worker(a);
                d.worker.postMessage({
                    config: {
                        variant: e.variant || f.variant,
                        wasmurl: e.wasmurl || f.wasmurl
                    }
                });
                return new Promise(function(e, _) {
                    d.on = 1;
                    d.handlers = {
                        onready: [function() {
                            e()
                        }, null],
                        onwrite: [function(e) {
                            if (d.onwrite) d.onwrite.apply(d, e)
                        }, null],
                        onblockread: [function(_) {
                            try {
                                var e = null;
                                if (d.onblockread) e = d.onblockread.apply(d, _);
                                if (e && e.then && e.catch) {
                                    e.catch(function(e) {
                                        d.ff_block_reader_dev_send(_[0], _[1], null, {
                                            error: e
                                        })
                                    })
                                }
                            } catch (e) {
                                d.ff_block_reader_dev_send(_[0], _[1], null, {
                                    error: e
                                })
                            }
                        }, null]
                    };
                    d.c = function() {
                        var a = Array.prototype.slice.call(arguments);
                        return new Promise(function(e, _) {
                            var t = d.on++;
                            a = [t].concat(a);
                            d.handlers[t] = [e, _];
                            d.worker.postMessage(a)
                        })
                    };

                    function t(e) {
                        var _ = e.data[0];
                        var t = d.handlers[_];
                        if (t) {
                            if (e.data[2]) t[0](e.data[3]);
                            else t[1](e.data[3]);
                            if (typeof _ === "number") delete d.handlers[_]
                        }
                    }
                    d.worker.onmessage = t;
                    d.terminate = function() {
                        d.worker.terminate()
                    }
                })
            } else if (r === "threads") {
                var i = f.variant;
                var A = f.wasmurl;
                return Promise.all([]).then(function() {
                    if (e.variant) f.variant = e.variant;
                    if (e.wasmurl) f.wasmurl = e.wasmurl;
                    return f.LibAVFactory()
                }).then(function(e) {
                    f.variant = i;
                    f.wasmurl = A;
                    d = e;
                    var _ = d.libavjs_create_main_thread();
                    var r = d.PThread.pthreads[_];
                    var t = 0;
                    var o = 1;
                    var s = {};
                    var a = null;
                    var n = new Promise(function(e) {
                        a = e
                    });
                    d.c = function() {
                        var a = Array.prototype.slice.call(arguments);
                        return new Promise(function(e, _) {
                            var t = o++;
                            a = [t].concat(a);
                            s[t] = [e, _];
                            r.postMessage({
                                c: "libavjs_run",
                                a: a
                            })
                        })
                    };
                    var c = r.onmessage;
                    r.onmessage = function(e) {
                        if (e.data && e.data.c === "libavjs_ret") {
                            var _ = e.data.a;
                            var t = s[_[0]];
                            if (t) {
                                if (_[2]) t[0](_[3]);
                                else t[1](_[3]);
                                delete s[_[0]]
                            }
                        } else if (e.data && e.data.c === "libavjs_wait_reader") {
                            if (d.readerDevReady(e.data.fd)) {
                                r.postMessage({
                                    c: "libavjs_wait_reader"
                                })
                            } else {
                                d.ff_reader_dev_waiters.push(function() {
                                    r.postMessage({
                                        c: "libavjs_wait_reader"
                                    })
                                })
                            }
                        } else if (e.data && e.data.c === "libavjs_ready") {
                            a()
                        } else {
                            return c.apply(this, arguments)
                        }
                    };
                    d.terminate = function() {
                        d.PThread.unusedWorkers.concat(d.PThread.runningWorkers).forEach(function(e) {
                            e.terminate()
                        })
                    };
                    return n
                })
            } else {
                var i = f.variant;
                var A = f.wasmurl;
                return Promise.all([]).then(function() {
                    if (e.variant) f.variant = e.variant;
                    if (e.wasmurl) f.wasmurl = e.wasmurl;
                    return f.LibAVFactory()
                }).then(function(e) {
                    f.variant = i;
                    f.wasmurl = A;
                    d = e;
                    d.worker = false;
                    d.c = function(t) {
                        var a = Array.prototype.slice.call(arguments, 1);
                        return new Promise(function(e, _) {
                            try {
                                e(d[t].apply(d, a))
                            } catch (e) {
                                _(e)
                            }
                        })
                    };
                    d.terminate = function() {}
                })
            }
        }).then(function() {
            function e(e) {
                e.forEach(function(e) {
                    d[e] = function() {
                        return d.c.apply(d, [e].concat(Array.prototype.slice.call(arguments)))
                    }
                })
            }

            function _(e) {
                e.forEach(function(e) {
                    var r = d[e + "_sync"] = d[e];
                    d[e] = function() {
                        var a = arguments;
                        return new Promise(function(e, _) {
                            try {
                                var t = r.apply(d, a);
                                if (typeof t === "object" && t !== null && t.then) t.then(e).catch(_);
                                else e(t)
                            } catch (e) {
                                _(e)
                            }
                        })
                    }
                })
            }
            var t = ["av_get_bytes_per_sample", "av_compare_ts_js", "av_opt_set", "av_opt_set_int_list_js", "av_frame_alloc", "av_frame_clone", "av_frame_free", "av_frame_get_buffer", "av_frame_make_writable", "av_frame_ref", "av_frame_unref", "av_log_get_level", "av_log_set_level", "av_packet_alloc", "av_packet_clone", "av_packet_free", "av_packet_new_side_data", "av_packet_ref", "av_packet_rescale_ts_js", "av_packet_unref", "av_strdup", "av_buffersink_get_frame", "av_buffersink_set_frame_size", "av_buffersrc_add_frame_flags", "avfilter_free", "avfilter_get_by_name", "avfilter_graph_alloc", "avfilter_graph_config", "avfilter_graph_create_filter_js", "avfilter_graph_free", "avfilter_graph_parse", "avfilter_inout_alloc", "avfilter_inout_free", "avfilter_link", "avcodec_alloc_context3", "avcodec_close", "avcodec_descriptor_get", "avcodec_descriptor_get_by_name", "avcodec_descriptor_next", "avcodec_find_decoder", "avcodec_find_decoder_by_name", "avcodec_find_encoder", "avcodec_find_encoder_by_name", "avcodec_free_context", "avcodec_get_name", "avcodec_open2", "avcodec_open2_js", "avcodec_parameters_alloc", "avcodec_parameters_copy", "avcodec_parameters_free", "avcodec_parameters_from_context", "avcodec_parameters_to_context", "avcodec_receive_frame", "avcodec_receive_packet", "avcodec_send_frame", "avcodec_send_packet", "av_find_input_format", "avformat_alloc_context", "avformat_alloc_output_context2_js", "avformat_close_input", "avformat_find_stream_info", "avformat_flush", "avformat_free_context", "avformat_new_stream", "avformat_open_input", "avformat_open_input_js", "avformat_seek_file", "avformat_seek_file_min", "avformat_seek_file_max", "avformat_seek_file_approx", "avformat_write_header", "avio_open2_js", "avio_close", "avio_flush", "av_find_best_stream", "av_get_sample_fmt_name", "av_grow_packet", "av_interleaved_write_frame", "av_packet_make_writable", "av_pix_fmt_desc_get", "av_read_frame", "av_shrink_packet", "av_write_frame", "av_write_trailer", "av_dict_copy_js", "av_dict_free", "av_dict_set_js", "sws_getContext", "sws_freeContext", "sws_scale_frame", "AVFrame_sample_aspect_ratio_num", "AVFrame_sample_aspect_ratio_den", "AVFrame_sample_aspect_ratio_s", "AVCodecContext_framerate_num", "AVCodecContext_framerate_den", "AVCodecContext_framerate_num_s", "AVCodecContext_framerate_den_s", "AVCodecContext_framerate_s", "AVCodecContext_sample_aspect_ratio_num", "AVCodecContext_sample_aspect_ratio_den", "AVCodecContext_sample_aspect_ratio_num_s", "AVCodecContext_sample_aspect_ratio_den_s", "AVCodecContext_sample_aspect_ratio_s", "AVCodecContext_time_base_s", "AVStream_time_base_num", "AVStream_time_base_den", "AVStream_time_base_s", "AVPacketSideData_data", "AVPacketSideData_size", "AVPacketSideData_type", "AVPixFmtDescriptor_comp_depth", "ff_error", "ff_nothing", "calloc", "close", "dup2", "free", "malloc", "mallinfo_uordblks", "open", "strerror", "libavjs_with_swscale", "libavjs_create_main_thread", "ffmpeg_main", "ffprobe_main", "AVFrame_channel_layout", "AVFrame_channel_layout_s", "AVFrame_channel_layouthi", "AVFrame_channel_layouthi_s", "AVFrame_channels", "AVFrame_channels_s", "AVFrame_channel_layoutmask", "AVFrame_channel_layoutmask_s", "AVFrame_ch_layout_nb_channels", "AVFrame_ch_layout_nb_channels_s", "AVFrame_data_a", "AVFrame_data_a_s", "AVFrame_format", "AVFrame_format_s", "AVFrame_height", "AVFrame_height_s", "AVFrame_key_frame", "AVFrame_key_frame_s", "AVFrame_linesize_a", "AVFrame_linesize_a_s", "AVFrame_nb_samples", "AVFrame_nb_samples_s", "AVFrame_pict_type", "AVFrame_pict_type_s", "AVFrame_pts", "AVFrame_pts_s", "AVFrame_ptshi", "AVFrame_ptshi_s", "AVFrame_sample_rate", "AVFrame_sample_rate_s", "AVFrame_width", "AVFrame_width_s", "AVPixFmtDescriptor_flags", "AVPixFmtDescriptor_flags_s", "AVPixFmtDescriptor_log2_chroma_h", "AVPixFmtDescriptor_log2_chroma_h_s", "AVPixFmtDescriptor_log2_chroma_w", "AVPixFmtDescriptor_log2_chroma_w_s", "AVPixFmtDescriptor_nb_components", "AVPixFmtDescriptor_nb_components_s", "AVCodec_sample_fmts", "AVCodec_sample_fmts_s", "AVCodec_sample_fmts_a", "AVCodec_sample_fmts_a_s", "AVCodec_supported_samplerates", "AVCodec_supported_samplerates_s", "AVCodec_supported_samplerates_a", "AVCodec_supported_samplerates_a_s", "AVCodec_type", "AVCodec_type_s", "AVCodecContext_codec_id", "AVCodecContext_codec_id_s", "AVCodecContext_codec_type", "AVCodecContext_codec_type_s", "AVCodecContext_bit_rate", "AVCodecContext_bit_rate_s", "AVCodecContext_bit_ratehi", "AVCodecContext_bit_ratehi_s", "AVCodecContext_channel_layout", "AVCodecContext_channel_layout_s", "AVCodecContext_channel_layouthi", "AVCodecContext_channel_layouthi_s", "AVCodecContext_channels", "AVCodecContext_channels_s", "AVCodecContext_channel_layoutmask", "AVCodecContext_channel_layoutmask_s", "AVCodecContext_ch_layout_nb_channels", "AVCodecContext_ch_layout_nb_channels_s", "AVCodecContext_extradata", "AVCodecContext_extradata_s", "AVCodecContext_extradata_size", "AVCodecContext_extradata_size_s", "AVCodecContext_frame_size", "AVCodecContext_frame_size_s", "AVCodecContext_gop_size", "AVCodecContext_gop_size_s", "AVCodecContext_height", "AVCodecContext_height_s", "AVCodecContext_keyint_min", "AVCodecContext_keyint_min_s", "AVCodecContext_level", "AVCodecContext_level_s", "AVCodecContext_max_b_frames", "AVCodecContext_max_b_frames_s", "AVCodecContext_pix_fmt", "AVCodecContext_pix_fmt_s", "AVCodecContext_profile", "AVCodecContext_profile_s", "AVCodecContext_rc_max_rate", "AVCodecContext_rc_max_rate_s", "AVCodecContext_rc_max_ratehi", "AVCodecContext_rc_max_ratehi_s", "AVCodecContext_rc_min_rate", "AVCodecContext_rc_min_rate_s", "AVCodecContext_rc_min_ratehi", "AVCodecContext_rc_min_ratehi_s", "AVCodecContext_sample_fmt", "AVCodecContext_sample_fmt_s", "AVCodecContext_sample_rate", "AVCodecContext_sample_rate_s", "AVCodecContext_qmax", "AVCodecContext_qmax_s", "AVCodecContext_qmin", "AVCodecContext_qmin_s", "AVCodecContext_width", "AVCodecContext_width_s", "AVCodecDescriptor_id", "AVCodecDescriptor_id_s", "AVCodecDescriptor_long_name", "AVCodecDescriptor_long_name_s", "AVCodecDescriptor_mime_types_a", "AVCodecDescriptor_mime_types_a_s", "AVCodecDescriptor_name", "AVCodecDescriptor_name_s", "AVCodecDescriptor_props", "AVCodecDescriptor_props_s", "AVCodecDescriptor_type", "AVCodecDescriptor_type_s", "AVCodecParameters_codec_id", "AVCodecParameters_codec_id_s", "AVCodecParameters_codec_tag", "AVCodecParameters_codec_tag_s", "AVCodecParameters_codec_type", "AVCodecParameters_codec_type_s", "AVCodecParameters_extradata", "AVCodecParameters_extradata_s", "AVCodecParameters_extradata_size", "AVCodecParameters_extradata_size_s", "AVCodecParameters_format", "AVCodecParameters_format_s", "AVCodecParameters_bit_rate", "AVCodecParameters_bit_rate_s", "AVCodecParameters_profile", "AVCodecParameters_profile_s", "AVCodecParameters_level", "AVCodecParameters_level_s", "AVCodecParameters_width", "AVCodecParameters_width_s", "AVCodecParameters_height", "AVCodecParameters_height_s", "AVCodecParameters_color_range", "AVCodecParameters_color_range_s", "AVCodecParameters_color_primaries", "AVCodecParameters_color_primaries_s", "AVCodecParameters_color_trc", "AVCodecParameters_color_trc_s", "AVCodecParameters_color_space", "AVCodecParameters_color_space_s", "AVCodecParameters_chroma_location", "AVCodecParameters_chroma_location_s", "AVCodecParameters_channels", "AVCodecParameters_channels_s", "AVCodecParameters_channel_layoutmask", "AVCodecParameters_channel_layoutmask_s", "AVCodecParameters_ch_layout_nb_channels", "AVCodecParameters_ch_layout_nb_channels_s", "AVCodecParameters_sample_rate", "AVCodecParameters_sample_rate_s", "AVPacket_pos", "AVPacket_pos_s", "AVPacket_poshi", "AVPacket_poshi_s", "AVPacket_pts", "AVPacket_pts_s", "AVPacket_ptshi", "AVPacket_ptshi_s", "AVPacket_dts", "AVPacket_dts_s", "AVPacket_dtshi", "AVPacket_dtshi_s", "AVPacket_data", "AVPacket_data_s", "AVPacket_size", "AVPacket_size_s", "AVPacket_stream_index", "AVPacket_stream_index_s", "AVPacket_flags", "AVPacket_flags_s", "AVPacket_side_data", "AVPacket_side_data_s", "AVPacket_side_data_elems", "AVPacket_side_data_elems_s", "AVPacket_duration", "AVPacket_duration_s", "AVPacket_durationhi", "AVPacket_durationhi_s", "AVFormatContext_flags", "AVFormatContext_flags_s", "AVFormatContext_nb_streams", "AVFormatContext_nb_streams_s", "AVFormatContext_oformat", "AVFormatContext_oformat_s", "AVFormatContext_pb", "AVFormatContext_pb_s", "AVFormatContext_streams_a", "AVFormatContext_streams_a_s", "AVStream_codecpar", "AVStream_codecpar_s", "AVStream_discard", "AVStream_discard_s", "AVStream_duration", "AVStream_duration_s", "AVStream_durationhi", "AVStream_durationhi_s", "AVFilterInOut_filter_ctx", "AVFilterInOut_filter_ctx_s", "AVFilterInOut_name", "AVFilterInOut_name_s", "AVFilterInOut_next", "AVFilterInOut_next_s", "AVFilterInOut_pad_idx", "AVFilterInOut_pad_idx_s", "ff_reader_dev_send", "ff_block_reader_dev_send", "ff_reader_dev_waiting", "ff_init_encoder", "ff_init_decoder", "ff_free_encoder", "ff_free_decoder", "ff_encode_multi", "ff_decode_multi", "ff_set_packet", "ff_init_muxer", "ff_free_muxer", "ff_init_demuxer_file", "ff_write_multi", "ff_read_multi", "ff_init_filter_graph", "ff_filter_multi", "ff_decode_filter_multi", "ff_copyout_frame", "ff_copyout_frame_video", "ff_frame_video_packed_size", "ff_copyout_frame_video_packed", "ff_copyout_frame_video_imagedata", "ff_copyout_frame_ptr", "ff_copyin_frame", "ff_copyout_packet", "ff_copyout_packet_ptr", "ff_copyin_packet", "ff_malloc_int32_list", "ff_malloc_int64_list", "ffmpeg", "ffprobe", "av_frame_free_js", "av_packet_free_js", "avformat_close_input_js", "avcodec_free_context_js", "avcodec_parameters_free_js", "avfilter_graph_free_js", "avfilter_inout_free_js", "av_dict_free_js"];
            var a = ["readFile", "writeFile", "unlink", "unmount", "mkdev", "createLazyFile", "mkreaderdev", "mkblockreaderdev", "mkreadaheadfile", "unlinkreadaheadfile", "mkwriterdev", "mkstreamwriterdev", "mountwriterfs", "mkworkerfsfile", "unlinkworkerfsfile", "copyin_u8", "copyout_u8", "copyin_s16", "copyout_s16", "copyin_s32", "copyout_s32", "copyin_f32", "copyout_f32"];
            d.libavjsMode = r;
            if (r === "worker") {
                e(t);
                e(a)
            } else if (r === "threads") {
                e(t);
                _(a)
            } else {
                _(t);
                _(a)
            }
            Object.assign(d, A);
            return d
        })
    };
    if (c) module.exports = f
})();