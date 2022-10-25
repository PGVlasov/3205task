import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={classes.navBar}>
      <div>
        <NavLink className={classes.link} to="/">
          <span>Currency Converter</span>
        </NavLink>
        <NavLink className={classes.link} to="/exchangePage">
          <span>Exchange Rates</span>
        </NavLink>
      </div>
    </div>
  );
};
