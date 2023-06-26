import ReactChronosPicker from "./components/ReactChronosPicker/ReactChronosPicker";
import style from "./App.module.css";

const weekend = [0, 6];
const events = [
  { date: "2023-06-29", color: "#62D0A2" },
  { date: "2023-06-30", color: "#62D0A2" },
];

function App() {
  return (
    <>
      <div className={style.container}>
        <ReactChronosPicker
          weekend={weekend}
          events={events}
          date={"2023-06-22"}
          format={"YYYY-MM-DD"}
        />
      </div>
    </>
  );
}

export default App;
