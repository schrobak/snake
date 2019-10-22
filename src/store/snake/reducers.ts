import { SET_SNAKE_DIRECTION, SnakeActionTypes, SnakeDirection, SnakeState } from "store/snake/types";

const initialState: SnakeState = {
  direction: SnakeDirection.RIGHT
};

export const snakeReducer = (state = initialState, action: SnakeActionTypes): SnakeState => {
  switch (action.type) {
    case SET_SNAKE_DIRECTION: {
      return {
        ...state,
        direction: action.direction
      };
    }
    default:
      return state;
  }
};
