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

  let arr = [rates];
  //   let item;

  //   for (let type in rates) {
  //     item = {};
  //     item.type = type;
  //     item.name = rates[type];
  //     arr.push(item);
  //   }
  //   if (rates) {
  //     arr.push(Object.values(rates));
  //   }
  console.log("RATES", rates);
  console.log("ARRRRRRRRRR0000", arr);

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
