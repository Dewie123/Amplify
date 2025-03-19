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

import EmployeeSubmitTimeSwapRequestView from "./pages/EmployeeSubmitTimeSwapRequestView";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import BOReportIssuesViewUpdateDetails from "./pages/BOReportIssuesViewUpdateDetails";
import BODepartmentRolesViewMCRequestsViewDetails from "./pages/BODepartmentRolesViewMCRequestsViewDetails";
import EditEmployeeDetail from "./pages/EditEmployeeDetail";
import BODepartmentRolesLeaveView from "./pages/BODepartmentRolesLeaveView";
import BODepartmentRolesMCView from "./pages/BODepartmentRolesMCView";
import BODepartmentRolesViewLeaveRequestsViewDetails from "./pages/BODepartmentRolesViewLeaveRequestsViewDetails";
import EmployeeViewTimeSwapRequestViewMain from "./pages/EmployeeViewTimeSwapRequestViewMain";
import Row from "./pages/SysAdReviewAndRating";
import SysRow from "./pages/SysAdFAQ";
import EmployeeViewReceivedTimeSwapRequestViewMain from "./pages/EmployeeViewReceivedTimeSwapRequestViewMain";
import EmployeeViewSubmittedTimeSwapRequestView from "./pages/EmployeeViewSubmittedTimeSwapRequestView";
import DemoVideo from "./pages/SysAdDemoVideo";
import EmployeeViewAttendance from "./pages/EmployeeViewAttendance";
import Dashboard from "./pages/SADashboard"
import UserManagement from "./pages/UserManagement"
import RegRequest from "./pages/RegRequest"


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
         {/* Route for Edit BOReportIssuesFormView page */}
         <Route path="/bo-report-issues-form-view" element={<BOReportIssuesViewSubmitAnIssue />} /> 
         {/* Route for Edit BOReportIssuesView page */}
         <Route path="/bo-report-issues-view" element={<BOReportIssuesView />} /> 
         {/* Route for Edit EmployeeSubmitTimeSwapRequestView page */}
         <Route path="/employee-submit-time-swap-request-view" element={<EmployeeSubmitTimeSwapRequestView />} />  
         {/* Route for Edit EmployeeDashboard page */}
         <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
         {/* Route for Edit BOReportIssuesFormUpdateDetails page */}
         <Route path="/bo-report-issues-form-update-details-view" element={<BOReportIssuesViewUpdateDetails />} />    
         {/* Route for Edit BODepartmentRolesViewMCRequestsViewDetails page */}
         <Route path="/bo-department-roles-view-mc-requests-view-details" element={<BODepartmentRolesViewMCRequestsViewDetails />} />   
         {/* Route for Edit BOEditEmployeeDetail page */}
         <Route path="/bo-edit-employee-detail" element={<EditEmployeeDetail />} />   
         {/* Route for Edit BODepartmentRolesLeaveView page */}
         <Route path="/bo-department-roles-leave-view" element={<BODepartmentRolesLeaveView />} /> 
         {/* Route for Edit BODepartmentRolesMCView page */}
         <Route path="/bo-department-roles-mc-view" element={<BODepartmentRolesMCView />} /> 
         {/* Route for Edit BODepartmentRolesLeaveView page */}
         <Route path="/bo-department-roles-view-leave-requests-view-details" element={<BODepartmentRolesViewLeaveRequestsViewDetails />} /> 
         {/* Route for Edit EmployeeMainViewTimeSwapRequest page */}
         <Route path="/employee-main-view-time-swap-request" element={<EmployeeViewTimeSwapRequestViewMain />} />
          {/* Route for SysAdReviewAndRating page*/}
          <Route path="/sys-review-rating" element={<Row/>} />    
          {/* Route for SysAdFAQ page*/}
          <Route path="/sys-faq" element={<SysRow/>} />
          {/* Route for Edit EmployeeViewReceivedTimeSwapRequest page */}
         <Route path="/employee-view-received-time-swap-request" element={<EmployeeViewReceivedTimeSwapRequestViewMain />} />
         {/* Route for Edit EmployeeViewSubmittedTimeSwapRequestView page */}
         <Route path="/employee-view-submitted-time-swap-request" element={<EmployeeViewSubmittedTimeSwapRequestView />} />
         {/* Route for SysAdDemoVideo page*/}
         <Route path="/sys-demo-vid" element={<DemoVideo/>} />   
         {/* Route for Employee ViewAttendance page*/}
         <Route path="/employee-view-attendance" element={<EmployeeViewAttendance/>} />
         {/* Route for SADashboard page*/}
         <Route path="/system-admin-dashboard" element={<Dashboard/>} />
         {/* Route for SARegRequest page*/}
         <Route path="/system-admin-registration-request" element={<RegRequest/>} />

         
         {/* Route for UserManagement page*/}
         <Route path="/sys-user-management" element={<UserManagement/>} />


      
      </Routes>
    </Router>
  );
}

export default App;
