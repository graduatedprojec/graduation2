import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import { useState } from "react";
import AddButton from "../../components/Add Button/AddButton";
import TitlePage from "../../components/Title page/TitlePage";
import AddPatients from "./Add patients/AddPatients";
import EditPatients from "./Edit Patients/EditPatients";
import DelPatients from "./Del Patients/DelPatients";
import { fetchPatients } from "../../app/features/patients/GetpatientsSlice";
import { UsegetPatients } from "../../hooks/HPatients/UsegetPatients";
import { useDispatch } from "react-redux";
const Patients = () => {
  const dispatch = useDispatch()
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [editPatients, seteditPatients] = useState({
    name: "",
    gender: "",
    address: "",
    disease: "",
  });
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (patients) => {
    setIsOpenEdit(true);
    seteditPatients(patients);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (nurse) => {
    setIsOpenDel(true);
    seteditPatients(nurse);
  };
  //=========HANDELERS ========




  const { data, isLoading } = UsegetPatients();
  dispatch(fetchPatients(data));
    if (isLoading) return <h2>loading ...</h2>;
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Patients"} />
      <AddButton add={openModal} title={"Add New Patients"} />
      {data && data.length > 0 ? (
      <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
            gender: row.gender,
            address: row.address,
            disease: row.disease,
            user:row.user.email ,
            edit: "Edit",
            delete: "Delete",
          }))}
          // @ts-ignore
          columns={Object.keys(data[0])
            .map((key) => {
              const isEditOrDeleteColumn = key === "edit" || key === "delete";
              if (isEditOrDeleteColumn) {
                return null;
              }
              return {
                field: key,
                headerName: key.charAt(0).toUpperCase() + key.slice(1),
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
              };
            })
            .filter(Boolean)
            // @ts-ignore
            .concat([
              {
                field: "edit",
                headerName: "Edit",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <
// @ts-ignore
                  Button
                    onClick={() => openModalEdit(params.row)}
                    styles="bg-[#3D5045] text-[#71dd37]"
                  >
                    Edit
                  </Button>
                ),
              },
              {
                field: "delete",
                headerName: "Delete",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <
// @ts-ignore
                  Button
                    onClick={() => openModalDel(params.row)}
                    styles="bg-[#543641] text-[#ff3e1d]"
                  >
                    Delete
                  </Button>
                ),
              },
            ])}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      ) : (
        <p>No data available</p>
      )}
      <AddPatients
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New  Patients "}
      />
      <EditPatients
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit  Patients Information"}
        seteditPatients={seteditPatients}
        editPatients={editPatients}
      />
      <DelPatients
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        
        editPatients={editPatients}
      />
    </Box>
  );
};

export default Patients;
