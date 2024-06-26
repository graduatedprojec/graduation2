import Biechartes from "../../piechartes/Biechartes";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
const Midside = () => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Paper
        sx={{
          width: "100%",
          p: 1,
          height: { xl: "214px", lg: "214px", md: "214px" },
        }}
      >
        <h1 style={{ color: "#C5C5D5", fontWeight: "bold" }}>Orders</h1>
        <h1 style={{ color: "#C5C5D5", fontWeight: "bold", fontSize: "25px" }}>
          270 K{" "}
        </h1>
        <Biechartes />
      </Paper>
    </Grid>
  );
};

export default Midside;
