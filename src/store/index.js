import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas';
const SagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(SagaMiddleware),
    // other store enhancers if any
);

const store = createStore(reducer, enhancer);

SagaMiddleware.run(rootSaga);

export default store;