import React, { useEffect, useRef } from "react";

import { useWindowSize } from "hooks";

export const Game: React.FC = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const tileSize = 40;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const spacing = 2;
    const rows = Math.floor(windowHeight / (tileSize + spacing));
    const columns = Math.floor(windowWidth / (tileSize + spacing));
    const top = Math.floor((windowHeight - rows * (tileSize + spacing)) / 2);
    const left = Math.floor((windowWidth - columns * (tileSize + spacing)) / 2);

    context.fillStyle = "rgba(0, 0, 0, 0.15)";

    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const x1 = x * tileSize + x * spacing + left;
        const y1 = y * tileSize + y * spacing + top;
        context.fillRect(x1, y1, tileSize, tileSize);
      }
    }
  }, [windowHeight, windowWidth, tileSize]);

  return <canvas ref={canvasRef} width={windowWidth} height={windowHeight} />;
};
