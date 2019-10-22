import { SET_SNAKE_DIRECTION, SnakeActionTypes, SnakeDirection } from "./types";

export const setSnakeDirectionAction = (direction: SnakeDirection): SnakeActionTypes => ({
  type: SET_SNAKE_DIRECTION,
  direction
});
