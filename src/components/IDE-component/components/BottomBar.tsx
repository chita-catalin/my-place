import { useContext, useState } from "react";
import { ThemeContext } from "../../theme-component";
import "../styles/bottom-bar.css";

export const BottomBar = () => {
  const theme = useContext(ThemeContext);
  const [s, setS] = useState<number>(0);

  setTimeout(() => {
    setS(s + 1);
  }, 1000);

  const TodaysDate = () => {
    let currentTime = new Date();
    console.log("time", currentTime);
    return <div>Today's date: {currentTime.toLocaleDateString()}</div>;
  };

  const TimeSpentHere = () => {
    return <div>Seconds spent on the page: {s}</div>;
  };

  const Copyright = () => {
    return <div>Copyright © 2022 All Rights Reserved</div>;
  };

  return (
    <div className={`${theme.theme}-bottom-bar`}>
      <TodaysDate />
      <Copyright />
      <TimeSpentHere />
    </div>
  );
};
