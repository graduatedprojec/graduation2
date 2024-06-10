// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchinvTool = async () => {
  const { data } = await axiosInstance.get("/api/general/get-all-labs", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data.laboratories;
};
export const Usegetinvtool = () => {
  return useQuery({
    queryKey: ["invtool"],
    queryFn: fetchinvTool,
  });
};
