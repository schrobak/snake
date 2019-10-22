import { createSelector } from "reselect";

import { GameState } from "store";
import { TileState } from "./types";

export const getTileSize = createSelector<GameState, TileState, number>(
  [state => state.tile],
  ({ size }) => size
);
