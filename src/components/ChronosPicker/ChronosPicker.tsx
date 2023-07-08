import Chronos from "@asidd/chronos";
import { getWeeksInMonth, getWeekdayNames } from "@asidd/chronos";
import style from "./ChronosPicker.module.css";
import Month from "../Month";
import Header from "../Header";
import { useState } from "react";
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
  const [chronos, setChronos] = useState(new Chronos(date[0], format));

  const weeks = getWeeksInMonth(chronos, 0, "YYYY-MM-DD");
  const days = getWeekdayNames(0, "short");

  const className = `${style["theme-" + theme]} ${style.container}`;

  return (
    <div className={className}>
      <Header date={chronos} setChronos={setChronos} minMax={minMax} />
      <Month
        weeks={weeks}
        days={days}
        weekend={weekend}
        date={chronos}
        selected={date}
        events={events}
        onDateChange={onDateChange}
        minMax={minMax}
      />
    </div>
  );
}

export default ReactChronosPicker;
