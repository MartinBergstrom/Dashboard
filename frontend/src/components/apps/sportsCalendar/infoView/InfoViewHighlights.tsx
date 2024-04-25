import { EventHighlight } from "../model/SportsCalendarModels";
import "./InfoViewHighlights.css";

interface InfoViewHighlightsProps {
  hightlights?: EventHighlight[];
}

// Ideas here
// Slideshow with cards? One card is squre (calendar square) with info about highlight
const InfoViewHighlights = (props: InfoViewHighlightsProps) => {
  if (!props.hightlights || props.hightlights.length === 0) {
    return null;
  }
  return (
    <>
      <div className="hightlights-header">Highlights</div>
      <div className="hightlights-main">
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
