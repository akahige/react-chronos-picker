import style from "./Head.module.css";

function Head({ children }) {
  return <div className={style.container}>{children}</div>;
}

export default Head;
