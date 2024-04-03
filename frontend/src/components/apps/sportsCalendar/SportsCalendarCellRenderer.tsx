import { SportsCalendarEvents } from "./model/SportsCalendarModels";
import "./SportsCalendar.css";

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
        <span>{props.day.getDate()}</span>
      </div>
    </>
  );
};

export default SportsCalendarCellRenderer;
