import LogoNavbar from "../components/assets/LogoNavbar";
import Logout from "../components/assets/Logout";
import TRegIdUenCompanyNameSAViewUserDetailsRowGap from "./TRegIdUenCompanyNameSAViewUserDetailsRowGap";
import "./RegRequest.css";

export default function RegRequest({ className = "" }: RegRequestProps) {
  return (
    <div className={`${className} reg-request-reg-request`}>
      <div className="reg-request-nav-bar-system-admin">
        <div className="reg-request-tt-logo-navbar-welcome-back-system-admin">
          <LogoNavbar className="reg-request-logo-navbar" />
          <div className="reg-request-welcome-back-system-admin">
            Welcome Back, System Admin
          </div>
        </div>
        <Logout className="reg-request-logout" />
      </div>
      <div className="reg-request-t-side-menu-tttregistration-list-tregistration-id-trectangle-19ttable-reg-list" >
        <div className="reg-request-side-menu">
          <div>USER</div>
          <div>ISSUES LOG</div>
          <div className="reg-request-landing-page-management">
            <p>LANDING PAGE MANAGEMENT</p>
          </div>
        </div>
        <div className="reg-request-ttt-registration-list-tregistration-id-trectangle-19ttable-reg-list" >
          <div className="reg-request-tt-registration-list-tregistration-id-trectangle-19ttable-reg-list" >
            <div className="reg-request-t-registration-list">
              <div className="reg-request-registration-list">
                Registration list
              </div>
            </div>
            <div className="reg-request-registration-id">
              Registration ID
            </div>
            <div className="reg-request-t-rectangle">
              <div className="reg-request-rectangle">
                <div className="reg-request-search-registration-id">
                  Search Registration ID
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
      </div>
    
  );
}

interface RegRequestProps {
  className?: string;
}
