import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";  // Import Login component
import EmployeeProjectView from "./pages/EmployeeProjectView";  // Import EmployeeProjectView page
import RegistrationProps from "./pages/Registration";
import EditCompanyProfile from "./pages/EditCompanyProfile";
import BOAddTeamMemberView from "./pages/BOAddTeamMemberView";
import BOEditTeamMemberView from "./pages/BOEditTeamMemberView";
import BODepartmentRolesView from "./pages/BODepartmentRolesView";
import BODashboardView from "./pages/BODashboardView";
import BOReportIssuesView from "./pages/BOReportIssuesView";


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
         {/* Route for Edit BOAddTeamMemberView page */}
         <Route path="/bo-add-team-member-view" element={<BOAddTeamMemberView />} /> 
         {/* Route for Edit BOEditTeamMemberView page */}
         <Route path="/bo-edit-team-member-view" element={<BOEditTeamMemberView />} /> 
         {/* Route for Edit BODepartmentRolesView page */}
         <Route path="/bo-department-roles-view" element={<BODepartmentRolesView />} /> 
         {/* Route for Edit BODashboardView page */}
         <Route path="/bo-dashboard-view" element={<BODashboardView />} /> 
         {/* Route for Edit BOReportIssuesView page */}
         <Route path="/bo-report-issues-view" element={<BOReportIssuesView />} /> 
      </Routes>
    </Router>
  );
}

export default App;
