// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import AddButton from "../../../components/Add Button/AddButton";
import AddNurse from "./Add Nurse/AddNurse";
import { useState } from "react";
import EditNurse from "./Edit Nurse/EditNurse";
import DelNurse from "./Delet Nurse/DelNurse";
import {UsegetNursing}  from "../../../hooks/HNursing/UsegetNursing";
import { useDispatch } from "react-redux";
import { fetchNursing } from "../../../app/features/nursing/GetNursingSlice";
const Nursing = () => {
  const dispatch = useDispatch()
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [editNurse, seteditNurse] = useState({
    id: 0,
    name: "",
    phone: "",
    email: "",
    password: "",
    static_role: "",
    address: "",
  });
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (nurse) => {
    setIsOpenEdit(true);
    seteditNurse(nurse);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = () => setIsOpenDel(true);
  //=========HANDELERS ========

  const { data, isLoading } = UsegetNursing();
  dispatch(fetchNursing(data));
  const rows = data
    ? data.map((row) => ({
        id: row.id,
        name: row.name,
        phone: row.phone,
        email: row.email,
        static_role: row.static_role,
        address: row.address,
        edit: "Edit",
        delete: "Delete",
      }))
    : [];

  const columns = data
    ? Object.keys(data[0])
        .map((key) => {
          const isEditOrDeleteColumn = key === "edit" || key === "delete";
          if (isEditOrDeleteColumn) {
            return null; // Skip rendering this column for edit and delete buttons
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
        .concat([
          {
            field: "edit",
            headerName: "Edit",
            width: 150,
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (
              <Button
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
              <Button
                onClick={()=>openModalDel(params.row)}
                styles="bg-[#543641] text-[#ff3e1d]"
              >
                Delete
              </Button>
            ),
          },
        ])
    : [];
    if (isLoading) return <h2>loading ...</h2>;
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord/Users / "} page={"Nursing"} />
      <AddButton add={openModal} title={"Add New Nurse"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddNurse
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Nurse "}
        
      />
      <EditNurse
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Nurse Information"}
        editNurse={editNurse}
        seteditNurse={seteditNurse}
      />
      <DelNurse
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are Yoy Want To Delete Esraa"}
      />
    </Box>
  );
};

export default Nursing;
