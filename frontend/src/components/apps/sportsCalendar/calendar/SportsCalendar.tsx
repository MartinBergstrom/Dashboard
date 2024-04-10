import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./SportsCalendar.css";
import { useState } from "react";
import SportsCalendarCellRenderer from "../cell/SportsCalendarCellRenderer";
import { useQuery, useQueryClient } from "react-query";
import { getAllEvents } from "../service/SportsCalendarService";
import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import SportsCalendarTimelineOverview from "../timelineOverview/SportsCalendarTimelineOverview";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface SportsCalendarProps {
  onEventClick: (event: SportsCalendarEvent) => void;
}

const SportsCalendar = (props: SportsCalendarProps) => {
  const [currentMonth, setCurentMonth] = useState<Date>(new Date());
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data: fetchedEvents, isLoading } = useQuery<SportsCalendarEvent[]>(
    "allEvents",
    getAllEvents
  );

  const getStartDate = () => {
    let date = new Date(currentMonth);
    date.setDate(1);
    let dayNbr = date.getDay();
    if (dayNbr === 1) {
      // it's monday
      return date;
    } else {
      date.setDate(0);
      while (dayNbr !== 1) {
        const modifiedDate = new Date(date);
        modifiedDate.setDate(date.getDate() - 1);
        date = modifiedDate;
        dayNbr = date.getDay();
      }
      return date;
    }
  };

  const getEndDate = () => {
    // Get end of this month
    let date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    let dayNbr = date.getDay();
    if (dayNbr === 0) {
      return date;
    }
    date = getNextMonth(date);
    dayNbr = date.getDay();
    while (dayNbr !== 0) {
      date.setDate(date.getDate() + 1);
      dayNbr = date.getDay();
    }
    return date;
  };

  const getNextMonth = (date: Date) => {
    const nextYear =
      date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear();
    const nextMonth = date.getMonth() === 11 ? 0 : date.getMonth() + 1;
    return new Date(nextYear, nextMonth, 1);
  };

  const setPrevMonth = () => {
    const date = new Date(currentMonth);
    date.setMonth(date.getMonth() - 1);
    setCurentMonth(date);
  };

  const setNextMonth = () => {
    setCurentMonth(getNextMonth(currentMonth));
  };

  const getWeekNumber = (date: Date) => {
    var dt: Date = new Date(date.getFullYear(), 0, 1);
    let diff: number = date.getTime() - dt.getTime();
    return Math.ceil((diff / 86400000 + dt.getDay() + 1) / 7);
  };

  const renderCells = () => {
    const startDate = getStartDate();
    const endDate = getEndDate();
    const rows: any = [];

    let day: Date = startDate;
    let days = [];

    while (day <= endDate) {
      const weekNbr = getWeekNumber(day);
      days.push(
        <div className="col week" key={weekNbr}>
          <span>{weekNbr}</span>
        </div>
      );
      for (let i = 0; i < 7; i++) {
        days.push(
          <SportsCalendarCellRenderer
            onClick={props.onEventClick}
            currentMonth={currentMonth}
            day={new Date(day)}
            events={fetchedEvents}
            key={day.toDateString()}
          />
        );
        day.setDate(day.getDate() + 1);
      }
      rows.push(
        <div className="row" key={day.toDateString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  };

  if (isLoading) {
    return <>Loading</>;
  }

  const renderDays = () => {
    return (
      <div className="row">
        <div className="col">w</div>
        <div className="col">Monday</div>
        <div className="col">Tuesday</div>
        <div className="col">Wednesday</div>
        <div className="col">Thursday</div>
        <div className="col">Friday</div>
        <div className="col">Saturday</div>
        <div className="col">Sunday</div>
      </div>
    );
  };

  return (
    <>
      <IconButton
        color="primary"
        style={{
          position: "absolute",
          top: "10px",
          left: "5px",
        }}
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
      <div className="calendar-wrapper">
        <div className="event-timeline-overview-wrapper">
          <SportsCalendarTimelineOverview />
        </div>
        <div className="sports-calendar">
          <div>
            {" "}
            <IconButton color="primary" onClick={() => setPrevMonth()}>
              <KeyboardArrowLeftIcon />
            </IconButton>
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            <IconButton color="primary" onClick={() => setNextMonth()}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
          {renderDays()}
          {renderCells()}
        </div>
      </div>
    </>
  );
};

export default SportsCalendar;