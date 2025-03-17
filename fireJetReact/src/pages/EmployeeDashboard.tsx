import LogoNavbar from "../components/assets/LogoNavbar";
import Logout from "../components/assets/Logout";
import T from "./Temployeedashboard";
import UserDetail from "../components/assets/UserDetail";
import UserDetail1 from "../components/assets/UserDetail1";
import UserDetail2 from "../components/assets/UserDetail2";
import "./EmployeeDashboard.css";
import EmployeeSideMenu from "./EmployeeSideMenu";


export default function EmployeeDashboard({
  className = "",
}: EmployeeDashboardProps) {
  return (
    <div className={`${className} employee-dashboard-wrapper`}>
      <div className="employee-dashboard-employee-dashboard">
        <div className="employee-dashboard-nav-bar-system-admin">
          <div className="employee-dashboard-tt-logo-navbar-welcome-back-system-admin" >
            <LogoNavbar className="employee-dashboard-logo-navbar" />
            <div className="employee-dashboard-welcome-back-system-admin">
              Welcome Back, Employee
            </div>
          </div>
          <Logout className="employee-dashboard-logout" />
        </div>
        <div className="employee-dashboard-t-employee-side-menu-main-components" >
          <div className="employee-dashboard-employee-side-menu">
            <div><EmployeeSideMenu /></div>
          </div>
          <div className="employee-dashboard-main-components">
            <div className="employee-dashboard-t-edit-personnel-logo">
              <div className="employee-dashboard-edit-personnel-logo">
                <div className="employee-dashboard-background" />
                <div className="employee-dashboard-background-1" />
              </div>
            </div>
            <T
              container2="employee-dashboard-tt-pending-swap-requests-no-of-request-0-type"
              text="Pending swap requests"
              text1="3"
             />
            <div className="employee-dashboard-t-card">
              <div className="employee-dashboard-card">
                <div className="employee-dashboard-t-cell-tuser-detail">
                  <div className="employee-dashboard-cell">
                    <div className="employee-dashboard-text">John</div>
                  </div>
                  <div className="employee-dashboard-t-user-detail">
                    <UserDetail className="employee-dashboard-user-detail" />
                  </div>
                </div>
                <div className="employee-dashboard-tt-text-text-ttext-text">
                  <div className="employee-dashboard-t-text-text">
                    <div>Date:</div>
                    <div>Time:</div>
                  </div>
                  <div className="employee-dashboard-t-text-text-1">
                    <div>25/3/2025</div>
                    <div>12pm-2pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="employee-dashboard-card-1">
              <div className="employee-dashboard-t-cell-tuser-detail-1">
                <div className="employee-dashboard-cell-1">
                  <div className="employee-dashboard-text-5">Jason</div>
                </div>
                <div className="employee-dashboard-t-user-detail-1">
                  <UserDetail1 className="employee-dashboard-user-detail-1" />
                </div>
              </div>
              <div className="employee-dashboard-tt-text-text-ttext-text-1">
                <div className="employee-dashboard-t-text-text-2">
                  <div>Date:</div>
                  <div>Time:</div>
                </div>
                <div className="employee-dashboard-t-text-text-3">
                  <div>21/2/2024</div>
                  <div>3pm-5pm</div>
                </div>
              </div>
            </div>
            <div className="employee-dashboard-card-2">
              <div className="employee-dashboard-t-cell-tuser-detail-2">
                <div className="employee-dashboard-cell-2">
                  <div className="employee-dashboard-text-10">Tim</div>
                </div>
                <div className="employee-dashboard-t-user-detail-2">
                  <UserDetail2 className="employee-dashboard-user-detail-2" />
                </div>
              </div>
              <div className="employee-dashboard-tt-text-text-ttext-text-2">
                <div className="employee-dashboard-t-text-text-4">
                  <div>Date:</div>
                  <div>Time:</div>
                </div>
                <div className="employee-dashboard-t-text-text-5">
                  <div>22/1/2025</div>
                  <div>7pm-8pm</div>
                </div>
              </div>
            </div>
            <T
              container1="employee-dashboard-t-reported-issues-0-type"
              container2="employee-dashboard-t-reported-issues-1-type"
              text="Tasks for today"
              text1="0"
             />
          </div>
        </div>
        <div className="employee-dashboard-t-2025emproster-all-rights-reserved" >
          <div className="employee-dashboard-emproster-all-rights-reserved">
            <span>
              {"©  2025 "}
              <span className="employee-dashboard-text-15">
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

interface EmployeeDashboardProps {
  className?: string;
}
