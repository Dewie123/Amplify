import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import T from "./T";
import Line from "../components/assets/Line";
import DropdownDown from "../components/assets/DropdownDown";
//import "./BOEditTeamMemberView.css";
//import BOSideMenu from './BOSideMenu';
import AccountLogout from './AccountLogout';
import InputField from "./InputField"; 


export default function BOEditTeamMemberView({
  className = "",
}: BOAddTeamMemberViewProps) {
  return (
    <div className={`${className} bo-add-team-member-view-wrapper`}>
      <div className="bo-add-team-member-view-bo-add-team-member-view">
        <div className="bo-add-team-member-view-nav-bar-system-admin">
          <LogoTransparent className="bo-add-team-member-view-logo-transparent" />
          <div className="bo-add-team-member-view-text">
            Welcome Back, Business Owner
          </div>
          <AccountLogout className="bo-add-team-member-view-logout" />
        </div>
        <div className="bo-add-team-member-view-ttt-rectangle-8boside-menu-mid-white-container-right-sidebar" >
          <div className="bo-add-team-member-view-tt-rectangle-8boside-menu-mid-white-container" >
            <div className="bo-add-team-member-view-t-rectangle-8boside-menu">
              <div className="bo-add-team-member-view-bo-side-menu">
                <div><BOSideMenu /></div>
              </div>
            </div>
            <div className="bo-add-team-member-view-mid-white-container">
              <div className="bo-add-team-member-view-emp-roster">
                EmpRoster
              </div>
              <div className="bo-add-team-member-view-ttt-new-employee-details-edit-personnel-logo" >
                <div className="bo-add-team-member-view-tt-new-employee-details-edit-personnel-logo" >
                  <div className="bo-add-team-member-view-t-new-employee-details" >
                    <div className="bo-add-team-member-view-new-employee-details" >
                      Edit Employee Details
                    </div>
                  </div>
                  <img
                    className="bo-add-team-member-view-edit-personnel-logo"
                    src="/assets/edit-personnel-logo.png"
                    loading="lazy"
                   />
                </div>
              </div>
              <div className="grid-container">
                {/* 4 items in column 1 (left) */}
                <InputField label="Name" defaultValue="" />
                <InputField label="Address" defaultValue="" />
                <InputField label="Email" defaultValue="" />
                <InputField label="Wage" defaultValue="$ /hr" />

                {/* 4 items in column 2 (right) */}
                <InputField label="Role" defaultValue="" />
                <InputField
                  label="Working Hours"
                  timeDropdown
                  onChange={(selectedTime) => {
                    console.log("Selected time:", selectedTime);
                  }}
                />
                <InputField label="Skillsets" defaultValue="" />
                <InputField
                  label="Status"
                  statusDropdown
                  defaultValue="Active"
                  onChange={(val) => console.log("Status changed to:", val)}
                />
              </div>
              <div className="bo-add-team-member-view-update-profile">
                <div
                  className="bo-add-team-member-view-button"
                  onClick={() => alert("Successfully Updated!")}
                  style={{ cursor: "pointer" }} // Optional: shows it's clickable
                >
                  Update Profile
                </div>
              </div>
              <div className="bo-add-team-member-view-t-delete-profile">
                <div className="bo-add-team-member-view-delete-profile">
                  <div
                    className="bo-add-team-member-view-button-1"
                    onClick={() => alert("Account Deleted!")}
                    style={{ cursor: "pointer" }} // Optional: shows it's clickable
                  >
                    Delete Profile
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bo-add-team-member-view-t-2025emproster-all-rights-reserved" >
          <div className="bo-add-team-member-view-emproster-all-rights-reserved" >
            <span>
              {"©  2025 "}
              <span className="bo-add-team-member-view-text-1">
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

interface BOAddTeamMemberViewProps {
  className?: string;
}
