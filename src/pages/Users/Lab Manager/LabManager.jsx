import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import { useState } from "react";
import AddLabManager from "./Add Lab Manager/AddLabManager";
import EditLabManager from "./Edit Lab Manager/EditLabManager";
import DelLabManager from "./Del Lab Manager/DelLabManager";
import AddButton from "../../../components/Add Button/AddButton";
const LabManager = () => {
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
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      phone: "(751)153-5454",
      email: "Zead@jmail.com",
      address: "01952",
      profile: "profile",
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
      field: "Name",
      headerName: "Name",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "profile",
      headerName: "profile",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return <Button styles={"bg-[#3C3D65] text-[#696cff]"}>Profile</Button>;
      },
    },
    {
      field: "edit",
      headerName: "edit",
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
      <TitlePage path={"Dashbord/Users / "} page={"Lab Managers"} />
      <AddButton add={openModal} title={"Add New Lab Manager"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddLabManager
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Lab Manager"}
      />
      <EditLabManager
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Lab Manager Info"}
      />
      <DelLabManager
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want To Del Lab Manager"}
      />
    </Box>
  );
};

export default LabManager;
