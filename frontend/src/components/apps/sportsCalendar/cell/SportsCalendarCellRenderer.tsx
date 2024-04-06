import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import "./SportsCalendarCellRenderer.css";

interface SportsCalendarCellRendererProps {
  day: Date;
  currentMonth: Date;
  events: SportsCalendarEvent[] | undefined;
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

  const renderEvents = () => {
    return (
      <div className="event-bars">
        {getMatchingEvents().map((item) => (
          <div className="event-bar" key={item._id}>
            {item.name}
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
