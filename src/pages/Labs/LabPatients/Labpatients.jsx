import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import { useState } from "react";
import AddButton from "../../../components/Add Button/AddButton";
import AddLabPatients from "./Add Lab Patients/AddLabPatients";
import EditLabPatients from "./Edit Lab Patients/EditLabPatients";
import DelLabPatients from "./Del Lab Patients/DelLabPatients";
const Labpatients = () => {
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
      patientsId: 2021457,
      labId: 985764,
      appointDate: "22 - 1 - 2030",
      title: "Patients",
      desc: "description",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientsId: 2021457,
      labId: 985764,
      appointDate: "22 - 1 - 2030",
      title: "Patients",
      desc: "description",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientsId: 2021457,
      labId: 985764,
      appointDate: "22 - 1 - 2030",
      title: "Patients",
      desc: "description",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientsId: 2021457,
      labId: 985764,
      appointDate: "22 - 1 - 2030",
      title: "Patients",
      desc: "description",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientsId: 2021457,
      labId: 985764,
      appointDate: "22 - 1 - 2030",
      title: "Patients",
      desc: "description",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientsId: 2021457,
      labId: 985764,
      appointDate: "22 - 1 - 2030",
      title: "Patients",
      desc: "description",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientsId: 2021457,
      labId: 985764,
      appointDate: "22 - 1 - 2030",
      title: "Patients",
      desc: "description",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      patientsId: 2021457,
      labId: 985764,
      appointDate: "22 - 1 - 2030",
      title: "Patients",
      desc: "description",
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
      field: "patientsId",
      headerName: "Patients Id",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "labId",
      headerName: "Lab Id",
      width: 150,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "appointDate",
      headerName: "Appoint Date",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "title",
      headerName: "title",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "desc",
      headerName: "Describtion",
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
      <TitlePage path={"Dashbord / Labs / "} page={"Lab Patients"} />
      <AddButton add={openModal} title={"Add New Lab Patients"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddLabPatients isOpen={isOpen} closeModal={closeModal} title={'Add New Patients In The Lab '} />
      <EditLabPatients isOpenEdit={isOpenEdit} closeModalEdit={closeModalEdit} title={'Edit Patients Info In The Lab'}/>
      <DelLabPatients isOpen={isOpenDel} closeModal={closeModalDel} title={'Are You Want Del Patients From This Lab '}/>
    </Box>
  );
};

export default Labpatients;
