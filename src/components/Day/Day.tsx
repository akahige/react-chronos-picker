import { FC } from "react";
import Chronos from "@asidd/chronos";
import style from "./Day.module.css";
import useLocaleContext from "../../hooks/useLocaleContext";
import useProps from "../../hooks/useProps";

const Day: FC = () => {
  const {
    dayOfMonth,
    isStartDay,
    isEndDay,
    inRange,
    isHovered,
    isEnabled,
    chronos,
    day,
    onClick,
    onMouseEnter,
  } = useLocaleContext();

  const { format, events = [] } = useProps();

  const current = new Chronos();
  const isCurrentDay = current.format(format) === day;
  const isCurrentMonth =
    chronos.format("MM") === new Chronos(day, format).format("MM");

  const filtredEvents = events.filter((e: DateEvent) => e.date === day);

  const classNames = [
    style.container,
    isCurrentDay && style.current,
    isStartDay && style.start,
    isEndDay && style.end,
    inRange && style.range,
    isHovered && style.range,
  ]
    .filter(Boolean)
    .join(" ");

  if (!isEnabled) {
    return <div className={style.disabled}>{dayOfMonth.format("DD")}</div>;
  }

  const handleClick = () => {
    onClick(day);
  };
  const handleMouseEnter = () => {
    onMouseEnter(day);
  };

  return (
    <>
      {isCurrentMonth ? (
        <div
          className={classNames}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
        >
          {dayOfMonth.format("DD")}
          {filtredEvents.map((e: DateEvent) => (
            <div
              key={e.date}
              className={style.event}
              style={{ background: e.color }}
            ></div>
          ))}
        </div>
      ) : (
        <div className={style.empty}></div>
      )}
    </>
  );
};

export default Day;
