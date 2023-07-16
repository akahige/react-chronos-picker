import { useCallback, useEffect, useRef, useState } from "react";
import ReactChronos from "../ReactChronos";
import style from "./ReactChronosPicker.module.css";

interface ReactChronosPickerProps extends ReactChronosProps {
  children: React.ReactNode;
}

const ReactChronosPicker: React.FC<ReactChronosPickerProps> = ({
  onDateChange,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleDateChange = useCallback(
    (date: string[]) => {
      setOpen(false);
      onDateChange(date);
    },
    [onDateChange]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className={style.container}>
      <div onClick={() => setOpen(true)}>{props.children}</div>
      <div className={style.relative}>
        {open && (
          <div ref={wrapperRef} className={style.picker}>
            <ReactChronos {...props} onDateChange={handleDateChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactChronosPicker;
