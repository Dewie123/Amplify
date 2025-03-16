import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import Row from "../components/Row1";
import "./BOReportIssuesView.css";

export default function BOReportIssuesView({
  className = "",
}: BOReportIssuesProps) {
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
            
            <div className="bo-department-roles-view-bo-side-menu">
              <div>Report Issues</div>
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
                        Submit an issue
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
                    Reported Issue
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-1">
                  <div className="bo-department-roles-view-text-2">
                    Description
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-2">
                  <div className="bo-department-roles-view-text-3">
                    Status
                  </div>
                </div>
                
                <div className="bo-department-roles-view-cell-5" />
              </div>
              <Row
                text="Button not working"
                text1="Lorem ipsum dolor sit amet..."
                text2="Pending"
                container2="bo-department-roles-view-row-1-3-type"
               />
              <Row
                text="Slow response time"
                container1="bo-department-roles-view-row-2-1-type"
                text1="Lorem ipsum dolor sit amet..."
                text2="Pending"
                container2="bo-department-roles-view-row-2-4-type"
               />
              <div className="bo-department-roles-view-row-3">
                <div className="bo-department-roles-view-cell-6">
                  <div className="bo-department-roles-view-text-6">
                    New hire Andy not shown
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-7">
                  <div className="bo-department-roles-view-text-7">
                  </div>
                </div>
                <div className="bo-department-roles-view-cell-9">
                  <div className="bo-department-roles-view-text-9">
                    Resolved
                  </div>
                </div>
               
                <div className="bo-department-roles-view-cell-11">
                  <div className="bo-department-roles-view-t-view-mc-requests-button" >
                    <div className="bo-department-roles-view-view-mc-requests-button" >
                      <div className="bo-department-roles-view-text-12">
                        Update Details
                      </div>
                    </div>
                  </div>
                  <div className="bo-department-roles-view-text-13">
                    Resolve Issue
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

interface BOReportIssuesProps {
  className?: string;
}
