import { useContext } from "react";
import { GlobalContext } from "../contexts";

const useDateState = () => {
  const state = useContext(GlobalContext);
  return state;
};

export default useDateState;
