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

  const language = window.navigator.language;

  console.log(rates[2]);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  return (
    <div className={classes.ExchangeComponent}>
      <h1>Excnhge Component</h1>
      {isLoading && <h1>идет загрузка...</h1>}
      {error && <h1>произошла ошибка....</h1>}
      {JSON.stringify(rates[2], null, 2)}
    </div>
  );
};

// <div> {JSON.stringify(rates, null, 2)}</div>
