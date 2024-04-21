import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "../pages/Rootlayout/Rootlayout";
import Home from "../pages/HomePage/Home";
import Labs from "../pages/Labs/Labs";
import Departments from "../pages/Departments/Departments";
import Patients from "../pages/Patients/Patients";
import Rooms from "../pages/Rooms/Rooms";
import Doctors from "../pages/Users/Doctors/Doctors";
import Nursing from "../pages/Users/Nurse/Nursing";
import LabManager from "../pages/Users/Lab Manager/LabManager";
import RoomManager from "../pages/Users/Room Manager/RoomManager";
import Roompatients from "../pages/Rooms/RoomPatients/Roompatients";
import RoomTools from "../pages/Rooms/RoomTools/RoomTools";
import Labpatients from "../pages/Labs/LabPatients/Labpatients";
import LabTools from "../pages/Labs/LabTools/LabTools";
import Pharmacy from "../pages/Pharmacy/Pharmacy";
import Tools from "../pages/All Tools/Tools";
import Supliers from "../pages/Supliers/Supliers";
import InventoryPharmacy from "../pages/Inventory/Inventory pharmacy/InventoryPharmacy";
import InventoryTool from "../pages/Inventory/Inventory Tool/InventoryTool";
import Login from "../pages/login/Login";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="users">
          <Route path="doctors" element={<Doctors />} />
          <Route path="nursing" element={<Nursing />} />
          <Route path="labmanagers" element={<LabManager />} />
          <Route path="roommanagers" element={<RoomManager />} />
        </Route>
        <Route path="rooms">
          <Route index element={<Rooms />} />
          <Route path="room-patients" element={<Roompatients />} />
          <Route path="room-tools" element={<RoomTools />} />
        </Route>
        <Route path="labs">
          <Route index element={<Labs />} />
          <Route path="lab-patients" element={<Labpatients />} />
          <Route path="lab-tools" element={<LabTools />} />
        </Route>
        <Route path="departments" element={<Departments />} />
        <Route path="patients" element={<Patients />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="tools" element={<Tools />} />
        <Route path="supliers" element={<Supliers />} />
        <Route path="inventory">
          <Route path="pharmacy" element={<InventoryPharmacy />} />
          <Route path="tool" element={<InventoryTool />} />
        </Route>
      </Route>
      <Route path="login" element={<Login/>} />
    </>
  )
);

export default router;
