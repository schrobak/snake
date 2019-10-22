export enum SnakeDirection {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export interface SnakeState {
  direction: SnakeDirection;
}

export const SET_SNAKE_DIRECTION = "SET_SNAKE_DIRECTION";

interface SetSnakeDirection {
  type: typeof SET_SNAKE_DIRECTION;
  direction: SnakeDirection;
}

export type SnakeActionTypes = SetSnakeDirection;

export type CheckKeyCode = (code: string) => boolean;
