import { configureStore } from "@reduxjs/toolkit";
import  getdoctorSlice from "./features/doctors/GetdoctorSlice";
import loginSlice from "./features/login/login";
const store = configureStore({
  reducer: {
    getdoctor:getdoctorSlice ,
    mytokens:loginSlice
  },
});

export default store;
