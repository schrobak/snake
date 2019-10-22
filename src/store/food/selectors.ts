import { createSelector } from "reselect";

import { GameState } from "store";
import { GridPosition } from "store/food/types";

import { FoodState } from "./types";

export const getFoodPosition = createSelector<GameState, FoodState, GridPosition>(
  [state => state.food],
  ({ position }) => [position.x, position.y]
);
