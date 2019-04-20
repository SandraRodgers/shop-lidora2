import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./reducer";

import { createLogger } from "redux-logger";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

createStore(reducer, logger);
export default createStore(reducer, applyMiddleware(promiseMiddleware));
