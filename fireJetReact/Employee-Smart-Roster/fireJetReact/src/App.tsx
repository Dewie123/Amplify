import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/Login";  // Import Login component
import EmployeeProjectView from "./pages/EmployeeProjectView";  // Import EmployeeProjectView page
import Navbar from "./components/NavBar/NavBar";
import SADash from "./pages/Dashboard/SADash";
import RegisRequests from "./pages/SA/RegisRequest/RegisRequests";
import UserMgts from "./pages/UserManagement/UserMgts";
import RegisReqDetail from "./components/sa/Registration_Request/RegisReqDetail"
import UserDetail from "./components/UserMgt/UserDetail";

import "./App.css";
import "../public/styles/common.css";

function App() {
  
  // const { user } = useAuth();
  // console.log(user);

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar />
          <div className="App-content" >
            <Routes>
              {/* Route for General pages */}
              <Route path="/" element={<Login />} />

              <Route
                path="/users-menagement"
                element={
                  <ProtectedRoute>
                    <UserMgts />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/user-detail"
                element={
                  <ProtectedRoute>
                    <UserDetail />
                  </ProtectedRoute>
                }
              />

              {/* Route for System Admin pages */}
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute>
                    <SADash />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/regis-request-detail"
                element={
                  <ProtectedRoute>
                    <RegisReqDetail />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/reg-list"
                element={
                  <ProtectedRoute>
                    <RegisRequests />
                  </ProtectedRoute>
                }
              />

              {/* Route for Business Owner pages */}
              <Route
                path="/business-owner"
                element={
                  <ProtectedRoute>
                    <div>Business Owner</div>
                  </ProtectedRoute>
                }
              />

              {/* Route for Employee pages */}
              <Route
                path="/employee-dashboard"
                element={
                  <ProtectedRoute>
                    <div>Employee</div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employee-projects"
                element={
                  <ProtectedRoute>
                    <EmployeeProjectView />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;