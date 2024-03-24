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
const Roompatients = () => {
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = () => setIsOpenEdit(true);
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = () => setIsOpenDel(true);
  //=========HANDELERS ========
  const EditHandedler = () => {
    openModalEdit();
  };
  const delHandedler = () => {
    openModalDel();
  };
  const rows = [
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientId: 14203,
      roomId: 21245,
      bedNum: 400,
      dateIn: "21 - 6 - 2009",
      dateOut: "18 - 3 - 2024",
      edit: "Edit",
      delete: "Delete",
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },

    {
      field: "patientId",
      headerName: "Patient Id",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "roomId",
      headerName: "Room Id",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "bedNum",
      headerName: "Bed Num",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "dateIn",
      headerName: "Date In ",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dateOut",
      headerName: "Date Out ",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",

      renderCell: () => {
        return (
          <Button
            onClick={EditHandedler}
            styles={"bg-[#3D5045] text-[#71dd37]"}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <Button onClick={delHandedler} styles={"bg-[#543641] text-[#ff3e1d]"}>
            Delite
          </Button>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Rooms / "} page={"Room Patients"} />
      <AddButton add={openModal} title={"Add New Room Patients"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
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
