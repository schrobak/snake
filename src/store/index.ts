import { combineReducers } from "redux";

import { boardReducer } from "./board/reducers";
import { snakeReducer } from "./snake/reducers";
import { foodReducer } from "./food/reducers";

export const rootReducer = combineReducers({
  board: boardReducer,
  snake: snakeReducer,
  food: foodReducer
});

export type GameState = ReturnType<typeof rootReducer>;
