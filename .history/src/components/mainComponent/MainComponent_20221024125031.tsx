import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";
import { Input } from "../../UI/Input";
import { Loader } from "../loader/Loader";
import classes from "./MainComponent.module.scss";

export const MainComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { rates } = useAppSelector((state) => state.rateReducer);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  let values = Object.values(rates[2]);
  let currency = values[0];

  const getCurrentCourse = (inputValue: string | undefined) => {
    const numValue = inputValue?.replace(/[^0-9]/g, "");
    console.log("numValue", numValue);
    setInputValue("");
    if (numValue) return setResult(+numValue * +currency);
  };

  const onChangeValue = (value: string) => {
    setInputValue(value);
  };

  if (rates.length === 0) {
    return <Loader />;
  }

  return (
    <div className={classes.MainComponent}>
      <h1>Currency converter</h1>
      <Input
        type="text"
        placeholder={
          "Enter amount in USD (15 USD in RUB or 15) and press Enter"
        }
        className={classes.input}
        onChange={onChangeValue}
        onKeyDown={(e: React.KeyboardEvent) =>
          e.code === "Enter" ? getCurrentCourse(inputValue) : null
        }
        value={inputValue}
      />
      <div className={classes.result}>= {result} RUB</div>
    </div>
  );
};
