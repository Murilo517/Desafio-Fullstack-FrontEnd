import axios from "axios";

export const api = axios.create({
    baseURL: "colocarurldobackend",
    timeout: 10000
})