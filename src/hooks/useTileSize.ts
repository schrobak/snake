import { useWindowSize } from "./useWindowSize";
import { useEffect, useState } from "react";
import { useBoardSize } from "./useBoardSize";

export const useTileSize = (): number => {
  const [rows, columns] = useBoardSize();
  const [windowWidth, windowHeight] = useWindowSize();
  const [tileSize, setTileSize] = useState(0);

  useEffect(() => {
    const stageWidth = Math.floor(windowWidth * 0.9);
    const stageHeight = Math.floor(windowHeight * 0.9);

    setTileSize(
      Math.min(
        Math.floor(stageWidth / columns),
        Math.floor(stageWidth / rows),
        Math.floor(stageHeight / columns),
        Math.floor(stageHeight / rows)
      )
    );
  }, [windowWidth, windowHeight, columns, rows]);

  return tileSize;
};
