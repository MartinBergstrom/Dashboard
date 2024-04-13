import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import "./SportsCalendarTimelineOverview.css";

interface SportsCalendarTimelineOverviewProps {
  allEvents?: SportsCalendarEvent[];

}

const SportsCalendarTimelineOverview = (
  props: SportsCalendarTimelineOverviewProps
) => {

  const sortAllEvents =() => {
    // Sort all events
  }

  const renderTodaysEvents =() => {
    // Render seperate section for todays event
  }

  const renderEvents = () => {
    const sorted = sortAllEvents();
    // use sorted and create List view first
    // 
  }

  return (
    <>
      <div className="event-timeline-overview">HELLO</div>
    </>
  );
};

export default SportsCalendarTimelineOverview;
