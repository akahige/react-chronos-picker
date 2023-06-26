import style from "./Name.module.css";

function Name({ name, isWeekend }) {
  const classes = `${style.name} ${isWeekend && style.color}`;
  return <div className={classes}>{name}</div>;
}

export default Name;
