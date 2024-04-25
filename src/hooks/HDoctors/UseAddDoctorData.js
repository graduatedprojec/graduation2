import { useState } from 'react';
import { axiosInstance } from '../../config/axios.config';

const UseAddDoctorData = () => {
  const [loading, setLoading] = useState(false);

  const addDoctorData = async (doctorData, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/users/staff/store`,
        { ...doctorData, static_role: "doctor" },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );

      if (status) {
        return { success: true };
      }
    } catch (error) {
      console.log(error.response?.data.error.message);
      return { success: false, error: error.response?.data.error.message };
    } finally {
      setLoading(false);
    }
  };

  return { addDoctorData, loading };
};

export default UseAddDoctorData;
