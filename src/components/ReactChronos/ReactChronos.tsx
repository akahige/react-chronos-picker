import style from "./ReactChronos.module.css";
import Month from "../Month";
import headerSelector from "../../selectors/headerSelector";
import useChronosPickerConfig from "../../hooks/useChronosPickerConfig";
import PropsProvider from "../../providers/PropsProvider";
import DateProvider from "../../providers/DateProvider";
import SliceProvider from "../../providers/SliceProvider";

function ReactChronos({
  headerElement,
  theme,
  date = [],
  isDateRange,
  onDateChange,
  ...props
}: ReactChronosProps) {
  const newState = useChronosPickerConfig(props);

  const className = `${style["theme-" + theme]} ${style.container} `;

  return (
    <PropsProvider value={newState}>
      <DateProvider
        date={date}
        isDateRange={isDateRange}
        onDateChange={onDateChange}
      >
        <div className={className} style={props?.styles?.container}>
          <SliceProvider selector={headerSelector()}>
            {headerElement}
            <Month />
          </SliceProvider>
        </div>
      </DateProvider>
    </PropsProvider>
  );
}

export default ReactChronos;
