import Chronos from "@asidd/chronos";
import style from "./Day.module.css";

function Day({ day, date, events, isWeekend }) {
  const lpDay = new Chronos(day, "YYYY-MM-DD");
  const isCurrentMonth = date.format("MM") === lpDay.format("MM");
  const isSelectedDay = date.format("YYYY-MM-DD") === day;
  const current = new Chronos();
  const isCurrentDay = current.format("YYYY-MM-DD") === day;
  const classes = `${style.container} ${isCurrentDay && style.current} ${
    isSelectedDay && style.selected
  }`;
  const filtredEvents = events.filter((e) => e.date === day);

  return (
    <div className={classes}>
      {isCurrentMonth ? lpDay.format("DD") : ""}
      {filtredEvents.map((e) => (
        <div key={e.date} className={style.event}></div>
      ))}
    </div>
  );
}

export default Day;
