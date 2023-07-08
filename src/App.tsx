import ReactChronosPicker from "./components/ChronosPicker/ChronosPicker";
import style from "./App.module.css";
import { useState } from "react";

const weekend = [0, 6];
const events = [
  { date: "2023-07-29", color: "#62D0A2" },
  { date: "2023-07-14", color: "#62D0A2" },
  { date: "2023-07-12", color: "#62D0A2" },
  { date: "2023-07-09", color: "#62D0A2" },
  { date: "2023-07-04", color: "#62D0A2" },
];

function App() {
  const [date, setDate] = useState(["2023-07-14", "2023-07-18"]);
  const [date2, setDate2] = useState(["2023-07-14", "2023-07-18"]);

  const handleDateChange = (neDate) => {
    setDate(neDate);
  };

  const handleDateChange2 = (neDate) => {
    setDate2(neDate);
  };

  return (
    <>
      <div className={style.container}>
        <ReactChronosPicker
          theme={"light"}
          weekend={weekend}
          events={events}
          date={date2}
          format={"YYYY-MM-DD"}
          onDateChange={handleDateChange}
          minMax={["2023-06-14", "2023-08-18"]}
        />

        <ReactChronosPicker
          theme={"dark"}
          weekend={weekend}
          events={events}
          date={date}
          format={"YYYY-MM-DD"}
          onDateChange={handleDateChange2}
          minMax={["2019-06-14", "2029-08-18"]}
        />
      </div>
    </>
  );
}

export default App;
