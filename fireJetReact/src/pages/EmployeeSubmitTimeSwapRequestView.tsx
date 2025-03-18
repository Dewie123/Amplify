import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import ChevronDown from "../components/assets/ChevronDown";
import Drag from "../components/assets/Drag";
import "./EmployeeSubmitTimeSwapRequestView.css";
import AccountLogout from './AccountLogout';
import EmployeeSideMenu from "./EmployeeSideMenu";
import { useNavigate } from 'react-router-dom';
import InputField from "./InputField";

export default function EmployeeSubmitTimeSwapRequestView({
  className = "",
}: EmployeeSubmitTimeSwapRequestViewProps) {
  const navigate = useNavigate();
  const handleCancelClick = () => {
    // Redirect to the desired route (e.g., "/report-issues")
    navigate('/employee-main-view-time-swap-request');
  };
  return (
    <div
      className={`${className} employee-submit-time-swap-request-view-wrapper`}
    >
      <div className="employee-submit-time-swap-request-view-employee-submit-time-swap-request-view" >
        <div className="employee-submit-time-swap-request-view-nav-bar-system-admin" >
          <LogoTransparent className="employee-submit-time-swap-request-view-logo-transparent" />
          <div className="employee-submit-time-swap-request-view-text">
            Welcome Back, Employee
          </div>
          <AccountLogout className="employee-submit-time-swap-request-view-logout" />
        </div>
        <div className="employee-submit-time-swap-request-view-t-employee-side-menu-tmid-white-container" >
          <div className="employee-submit-time-swap-request-view-employee-side-menu" >
            <div><EmployeeSideMenu /></div>
          </div>
          <div className="employee-submit-time-swap-request-view-mid-white-container" >
            <div className="employee-submit-time-swap-request-view-emp-roster" >
              EmpRoster
            </div>
            <div className="employee-submit-time-swap-request-view-t-form-contact" >
              <div className="employee-submit-time-swap-request-view-form-contact" >
                <div className="employee-submit-time-swap-request-view-t-time-swap-request-form" >
                  <div className="employee-submit-time-swap-request-view-time-swap-request-form" >
                    Time Swap Request Form
                  </div>
                </div>
                <div className="employee-submit-time-swap-request-view-tt-date-input-ttime-select-tlabel-textarea" >
                  <div className="employee-submit-time-swap-request-view-t-date-input" >
                    <div className="employee-submit-time-swap-request-view-date" >
                    <InputField 
                        label="Date" 
                        defaultValue="" 
                      />
                    </div>
                  </div>
                  <div className="employee-submit-time-swap-request-view-t-time-select" >
                    <div className="employee-submit-time-swap-request-view-time" >
                      Time
                    </div>
                    <div className="employee-submit-time-swap-request-view-select" >
                      <div className="employee-submit-time-swap-request-view-t-12pm-2pm-chevron-down" >
                        <div className="employee-submit-time-swap-request-view-pm-2pm" >
                          12pm-2pm
                        </div>
                        <ChevronDown className="employee-submit-time-swap-request-view-chevron-down" />
                      </div>
                    </div>
                  </div>
                  <div className="employee-submit-time-swap-request-view-t-label-textarea" >
                    <div className="employee-submit-time-swap-request-view-label" >
                      Description
                    </div>
                    <div className="employee-submit-time-swap-request-view-textarea" >
                      <div className="employee-submit-time-swap-request-view-value" >
                        Mother is sick, please swap
                      </div>
                      <Drag className="employee-submit-time-swap-request-view-drag" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="employee-submit-time-swap-request-view-t-submit">
              <div className="employee-submit-time-swap-request-view-submit">
                <button className="employee-submit-time-swap-request-view-button" onClick={()=>alert("Submitted!")}>
                  Submit
                </button>
              </div>
            </div>
            <div className="employee-submit-time-swap-request-view-delete-profile" >
              <div className="employee-submit-time-swap-request-view-button-1" 
                onClick={handleCancelClick}
                style={{ cursor: 'pointer' }} >
                  Cancel
              </div>
            </div>
          </div>
        </div>
        <div className="employee-submit-time-swap-request-view-t-2025emproster-all-rights-reserved" >
          <div className="employee-submit-time-swap-request-view-emproster-all-rights-reserved" >
            <span>
              {"©  2025 "}
              <span className="employee-submit-time-swap-request-view-text-1">
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

interface EmployeeSubmitTimeSwapRequestViewProps {
  className?: string;
}
