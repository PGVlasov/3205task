import { useState } from "react";
import { Input } from "../../UI/Input";
import { Loader } from "../loader/Loader";
import classes from "./MainComponent.module.scss";

export const MainComponent = () => {
  const [inputValue, setInputValue] = useState();
  let result = 1;

  const getCurrentCourse = () => {
    console.log("result", result * 60);
  };

  const onChangeHandler = (inputValue: string) => {
    const numValue = inputValue.replace(/[^0-9]/g, "");
    console.log(numValue);
  };

  return (
    <div className={classes.MainComponent}>
      <h1>Currency converter</h1>
      <Input
        type="text"
        placeholder={"Amount in EUR (15 EUR in RUB or 15)"}
        className={classes.input}
        onChange={onChangeHandler}
        onKeyDown={(e) => (e.code === "Enter" ? getCurrentCourse() : null)}
        value={inputValue}
      />
      <div className={classes.result}>= {result} RUB</div>
    </div>
  );
};
