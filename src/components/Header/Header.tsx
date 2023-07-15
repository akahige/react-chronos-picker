// Header.tsx

import style from "./Header.module.css";
import Right from "../../assets/icons/Right";
import Left from "../../assets/icons/Left";
import Chronos, { subtract, add, isBetween } from "@asidd/chronos";
import useDispatch from "../../hooks/useDispatch";
import useProps from "../../hooks/useProps";
import MonthPicker from "../MonthPicker";
import useLocaleContext from "../../hooks/useLocaleContext";

const Header: React.FC = () => {
  const chronos = useLocaleContext();
  const { minMax } = useProps();
  const dispatch = useDispatch();

  const newDate = chronos.format("YYYY-MM");
  const min = new Chronos(minMax[0], "YYYY-MM");
  const max = new Chronos(minMax[1], "YYYY-MM");

  const nextDate = add(new Chronos(newDate, "YYYY-MM"), 1, "months");
  const previousDate = subtract(new Chronos(newDate, "YYYY-MM"), 1, "months");
  const isPreviousEnabled = isBetween(previousDate, min, max, "months", true);
  const isNextEnabled = isBetween(nextDate, min, max, "months", true);

  const handleNext = () => {
    if (isNextEnabled) {
      dispatch({ type: "SET_CHRONOS", payload: nextDate });
    }
  };

  const handlePrevious = () => {
    if (isPreviousEnabled) {
      dispatch({ type: "SET_CHRONOS", payload: previousDate });
    }
  };

  const prevClass = isPreviousEnabled ? style.icon : style.disabled;
  const nextClass = isNextEnabled ? style.icon : style.disabled;

  return (
    <>
      <div className={style.container}>
        <MonthPicker />
        <div className={style.navigation}>
          <div className={prevClass} onClick={handlePrevious}>
            <Left />
          </div>
          <div className={nextClass} onClick={handleNext}>
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
