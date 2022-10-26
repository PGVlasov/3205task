import { useState } from "react";
import { fetchRate } from "../../api/api";
import { Input } from "../../shared/Input";
import { Loader } from "../loader";
import classes from "./MainComponent.module.scss";

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
  const [exchangeResult, setExchangeResult] = useState<number>(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [targetCurrency, setTargetCurrency] = useState<string | null>(null);

  const calculateExchangeResult = async (inputValue: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value, sourceCurrency, _, targetCurrency] = inputValue.split(" ");

    const numValue = Number(value);
    if (!Number.isInteger(numValue)) {
      setError(`Wrong currency value. Expected format: "15 usd in rub"`);
      setExchangeResult(0);
      return;
    }

    const sourceCurr = sourceCurrency
      ? getCurrency(sourceCurrency.toUpperCase())
      : null;
    const targetCurr = targetCurrency
      ? getCurrency(targetCurrency.toUpperCase())
      : null;

    if (!sourceCurr || !targetCurr) {
      setError(`Wrong or missing currency. Expected format: "15 usd in rub"`);
      setExchangeResult(0);
      return;
    }

    setTargetCurrency(targetCurr);
    setIsLoading(true);
    setError("");

    let rate;

    try {
      rate = await fetchRate(sourceCurr, targetCurr);
      setExchangeResult(numValue * Number(rate));
      setInputValue("");
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  //   if (isLoading) {
  //     setExchangeResult(0);
  //   }

  return (
    <div className={classes.mainComponent}>
      <h1>Currency converter</h1>
      <div className={classes.inputContainer}>
        <Input
          type="text"
          placeholder="15 USD in RUB"
          onChange={setInputValue}
          onKeyDown={(e: React.KeyboardEvent) =>
            e.code === "Enter" ? calculateExchangeResult(inputValue) : null
          }
          value={inputValue}
        />

        {isLoading && <Loader className={classes.loader} width={40} />}
      </div>
      {error !== "" ? <div className={classes.error}>{error}</div> : null}
      {isLoading ? setExchangeResult(0) : null}
      {exchangeResult ? (
        <div className={classes.result}>
          {exchangeResult.toFixed(2)} {targetCurrency}
        </div>
      ) : null}
    </div>
  );
};
