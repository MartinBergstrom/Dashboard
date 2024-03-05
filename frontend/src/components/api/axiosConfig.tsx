import axios from "axios";

export const setTokenInHeader = () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common['Authorization'] = token;
}

export const unsetTokenInHeader = () => {
    delete axios.defaults.headers.common["Authorization"];
}