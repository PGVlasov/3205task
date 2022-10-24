import { useAppDispatch } from "./hooks/redux";
import { ratesSlice } from "./store/reducers/RatesSlice";

function App() {
  const { increment } = ratesSlice.actions;

  const dispanch = useAppDispatch();

  return <div className="App">sdfsdfsdfdsf</div>;
}

export default App;
