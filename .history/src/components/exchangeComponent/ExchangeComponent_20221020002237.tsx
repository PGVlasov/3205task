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

  let res = JSON.stringify(rates[2], null, 2);

  async function convert(res: string) {
    let arr = res.split(",");

    console.log(arr[2], arr[3]);
  }
  convert(res);
  //   console.log(typeof arr);

  const language = window.navigator.language;

  console.log("2===>", rates[2]);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  return (
    <div className={classes.ExchangeComponent}>
      <h1>Excnhge Component</h1>
      <div>
        {isLoading && <h1>идет загрузка...</h1>}
        {error && <h1>произошла ошибка....</h1>}
        {res}
      </div>
    </div>
  );
};

// <div> {JSON.stringify(rates, null, 2)}</div>
