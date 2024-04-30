// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
import { useSelector } from "react-redux";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchRoompatients = async (roomId) => {
  const res = await axiosInstance.get(`/api/rooms/${roomId}/patients`, {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });
  console.log(res, "test custom hook");
  return data.data;
};
export const UseGetRoomPatients = () => {
  const { roomId } = useSelector((state) => state.getroompatients);
  
  return useQuery({
    queryKey: ["roompatients", roomId],
    queryFn: () => fetchRoompatients(roomId),
  });
};
