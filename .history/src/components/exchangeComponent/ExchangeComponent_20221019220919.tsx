import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";

import classes from "./ExchangeComponent.module.scss";

export const ExchangeComponent = () => {
  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  let language = window.navigator.language;

  console.log("LANG", language);

  //   console.log(rates);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);
  return (
    <div className={classes.ExchangeComponent}>
      <h1>Excnhge Component</h1>
    </div>
  );
};

// <div> {JSON.stringify(rates, null, 2)}</div>
