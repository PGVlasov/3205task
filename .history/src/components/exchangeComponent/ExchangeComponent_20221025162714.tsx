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

  if (rates === null) {
    return <Loader />;
  }

  let currencyArr = Object.entries(rates);
  let splited =
    currencyArr[0][0].substr(0, currencyArr[0][0].length / 2) +
    ":" +
    currencyArr[0][0].substr(currencyArr[0][0].length / 2);
  //   let spliced = splited.splice(1, 1, "P").join("");
  console.log(splited);
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
                <span>
                  {curr[0].substr(0, curr[0].length / 2) +
                    ":" +
                    curr[0].substr(curr[0].length / 2)}
                  :
                </span>
                <span> {Number(curr[1]).toFixed(2)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
