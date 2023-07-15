import { memo } from "react";
import weekDaySelector from "../../selectors/weekDaySelector";
import style from "./Head.module.css";
import useProps from "../../hooks/useProps";
import SlicePropsProvider from "../../providers/SlicePropsProvider";

const MemoHead = memo(function Head() {
  const { days, dayNameElement } = useProps();

  return (
    <div className={style.container}>
      {days.map((d: string, i: number) => (
        <div key={i} className={style.name}>
          <SlicePropsProvider selector={weekDaySelector(d, i)}>
            {dayNameElement || d}
          </SlicePropsProvider>
        </div>
      ))}
    </div>
  );
});

export default MemoHead;
