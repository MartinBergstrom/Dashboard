import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import "./SportsCalendarCellRenderer.css";

interface SportsCalendarCellRendererProps {
  day: Date;
  currentMonth: Date;
  events: SportsCalendarEvent[] | undefined;
  onClick: (event: SportsCalendarEvent) => void;
}

const SportsCalendarCellRenderer = (props: SportsCalendarCellRendererProps) => {
  const isCurrentDate = (date: Date) => {
    const current = new Date();
    current.setHours(0, 0, 0, 0);
    const dateCopy = new Date(date);
    dateCopy.setHours(0, 0, 0, 0);
    return current.valueOf() === dateCopy.valueOf();
  };

  const classNamesCell = (date: Date) => {
    if (isCurrentDate(date)) {
      return "today";
    }
    if (date.getMonth() !== props.currentMonth.getMonth()) {
      return "greyed";
    }
    return "";
  };

  const isDateInRange = (dateToCheck: Date, startDate: Date, endDate: Date) => {
    const dateToCheckCopy = new Date(dateToCheck);
    dateToCheckCopy.setHours(0, 0, 0, 0);
    const startDateCopy = new Date(startDate);
    startDateCopy.setHours(0, 0, 0, 0);
    const endDateCopy = new Date(endDate);
    endDateCopy.setHours(0, 0, 0, 0);

    return dateToCheckCopy >= startDateCopy && dateToCheckCopy <= endDateCopy;
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

  const normalizeDate = (indate: Date) => {
    const date = new Date(indate);
    date.setHours(0, 0, 0, 0);
    return date;
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

  const renderEvents = () => {
    return (
      <div className="event-bars">
        {getMatchingEvents()
          .slice(0)
          .reverse()
          .map((item) => (
            <div className={"container " + styleEventBar(item)}>
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
