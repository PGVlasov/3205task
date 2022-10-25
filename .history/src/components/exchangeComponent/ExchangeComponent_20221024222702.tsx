import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";
import { Loader } from "../loader/Loader";
import classes from "./exchange-component.module.scss";

export const ExchangeComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  console.log("rates0000", rates);

  if (!rates) {
    return <Loader />;
  }

  let keys = rates ? Object.keys(rates[2]) : [];
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
