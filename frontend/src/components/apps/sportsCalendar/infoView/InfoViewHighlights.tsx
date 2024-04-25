import { EventHighlight } from "../model/SportsCalendarModels";

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
      <div>Highlights exists</div>
    </>
  );
};

export default InfoViewHighlights;
