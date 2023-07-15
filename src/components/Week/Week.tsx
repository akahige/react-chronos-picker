import Chronos from "@asidd/chronos";
import SliceProvider from "../../providers/SliceProvider";
import daySelector from "../../selectors/daySelector";
import style from "./Week.module.css";
import useProps from "../../hooks/useProps";

function Week({ days }: WeekProps) {
  const { format, dayElement } = useProps();
  return (
    <div className={style.week}>
      {days.map((d: string, j: number) => (
        <div key={d} className={style.day}>
          <SliceProvider selector={daySelector(d, j)}>
            {dayElement || new Chronos(d, format).format("DD")}
          </SliceProvider>
        </div>
      ))}
    </div>
  );
}

export default Week;
