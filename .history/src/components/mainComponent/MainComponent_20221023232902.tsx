import { useState } from "react";
import { Input } from "../../UI/Input";
import { Loader } from "../loader/Loader";
import classes from "./MainComponent.module.scss";

export const MainComponent = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [result, setResult] = useState<number>(0);
  const currency = 60;

  const getCurrentCourse = (inputValue: string | undefined) => {
    const numValue = inputValue?.replace(/[^0-9]/g, "");
    console.log(numValue);
    // return setResult(+numValue * +currency);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //const numValue = inputValue.replace(/[^0-9]/g, "");
    setInputValue(event.target.value);
    console.log("VALUE", inputValue);
  };

  return (
    <div className={classes.MainComponent}>
      <h1>Currency converter</h1>
      <input
        type="text"
        placeholder={"Amount in EUR (15 EUR in RUB or 15)"}
        className={classes.input}
        onChange={onChangeHandler}
        onKeyDown={(e: React.KeyboardEvent) =>
          e.code === "Enter" ? getCurrentCourse(inputValue) : null
        }
        value={inputValue}
      />
      <div className={classes.result}>= {result} RUB</div>
    </div>
  );
};
