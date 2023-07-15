// hooks/useChronosPickerConfig.ts
import { useMemo } from "react";
import { getWeekdayNames } from "@asidd/chronos";

const useChronosPickerConfig = ({
  weekend,
  format,
  onDateChange,
  monthFormat = "MMMM",
  weekDayFormat = "narrow",
  minMax,
  dayElement,
  dayNameElement,
  events,
}: ChronosPickerConfigProps) => {
  return useMemo(() => {
    const days = getWeekdayNames(0, weekDayFormat);
    return {
      monthFormat,
      dayElement,
      dayNameElement,
      days,
      format,
      minMax,
      weekend,
      events,
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
  ]);
};

export default useChronosPickerConfig;
