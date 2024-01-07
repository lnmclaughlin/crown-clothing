import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootreducer";

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
