import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import AddButton from "../../../components/Add Button/AddButton";
import AddDoctor from "./AddDoctor/AddDoctor";
import { useState } from "react";
import EditDoctor from "./Edit Doctor/EditDoctor";
import DelDoctor from "./Delete Doctor/DelDoctor";

const Doctors = () => {
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
      id: 2,
      Name: "Eman Mohamed",
      phone: "(751)555-5444",
      email: "eman@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 3,
      Name: "ibrahem mohamed",
      phone: "(751)666-5564",
      email: "moamen@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 4,
      Name: "Asylat Karem",
      phone: "(751 -789-5454",
      email: "Asylat@jmail.com",
      address: "7549",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 5,
      Name: "khaled ahmed",
      phone: "(751)153-5454",
      email: "khaled@jmail.com",
      address: "9513674",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 6,
      Name: "Norhan ashraf",
      phone: "(1257)153-5454",
      email: "nour@jmail.com",
      address: "133424",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 7,
      Name: "noha ali",
      phone: "(751)153-5454",
      email: "noha@jmail.com",
      address: "4691",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 8,
      Name: "mostafa mohamed ",
      phone: "(751)153-5454",
      email: "mostafa@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 9,
      Name: "jihad ",
      phone: "(751)153-5454",
      email: "jihad@jmail.com",
      address: "01952",
      profile: "profile",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 10,
      Name: "ayman monir",
      phone: "(751)153-5454",
      email: "ayman@jmail.com",
      address: "023423452",
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
    <Box sx={{ height: 600, width: "95%", mx: "auto" }}>
      <TitlePage path={"Dashbord/Users / "} page={"Doctors"} />
      <AddButton add={openModal} title={"Add New Doctor"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddDoctor
        title={"Add New Doctor"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditDoctor
        title={"Edit Doctor Information"}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
      />
      <DelDoctor
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want Delete Dr-Moaz"}
      />
    </Box>
  );
};

export default Doctors;
