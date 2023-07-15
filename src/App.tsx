import style from "./App.module.css";
import { useCallback, useState } from "react";
import Header from "./components/Header";
import Name from "./components/Name";
import Day from "./components/Day";
import ReactChronos from "./components/ReactChronos";
import ReactChronosPicker from "./components/ReactChronosPicker";

const weekend = [0, 6];
const events = [
  { date: "2023-07-29", color: "#62D0A2" },
  { date: "2023-07-14", color: "#62D0A2" },
  { date: "2023-07-12", color: "#62D0A2" },
  { date: "2023-07-09", color: "#62D0A2" },
  { date: "2023-07-04", color: "#62D0A2" },
];

const minMax = ["2023-06-14", "2023-08-18"];
const dayElement = <Day />;
const dayNameElement = <Name />;
const headerElement = <Header />;

function App() {
  const [date, setDate] = useState(["2023-07-18"]);
  const [date2, setDate2] = useState(["2023-07-18", "2023-07-19"]);
  const [date3, setDate3] = useState([]);

  const handleDateChange = (neDate) => {
    setDate(neDate);
  };

  const handleDateChange2 = (neDate) => {
    setDate2(neDate);
  };

  const handleDateChange3 = (neDate) => {
    setDate3(neDate);
  };

  return (
    <>
      <div className={style.container}>
        <ReactChronosPicker
          theme={"light"}
          weekend={weekend}
          monthFormat={"MMM"}
          weekDayFormat={"short"}
          events={events}
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
            weekDayFormat={"long"}
            events={events}
            date={date3}
            format={"YYYY-MM-DD"}
            onDateChange={handleDateChange3}
            minMax={minMax}
            dayElement={dayElement}
            dayNameElement={dayNameElement}
            headerElement={headerElement}
          />
        </div>
      </div>
    </>
  );
}

export default App;
