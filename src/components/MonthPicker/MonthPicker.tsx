// MonthPicker.tsx

import Chronos from "@asidd/chronos";
import ScrollingSelect from "../ScrollingSelect";
import { useState } from "react";
import { getMonthsList, getYearsList } from "../../helpers";
import useLocaleContext from "../../hooks/useLocaleContext";
import style from "./MonthPicker.module.css";
import useProps from "../../hooks/useProps";

const MonthPicker: React.FC = () => {
  const { chronos, navigateToMonth } = useLocaleContext();
  const { minMax, monthFormat } = useProps();

  const [open, setOpen] = useState(false);

  const min = new Chronos(minMax[0], "YYYY-MM");
  const max = new Chronos(minMax[1], "YYYY-MM");

  const years = getYearsList(min, max);
  const months = getMonthsList(chronos, min, max);

  const handleYearSelect = (year: Chronos) => {
    navigateToMonth(year);
  };

  const handleMonthSelect = (month: Chronos) => {
    navigateToMonth(month);
    setOpen(false);
  };

  return (
    <>
      <div
        className={style.title}
        onClick={() => {
          setOpen(true);
        }}
      >
        <div>{chronos.format(monthFormat)}</div>
        <div>{chronos.format("YYYY")}</div>
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
};

export default MonthPicker;
