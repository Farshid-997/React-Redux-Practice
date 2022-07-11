import { createStore } from "redux";
import { combineReducers } from "redux";
import { cakeReducer, IceCreamReducer } from "../Reducer/reducer";
import { CakeAction, IcecreamAction } from "../Action/action";
import reduxLogger from "redux-logger";
import ThunkMiddleware from "redux-thunk";
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const rootReducer = combineReducers({
  cake: cakeReducer,
  IceCream: IceCreamReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, ThunkMiddleware)
);
console.log("intial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(CakeAction());
store.dispatch(IcecreamAction());
unsubscribe();
export default store;
