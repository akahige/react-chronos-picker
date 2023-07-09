import { useContext } from "react";
import { GlobalContext } from "../Provider";

const useDateState = () => {
  const state = useContext(GlobalContext);
  return state;
};

export default useDateState;
