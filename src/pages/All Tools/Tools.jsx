import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import { useState } from "react";
import AddButton from "../../components/Add Button/AddButton";
import TitlePage from "../../components/Title page/TitlePage";
import AddTools from "./Add Tools/AddTools";
import EditTool from "./Edit Tools/EditTools";
import DelTool from "./DelTools/DelTools";
const Tools = () => {
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
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      name: "Moaz Karem",
      type: "type tools",
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
      headerName: "Name",
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
      <TitlePage path={"Dashbord / "} page={"All Tools In Hospital "} />
      <AddButton add={openModal} title={"Add New Tool "} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddTools
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Tool"}
      />
      <EditTool
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Tool Information"}
      />
      <DelTool
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are Yoy Want To Delete Thit Tool"}
      />
    </Box>
  );
};

export default Tools;
