import axios from "axios";
import { REQUEST, SEARCH, TOKEN } from "./getEnv";



export const instance = () => axios.create({baseURL:REQUEST, headers:{Authorization: `Bearer ${TOKEN}`}})

export const instanceV2 = () => axios.create({baseURL:SEARCH, headers:{Authorization: `Bearer ${TOKEN}`}})