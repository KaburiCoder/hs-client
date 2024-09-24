import { EnvData } from "@/contants/env-data";
import axios from "axios";

export const axWebApp = axios.create({
  baseURL: `${EnvData.WEBAPP_URL}/api`,
  withCredentials: true,
});