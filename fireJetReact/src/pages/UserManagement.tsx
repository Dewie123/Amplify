import LogoNavbar from "../components/assets/LogoNavbar";
import Logout from "../components/assets/Logout";
import T from "./T";
import UserDetail from "../components/assets/UserDetail5";
import TUenCompanyNameSubsStatusSAViewUserDetailsRowGap from "./TUenCompanyNameSubsStatusSAViewUserDetailsRowGap";
import "./UserManagement.css";
import SysAdminSideMenu from './SysAdminSideMenu';

export default function UserManagement({
  className = "",
}: UserManagementProps) {
  return (
    <div className={`${className} user-management-user-management`}>
      <div className="user-management-nav-bar-system-admin">
        <div className="user-management-tt-logo-navbar-welcome-back-system-admin" >
          <LogoNavbar className="user-management-logo-navbar" />
          <div className="user-management-welcome-back-system-admin">
            Welcome Back, System Admin
          </div>
        </div>
        <Logout className="user-management-logout" />
      </div>
      <div className="user-management-t-side-menu-tttusers-management-tttttsubscription-status-filter-subs-status-taccount-status-filter-account-status-tuen-company-name-rectangle-19tcell-header-cell-header-cell-header-cell-header-gap-cell-header-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap" >
        <div className="user-management-side-menu">
          <div><SysAdminSideMenu /></div>
        </div>
        <div className="user-management-ttt-users-management-tttttsubscription-status-filter-subs-status-taccount-status-filter-account-status-tuen-company-name-rectangle-19tcell-header-cell-header-cell-header-cell-header-gap-cell-header-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap" >
          <div className="user-management-tt-users-management-tttttsubscription-status-filter-subs-status-taccount-status-filter-account-status-tuen-company-name-rectangle-19tcell-header-cell-header-cell-header-cell-header-gap-cell-header-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap-tuen-company-name-subs-status-saview-user-details-row-gap" >
            <div className="user-management-t-users-management">
              <div className="user-management-users-management">
                Users management
              </div>
            </div>
            <div className="user-management-ttttt-subscription-status-filter-subs-status-taccount-status-filter-account-status-tuen-company-name-rectangle" >
              <div className="user-management-tttt-subscription-status-filter-subs-status-taccount-status-filter-account-status-tuen-company-name-rectangle" >
                <div className="user-management-tt-subscription-status-filter-subs-status-taccount-status-filter-account-status" >
                  <T text="Subscription Status" text1="Subscribed" />
                  <T text="Account Status" text1="Activated" />
                </div>
                <div className="user-management-t-uen-company-name-rectangle">
                  <div className="user-management-uen-company-name">
                    UEN / Company Name
                  </div>
                  <div className="user-management-rectangle">
                    <div className="user-management-search-uen-company-name">
                      Search UEN / Company Name
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <table className="employee-table">
                  <thead>
                    <tr>
                      <th>EmployeeID</th>
                      <th>Description</th>
                      <th>Date</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EID1</td>
                      <td>Sick</td>
                      <td>12/2/2020</td>

                    </tr>
                    <tr>
                      <td>EID1</td>
                      <td>Sick</td>
                      <td>12/2/2020</td>

                    </tr>
                    <tr>
                      <td>EID1</td>
                      <td>Sick</td>
                      <td>12/2/2020</td>

                    </tr>
                    <tr>
                      <td>EID1</td>
                      <td>Sick</td>
                      <td>12/2/2020</td>

                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
    </div>




  );
}

interface UserManagementProps {
  className?: string;
}
