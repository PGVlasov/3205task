import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { ratesSlice } from "./store/reducers/RatesSlice";

function App() {
  const dispatch = useAppDispatch();
  const { rates } = useAppSelector((state) => state.rateReducer);

  return <div className="App">{rates}</div>;
}

export default App;
