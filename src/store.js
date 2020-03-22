// outsource dependencies
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

// local dependencies
import rootSaga from "./Component/sagas";
import rootReducer from "./Component/reducers";

// Build the middleware to run our Saga
const sagaMiddleware = createSagaMiddleware();

// Apply redux extension compose for non production environment
const enchantedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(
  rootReducer,
  enchantedCompose(applyMiddleware(sagaMiddleware))
);

// initialize saga
sagaMiddleware.run(rootSaga);

export default store;
