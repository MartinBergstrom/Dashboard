import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import "./SportsCalendarTimelineOverview.css";

interface SportsCalendarTimelineOverviewProps {
  allEvents?: SportsCalendarEvent[];
}

const SportsCalendarTimelineOverview = (
  props: SportsCalendarTimelineOverviewProps
) => {
  const sortAllEvents = () => {
    // Sort all events
  };

  const renderTodaysEvents = () => {
    // Render seperate section for todays event
    return (
      <div className="todays-events">
        <fieldset>
          <legend> Todays events</legend>
          <div>something</div>
          <div>something2</div>
        </fieldset>
      </div>
    );
  };

  const renderEvents = () => {
    const sorted = sortAllEvents();
    // use sorted and create List view first
    //
    return (
      <div className="all-events">
        <fieldset>
          <legend> Upcoming events</legend>
          <div>
            <fieldset>
              <legend> April</legend>
              <div>something</div>
              <div>something2</div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend> April</legend>
              <div>something</div>
              <div>something2</div>
            </fieldset>
          </div>
        </fieldset>
      </div>
    );
  };

  return (
    <>
      <div className="event-timeline-overview">
        {renderTodaysEvents()}
        {renderEvents()}
      </div>
    </>
  );
};

export default SportsCalendarTimelineOverview;
