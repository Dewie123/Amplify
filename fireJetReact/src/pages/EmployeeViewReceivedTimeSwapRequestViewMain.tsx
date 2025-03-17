import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import TView from "./TView";
import TTUenCompanyNameSubsStatusSubsStatusTContainer from "./TTUenCompanyNameSubsStatusSubsStatusTContainer";
import "./EmployeeViewTimeSwapRequestViewMain.css";
import AccountLogout from './AccountLogout';

export default function EmployeeViewReceivedTimeSwapRequestViewMain({
  className = "",
}: EmployeeViewReceivedTimeSwapRequestViewMainProps) {
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
            <div>Dashboard</div>
            <div>Project View</div>
            <div>Chat</div>
            <div>Time Swap</div>
          </div>
          <div className="employee-view-time-swap-request-view-main-mid-white-container" >
            <div className="employee-view-time-swap-request-view-main-ttt-view-attendance-record-button-view-attendance-record-button-tview-time-swap-request-view-time-swap-request" >
              <div className="employee-view-time-swap-request-view-main-tt-view-attendance-record-button-view-attendance-record-button-tview-time-swap-request-view-time-swap-request" >
                <TView
                  container1="employee-view-time-swap-request-view-main-t-view-attendance-record-button-view-attendance-record-button-0-type"
                  container2="employee-view-time-swap-request-view-main-t-view-attendance-record-button-view-attendance-record-button-1-type"
                  text="View Attendance Record"
                  text1="View All Time Swap Request"
                 />
                <TView
                  container1="employee-view-time-swap-request-view-main-t-view-time-swap-request-view-time-swap-request-0-type"
                  text="Submit Time Swap Request"
                  text1="View Submitted Requests"
                 />
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
