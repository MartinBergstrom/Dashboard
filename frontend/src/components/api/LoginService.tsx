import axios from "axios";
import { BASE_URL } from "./ApiUtils";
import { Credentials } from "../models/credentials";

export const postLogin = async (credentials: Credentials) => {
    const response = await axios.post(BASE_URL + "/login", credentials,
    {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};