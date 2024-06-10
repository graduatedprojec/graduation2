import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
// import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
// import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
// import VaccinesIcon from '@mui/icons-material/Vaccines';
// import MasksIcon from '@mui/icons-material/Masks';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
export const Sidedata = [
  {
    path: "/",
    title: "Dashboard",
    icon: <InboxIcon />,
    nestedItems: [],
  },
  {
    path: "",
    title: "Users",
    icon: <MailIcon />,
    nestedItems: [
      {
        path: "/users/doctors",
        title: "Doctors",
        icon: <InboxIcon />,
      },
      {
        path: "/users/nursing",
        title: "Nursing",
        icon: <InboxIcon />,
      },
      {
        path: "/users/labmanagers",
        title: "Lab Manager",
        icon: <InboxIcon />,
      },
    ],
  },
  {
    path: "/rooms",
    title: "Rooms",
    icon: <InboxIcon />,
    nestedItems: [],
  },
  {
    path: "/labs",
    title: "Labs",
    icon: <MailIcon />,
    nestedItems: [],
  },
  {
    path: "/departments",
    title: "Departments",
    icon: <InboxIcon />,
    nestedItems: [],
  },
  {
    path: "/patients",
    title: "Patients",
    icon: <InboxIcon />,
    nestedItems: [],
  },
  {
    path: "/tools",
    title: "All Tools",
    icon: <InboxIcon />,
    nestedItems: [],
  },
  {
    path: "/pharmacy",
    title: "Pharmacy",
    icon: <InboxIcon />,
    nestedItems: [],
  },
  {
    path: "/supliers",
    title: "Supliers",
    icon: <InboxIcon />,
    nestedItems: [],
  },
  {
    path: "",
    title: "Inventory",
    icon: <InboxIcon />,
    nestedItems: [
      {
        path: "/inventory/tool",
        title: "Tool ",
        icon: <InboxIcon />,
        nestedItems: [],
      },
    ],
  },
];
