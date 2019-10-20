import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Game } from "components/Game";
import { GlobalStyle } from "styles";
import { rootReducer } from "store";

import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);

const Root = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Game />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
