import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";
import { Loader } from "../loader/Loader";

import classes from "./ExchangeComponent.module.scss";

export const ExchangeComponent: React.FC = () => {
  const test = { "USDRUB": "64.1824", "EURRUB": "69.244" };
  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  let res = JSON.stringify(rates[2], null, 2);

  //   function getBaseCurency(rates: []){

  //   }

  // let keys = Object.keys(rates[2]);
  //   let values = Object.values(rates[2]);

  //let result = res.substring(1, res.length - 1);

  //   console.log("2===>", keys);
  //   console.log("3333===>", Number(values[1]));
  console.log("type", typeof rates[2]);

  let keys = Object.keys(test);
  console.log("KKKKEEEEYYYSS", keys);

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
          <p>{test.USDRUB}</p>
          <p>{test.EURRUB}</p>
        </div>
      </div>
    </div>
  );
};

// <div> {JSON.stringify(rates, null, 2)}</div>
