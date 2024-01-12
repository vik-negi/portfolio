import { getUsername } from "../pages/admin/utils/auth";
import { Axios } from "./axios";

export const getAdminExperience = async () => {
  const username = getUsername();
  console.log("username : ", username);
  return await Axios.get(`/api/experience/${username}`);
};
