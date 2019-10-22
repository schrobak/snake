import { SET_TILE_SIZE, TileActionTypes } from "./types";

export const setTileSizeAction = (size: number): TileActionTypes => ({
  type: SET_TILE_SIZE,
  size
});
