import { Loader } from "../loader/Loader";
import classes from "./MainComponent.module.scss";

export const MainComponent = () => {
  return (
    <div className={classes.MainComponent}>
      <h1>Main Component</h1>;
      <Loader />
    </div>
  );
};
