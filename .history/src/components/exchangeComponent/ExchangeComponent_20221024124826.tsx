import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";
import { Loader } from "../loader/Loader";
import classes from "./ExchangeComponent.module.scss";

export const ExchangeComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  if (rates.length === 0) {
    return <Loader />;
  }

  let keys = Object.keys(rates[2]);
  let values = Object.values(rates[2]);

  return (
    <div className={classes.ExchangeComponent}>
      <h1>Excnhge Component</h1>
      <div>
        {isLoading && <Loader />}
        {error && <h1>произошла ошибка....</h1>}
        <div className={classes.rates}>
          <p>
            {keys[0]}: {values[0]}
          </p>
          <p>
            {keys[1]}: {values[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

// <div> {JSON.stringify(rates, null, 2)}</div>
