import useLocaleContext from "../../hooks/useLocaleContext";
import style from "./Name.module.css";

const Name: React.FC = () => {
  const { isWeekend, name } = useLocaleContext();

  const classes = `${style.name} ${isWeekend ? style.color : ""}`;

  return <div className={classes}>{name}</div>;
};

export default Name;
