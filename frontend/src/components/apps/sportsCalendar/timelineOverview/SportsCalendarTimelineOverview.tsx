import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import { isDateInRange } from "../utils/DateUtils";
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
    const todaysEvents: SportsCalendarEvent[] = props.allEvents
      ? props.allEvents.filter((event) =>
          isDateInRange(new Date(), event.start_date, event.end_date)
        )
      : [];

    return (
      <div className="todays-events">
        <fieldset>
          <legend> Todays events</legend>
          {todaysEvents.length === 0 ? (
            <div>No events today</div>
          ) : (
            <>
              {todaysEvents.map((event) => (
                <div>{event.name}</div>
              ))}
            </>
          )}
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
