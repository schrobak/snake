import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useBoundAction } from "store";
import { getBoardSize } from "store/board/selectors";
import { getTileSize } from "store/tile/selectors";
import { setTileSizeAction } from "store/tile/actions";

import { useWindowSize } from "./useWindowSize";

export const useTileSize = (): number => {
  const [rows, columns] = useSelector(getBoardSize);
  const tileSize = useSelector(getTileSize);
  const [windowWidth, windowHeight] = useWindowSize();
  const setTileSize = useBoundAction(setTileSizeAction);

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
  }, [windowWidth, windowHeight, columns, rows, setTileSize]);

  return tileSize;
};
