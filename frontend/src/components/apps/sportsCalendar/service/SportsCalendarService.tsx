import axios from "axios";
import mockEntries from "./../mockData.json";
import { SportsCalendarEvent } from "../model/SportsCalendarModels";

const BASE_URL = "http://localhost:5000";

export const getAllEvents = async (): Promise<SportsCalendarEvent[]> => {
  return new Promise<SportsCalendarEvent[]>((resolve) => {
    // Simulate a 5-second delay
    setTimeout(() => {
      const converted: SportsCalendarEvent[] = mockEntries.map((event) => ({
        ...event,
        pre_start_date: event.pre_start_date
          ? new Date(event.pre_start_date)
          : undefined,
        start_date: new Date(event.start_date),
        end_date: new Date(event.end_date),
      }));
      resolve(converted);
    }, 2000);
  });

  //return mockEntries;
  //const response = await axios.get(BASE_URL + "/sportsCalendar/events");
  //return response.data;
};
