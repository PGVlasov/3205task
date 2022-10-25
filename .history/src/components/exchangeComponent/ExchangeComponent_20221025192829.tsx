import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";
import { Loader } from "../loader";
import classes from "./ExchangeComponent.module.scss";

export const ExchangeComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch]);

  const currencyRates = useMemo(
    () => (rates ? Object.entries(rates) : []),
    [rates]
  );

  if (rates === null) {
    return <Loader />;
  }

  return (
    <div className={classes.ExchangeComponent}>
      <h1>Exchange Rates</h1>
      <div>
        {isLoading && <Loader />}
        {error && <h1>произошла ошибка....</h1>}
        <div className={classes.ratesContainer}>
          {currencyRates.map(([currencyPair, value]) => {
            const sourceCurrency = currencyPair.slice(0, 3);
            const targetCurrency = currencyPair.slice(3, 6);

            return (
              <div key={currencyPair}>
                <span className={classes.currency}>
                  {sourceCurrency}/{targetCurrency}:
                </span>
                <span className={classes.rateValue}>
                  {Number(value).toFixed(3)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
