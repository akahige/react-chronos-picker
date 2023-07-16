import style from "./Header.module.css";
import Right from "../../assets/icons/Right";
import Left from "../../assets/icons/Left";

import MonthPicker from "../MonthPicker";
import useLocaleContext from "../../hooks/useLocaleContext";

const Header: React.FC = () => {
  const { isPreviousEnabled, isNextEnabled, handlePrevious, handleNext } =
    useLocaleContext();

  const prevClass = isPreviousEnabled ? style.icon : style.disabled;
  const nextClass = isNextEnabled ? style.icon : style.disabled;

  return (
    <>
      <div className={style.container}>
        <MonthPicker />
        <div className={style.navigation}>
          <div className={prevClass} onClick={handlePrevious}>
            <Left />
          </div>
          <div className={nextClass} onClick={handleNext}>
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
