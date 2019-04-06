import {createStore, applyMiddleware, compose} from "redux"
import promiseMiddleware from "redux-promise-middleware"
import reducer from "./reducer"

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(promiseMiddleware)))

    export default store