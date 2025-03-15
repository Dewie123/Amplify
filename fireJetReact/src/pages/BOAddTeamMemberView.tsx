import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import T from "./T";
import Line from "../components/assets/Line";
import DropdownDown from "../components/assets/DropdownDown";
import "./BOAddTeamMemberView.css";

export default function BOAddTeamMemberView({
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
          <Logout className="bo-add-team-member-view-logout" />
        </div>
        <div className="bo-add-team-member-view-ttt-rectangle-8boside-menu-mid-white-container-right-sidebar" >
          <div className="bo-add-team-member-view-tt-rectangle-8boside-menu-mid-white-container" >
            <div className="bo-add-team-member-view-t-rectangle-8boside-menu">
              <div className="bo-add-team-member-view-report-issues">
                Report Issues
              </div>
              <div className="bo-add-team-member-view-bo-side-menu">
                <div>Dashboard</div>
                <div>Schedule</div>
                <div>Department/Roles</div>
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
                      New Employee Details
                    </div>
                  </div>
                  <img
                    className="bo-add-team-member-view-edit-personnel-logo"
                    src="/assets/edit-personnel-logo.png"
                    loading="lazy"
                   />
                </div>
              </div>
              <div className="bo-add-team-member-view-tt-form-contact-form-contact" >
                <div className="bo-add-team-member-view-t-form-contact-form-contact" >
                  <div className="bo-add-team-member-view-form-contact">
                    <div className="bo-add-team-member-view-ttt-name-input-taddress-input-temail-input-twage-input" >
                      <div className="bo-add-team-member-view-tt-name-input-taddress-input-temail-input-twage-input" >
                        <T text="Name" text1="Marry Jane" />
                        <T
                          text="Address"
                          text1="12 Bukit Gombak Ave 3 #09-09"
                         />
                        <T text="Email" text1="MarryJane@gmail.com" />
                        <T text="Wage" text1="$20/hr" />
                      </div>
                    </div>
                  </div>
                  <div className="bo-add-team-member-view-form-contact-1">
                    <div className="bo-add-team-member-view-role">
                      Role
                    </div>
                    <div className="bo-add-team-member-view-input">
                      <div className="bo-add-team-member-view-singer">
                        Singer
                      </div>
                    </div>
                    <div className="bo-add-team-member-view-t-working-hours">
                      <div className="bo-add-team-member-view-working-hours">
                        Working Hours
                      </div>
                    </div>
                    <div className="bo-add-team-member-view-input-1">
                      <div className="bo-add-team-member-view-am-530pm">
                        9am-5.30pm
                      </div>
                    </div>
                    <div className="bo-add-team-member-view-t-skillsets">
                      <div className="bo-add-team-member-view-skillsets">
                        Skillsets
                      </div>
                    </div>
                    <div className="bo-add-team-member-view-input-2">
                      <div className="bo-add-team-member-view-vocalist">
                        Vocalist
                      </div>
                    </div>
                    <div className="bo-add-team-member-view-t-status">
                      <div className="bo-add-team-member-view-status">
                        Status
                      </div>
                    </div>
                    <div className="bo-add-team-member-view-t-filter-account-status" >
                      <div className="bo-add-team-member-view-filter-account-status" >
                        <div className="bo-add-team-member-view-activated">
                          Active
                        </div>
                        <Line className="bo-add-team-member-view-line" />
                        <DropdownDown className="bo-add-team-member-view-dropdown-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bo-add-team-member-view-update-profile">
                <div className="bo-add-team-member-view-button">
                  Create Profile
                </div>
              </div>
              <div className="bo-add-team-member-view-t-delete-profile">
                <div className="bo-add-team-member-view-delete-profile">
                  <div className="bo-add-team-member-view-button-1">
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
