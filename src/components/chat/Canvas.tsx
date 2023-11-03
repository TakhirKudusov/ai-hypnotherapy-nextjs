import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useMicVADWrapper } from "@/components/chat/utils/hooks/useMicVADWrapper";

const Canvas = (props: any) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);
  useMicVADWrapper();

  return <StyledCanvas ref={canvasRef} width={450} height={450} {...rest} />;
};

const useCanvas = (draw: any) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId: number;

    if (typeof window !== "undefined") {
      const canvas = canvasRef.current as any;
      const context = canvas.getContext("2d");
      const displayWidth = canvas.width;
      const displayHeight = canvas.height;

      // projection center coordinates sets location of origin
      const projCenterX = displayWidth / 2;
      const projCenterY = displayHeight / 2;

      const render = () => {
        draw(context, displayWidth, displayHeight, projCenterX, projCenterY);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }

    return () => {
      if (typeof window !== "undefined")
        window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

const StyledCanvas = styled.canvas`
  width: 90%;
  border-radius: 10px;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export default Canvas;
