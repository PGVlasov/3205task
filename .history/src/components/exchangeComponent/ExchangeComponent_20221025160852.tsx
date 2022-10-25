import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";
import { Loader } from "../loader/Loader";
import classes from "./ExchangeComponent.module.scss";

interface EnumServiceItem {
  currencyPairs: string;
  value: number;
}

export const ExchangeComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  if (rates === null) {
    return <Loader />;
  }

  let currencyArr = Object.entries(rates);

  let test = currencyArr[0][0].split("").splice(3, 0, " : ");
  let losadasd = test.join("");
  console.log(losadasd);
  return (
    <div className={classes.ExchangeComponent}>
      <h1>Excnhge Component</h1>
      <div>
        {isLoading && <Loader />}
        {error && <h1>произошла ошибка....</h1>}
        <div className={classes.rates}>
          {currencyArr.map((curr) => {
            return (
              <div key={Math.random()}>
                <span> {curr[0].split("")}:</span>
                <span> {Number(curr[1]).toFixed(2)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
