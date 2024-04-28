import { configureStore } from "@reduxjs/toolkit";
import  getdoctorSlice from "./features/doctors/GetdoctorSlice";
import  getnursingSlice from "./features/nursing/GetNursingSlice"
import  getSuplierSlice from "./features/Supliers/GerSuplierSlice"
import loginSlice from "./features/login/login";
import getPatientsSlice from "./features/patients/GetpatientsSlice";
const store = configureStore({
  reducer: {
    getdoctor:getdoctorSlice ,
    getnursing:getnursingSlice,
    getsupliers:getSuplierSlice ,
    getpatients:getPatientsSlice ,
    mytokens:loginSlice 
  },
});

export default store;
