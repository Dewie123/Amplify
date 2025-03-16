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
import BOScheduleView from "./pages/BOScheduleView";
import BOTeamAvailabilityView from "./pages/BOTeamAvaibilityView";
import BOReportIssuesViewSubmitAnIssue from "./pages/BOReportIssuesViewSubmitAnIssue";
import BOReportIssuesView from "./pages/BOReportIssuesView";
import EmployeeSendReceiveMessage from "./pages/EmployeeSendReceiveMessage";
import EmployeeSubmitTimeSwapRequestView from "./pages/EmployeeSubmitTimeSwapRequestView";
import EmployeeDashboard from "./pages/EmployeeDashboard";

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
         {/* Route for Edit BOScheduleView page */}
         <Route path="/bo-schedule-view" element={<BOScheduleView />} /> 
         {/* Route for Edit BOTeamAvailabilityView page */}
         <Route path="/bo-team-availability-view" element={<BOTeamAvailabilityView />} /> 
         {/* Route for Edit BOReportIssuesView page */}
         <Route path="/bo-report-issues-form-view" element={<BOReportIssuesViewSubmitAnIssue />} /> 
         {/* Route for Edit BOReportIssuesView page */}
         <Route path="/bo-report-issues-view" element={<BOReportIssuesView />} /> 
         {/* Route for Edit EmployeeSendReceiveMessage page */}
         <Route path="/employee-send-receive-message" element={<EmployeeSendReceiveMessage />} />
         {/* Route for Edit EmployeeSubmitTimeSwapRequestView page */}
         <Route path="/employee-submit-time-swap-request-view" element={<EmployeeSubmitTimeSwapRequestView />} />  
         {/* Route for Edit EmployeeDashboard page */}
         <Route path="/employee-dashboard" element={<EmployeeDashboard />} />  
      </Routes>
    </Router>
  );
}

export default App;
