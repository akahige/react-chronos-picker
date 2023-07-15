import { useContext } from "react";
import { ConstantsContext } from "../contexts";

const useProps = () => {
  const state = useContext(ConstantsContext);
  return state;
};

export default useProps;
