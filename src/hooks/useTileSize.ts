import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getBoardSize } from "store/board/selectors";

import { useWindowSize } from "./useWindowSize";

export const useTileSize = (): number => {
  const [rows, columns] = useSelector(getBoardSize);
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
