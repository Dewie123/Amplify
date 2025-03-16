import Logout from "../components/assets/Logout";
import LogoTransparent from "../components/assets/LogoTransparent";
import T from "./T1";
import Line from "../components/assets/Line";
import DropdownDown from "../components/assets/DropdownDown";
import "./EditEmployeeDetail.css";

export default function EditEmployeeDetail({
  className = "",
}: EditEmployeeDetailProps) 


{

    return (
    <div className={`${className} edit-employee-detail-wrapper`}>
      <div className="edit-employee-detail-edit-employee-detail">

      <div className="bo-schedule-view-nav-bar-system-admin">
        <LogoTransparent className="bo-schedule-view-logo-transparent" />
        <div className="bo-schedule-view-text">
          Welcome Back, Employee
        </div>
        <Logout className="bo-schedule-view-logout" />
      </div>

        {/* <div className="edit-employee-detail-nav-bar-system-admin">
          <Logout className="edit-employee-detail-logout" />
          <LogoTransparent className="edit-employee-detail-logo-transparent" />
          <div className="edit-employee-detail-text">
            <p>Welcome Back, Employee</p>
          </div>
        </div> */}
        <div className="edit-employee-detail-t-employee-side-menu-mid-white-container-right-sidebar" >
          <div className="edit-employee-detail-employee-side-menu">
            <div>Dashboard</div>
            <div>Project View</div>
            <div>Chat</div>
            <div>Time Swap</div>
          </div>
          <div className="edit-employee-detail-mid-white-container">
            <div className="edit-employee-detail-emp-roster">
              EmpRoster
            </div>
            <div className="edit-employee-detail-ttt-edit-profile-edit-personnel-logo" >
              <div className="edit-employee-detail-tt-edit-profile-edit-personnel-logo" >
                <div className="edit-employee-detail-edit-profile">
                  Edit Profile
                </div>
                <div className="edit-employee-detail-edit-personnel-logo">
                  <div className="edit-employee-detail-background" />
                  <div className="edit-employee-detail-background-1" />
                </div>
              </div>
            </div>
            <div className="edit-employee-detail-tt-form-contact-form-contact" >
              <div className="edit-employee-detail-t-form-contact-form-contact" >
                <div className="edit-employee-detail-form-contact">
                  <div className="edit-employee-detail-ttt-name-input-taddress-input-temail-input" >
                    <div className="edit-employee-detail-tt-name-input-taddress-input-temail-input" >
                      
                      <T text="Name" text1="Marry Jane" />
                      <T
                        text="Address"
                        text1="12 Bukit Gombak Ave 3 #09-09"
                       />
                      <T text="Email" text1="MarryJane@gmail.com" />
                    </div>
                  </div>
                </div>
                <div className="edit-employee-detail-form-contact-1">
                  <div className="edit-employee-detail-role">Role</div>
                  <div className="edit-employee-detail-input">
                    <div className="edit-employee-detail-singer">
                      Singer
                    </div>
                  </div>
                  <div className="edit-employee-detail-t-working-hours">
                    <div className="edit-employee-detail-working-hours">
                      Working Hours
                    </div>
                  </div>
                  <div className="edit-employee-detail-input-1">
                    <div className="edit-employee-detail-am-530pm">
                      9am-5.30pm
                    </div>
                  </div>
                  <div className="edit-employee-detail-t-skillsets">
                    <div className="edit-employee-detail-skillsets">
                      Skillsets
                    </div>
                  </div>
                  <div className="edit-employee-detail-input-2">
                    <div className="edit-employee-detail-vocalist">
                      Vocalist
                    </div>
                  </div>
                  <div className="edit-employee-detail-t-status">
                    <div className="edit-employee-detail-status">
                      Status
                    </div>
                  </div>
                  <div className="edit-employee-detail-t-filter-account-status" >
                    <div className="edit-employee-detail-filter-account-status" >
                      <div className="edit-employee-detail-activated">
                      <select name="cars" id="cars">
                      <option value="Active">Active</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                        
                      </div>
                      <Line className="edit-employee-detail-line" />
                      <DropdownDown className="edit-employee-detail-dropdown-down" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-employee-detail-update-profile">
              <div className="edit-employee-detail-button">
                Update Profile
              </div>
            </div>
            <div className="edit-employee-detail-t-delete-profile">
              <div className="edit-employee-detail-delete-profile">
                <div className="edit-employee-detail-button-1">
                  Delete Profile
                </div>
              </div>
            </div>
          </div>
          {/* <div className="edit-employee-detail-right-sidebar" /> */}
        </div>
        <div className="edit-employee-detail-t-2025emproster-all-rights-reserved" >
          <div className="edit-employee-detail-emproster-all-rights-reserved">
            <span>
              {"©  2025 "}
              <span className="edit-employee-detail-text-1">
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

interface EditEmployeeDetailProps {
  className?: string;
}
