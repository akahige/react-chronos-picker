import style from "./Header.module.css";
import Right from "../../assets/icons/Right";
import Left from "../../assets/icons/Left";
import Chronos, { subtract, add, isBetween } from "@asidd/chronos";
import ScrollingSelect from "../ScrollingSelect";
import { useState } from "react";
import { getMonthsList, getYearsList } from "../../helpers";
import useDispatch from "../../hooks/useDispatch";
import useProps from "../../hooks/useProps";
import useDateState from "../../hooks/useDateState";

function Header() {
  const { chronos } = useDateState();
  const { minMax } = useProps();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const year = chronos.format("YYYY");
  const month = chronos.format("MMMM");

  const newDate = chronos.format("YYYY-MM");

  const min = new Chronos(minMax[0], "YYYY-MM");
  const max = new Chronos(minMax[1], "YYYY-MM");

  const nextDate = add(new Chronos(newDate, "YYYY-MM"), 1, "months");
  const previusDate = subtract(new Chronos(newDate, "YYYY-MM"), 1, "months");
  const isPreviusEnabled = isBetween(previusDate, min, max, "months", true);
  const isNextEnabled = isBetween(nextDate, min, max, "months", true);

  const years = getYearsList(min, max);
  const months = getMonthsList(chronos, min, max);

  const handleNext = () => {
    if (isNextEnabled) {
      dispatch({ type: "SET_CHRONOS", payload: nextDate });
    }
  };

  const handlePrevius = () => {
    if (isPreviusEnabled) {
      dispatch({ type: "SET_CHRONOS", payload: previusDate });
    }
  };

  const handleYearSelect = (year: Chronos) => {
    dispatch({ type: "SET_CHRONOS", payload: year });
  };

  const handleMonthSelect = (month: Chronos) => {
    dispatch({ type: "SET_CHRONOS", payload: month });
    setOpen(false);
  };

  const prevClass = isPreviusEnabled ? style.icon : style.disabled;
  const nextClass = isNextEnabled ? style.icon : style.disabled;

  return (
    <>
      <div className={style.container}>
        <div
          className={style.title}
          onClick={() => {
            setOpen(true);
          }}
        >
          <div>{month}</div>
          <div>{year}</div>
        </div>
        <div className={style.navigation}>
          <div className={prevClass} onClick={handlePrevius}>
            <Left />
          </div>
          <div className={nextClass} onClick={handleNext}>
            <Right />
          </div>
        </div>
      </div>
      {open ? (
        <div className={style.dropDown}>
          <ScrollingSelect
            items={years}
            selected={chronos.format("YYYY")}
            gap={3}
            onChange={handleYearSelect}
            caption={(item) => item.format("YYYY")}
          />
          <ScrollingSelect
            items={months}
            selected={chronos.format("MMMM")}
            gap={3}
            onChange={handleMonthSelect}
            caption={(item) => item.format("MMMM")}
          />
        </div>
      ) : null}
    </>
  );
}

export default Header;
