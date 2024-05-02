// @ts-nocheck
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
import { useDispatch } from "react-redux";
import { UsegetLabs } from "../../hooks/HLabs/UseGetLabs";
import { fetchLabs } from "../../app/features/labs/GetLabsSlice";
const Labs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [editLab, seteditLab] = useState({
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
    seteditLab(nurse);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (nurse) => {
    setIsOpenDel(true);
    seteditLab(nurse);
  };
  //=========HANDELERS ========
  const navigatePatients = (lab) => {
    // const roomId = room.id;
    // localStorage.setItem("roomId", roomId);
    // dispatch(getRoomId(roomId));
    navigate(`/labs/${lab.id}/labpatients`);
  };

  const navigateRoomTools = () => {
    navigate("/labs/labtools");
  };
  const { data, isLoading } = UsegetLabs();
  dispatch(fetchLabs(data));
  if (isLoading) return <h2>loading ...</h2>;

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Lab"} />
      <AddButton add={openModal} title={"Add New Lab"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
            edit: "Edit",
            delete: "Delete",
          }))}
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

            .concat([
              {
                field: "patients",
                headerName: "Delete",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <Button
                    onClick={() => navigatePatients(params)}
                    styles={"bg-[#2B4B62] text-[#03c3ec]"}
                  >
                    Patients
                  </Button>
                ),
              },
              {
                field: "tools",
                headerName: "Delete",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: () => (
                  <Button
                    onClick={() => navigateRoomTools()}
                    styles={"bg-[#54473C] text-[#ffab00]"}
                  >
                    Tools
                  </Button>
                ),
              },
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
      <AddLab isOpen={isOpen} closeModal={closeModal} title={"Add New Lab"} />
      <EditLab
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit  Lab Info"}
        editLab={editLab}
        seteditLab={seteditLab}
      />
      <DelLab isOpen={isOpenDel} closeModal={closeModalDel} editLab={editLab} />
    </Box>
  );
};

export default Labs;
