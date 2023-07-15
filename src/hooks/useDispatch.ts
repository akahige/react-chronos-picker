import { useContext } from "react";
import { DispatchContext } from "../contexts";

const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};

export default useDispatch;
