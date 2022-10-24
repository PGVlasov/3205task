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

  let res = JSON.stringify(rates, null, 2);

  //let result = res.substring(1, res.length - 1);

  //   async function convert(res: string) {
  //     let arr = res.split(",");

  //     console.log(arr[2], arr[3]);
  //   }
  //   convert(res);
  //   console.log(typeof arr);

  console.log("2===>", rates[2]);
  console.log("type", typeof rates[2]);

  if (!rates) {
    return <Loader />;
  }

  return (
    <div className={classes.ExchangeComponent}>
      <h1>Excnhge Component</h1>
      <div>
        {isLoading && <Loader />}
        {error && <h1>произошла ошибка....</h1>}
        {res}
      </div>
    </div>
  );
};

// <div> {JSON.stringify(rates, null, 2)}</div>
