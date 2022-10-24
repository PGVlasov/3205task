import { useState } from "react";
import { Input } from "../../UI/Input";
import { Loader } from "../loader/Loader";
import classes from "./MainComponent.module.scss";

export const MainComponent = () => {
  const [inputValue, setInputValue] = useState();
  const onChangeHandler = () => {
    const numValue = inputValue.replace(/[^0-9]/g, "");
    Console.log(numValue * currency);
  };
  return (
    <div className={classes.MainComponent}>
      <h1>Main Component</h1>;
      <Input
        type="text"
        placeholder="username"
        className={classes.input}
        onChange={onChangeHandler}
        value=""
      />
    </div>
  );
};
