import { useRef, useState } from "react";
import { EventHighlight } from "../model/SportsCalendarModels";
import "./InfoViewHighlights.css";

interface InfoViewHighlightsProps {
  hightlights?: EventHighlight[];
}

const InfoViewHighlights = (props: InfoViewHighlightsProps) => {
  const ourRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ourRef.current) return;
    const slider = ourRef.current;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseCoords.current = { startX, scrollLeft };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    document.body.style.cursor = "default";
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current;
    const sliderBounds = slider.getBoundingClientRect();
    // Stop scrolling if out of bounds
    if (
      e.clientX < sliderBounds.left + 2 ||
      e.clientX > sliderBounds.right - 2 ||
      e.clientY < sliderBounds.top + 2 ||
      e.clientY > sliderBounds.bottom - 2
    ) {
      setIsMouseDown(false);
      document.body.style.cursor = "default";
      return;
    }
    const x = e.pageX - slider.offsetLeft;
    const walkX = (x - mouseCoords.current.startX) * 2;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  };

  if (!props.hightlights || props.hightlights.length === 0) {
    return null;
  }

  return (
    <>
      <div className="hightlights-header">Highlights</div>
      <div
        className="hightlights-main"
        ref={ourRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDrag}
      >
        {props.hightlights.map((highlight, index) => (
          <div key={index} className="calendar-square">
            hello
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoViewHighlights;
