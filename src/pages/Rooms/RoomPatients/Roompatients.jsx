// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import TitlePage from "../../../components/Title page/TitlePage";
import Button from "../../../Ui/Button";
import { useState } from "react";
import AddButton from "../../../components/Add Button/AddButton";
import AddRoomPatients from "./Add Room Patients/AddRoomPatients";
import EditRoomPatients from "./Edit Room Patients/EditRoomPatients";
import DelRoomPatients from "./Del Room Patients/DelRoomPatients";
import { UseGetRoomPatients } from "../../../hooks/HRoom Patients/UseGetRoomPatients";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoompatients } from "../../../app/features/Room patients/GetRoompatientsslice";
const Roompatients = () => {
  const dispatch = useDispatch();
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editNurse, seteditNurse] = useState({
    id: 0,
    name: "",
    phone: "",
    email: "",
    password: "",
    static_role: "",
    address: "",
  });
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (nurse) => {
    setIsOpenEdit(true);
    seteditNurse(nurse);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (nurse) => {
    setIsOpenDel(true);
    seteditNurse(nurse);
  };
  //=========HANDELERS ========


   // @ts-ignore
   const { data : value, isLoading } = UseGetRoomPatients();
   dispatch(fetchRoompatients(value))
   const { roomPatients:data } = useSelector((state) => state.getroompatients);
   
   
  if (isLoading) return <h2>loading ...</h2>;
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Rooms / "} page={"Room Patients"} />
      <AddButton add={openModal} title={"Add New Room Patients"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            static_role: row.static_role,
            address: row.address,
            edit: "Edit",
            delete: "Delete",
          }))}
          columns={Object.keys(data[0])
            .map((key) => {
              const isEditOrDeleteColumn = key === "edit" || key === "delete";
              if (isEditOrDeleteColumn) {
                return null;
              }
              return {
                field: key,
                headerName: key.charAt(0).toUpperCase() + key.slice(1),
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
              };
            })
            .filter(Boolean)

            .concat([
              {
                field: "edit",
                headerName: "Edit",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <Button
                    onClick={() => openModalEdit(params.row)}
                    styles="bg-[#3D5045] text-[#71dd37]"
                  >
                    Edit
                  </Button>
                ),
              },
              {
                field: "delete",
                headerName: "Delete",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <Button
                    onClick={() => openModalDel(params.row)}
                    styles="bg-[#543641] text-[#ff3e1d]"
                  >
                    Delete
                  </Button>
                ),
              },
            ])}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      ) : (
        <p>No data available</p>
      )}
      <AddRoomPatients
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Patients In the room "}
      />
      <EditRoomPatients
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Patients Info In The Room"}
      />
      <DelRoomPatients
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want Del Patients From This Room "}
      />
    </Box>
  );
};
export default Roompatients;
