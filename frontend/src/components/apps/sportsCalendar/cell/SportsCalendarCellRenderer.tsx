import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import {
  normalizeDate,
  isCurrentDate,
  isDateInRange,
} from "../utils/DateUtils";
import "./SportsCalendarCellRenderer.css";

interface SportsCalendarCellRendererProps {
  day: Date;
  currentMonth: Date;
  events: SportsCalendarEvent[] | undefined;
  onClick: (event: SportsCalendarEvent) => void;
}

const SportsCalendarCellRenderer = (props: SportsCalendarCellRendererProps) => {
  const classNamesCell = (date: Date) => {
    if (isCurrentDate(date)) {
      return "today";
    }
    if (date.getMonth() !== props.currentMonth.getMonth()) {
      return "greyed";
    }
    return "";
  };

  const getMatchingEvents = () => {
    if (props.events) {
      const matchingArr = props.events.filter((event) =>
        isDateInRange(props.day, event.start_date, event.end_date)
      );
      return matchingArr;
    }
    return [];
  };

  const onEventClick = (event: SportsCalendarEvent) => {
    props.onClick(event);
  };

  const styleEventBar = (event: SportsCalendarEvent) => {
    if (
      normalizeDate(event.start_date).valueOf() ==
      normalizeDate(event.end_date).valueOf()
    ) {
      return "";
    }
    if (
      normalizeDate(event.start_date).valueOf() ==
      normalizeDate(props.day).valueOf()
    ) {
      return "startpiece";
    }
    if (
      normalizeDate(event.end_date).valueOf() ==
      normalizeDate(props.day).valueOf()
    ) {
      return "endpiece";
    }
    return "middlepiece";
  };

  // Sort by event length, i.e. longest event will be last
  const sortEvents = (events: SportsCalendarEvent[]) => {
    if (props.events) {
      const arrCopy = [...events];
      arrCopy.sort((a, b) => {
        const oneDay = 24 * 60 * 60 * 1000;
        const daysA =
          Math.round(
            Math.abs((a.end_date.valueOf() - a.start_date.valueOf()) / oneDay)
          ) + 1;
        const daysB =
          Math.round(
            Math.abs((b.end_date.valueOf() - b.start_date.valueOf()) / oneDay)
          ) + 1;
        return daysA - daysB;
      });
      return arrCopy;
    }
    return [];
  };

  const renderEvents = () => {
    return (
      <div className="event-bars">
        {sortEvents(getMatchingEvents())
          .slice(0)
          .map((item) => (
            <div className={"container " + styleEventBar(item)} key={item._id}>
              <div
                style={{
                  backgroundColor: item.banner_color,
                }}
                className="event-bar"
                key={item._id}
                onClick={() => onEventClick(item)}
              >
                {item.name}
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <>
      <div
        className={"col cell " + classNamesCell(props.day)}
        key={props.day.toDateString()}
      >
        <div className="date-text">
          <span>{props.day.getDate()}</span>
        </div>
        {/**
         * TODO: Take color for each matching event and apply that instead of positional coloring
         */}
        {renderEvents()}
      </div>
    </>
  );
};

export default SportsCalendarCellRenderer;
