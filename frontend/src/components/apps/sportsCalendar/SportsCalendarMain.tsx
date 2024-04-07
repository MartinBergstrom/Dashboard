import { useState } from "react";
import SportsCalendar from "./calendar/SportsCalendar";
import { SportsCalendarEvent } from "./model/SportsCalendarModels";
import SportsCalendarInfoView from "./infoView/SportsCalendarInfoView";

const SportsCalendarMain = () => {
  const [selectedEvent, setSelectedEvent] = useState<SportsCalendarEvent>();

  const onEventClick = (event: SportsCalendarEvent) => {
    setSelectedEvent(event);
  }

  return (
    <>
      <SportsCalendar onEventClick={onEventClick}/>
      <SportsCalendarInfoView selectedEvent={selectedEvent} />
    </>
  );
};

export default SportsCalendarMain;
