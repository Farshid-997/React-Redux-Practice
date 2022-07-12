import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import CakeContain from "./Components/CakeContain";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CakeContain />
      </div>
    </Provider>
  );
}

export default App;
