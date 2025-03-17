import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import TView from "./TView";
import TTUenCompanyNameSubsStatusSubsStatusTContainer from "./TTUenCompanyNameSubsStatusSubsStatusTContainer";
import "./EmployeeViewTimeSwapRequestViewMain.css";
import AccountLogout from './AccountLogout';
import EmployeeSideMenu from "./EmployeeSideMenu";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function EmployeeViewReceivedTimeSwapRequestViewMain({
  className = "",
}: EmployeeViewReceivedTimeSwapRequestViewMainProps) {
const navigate = useNavigate(); // Initialize useNavigate

  // Navigation handlers
  const handleViewAttendanceRecord = () => {
    navigate('/employee-view-attendance'); // Replace with your desired route
  };

  const handleViewAllTimeSwapRequests = () => {
    navigate('/employee-main-view-time-swap-request'); // Replace with your desired route
  };

  const handleSubmitTimeSwapRequest = () => {
    navigate('/employee-submit-time-swap-request-view'); // Replace with your desired route
  };

  const handleViewSubmittedRequests = () => {
    navigate('/employee-view-submitted-time-swap-request'); // Replace with your desired route
  };

  return (
    <div
      className={`${className} employee-view-time-swap-request-view-main-wrapper`}
    >
      <div className="employee-view-time-swap-request-view-main-employee-view-time-swap-request-view-main" >
        <div className="employee-view-time-swap-request-view-main-nav-bar-system-admin" >
          <LogoTransparent className="employee-view-time-swap-request-view-main-logo-transparent" />
          <div className="employee-view-time-swap-request-view-main-text">
            Welcome Back, Employee
          </div>
          <AccountLogout className="employee-view-time-swap-request-view-main-logout" />
        </div>
        <div className="employee-view-time-swap-request-view-main-t-employee-side-menu-mid-white-container" >
          <div className="employee-view-time-swap-request-view-main-employee-side-menu" >
            <div><EmployeeSideMenu /></div>
          </div>
          <div className="employee-view-time-swap-request-view-main-mid-white-container" >
            <div className="employee-view-time-swap-request-view-main-ttt-view-attendance-record-button-view-attendance-record-button-tview-time-swap-request-view-time-swap-request" >
              <div className="employee-view-time-swap-request-view-main-tt-view-attendance-record-button-view-attendance-record-button-tview-time-swap-request-view-time-swap-request" >
                {/* Replace TView with buttons */}
                <button
                  className="employee-view-time-swap-request-view-main-t-view-attendance-record-button-view-attendance-record-button-0-type"
                  onClick={handleViewAttendanceRecord}
                >
                  View Attendance Record
                </button>
                <button
                  className="employee-view-time-swap-request-view-main-t-view-attendance-record-button-view-attendance-record-button-1-type"
                  onClick={handleViewAllTimeSwapRequests}
                >
                  View All Time Swap Requests
                </button>
                <button
                  className="employee-view-time-swap-request-view-main-t-view-time-swap-request-view-time-swap-request-0-type"
                  onClick={handleSubmitTimeSwapRequest}
                >
                  Submit Time Swap Request
                </button>
                <button
                  className="employee-view-time-swap-request-view-main-t-view-time-swap-request-view-time-swap-request-1-type"
                  onClick={handleViewSubmittedRequests}
                >
                  View Submitted Requests
                </button>
              </div>
            </div>
            <div className="employee-view-time-swap-request-view-main-all-time-swap-requests" >
              All Time Swap Requests
            </div>
            <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EID1</td>
            <td>Sick</td>
            <td>12/2/2020</td>
            <td>1pm-2pm</td>
          </tr>
          <tr>
            <td>EID1</td>
            <td>Sick</td>
            <td>12/2/2020</td>
            <td>1pm-2pm</td>
          </tr>
          <tr>
            <td>EID1</td>
            <td>Sick</td>
            <td>12/2/2020</td>
            <td>1pm-2pm</td>
          </tr>
          <tr>
            <td>EID1</td>
            <td>Sick</td>
            <td>12/2/2020</td>
            <td>1pm-2pm</td>
          </tr>
        </tbody>
      </table>
    </div>
            
          </div>
        </div>
        <div className="employee-view-time-swap-request-view-main-t-2025emproster-all-rights-reserved" >
          <div className="employee-view-time-swap-request-view-main-emproster-all-rights-reserved" >
            <span>
              {"©  2025 "}
              <span className="employee-view-time-swap-request-view-main-text-5" >
                {"EmpRoster. "}
              </span>
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EmployeeViewReceivedTimeSwapRequestViewMainProps {
  className?: string;
}
