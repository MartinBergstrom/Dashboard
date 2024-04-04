import { SportsCalendarEvents } from "./model/SportsCalendarModels";
import "./SportsCalendar.css";
import "./SportsCalendarCellRenderer.css";

interface SportsCalendarCellRendererProps {
  day: Date;
  currentMonth: Date;
  events: SportsCalendarEvents[] | undefined;
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
        <div className="event-bars">
          <div className="event-bar">event1</div>
          <div className="event-bar">event2</div>
          <div className="event-bar">event3</div>
        </div>
      </div>
    </>
  );
};

export default SportsCalendarCellRenderer;
