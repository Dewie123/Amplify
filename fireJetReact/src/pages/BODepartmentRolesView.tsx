import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import Row from "../components/Row4";
import "./BODepartmentRolesView.css";

export default function BODepartmentRolesView({
  className = "",
}: BODepartmentRolesViewProps) {
  return (
    <div className={`${className} bo-department-roles-view-wrapper`}>
      <div className="bo-department-roles-view-bo-department-roles-view">
        <div className="bo-department-roles-view-nav-bar-system-admin">
          <LogoTransparent className="bo-department-roles-view-logo-transparent" />
          <div className="bo-department-roles-view-text">
            Welcome Back, Business Owner
          </div>
          <Logout className="bo-department-roles-view-logout" />
        </div>
        <div className="bo-department-roles-view-tt-rectangle-8boside-menu-mid-white-container" >
          <div className="bo-department-roles-view-t-rectangle-8boside-menu">
            <div className="bo-department-roles-view-report-issues">
              Report Issues
            </div>
            <div className="bo-department-roles-view-bo-side-menu">
              <div>Dashboard</div>
              <div>Schedule</div>
              <div>Department/Roles</div>
            </div>
          </div>
          <div className="bo-department-roles-view-mid-white-container">
            <div className="bo-department-roles-view-ttt-emproster-tadd-team-member" >
              <div className="bo-department-roles-view-tt-emproster-tadd-team-member" >
                <div className="bo-department-roles-view-t-emproster-tadd-team-member" >
                  <div className="bo-department-roles-view-emp-roster">
                    EmpRoster
                  </div>
                  <div className="bo-department-roles-view-t-add-team-member">
                    <div className="bo-department-roles-view-add-team-member">
                      <div>+</div>
                      <div className="bo-department-roles-view-add-team-member-1" >
                        Add Team Member
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bo-department-roles-view-table">
              <div className="bo-department-roles-view-row">
                <div className="bo-department-roles-view-cell">
                  <div className="bo-department-roles-view-text-1">
                    Name
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-1">
                  <div className="bo-department-roles-view-text-2">
                    Role
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-2">
                  <div className="bo-department-roles-view-text-3">
                    WorkingHours
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-3">
                  <div className="bo-department-roles-view-text-4">
                    Skillets
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-4">
                  <div className="bo-department-roles-view-text-5">
                    Status
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-5" />
              </div>
              <Row
                text="John Smith"
                text1="Supervisor"
                text2="Directing, Play write"
                container2="bo-department-roles-view-row-1-3-type"
               />
              <Row
                text="Sally Kim"
                container1="bo-department-roles-view-row-2-1-type"
                text1="Videographer"
                text2="Cinematography"
                container2="bo-department-roles-view-row-2-4-type"
               />
              <div className="bo-department-roles-view-row-3">
                <div className="bo-department-roles-view-cell-6">
                  <div className="bo-department-roles-view-text-6">
                    Janet Phua
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-7">
                  <div className="bo-department-roles-view-text-7">
                    Sound Tech
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-8">
                  <div className="bo-department-roles-view-text-8">
                    5.30pm-10pm
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-9">
                  <div className="bo-department-roles-view-text-9">
                    Audio Mixing
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-10">
                  <div className="bo-department-roles-view-text-10">
                    Active
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-11">
                  <div className="bo-department-roles-view-text-11">
                    Edit Details
                  </div>
                  <div className="bo-department-roles-view-t-view-mc-requests-button" >
                    <div className="bo-department-roles-view-view-mc-requests-button" >
                      <div className="bo-department-roles-view-text-12">
                        View MC Requests
                      </div>
                    </div>
                  </div>
                  <div className="bo-department-roles-view-text-13">
                    View Leave Requests
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bo-department-roles-view-t-2025emproster-all-rights-reserved" >
          <div className="bo-department-roles-view-emproster-all-rights-reserved" >
            <span>
              {"©  2025 "}
              <span className="bo-department-roles-view-text-14">
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

interface BODepartmentRolesViewProps {
  className?: string;
}
