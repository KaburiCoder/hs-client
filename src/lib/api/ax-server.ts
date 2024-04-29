import axios from "axios";
import { getServerHeaders } from "./get-server-headers";

export function axServer() {
  return axios.create({
    baseURL: "http://localhost:8000/api",
    headers: getServerHeaders(),
  });
}
