import { useState } from "react";
import Day from "../Day";
import Head from "../Head";
import Name from "../Name";
import style from "./Month.module.css";

function Month({
  weeks,
  days,
  weekend,
  date,
  events,
  selected,
  onDateChange,
  minMax,
}: MonthProps) {
  const [selectedDate, setSelectedDate] = useState(selected);
  const [hovered, setHovered] = useState(selected[0]);

  const isDateRange = selected.length === 2;

  const handleSelect = (d: string[]) => {
    setSelectedDate(d);
    // onDateChange(d);
  };

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
                <Day
                  day={d}
                  date={date}
                  events={events}
                  isWeekend={weekend.includes(j)}
                  selected={selectedDate}
                  handleSelect={handleSelect}
                  isDateRange={isDateRange}
                  setHovered={setHovered}
                  hovered={hovered}
                  minMax={minMax}
                />
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
