import { configureStore } from "@reduxjs/toolkit";
import getdoctorSlice from "./features/doctors/GetdoctorSlice";
import getnursingSlice from "./features/nursing/GetNursingSlice";
import getSuplierSlice from "./features/Supliers/GerSuplierSlice";
import loginSlice from "./features/login/login";
import getPatientsSlice from "./features/patients/GetpatientsSlice";
import getSelectedPatients from "./features/select room patients/GetroompSelectpatientsSlice";
import getroomsSlice from "./features/Rooms/GetRoomsSlice";
import getRoomPatients from "./features/Room patients/GetRoompatientsslice";
const store = configureStore({
  reducer: {
    getdoctor: getdoctorSlice,
    getnursing: getnursingSlice,
    getsupliers: getSuplierSlice,
    getpatients: getPatientsSlice,
    getselcetedpatients: getSelectedPatients,
    getrooms: getroomsSlice,
    getroompatients: getRoomPatients,
    mytokens: loginSlice,
  },
});

export default store;
