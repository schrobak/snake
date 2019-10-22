import { combineReducers } from "redux";

import { boardReducer } from "./board/reducers";
import { snakeReducer } from "./snake/reducers";

export const rootReducer = combineReducers({
  board: boardReducer,
  snake: snakeReducer
});

export type GameState = ReturnType<typeof rootReducer>;
