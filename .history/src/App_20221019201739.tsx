import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import { fetchRates } from "./store/reducers/ActionCreator";

function App() {
  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  //   let res = JSON.parse(rates);

  //   console.log(rates);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loading....</h1>}
      {error && <h1>Err....</h1>}
      {JSON.stringify(rates[2], null, 2)}
    </div>
  );
}

export default App;
