import axios from "axios";
//import mockEntries from "./../mockEntries.json";
import { WatchInfo } from "../model/WatchInfoModel";
import { WatchPriority } from "../model/WatchPriority";

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

export const getPriority = async () => {
  const response = await axios.get(BASE_URL + "/watches/priority");
  return response.data;
};

export const getComment = async () => {
  const response = await axios.get(BASE_URL + "/comment");
  return response.data;
};

export const updateCommentText = async (newTextData: string) => {
  const response = await axios.put(BASE_URL + "/comment", newTextData,
    {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  return response.data;
};

export const setWatchPriority = async (data: WatchPriority) => {
  const response = await axios.put(BASE_URL + "/watches/priority/set", data);
  return response.data;
};

export const postNewWatchInfo = async (data: WatchInfo) => {
  const response = await axios.post(BASE_URL + "/watch/new", data);
  return response.data;
};

export const putWatchInfo = async (data: WatchInfo) => {
  const response = await axios.put(BASE_URL + "/watch/" + data._id, data);
  return response.data;
};
