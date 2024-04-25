import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "../pages/Rootlayout/Rootlayout";
import Home from "../pages/HomePage/Home";
import Labs from "../pages/Labs/Labs";
import Departments from "../pages/Departments/Departments";
import Patients from "../pages/Patients/Patients";
import Rooms from "../pages/Rooms/Rooms";
import Doctors from "../pages/Users/Doctors/Doctors";
import Nursing from "../pages/Users/Nurse/Nursing";
import LabManager from "../pages/Users/Lab Manager/LabManager";
import RoomManager from "../pages/Users/Room Manager/RoomManager";
import Roompatients from "../pages/Rooms/RoomPatients/Roompatients";
import RoomTools from "../pages/Rooms/RoomTools/RoomTools";
import Labpatients from "../pages/Labs/LabPatients/Labpatients";
import LabTools from "../pages/Labs/LabTools/LabTools";
import Pharmacy from "../pages/Pharmacy/Pharmacy";
import Tools from "../pages/All Tools/Tools";
import Supliers from "../pages/Supliers/Supliers";
import InventoryPharmacy from "../pages/Inventory/Inventory pharmacy/InventoryPharmacy";
import InventoryTool from "../pages/Inventory/Inventory Tool/InventoryTool";
import Login from "../pages/login/Login";
import ProtectedRoute from "../auth/Protectedrout";
// import { useSelector } from "react-redux";

const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route
          index
          element={
            <ProtectedRoute
              isAllowed={
                userData && userData.data && userData.data.access_token
              }
              redirectPath="/login"
              data={userData}
            >
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="users">
          <Route
            path="doctors"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <Doctors />
              </ProtectedRoute>
            }
          />
          <Route
            path="nursing"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <Nursing />
              </ProtectedRoute>
            }
          />
          <Route
            path="labmanagers"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <LabManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="roommanagers"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <RoomManager />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="rooms">
          <Route
            index
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <Rooms />
              </ProtectedRoute>
            }
          />
          <Route
            path="roompatients"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <Roompatients />
              </ProtectedRoute>
            }
          />
          <Route
            path="roomtools"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <RoomTools />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="labs">
          <Route
            index
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <Labs />
              </ProtectedRoute>
            }
          />
          <Route
            path="lab-patients"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <Labpatients />
              </ProtectedRoute>
            }
          />
          <Route
            path="lab-tools"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <LabTools />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="departments"
          element={
            <ProtectedRoute
              isAllowed={
                userData && userData.data && userData.data.access_token
              }
              redirectPath="/login"
              data={userData}
            >
              <Departments />
            </ProtectedRoute>
          }
        />
        <Route
          path="patients"
          element={
            <ProtectedRoute
              isAllowed={
                userData && userData.data && userData.data.access_token
              }
              redirectPath="/login"
              data={userData}
            >
              <Patients />
            </ProtectedRoute>
          }
        />
        <Route
          path="pharmacy"
          element={
            <ProtectedRoute
              isAllowed={
                userData && userData.data && userData.data.access_token
              }
              redirectPath="/login"
              data={userData}
            >
              <Pharmacy />
            </ProtectedRoute>
          }
        />
        <Route
          path="tools"
          element={
            <ProtectedRoute
              isAllowed={
                userData && userData.data && userData.data.access_token
              }
              redirectPath="/login"
              data={userData}
            >
              <Tools />
            </ProtectedRoute>
          }
        />
        <Route
          path="supliers"
          element={
            <ProtectedRoute
              isAllowed={
                userData && userData.data && userData.data.access_token
              }
              redirectPath="/login"
              data={userData}
            >
              <Supliers />
            </ProtectedRoute>
          }
        />
        <Route path="inventory">
          <Route
            path="pharmacy"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <InventoryPharmacy />
              </ProtectedRoute>
            }
          />
          <Route
            path="tool"
            element={
              <ProtectedRoute
                isAllowed={
                  userData && userData.data && userData.data.access_token
                }
                redirectPath="/login"
                data={userData}
              >
                <InventoryTool />
              </ProtectedRoute>
            }
          />
        </Route>
      </Route>
      <Route
        path="login"
        element={
          <ProtectedRoute
            isAllowed={
              !userData || !userData.data || !userData.data.access_token
            }
            redirectPath="/"
            data={userData}
          >
            <Login />
          </ProtectedRoute>
        }
      />
    </>
  )
);

export default router;
