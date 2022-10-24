import { MainComponent } from "../../components/mainComponent/MainComponent";
import classes from "./mainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <MainComponent />
    </div>
  );
};
