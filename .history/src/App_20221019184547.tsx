import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { ratesSlice } from "./store/reducers/RatesSlice";

function App() {
  const dispatch = useAppDispatch();
  const { rates } = useAppSelector((state) => state.rateReducer);

  return <div className="App">{JSON.stringify(rates, 2, 0)}</div>;
}

export default App;
