import Chronos from "@asidd/chronos";
import style from "./ReactChronosPicker.module.css";
import Month from "../Month";
import Header from "../Header";
// components as props
// custom Day view | default Day view
// custom Month view | default Month view
// custom Picker | default Picker view
// custom Header | default Header view

function ReactChronosPicker({ weekend, events, date, format }) {
  const chronos = new Chronos(date, format);
  const weeks = chronos.getWeeksInMonth(0, "YYYY-MM-DD");
  const days = Chronos.getWeekdayNames(0, "short");

  return (
    <div className={style.container}>
      <Header date={chronos} />
      <Month
        weeks={weeks}
        days={days}
        weekend={weekend}
        date={chronos}
        events={events}
      />
    </div>
  );
}

export default ReactChronosPicker;
