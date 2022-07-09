import { createStore } from "redux";
import reducer from "../Reducer/reducer";
import action from "../Action/action";
const store = createStore(reducer);

console.log("intial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(action());
unsubscribe();
export default store;
