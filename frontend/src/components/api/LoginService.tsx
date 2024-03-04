import axios from "axios";
import { BASE_URL } from "./ApiUtils";

export const postLogin = async (username: string, password: string) => {
    const payload = {
        username: username,
        password: password
    }
    const response = await axios.post(BASE_URL + "/login", JSON.stringify(payload),
    {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};