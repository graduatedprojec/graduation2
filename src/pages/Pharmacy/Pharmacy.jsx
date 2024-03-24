import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import { useState } from "react";
import AddButton from "../../components/Add Button/AddButton";
import TitlePage from "../../components/Title page/TitlePage";
import AddPharmacy from "./Add Pharmacy/AddPharmacy";
import EditPharmacy from "./Edit Pharmacy/EditPharmacy";
import DelPharmacy from "./Del Pharmacy/DelPharmacy";
const Pharmacy = () => {
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
      name: "Moaz Karem",
      type: "type tools",
      description: "this description",
      price: 102.5,
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      description: "this description",
      price: 102.5,
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      description: "this description",
      price: 102.5,
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      description: "this description",
      price: 102.5,
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      description: "this description",
      price: 102.5,
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      description: "this description",
      price: 102.5,
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      description: "this description",
      price: 102.5,
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      description: "this description",
      price: 102.5,
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
      field: "name",
      headerName: "name",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "Type Tool",
      width: 150,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "description",
      headerName: "Description",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
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
      <TitlePage path={"Dashbord / "} page={"Hospital Pharmacy"} />
      <AddButton add={openModal} title={"Add New Department"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddPharmacy
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Pharmacy "}
      />
      <EditPharmacy
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Pharmacy Information"}
      />
      <DelPharmacy
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are Yoy Want To Delete This Pharmacy"}
      />
    </Box>
  );
};

export default Pharmacy;
