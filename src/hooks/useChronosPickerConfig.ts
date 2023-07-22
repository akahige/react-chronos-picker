// hooks/useChronosPickerConfig.ts
import { useMemo } from "react";
import Chronos, { add, getWeekdayNames, subtract } from "@asidd/chronos";

const useChronosPickerConfig = ({
  weekend,
  format,
  monthFormat = "MMMM",
  weekDayFormat = "narrow",
  minMax = [],
  dayElement,
  dayNameElement,
  events,
  weekStart = 0,
  ...props
}: ChronosPickerConfigProps) => {
  return useMemo(() => {
    const min =
      minMax[0] || subtract(new Chronos(), 100, "years").format(format);
    const max = minMax[1] || add(new Chronos(), 100, "years").format(format);

    const days = getWeekdayNames(weekStart, weekDayFormat);
    return {
      monthFormat,
      dayElement,
      dayNameElement,
      days,
      format,
      minMax: [min, max],
      weekend,
      events,
      weekStart,
      ...props,
    };
  }, [
    format,
    minMax,
    weekend,
    monthFormat,
    weekDayFormat,
    dayElement,
    dayNameElement,
    events,
    weekStart,
    props,
  ]);
};

export default useChronosPickerConfig;
