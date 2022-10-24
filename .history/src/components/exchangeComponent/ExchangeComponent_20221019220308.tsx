import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./ExchangeComponent.module.scss";

export const ExchangeComponent = () => {
  return (
    <div className={classes.ExchangeComponent}>
      <h1>Excnhge Component</h1>
    </div>
  );
};

// <div> {JSON.stringify(rates, null, 2)}</div>
