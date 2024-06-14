// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import TitlePage from "../../../components/Title page/TitlePage";
import { Usegetinvtool } from "../../../hooks/Invntory/Tool/UseGetinvTool";
import { fetchinvtool } from "../../../app/features/inventory/GetinvToolslice";
import { useDispatch } from "react-redux";
const InventoryTool = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = Usegetinvtool();
  dispatch(fetchinvtool(data));
  if (isLoading) return <h2>loading ...</h2>;
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Inventory / "} page={"Inventory Tool"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
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

            .concat([])}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      ) : (
        <p>No data available</p>
      )}
    </Box>
  );
};

export default InventoryTool;
