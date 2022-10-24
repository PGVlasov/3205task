import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchRates from "../../store/actions,js";
import classes from "./ExchangeComponent.module.scss";

export const ExchangeComponent = () => {
  const dispatch = useDispatch();
  const rates = useSelector((state) => state);

  console.log(rates);

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
