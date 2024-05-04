import { configureStore } from "@reduxjs/toolkit";
import getdoctorSlice from "./features/doctors/GetdoctorSlice";
import getnursingSlice from "./features/nursing/GetNursingSlice";
import getSuplierSlice from "./features/Supliers/GerSuplierSlice";
import loginSlice from "./features/login/login";
import getPatientsSlice from "./features/patients/GetpatientsSlice";
import getSelectedPatients from "./features/select room patients/GetroompSelectpatientsSlice";
import getroomsSlice from "./features/Rooms/GetRoomsSlice";
import getRoomPatients from "./features/Room patients/GetRoompatientsslice";
import getlabsSlice from "./features/labs/GetLabsSlice";
import getToolsSlice from "./features/AllTools/GetAllToolsSlice";
const store = configureStore({
  reducer: {
    getdoctor: getdoctorSlice,
    getnursing: getnursingSlice,
    getsupliers: getSuplierSlice,
    getpatients: getPatientsSlice,
    getselcetedpatients: getSelectedPatients,
    getrooms: getroomsSlice,
    getroompatients: getRoomPatients,
    getlabs:getlabsSlice ,
    gettools:getToolsSlice ,
    mytokens: loginSlice,
  },
});

export default store;
