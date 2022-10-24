import React, { InputHTMLAttributes, memo } from "react";
import classes from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value">;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}
export const Input = memo((props: InputProps) => {
  const { value, placeholder, type = "text", onChange, ...otherProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classes.InputWrapper}>
      {placeholder && (
        <div className={classes.placeholder}>{`${placeholder}>`}</div>
      )}
      <input
        className={classes.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
