import { useEffect, useRef } from "react";
import style from "./ScrollingSelect.module.css";
import SelectItem from "./SelectItem";

function ScrollingSelect({
  items,
  selected,
  gap,
  onChange,
  caption,
}: ScrollingSelectProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const gaps = [...Array(gap).fill(".")];
  useEffect(() => {
    const scrollElement = scrollRef.current;

    const handleScroll = () => {
      if (scrollElement) {
        const rect = scrollElement.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;

        Array.from(scrollElement.children).forEach((child) => {
          if (child instanceof HTMLElement) {
            const childRect = child.getBoundingClientRect();
            const childCenterY = childRect.top + childRect.height / 2;

            // Calculate the distance from the center of the scrolling area
            const distanceFromCenter = Math.abs(centerY - childCenterY);

            // Adjust the scale based on the distance from the center
            const scale = Math.max(0.5, 1 - distanceFromCenter / rect.height);
            child.style.transform = `scale(${scale})`;
          }
        });
      }
    };

    // Add the event listener for scroll events
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component is unmounted
      return () => {
        scrollElement?.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={style.items} ref={scrollRef}>
      {gaps.map((g, index) => (
        <SelectItem key={"start" + index} item={g} caption={(v) => v} />
      ))}
      {items.map((item, index) => (
        <SelectItem
          key={index}
          selected={selected}
          onClick={onChange}
          item={item}
          caption={caption}
        />
      ))}
      {gaps.map((g, index) => (
        <SelectItem
          key={"end" + index}
          selected={selected}
          item={g}
          caption={(v) => v}
        />
      ))}
    </div>
  );
}

export default ScrollingSelect;
