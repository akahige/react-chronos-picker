// hooks/useChronosPickerConfig.ts
import { useMemo } from "react";
import { getWeekdayNames } from "@asidd/chronos";

const useChronosPickerConfig = ({
  weekend,
  format,
  monthFormat = "MMMM",
  weekDayFormat = "narrow",
  minMax,
  dayElement,
  dayNameElement,
  events,
  weekStart = 0,
  ...props
}: ChronosPickerConfigProps) => {
  return useMemo(() => {
    const days = getWeekdayNames(weekStart, weekDayFormat);
    return {
      monthFormat,
      dayElement,
      dayNameElement,
      days,
      format,
      minMax,
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
