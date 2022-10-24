import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { ratesSlice } from "./store/reducers/RatesSlice";

function App() {
  const { count } = useAppSelector((state) => state.rateReducer);
  const { increment } = ratesSlice.actions;

  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment)}>INCR</button>
    </div>
  );
}

export default App;
