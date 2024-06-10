import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseAddlabManager = () => {
    const [loading, setLoading] = useState(false);
  
    const addLabmanagerData = async (labManagerData, userData) => {
      setLoading(true);
      try {
        const response = await axiosInstance.post(
          `/api/users/staff/store`,
          { ...labManagerData, static_role: "admin" },
          {
            headers: { Authorization: `Bearer ${userData.data.access_token}` },
          }
        );
        console.log(response , 'lab manager add res');
        if (response.status >= 200 && response.status < 300) {
          return { success: true };
        } else {
          return { success: false, error: "An unexpected error occurred." };
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.error?.message || "An unexpected error occurred.";
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    };
  
    return { addLabmanagerData, loading };
  };
  
  export default UseAddlabManager;