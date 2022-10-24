import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRates } from "../../store/reducers/ActionCreator";
import { Input } from "../../UI/Input";
import { Loader } from "../loader/Loader";
import classes from "./MainComponent.module.scss";

export const MainComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [result, setResult] = useState<number>(0);
  const currency = 60;

  const dispatch = useAppDispatch();
  const { rates, isLoading, error } = useAppSelector(
    (state) => state.rateReducer
  );

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  const getCurrentCourse = (inputValue: string | undefined) => {
    const numValue = inputValue?.replace(/[^0-9]/g, "");
    console.log("numValue", numValue);
    setInputValue("");
    if (numValue) return setResult(+numValue * +currency);
  };

  const onChangeValue = (value: string) => {
    setInputValue(value);
  };

  if (!rates) {
    return <Loader />;
  }

  return (
    <div className={classes.MainComponent}>
      <h1>Currency converter</h1>
      <Input
        type="text"
        placeholder={"Amount in EUR (15 EUR in RUB or 15)"}
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
