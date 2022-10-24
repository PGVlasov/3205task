import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { ratesSlice } from "./store/reducers/RatesSlice";

function App() {
  const dispatch = useAppDispatch();

  return <div className="App"></div>;
}

export default App;
