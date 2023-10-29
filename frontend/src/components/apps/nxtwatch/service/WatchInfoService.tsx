import axios from "axios";
//import mockEntries from "./../mockEntries.json";
import { WatchInfo } from "../model/WatchInfoModel";

const BASE_URL = "http://localhost:4000";

//const mockEntriesObj = mockEntries as WatchInfo[];

export const getAllWatchInfo = async () => {
  /*return new Promise<WatchInfo[]>((resolve) => {
    // Simulate a 5-second delay
    setTimeout(() => {
      resolve(mockEntriesObj);
    }, 2000);
  });
  */
  //return mockEntriesObj;
  const response = await axios.get(BASE_URL + "/watches");
  return response.data;
};

export const postNewWatchInfo = async (data: WatchInfo) => {
  const response = await axios.post(BASE_URL + "/watch/new", data);
  return response.data;
};
