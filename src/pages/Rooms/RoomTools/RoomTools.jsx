import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import TitlePage from "../../../components/Title page/TitlePage";
import Button from "../../../Ui/Button";
import { useState } from "react";
import AddButton from "../../../components/Add Button/AddButton";
import AddRoomTools from "./Add Room Tools/AddRoomTools";
import EditRoomTools from "./Edit Room Tools/EditRoomTools";
import DelRoomTools from "./Delete Room Tools/DelRoomTools";
const RoomTools = () => {
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
      roomId: 21245,
      toolId: 1478956,
      toolName: "Mashrat",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      roomId: 21245,
      toolId: 1478956,
      toolName: "Mashrat",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      roomId: 21245,
      toolId: 1478956,
      toolName: "Mashrat",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      roomId: 21245,
      toolId: 1478956,
      toolName: "Mashrat",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      roomId: 21245,
      toolId: 1478956,
      toolName: "Mashrat",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      roomId: 21245,
      toolId: 1478956,
      toolName: "Mashrat",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      roomId: 21245,
      toolId: 1478956,
      toolName: "Mashrat",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      roomId: 21245,
      toolId: 1478956,
      toolName: "Mashrat",
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
      field: "roomId",
      headerName: "Room Id",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "toolId",
      headerName: "Tool Id",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "toolName",
      headerName: "Tool Name",
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
      <TitlePage path={"Dashbord / Rooms / "} page={"Room Tools"} />
      <AddButton add={openModal} title={"Add New Room Tool"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddRoomTools
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Tool In the room "}
      />
      <EditRoomTools
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Tool Info In The Room"}
      />
      <DelRoomTools
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want Del Tool From This Room "}
      />
    </Box>
  );
};
export default RoomTools;
