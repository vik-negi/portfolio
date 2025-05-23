import { getUsername, isAutheticated } from "../app/admin/utils/auth";
import { Axios } from "./axios";

export const getAdminSkills = async () => {
  const username = getUsername();
  console.log("username : ", username);
  return await Axios.get(`/api/skills/${username}`);
};
export const getAllSkills = async () => {
  return await Axios.get(`/api/skills`);
};
export const addSkillByFile = async (data) => {
  const { token } = isAutheticated();
  const username = getUsername();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  console.log("usernameu : ", username);
  return await Axios.post(`/api/skills/many`, data, { headers: headers });
};
export const addSkill = async (data) => {
  const { token } = isAutheticated();
  const username = getUsername();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  console.log("usernameu : ", username);
  return await Axios.post(`/api/skills`, data, { headers: headers });
};
