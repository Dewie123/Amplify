import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";  // Import Login component
import EmployeeProjectView from "./pages/EmployeeProjectView";  // Import EmployeeProjectView page
import RegistrationProps from "./pages/Registration";
import EditCompanyProfile from "./pages/EditCompanyProfile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (Login page) */}
        <Route path="/" element={<Login />} />  

        {/* Route for EmployeeProjectView page */}
        <Route path="/employee-projects" element={<EmployeeProjectView />} />  
         {/* Route for Guest Registration page */}
         <Route path="/guest-register" element={<RegistrationProps />} />  
         {/* Route for Edit Company Profile page */}
         <Route path="/edit-company-profile" element={<EditCompanyProfile />} />  
      </Routes>
    </Router>
  );
}

export default App;
