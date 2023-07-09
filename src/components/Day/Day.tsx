import Chronos, { isBetween } from "@asidd/chronos";
import style from "./Day.module.css";
import { calculateEventDetails } from "../../helpers";
import useDispatch from "../../hooks/useDispatch";
import useDateState from "../../hooks/useDateState";
import useProps from "../../hooks/useProps";

const Day = ({ day }: DayProps) => {
  const { selected, hovered, date, events, chronos } = useDateState();
  const { minMax, weekend, format } = useProps();

  const isDateRange = date.length === 2;

  const {
    lpDay,
    isStartDay,
    isEndDay,
    inRange,
    isHovered,
    filtredEvents,
    isEnabled,
  } = calculateEventDetails(
    day,
    events,
    selected,
    hovered,
    isDateRange,
    minMax
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    if (isDateRange) {
      if (selected.length === 2 || selected.length === 0) {
        handleSelect([day]);
        dispatch({ type: "SET_HOVERED", payload: day });
      } else {
        const start = new Chronos(selected[0], "YYYY-MM-DD");
        const hDate = new Chronos(hovered, "YYYY-MM-DD");
        const isInBetween = isBetween(hDate, start, hDate, "days", true);

        if (selected.length === 1 && isInBetween) {
          handleSelect([selected[0], day]);
        } else {
          handleSelect([day]);
          dispatch({ type: "SET_HOVERED", payload: day });
        }
      }
    } else {
      handleSelect([day]);
    }
  };

  const handleHover = () => {
    if (isDateRange && selected.length === 1) {
      dispatch({ type: "SET_HOVERED", payload: day });
    }
  };

  const handleSelect = (d: string[]) => {
    dispatch({ type: "SET_SELECTED", payload: d });
  };

  const current = new Chronos();
  const isCurrentDay = current.format("YYYY-MM-DD") === day;
  const isCurrentMonth =
    chronos.format("MM") === new Chronos(day, "YYYY-MM-DD").format("MM");

  const classes = [style.container];
  if (isCurrentDay) classes.push(style.current);
  if (isStartDay) classes.push(style.start);
  if (isEndDay) classes.push(style.end);
  if (inRange) classes.push(style.range);
  if (isHovered) classes.push(style.range);

  if (!isEnabled) {
    return <div className={style.disabled}>{lpDay.format("DD")}</div>;
  }

  return (
    <>
      {isCurrentMonth ? (
        <div
          className={classes.join(" ")}
          onClick={handleClick}
          onMouseEnter={handleHover}
        >
          {lpDay.format("DD")}
          {filtredEvents.map((e) => (
            <div key={e.date} className={style.event}></div>
          ))}
        </div>
      ) : (
        <div className={style.empty}></div>
      )}
    </>
  );
};

export default Day;
