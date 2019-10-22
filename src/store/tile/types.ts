import { Action } from "redux";

export interface TileState {
  size: number;
}

export const SET_TILE_SIZE = "SET_TILE_SIZE";

interface SetTileSize extends Action {
  type: typeof SET_TILE_SIZE;
  size: number;
}

export type TileActionTypes = SetTileSize;
