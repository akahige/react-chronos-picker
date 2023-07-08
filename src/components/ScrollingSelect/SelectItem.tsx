import { useEffect, useRef } from "react";
import style from "./ScrollingSelect.module.css";

function SelectItem({ selected, caption, item, onClick }: SelectItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isSelected = selected === caption(item);
    if (isSelected && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selected, item]);

  const handleClick = () => {
    if (caption(item) !== ".") {
      onClick && onClick(item);
    }
  };

  const className = [style.item];
  if (selected === caption(item)) {
    className.push(style.selected);
  }

  return (
    <div className={className.join(" ")} ref={itemRef} onClick={handleClick}>
      {caption(item)}
    </div>
  );
}

export default SelectItem;
