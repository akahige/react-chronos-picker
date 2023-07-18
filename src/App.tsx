import style from "./App.module.css";
import { useState } from "react";
import Header from "./components/Header";
import Name from "./components/Name";
import Day from "./components/Day";
import ReactChronos from "./components/ReactChronos";
import ReactChronosPicker from "./components/ReactChronosPicker";
import useLocaleContext from "./hooks/useLocaleContext";

const weekend = [0, 6];
const events = [
  { date: "2023-07-29", color: "#62D0A2" },
  { date: "2023-07-14", color: "#62D0A2" },
  { date: "2023-07-12", color: "#62D0A2" },
  { date: "2023-07-09", color: "#62D0A2" },
  { date: "2023-07-04", color: "#62D0A2" },
];

const minMax = ["2023-06-14", "2023-08-18"];
const CustomDayElement = () => {
  const { dayOfMonth } = useLocaleContext();
  return <div className={style.customDay}>{dayOfMonth.format("DD")}</div>;
};
const CustomDayNameElement = () => {
  const { name } = useLocaleContext();
  return <div className={style.customDay}>{name}</div>;
};
const headerElement = <Header />;

function App() {
  const [date, setDate] = useState(["2023-07-18"]);
  const [date2, setDate2] = useState(["2023-07-18", "2023-07-19"]);
  const [date3, setDate3] = useState<string[]>([]);

  const handleDateChange = (neDate: string[]) => {
    setDate(neDate);
  };

  const handleDateChange2 = (neDate: string[]) => {
    setDate2(neDate);
  };

  const handleDateChange3 = (neDate: string[]) => {
    setDate3(neDate);
  };

  const styles = {};

  return (
    <>
      <div className={style.container}>
        <ReactChronosPicker
          theme={"dark"}
          weekend={weekend}
          monthFormat={"MMM"}
          weekDayFormat={"short"}
          events={events}
          weekStart={1}
          date={date2}
          format={"YYYY-MM-DD"}
          onDateChange={handleDateChange2}
          minMax={["2023-06-14", "2023-08-18"]}
          dayElement={<Day />}
          dayNameElement={<Name />}
          headerElement={<Header />}
        >
          <button>{date2.join(" | ")}</button>
        </ReactChronosPicker>

        <ReactChronosPicker
          theme={"dark"}
          weekend={weekend}
          events={events}
          date={date}
          weekStart={2}
          format={"YYYY-MM-DD"}
          onDateChange={handleDateChange}
          minMax={["2022-06-14", "2023-08-18"]}
          dayElement={<Day />}
          dayNameElement={<Name />}
          headerElement={<Header />}
        >
          <input type="text" value={date.join(" - ")} readOnly />
        </ReactChronosPicker>

        <div className={style.box}>
          <ReactChronos
            theme={"light"}
            weekend={weekend}
            monthFormat={"MMMM"}
            weekDayFormat={"short"}
            events={events}
            date={date3}
            format={"YYYY-MM-DD"}
            onDateChange={handleDateChange3}
            minMax={minMax}
            dayElement={<CustomDayElement />}
            dayNameElement={<CustomDayNameElement />}
            headerElement={headerElement}
          />
        </div>
      </div>
    </>
  );
}

export default App;
