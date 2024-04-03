import axios from "axios";
import mockEntries from "./../mockData.json";
import { SportsCalendarEvents } from "../model/SportsCalendarModels";

const BASE_URL = "http://localhost:5000";

const mockEntriesObj = mockEntries as SportsCalendarEvents[];

export const getAllEvents = async () => {
  return new Promise<SportsCalendarEvents[]>((resolve) => {
    // Simulate a 5-second delay
    setTimeout(() => {
      resolve(mockEntriesObj);
    }, 2000);
  });
  
  return mockEntriesObj;
  //const response = await axios.get(BASE_URL + "/sportsCalendar/events");
  //return response.data;
};

