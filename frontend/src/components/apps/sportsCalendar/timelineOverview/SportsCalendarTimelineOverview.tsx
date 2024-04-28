import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import {
  getMonthName,
  isAfterCurrentDate,
  isDateInRange,
} from "../utils/DateUtils";
import "./SportsCalendarTimelineOverview.css";

interface SportsCalendarTimelineOverviewProps {
  allEvents: SportsCalendarEvent[];
  onClick: (event: SportsCalendarEvent) => void;
}

const SportsCalendarTimelineOverview = (
  props: SportsCalendarTimelineOverviewProps
) => {
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
                <div
                  className="event-text"
                  onClick={() => props.onClick(event)}
                  key={event._id}
                >
                  {event.name}
                </div>
              ))}
            </>
          )}
        </fieldset>
      </div>
    );
  };

  const renderUpcomingEvents = () => {
    const monthlyEvents: { [key: number]: SportsCalendarEvent[] } = {};
    props.allEvents
      .filter((event) => isAfterCurrentDate(event.start_date))
      .forEach((event) => {
        const monthNbr = event.start_date.getMonth();
        if (!monthlyEvents[monthNbr]) {
          monthlyEvents[monthNbr] = [];
        }
        monthlyEvents[monthNbr].push(event);
      });
    console.log(monthlyEvents);

    return (
      <>
        <div>
          {Object.entries(monthlyEvents).map(([monthKey, events]) => (
            <fieldset key={monthKey}>
              <legend> {getMonthName(parseInt(monthKey))}</legend>
              {events.map((event, index) => (
                <div key={index}>{event.name}</div>
              ))}
            </fieldset>
          ))}
        </div>
      </>
    );
  };

  const renderEvents = () => {
    return (
      <div className="all-events">
        <fieldset>
          <legend> Upcoming events</legend>
          {renderUpcomingEvents()}
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
