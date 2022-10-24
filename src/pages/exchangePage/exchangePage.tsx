import { ExchangeComponent } from "../../components/exchangeComponent/ExchangeComponent";
import classes from "./exchangePage.module.scss";

export const ExchangePage = () => {
  return (
    <div className={classes.exchangePage}>
      <ExchangeComponent />
    </div>
  );
};
