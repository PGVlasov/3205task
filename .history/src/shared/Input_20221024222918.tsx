import React, { InputHTMLAttributes, memo } from "react";
import classes from "./input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

type InputProps = HTMLInputProps & {
  className?: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
};

export const Input = memo((props: InputProps) => {
  const {
    value,
    placeholder,
    type = "text",
    onChange,
    error,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classes.InputWrapper}>
      <input
        className={classes.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        {...otherProps}
      />
      {error && <span>{error}</span>}
    </div>
  );
});
