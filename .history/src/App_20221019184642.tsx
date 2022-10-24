import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const { rates } = useAppSelector((state) => state.rateReducer);

  useEffect(() => {}, []);

  return <div className="App">{JSON.stringify(rates, null, 2)}</div>;
}

export default App;
