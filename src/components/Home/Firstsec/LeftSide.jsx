// @ts-nocheck
import { Box, Paper, Typography } from "@mui/material";
import Button from "../../../Ui/Button";
// @ts-ignore
import img1 from "../../../assets/img/img1.png";
import Grid from "@mui/material/Grid";
const LeftSide = () => {
  return (
    <Grid item xs={12} sm={12} lg={6}>
      <Paper
        sx={{
          height: { xl: "214px", lg: "214px", md: "214px" },
          width: "100%",
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: { lg: "nowrap", md: "nowrap", xs: "wrap", sm: "wrap" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5 className="mb-1 text-[#696cff] text-2xl font-semibold">
            Congratulaton Moaz ❤
          </h5>
          <Typography variant="p" mb={1}>
            You have done 72% more sales today. Check your new badge in your
            profile.
          </Typography>
          <Button
            styles={" border border-solid border-[#696CFE] text-[#5A5CD1] "}
          >
            Moaz karem
          </Button>
        </Box>
        <img src={img1} alt="image" />
      </Paper>
    </Grid>
  );
};

export default LeftSide;
