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

  let odj = {
    g: 1,
    d: 2,
  };
  console.log(typeof rates);
  let currencyArr = Object.entries(rates as any);

  //   for (let population in currencyArr) {  Object.keys(data).reduce((acc: any, key: string) => {
  // }, {});
  //     if (currencyArr.hasOwnProperty(population)) {
  //       countries.push(population);
  //     }
  //   }

  console.log("RATES", rates);
  console.log("ARRRRRRRRRR0000", currencyArr);

  if (!rates) {
    return <Loader />;
  }

  return (
    <div className={classes.ExchangeComponent}>
      <h1>Excnhge Component</h1>
      <div>
        {isLoading && <Loader />}
        {error && <h1>произошла ошибка....</h1>}
        <div className={classes.rates}>
          {currencyArr.map((curr) => {
            return (
              <div>
                <span>{curr[0]}:</span>
                <span>{curr[1]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
