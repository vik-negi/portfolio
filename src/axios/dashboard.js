import { getUsername } from "../pages/admin/utils/auth";
import { Axios } from "./axios";
import axios from "axios";

export const dashboard = async () => {
  return await Axios.get("/api/users");
};
export const callApi = async () => {
  return await axios.get(
    "http://43.204.123.130:3008/trekking/admin/v1/trekking/streakDashboard?page=1&pageSize=10",
    {
      headers: {
        "x-user-id": "86662af3-0110-4024-b132-831e533bfe6b",
      },
    }
  );
};

export const publicInfo = async (username) => {
  return await Axios.get(`/api/user/public-info/${username}`);
};

export const getAbout = async (username) => {
  return await Axios.get(`/api/about/${username}`);
};
export const getExperience = async (username) => {
  return await Axios.get(`/api/experience/${username}`);
};
export const getProjects = async (username) => {
  return await Axios.get(`/api/projects/${username}`);
};
