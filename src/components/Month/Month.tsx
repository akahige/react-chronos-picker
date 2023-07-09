import { useState } from "react";
import Day from "../Day";
import Head from "../Head";
import Name from "../Name";
import style from "./Month.module.css";
import useDateState from "../../hooks/useDateState";
import useProps from "../../hooks/useProps";
import { getWeeksInMonth } from "@asidd/chronos";
import useDispatch from "../../hooks/useDispatch";

function Month({ onDateChange }: MonthProps) {
  const { chronos } = useDateState();
  const { days, weekend, format } = useProps();
  // const [selectedDate, setSelectedDate] = useState(selected);

  const dispatch = useDispatch();

  const weeks = getWeeksInMonth(chronos, 0, format);

  return (
    <div className={style.container}>
      <div className={style.head}>
        <Head>
          {days.map((d, i) => (
            <div key={d} className={style.name}>
              <Name name={d} isWeekend={weekend.includes(i)} />
            </div>
          ))}
        </Head>
      </div>
      <div className={style.weeks}>
        {weeks.map((w, i) => (
          <div key={i} className={style.week}>
            {w.map((d, j) => (
              <div key={d} className={style.day}>
                <Day day={d} isWeekend={weekend.includes(j)} />
              </div>
            ))}
          </div>
        ))}
        <div className={style.week}> </div>
      </div>
    </div>
  );
}

export default Month;
