import api, { BASE_URL, unsetTokenInHeader } from "./api";
import { Credentials } from "../models/credentials";

export const postLogin = async (credentials: Credentials) => {
    unsetTokenInHeader();
    const response = await api.post(BASE_URL + "/login", credentials,
    {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
};


export const postRefreshToken = async () => {
    const response = await api.post(BASE_URL + "/login/refresh");
    return response;
};