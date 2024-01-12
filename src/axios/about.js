import { getUsername, getToken } from "../pages/admin/utils/auth";
import { Axios } from "./axios";

export const getAdminAbout = async () => {
  const username = getUsername();
  console.log("username : ", username);
  return await Axios.get(`/api/about/${username}`);
};

export const updateAbout = async (data) => {
  const token = getToken();

  console.log("data about : ", token);
  return await Axios.put(`/api/about/${data._id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "application/json",
    },
  });
};
