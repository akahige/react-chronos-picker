import Chronos, { isBetween } from "@asidd/chronos";
import { useCallback, useMemo } from "react";
import { calculateValues } from "../helpers";
import useDispatch from "../hooks/useDispatch";

const daySelector =
  (day: string, index: number) => (state: any, props: any) => {
    const { selected, hovered, chronos, isDateRange } = state;
    const { minMax, weekend, format, onDateChange } = props;

    // const isDateRange = date.length === 2;
    const isWeekend = weekend.includes(index);

    const { lpDay, isEnabled } = useMemo(() => {
      const lpDay = new Chronos(day, format);
      const min = new Chronos(minMax[0], format);
      const max = new Chronos(minMax[1], format);

      const isEnabled = isBetween(lpDay, min, max, "days", true);
      return { lpDay, isEnabled };
    }, [minMax, format]);

    const dispatch = useDispatch();

    const onClick = useCallback(
      (day: string) => {
        dispatch({
          type: "HANDLE_CLICK",
          payload: { day, format, onDateChange },
        });
      },
      [format, dispatch, onDateChange]
    );

    const onMouseEnter = useCallback(
      (day: string) => {
        dispatch({ type: "HANDLE_HOVER", payload: { day } });
      },
      [dispatch]
    );

    const calculatedValues = calculateValues(
      day,
      lpDay,
      format,
      selected,
      hovered,
      isDateRange
    );

    return {
      ...calculatedValues,
      dayOfMonth: lpDay,
      isEnabled,
      isDateRange,
      isWeekend,
      chronos,
      day,
      onClick,
      onMouseEnter,
    };
  };

export default daySelector;
