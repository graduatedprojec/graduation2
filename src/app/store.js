import { configureStore } from "@reduxjs/toolkit";
import  getdoctorSlice from "./features/doctors/GetdoctorSlice";
import  getnursingSlice from "./features/nursing/GetNursingSlice"
import loginSlice from "./features/login/login";
const store = configureStore({
  reducer: {
    getdoctor:getdoctorSlice ,
    getnursing:getnursingSlice,
    mytokens:loginSlice
  },
});

export default store;
