import Chronos from "@asidd/chronos";
import { getWeeksInMonth, getWeekdayNames } from "@asidd/chronos";
import style from "./ChronosPicker.module.css";
import Month from "../Month";
import Header from "../Header";
import { useMemo, useState } from "react";
import DateProvider from "../../Provider";
// components as props
// custom Day view | default Day view
// custom Month view | default Month view
// custom Picker | default Picker view
// custom Header | default Header view

function ReactChronosPicker({
  weekend,
  events,
  date,
  format,
  theme,
  onDateChange,
  minMax,
}: ChronosPickerProps) {
  // const chronos = new Chronos(date, format);
  // const [chronos, setChronos] = useState();

  const newState = useMemo(() => {
    // const weeks = getWeeksInMonth(chronos, 0, format);
    const days = getWeekdayNames(0, "short");

    return {
      // weeks,
      days,
      format,
      minMax,
      weekend,
      theme,
    };
  }, [format, minMax, weekend, theme]);

  const className = `${style["theme-" + theme]} ${style.container}`;

  return (
    <DateProvider newState={newState} date={date}>
      <div className={className}>
        <Header />
        <Month onDateChange={onDateChange} />
        {/* <Month
          weeks={newState.weeks}
          days={newState.days}
          weekend={weekend}
          date={chronos}
          selected={date}
          events={events}
          onDateChange={onDateChange}
          minMax={minMax}
        /> */}
      </div>
    </DateProvider>
  );
}

export default ReactChronosPicker;
