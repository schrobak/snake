import { combineReducers } from "redux";

import { boardReducer } from "./board/reducers";

export const rootReducer = combineReducers({
  board: boardReducer
});

export type GameState = ReturnType<typeof rootReducer>;
