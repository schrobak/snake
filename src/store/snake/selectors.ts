import { createSelector } from "reselect";
import { GameState } from "store";
import { SnakeDirection, SnakeState } from "./types";

export const getSnakeDirection = createSelector<GameState, SnakeState, SnakeDirection>(
  [state => state.snake],
  ({ direction }) => direction
);
