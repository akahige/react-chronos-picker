import Chronos from "@asidd/chronos";
import SliceProvider from "../../providers/SliceProvider";
import daySelector from "../../selectors/daySelector";
import style from "./Week.module.css";
import useProps from "../../hooks/useProps";

function Week({ days }: WeekProps) {
  const { format, dayElement, weekClassName } = useProps();

  return (
    <div className={style.week + " " + weekClassName}>
      {days.map((d: string, j: number) => (
        <SliceProvider key={d} selector={daySelector(d, j)}>
          {dayElement || new Chronos(d, format).format("DD")}
        </SliceProvider>
      ))}
    </div>
  );
}

export default Week;
