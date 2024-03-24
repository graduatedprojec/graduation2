import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import { useNavigate } from "react-router-dom";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import { useState } from "react";
import AddLab from "./Add Lab/AddLab";
import EditLab from "./Edit Lab/EditLab";
import DelLab from "./Del Lab/DelLab";
const Labs = () => {
  const navigate = useNavigate();
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
    

      Lab_Pateints: "Lab Pateints",
      Lab_Tools: "Lab Tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",


      Lab_Pateints: "Lab Pateints",
      Lab_Tools: "Lab Tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      

      Lab_Pateints: "Lab Pateints",
      Lab_Tools: "Lab Tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      

      Lab_Pateints: "Lab Pateints",
      Lab_Tools: "Lab Tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
 

      Lab_Pateints: "Lab Pateints",
      Lab_Tools: "Lab Tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",


      Lab_Pateints: "Lab Pateints",
      Lab_Tools: "Lab Tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",


      Lab_Pateints: "Lab Pateints",
      Lab_Tools: "Lab Tools",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",


      Lab_Pateints: "Lab Pateints",
      Lab_Tools: "Lab Tools",
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
      field: "Lab_Pateints",
      headerName: "Lab Pateints",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <Button
            onClick={() => navigate("/labs/labpatients")}
            styles={"bg-[#2B4B62] text-[#03c3ec]"}
          >
            Lab Patients
          </Button>
        );
      },
    },
    {
      field: "Lab_Tools",
      headerName: "Lab Tools",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <Button
            onClick={() => navigate("/labs/labtoolss")}
            styles={"bg-[#54473C] text-[#ffab00]"}
          >
            Lab Tools
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
      <TitlePage path={"Dashbord / "} page={"Lab"} />
      <AddButton add={openModal} title={"Add New Lab"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddLab isOpen={isOpen} closeModal={closeModal} title={"Add New Lab"} />
      <EditLab
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit  Lab Info"}
      />
      <DelLab
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want To Del Lab"}
      />
    </Box>
  );
};

export default Labs;
