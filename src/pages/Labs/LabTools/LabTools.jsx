import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import { useState } from "react";
import AddButton from "../../../components/Add Button/AddButton";
import AddLabTools from "./Add Lab Tools/AddLabTools";
import EditLabTools from "./Edit Lab Tools/EditLabTools";
import DelLabTools from "./Del Lab Tools/DelLabTools";
const LabTools = () => {
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

      labId: 985764,
      toolId: 511,
      toolName: "any name",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,

      labId: 985764,
      toolId: 511,
      toolName: "any name",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,

      labId: 985764,
      toolId: 511,
      toolName: "any name",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,

      labId: 985764,
      toolId: 511,
      toolName: "any name",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,

      labId: 985764,
      toolId: 511,
      toolName: "any name",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,

      labId: 985764,
      toolId: 511,
      toolName: "any name",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,

      labId: 985764,
      toolId: 511,
      toolName: "any name",
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
      field: "labId",
      headerName: "Lab Id",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "toolId",
      headerName: "Tool Id",
      width: 150,
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
      <TitlePage path={"Dashbord / Labs / "} page={"Lab Tools"} />
      <AddButton add={openModal} title={"Add New Lab Tools"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddLabTools
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Tool In The Lab "}
      />
      <EditLabTools
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Tool Info In The Lab"}
      />
      <DelLabTools
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want Del Tool From This Lab "}
      />
    </Box>
  );
};

export default LabTools;
