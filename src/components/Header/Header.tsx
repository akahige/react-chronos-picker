import style from "./Header.module.css";
import Right from "../../assets/icons/Right";
import Left from "../../assets/icons/Left";

function Header({ date }) {
  const year = date.format("YYYY");
  const month = date.format("MMM");

  return (
    <div className={style.container}>
      <div>
        {month} {year}
      </div>
      <div className={style.navigation}>
        <div className={style.icon}>
          <Left />
        </div>
        <div className={style.icon}>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Header;
