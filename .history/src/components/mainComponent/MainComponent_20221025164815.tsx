import { useState } from "react";
import classes from "./MainComponent.module.scss";
import { fetchRate } from "../../api/api";
import { Input } from "../../shared/Input";
import { Loader } from "../loader/Loader";

function getCurrency(curr: string) {
  switch (curr) {
    case "USD":
      return "USD";
    case "RUB":
      return "RUB";
    case "EUR":
      return "EUR";
    default:
      return null;
  }
}

export const MainComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [targetCurrency, setTargetCurrency] = useState<string | null>("");

  const calculateExchangeResult = async (inputValue: string) => {
    const [value, sourceCurrency, _, targetCurrency] = inputValue.split(" ");

    const numValue = Number(value);
    if (!Number.isInteger(numValue)) {
      setError(`Wrong currency value. Expected format: "15 usd in rub"`);
      setResult(0);
      return;
    }

    const sourceCurr = getCurrency(sourceCurrency.toUpperCase());
    const targetCurr = getCurrency(targetCurrency.toUpperCase());

    if (!sourceCurr || !targetCurr) {
      setError(`Wrong currency. Expected format: "15 usd in rub"`);
      setResult(0);
      return;
    }

    // move somewhere else
    setTargetCurrency(targetCurr);
    setIsLoading(true);
    const rate = await fetchRate(sourceCurr, targetCurr);

    setResult(numValue * Number(rate));
    setIsLoading(false);
    setError("");
    setInputValue("");
  };

  const onChangeValue = (value: string) => {
    setInputValue(value);
  };

  if (isLoading)
    return (
      <div className={classes.MainComponent}>
        <Loader />
      </div>
    );

  return (
    <div className={classes.MainComponent}>
      <h1>Currency converter</h1>
      <Input
        type="text"
        placeholder="15 USD in RUB"
        className={classes.input}
        onChange={onChangeValue}
        onKeyDown={(e: React.KeyboardEvent) =>
          e.code === "Enter" ? calculateExchangeResult(inputValue) : null
        }
        value={inputValue}
      />
      {error !== "" ? <div className={classes.error}>{error}</div> : null}
      {result ? (
        <div className={classes.result}>
          {result.toFixed(2)} {targetCurrency}
        </div>
      ) : null}
    </div>
  );
};
