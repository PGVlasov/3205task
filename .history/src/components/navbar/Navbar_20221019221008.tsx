import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Links}>
        <NavLink className={classes.Link} to="/">
          <span className={classes.Logo}>Main Page</span>
        </NavLink>
      </div>
      <div className={classes.Links}>
        <NavLink className={classes.Link} to="/">
          <span>Main Page</span>
        </NavLink>
        <NavLink className={classes.Link} to="/exchangePage">
          <span>Exchange Page</span>
        </NavLink>
      </div>
    </div>
  );
};
