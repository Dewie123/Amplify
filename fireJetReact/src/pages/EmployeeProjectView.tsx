import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import Row from "../components/Row2";
import "./EmployeeProjectView.css";

export default function EmployeeProjectView({ className = "" }: EmployeeProjectViewProps) {
  return (
    <div className={`${className} employee-project-view-wrapper`}>
      {/* Top navigation */}
      <div className="employee-project-view-nav-bar-system-admin">
        <LogoTransparent className="employee-project-view-logo-transparent" />
        <div className="employee-project-view-welcome-text">
          Welcome Back, Employee
        </div>
        <Logout className="employee-project-view-logout" />
      </div>

      <div className="employee-project-view-container">
        {/* Left sidebar */}
        <div className="employee-project-view-bo-side-menu">
          <div>Dashboard</div>
          <div>Project View</div>
          <div>Chat</div>
          <div>Time Swap</div>
        </div>

        {/* Main content area */}
        <div className="employee-project-view-main-content">
          {/* Big header + buttons + date range */}
          <div className="employee-project-view-header">
            <h1 className="employee-project-view-emp-roster">EmpRoster</h1>

            <div className="employee-project-view-buttons">
              <button className="employee-project-view-button">View Attendance Record</button>
              <button className="employee-project-view-button">View Time Swap Request</button>
            </div>

            <div className="employee-project-view-date-container">
              <div className="employee-project-view-calendar-logo" />
              <div className="employee-project-view-date-range">
                Mar 17, 2025 - Mar 23, 2025
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="employee-project-view-table-header">
            <div className="employee-project-view-table-header-row">
              <div className="employee-project-view-table-header-cell">Team Members</div>
              <div className="employee-project-view-table-header-cell">Mon, 17</div>
              <div className="employee-project-view-table-header-cell">Tues, 18</div>
              <div className="employee-project-view-table-header-cell">Wed, 19</div>
              <div className="employee-project-view-table-header-cell">Thurs, 20</div>
              <div className="employee-project-view-table-header-cell">Fri, 21</div>
              <div className="employee-project-view-table-header-cell">Sat, 22</div>
              <div className="employee-project-view-table-header-cell">Sun, 23</div>
            </div>
          </div>

          {/* Table Body (each row is an employee) */}
          <div className="employee-project-view-table-body">
            <div className="employee-project-view-table-row">
              <div className="employee-project-view-name-cell">John Smith</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Supervisor</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Supervisor</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Supervisor</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Supervisor</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Supervisor</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Supervisor</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Supervisor</div>
            </div>
            
            {/* Repeat for each employee */}
            <div className="employee-project-view-table-row">
              <div className="employee-project-view-name-cell">Sally Kim</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Videographer</div>
              <div className="employee-project-view-shift-cell"></div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Videographer</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Videographer</div>
              <div className="employee-project-view-shift-cell">9am-5.30pm<br />Videographer</div>
              <div className="employee-project-view-shift-cell"></div>
              <div className="employee-project-view-shift-cell"></div>
            </div>

            {/* ... etc ... */}
          </div>
          <div className="employee-project-view-footer">
            © 2025 EmpRoster. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

interface EmployeeProjectViewProps {
  className?: string;
}
