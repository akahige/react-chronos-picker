import { useMemo } from "react";
import Head from "../Head";
import style from "./Month.module.css";
import useProps from "../../hooks/useProps";
import { getWeeksInMonth } from "@asidd/chronos";
import useLocaleContext from "../../hooks/useLocaleContext";
import Week from "../Week/Week";

function Month() {
  const { chronos } = useLocaleContext();
  const { format, weekStart, styles } = useProps();

  const weeks = useMemo(
    () => getWeeksInMonth(chronos, weekStart, format),
    [chronos, weekStart, format]
  );

  return (
    <div className={style.container} style={styles?.month}>
      <div className={style.head}>
        <Head />
      </div>
      <div className={style.weeks}>
        {weeks.map((w: string[], i: number) => (
          <Week key={i} days={w} />
        ))}
      </div>
    </div>
  );
}

export default Month;
