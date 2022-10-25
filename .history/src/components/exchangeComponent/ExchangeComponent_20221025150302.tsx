import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";
import { Loader } from "../loader/Loader";
import classes from "./ExchangeComponent.module.scss";

interface EnumServiceItem {
  currency: string;
  label: string;
  key: any;
}

export const ExchangeComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  let currencyФккф: EnumServiceItem = [];

  for (let population in currencyRates) {
    if (currencyRates.hasOwnProperty(population)) {
      countries.push(population);
    }
  }

  console.log("RATES", rates);
  console.log("ARRRRRRRRRR0000", currencyRates);

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
          <p>{"rates"}</p>
          <p>2</p>
        </div>
      </div>
    </div>
  );
};
