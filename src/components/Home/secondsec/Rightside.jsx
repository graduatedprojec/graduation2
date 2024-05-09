import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import Barchartes from "../../BarChartes/Barchartes";
import LineCharts from "../../Linescharts/LineCharts";
const Rightside = () => {
  return (
    <Grid item gap={2} lg={6} xs={12} sm={12}>
      <Box
        gap={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "188px",
            flexWrap: {
              lg: "nowrap",
              xl: "nowrap",
            },
          }}
          gap={2}
        >
          <Paper
            sx={{
              width: "49%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",

              height: { xl: "188px", lg: "188px", md: "188px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <IconButton
                sx={{
                  color: "#9AE7F7",
                  backgroundColor: "#24445C",
                }}
              >
                <FolderCopyIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: "#9AE7F7",
                  backgroundColor: "#24445C",
                }}
              >
                <FolderCopyIcon />
              </IconButton>
            </Box>
            <Typography
              sx={{
                color: "rgpa(219 , 219 , 235 , .6)",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {" "}
              Payments{" "}
            </Typography>
            <Typography
              sx={{
                color: "rgpa(219 , 219 , 235 , .6)",
                fontWeight: "bold",
                fontSize: "28px",
              }}
            >
              {" "}
              $2540{" "}
            </Typography>

            <Typography sx={{ color: "#ff3e1d", textAlign: "center" }}>
              {" "}
              icon arrow here 28.8{" "}
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 2,

              height: { xl: "188px", lg: "188px", md: "188px" },
              width: "49%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <IconButton
                sx={{
                  color: "#9AE7F7",
                  backgroundColor: "#24445C",
                }}
              >
                <FolderCopyIcon />
              </IconButton>
            </Box>
            <Barchartes
              width={"100%"}
              height={"120px"}
              showaxisandgrids={false}
            />
          </Paper>
        </Box>

        <Paper
          sx={{
            width: "100%",
            p: 1,

            height: { xl: "192px", lg: "192px", md: "192px" },
            flexGrow: { xs: 1 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              sx={{
                color: "#9AE7F7",
                backgroundColor: "#24445C",
              }}
            >
              <FolderCopyIcon />
            </IconButton>

            <IconButton
              sx={{
                color: "#9AE7F7",
                backgroundColor: "#24445C",
              }}
            >
              <FolderCopyIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: { xs: "wrap", sm: "wrap", lg: "nowrap" },
            }}
          >
            <div>
              <h1
                style={{
                  color: "#C5C5D5",
                  fontWeight: "bold",

                  fontSize: "18px",
                }}
              >
                Sales
              </h1>
              <h1
                style={{
                  color: "#C5C5D5",
                  fontWeight: "bold",

                  fontSize: "20px",
                }}
              >
                $4.598
              </h1>
              <h1
                style={{
                  color: "#C5C5D5",
                  fontWeight: "bold",

                  fontSize: "15px",
                }}
              >
                25.8
              </h1>
            </div>
            <LineCharts width={"85%"} height={"140px"} colore={"#ffab00"} />
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Rightside;
