import style from "./Header.module.css";
import Right from "../../assets/icons/Right";
import Left from "../../assets/icons/Left";
import Chronos, { subtract, add, isBetween } from "@asidd/chronos";
import ScrollingSelect from "../ScrollingSelect";
import { useState } from "react";
import { getMonthsList, getYearsList } from "../../helpers";

function Header({ date, setChronos, minMax }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const year = date.format("YYYY");
  const month = date.format("MMMM");

  const newDate = date.format("YYYY-MM");

  const min = new Chronos(minMax[0], "YYYY-MM");
  const max = new Chronos(minMax[1], "YYYY-MM");

  const nextDate = add(new Chronos(newDate, "YYYY-MM"), 1, "months");
  const previusDate = subtract(new Chronos(newDate, "YYYY-MM"), 1, "months");
  const isPreviusEnabled = isBetween(previusDate, min, max, "months", true);
  const isNextEnabled = isBetween(nextDate, min, max, "months", true);

  const years = getYearsList(min, max);
  const months = getMonthsList(date, min, max);

  const handleNext = () => {
    if (isNextEnabled) {
      setChronos(nextDate);
    }
  };

  const handlePrevius = () => {
    if (isPreviusEnabled) {
      setChronos(previusDate);
    }
  };

  const handleYearSelect = (year: Chronos) => {
    setChronos(year);
  };

  const handleMonthSelect = (month: Chronos) => {
    setChronos(month);
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
          <div className={style.down}>{month}</div>
          <div className={style.down}>{year}</div>
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
            selected={date.format("YYYY")}
            gap={3}
            onChange={handleYearSelect}
            caption={(item) => item.format("YYYY")}
          />
          <ScrollingSelect
            items={months}
            selected={date.format("MMMM")}
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
