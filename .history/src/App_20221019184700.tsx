import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import { fetchRates } from "./store/reducers/ActionCreator";

function App() {
  const dispatch = useAppDispatch();
  const { rates } = useAppSelector((state) => state.rateReducer);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  return <div className="App">{JSON.stringify(rates, null, 2)}</div>;
}

export default App;
