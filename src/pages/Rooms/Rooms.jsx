import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import TitlePage from "../../components/Title page/TitlePage";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/Add Button/AddButton";
import { useState } from "react";
import AddRoom from "./Add Room/AddRoom";
import EditRoom from "./Edit Room/EditRoom";
import DelRoom from "./Del Room/DelRoom";
const Rooms = () => {
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
  const navigate = useNavigate();
  const rows = [
    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      room_num: 15,
      bed_num: 124,

      room_Pateints: "pateints",
      tools: "tools",
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
      field: "room_num",
      headerName: "Room Number",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "bed_num",
      headerName: "Bed Number",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "room_Pateints",
      headerName: "Room Pateints",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <Button
            onClick={() => navigate("/rooms/roompatients")}
            styles={"bg-[#2B4B62] text-[#03c3ec]"}
          >
            Patients
          </Button>
        );
      },
    },
    {
      field: "Tools",
      headerName: "Room Tools",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <Button
            onClick={() => navigate("/rooms/roomtools")}
            styles={"bg-[#54473C] text-[#ffab00]"}
          >
            Tools
          </Button>
        );
      },
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
      headerName: "delete",
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
      <TitlePage path={"Dashbord / "} page={"Rooms"} />
      <AddButton add={openModal} title={"Add New Room"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddRoom isOpen={isOpen} closeModal={closeModal} title={"Add New Room"} />
      <EditRoom
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit  Room Info"}
      />
      <DelRoom
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want To Del Room"}
      />
    </Box>
  );
};

export default Rooms;
