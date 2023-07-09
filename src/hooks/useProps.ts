import { useContext } from "react";
import { ConstantsContext } from "../Provider";

const useProps = () => {
  const state = useContext(ConstantsContext);
  return state;
};

export default useProps;
