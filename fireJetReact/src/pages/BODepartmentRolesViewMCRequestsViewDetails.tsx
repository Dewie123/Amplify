import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import Upload from "../components/assets/Upload";
import "./BODepartmentRolesViewMCRequestsViewDetails.css";

export default function BOBODepartmentRolesViewMCRequestsViewDetails({
  className = "",
}: BODepartmentRolesViewMCRequestsViewDetailsProps) {
  return (
    <div
      className={`${className} bo-report-issues-view-submit-an-issue-wrapper`}
    >
      <div className="bo-report-issues-view-submit-an-issue-bo-report-issues-view-submit-an-issue" >
        <div className="bo-report-issues-view-submit-an-issue-nav-bar-system-admin" >
          <LogoTransparent className="bo-report-issues-view-submit-an-issue-logo-transparent" />
          <div className="bo-report-issues-view-submit-an-issue-text">
            Welcome Back, Business Owner
          </div>
          <Logout className="bo-report-issues-view-submit-an-issue-logout" />
        </div>
        <div className="bo-report-issues-view-submit-an-issue-ttt-rectangle-8boside-menu-mid-white-container-right-sidebar" >
          <div className="bo-report-issues-view-submit-an-issue-tt-rectangle-8boside-menu-mid-white-container" >
            <div className="bo-report-issues-view-submit-an-issue-t-rectangle-8boside-menu" >
              <div className="bo-report-issues-view-submit-an-issue-bo-side-menu" >
                <div>Report Issues</div>
                <div>Dashboard</div>
                <div>Schedule</div>
                <div>Department/Roles</div>
              </div>
            </div>
            <div className="bo-report-issues-view-submit-an-issue-mid-white-container" >
              <div className="bo-report-issues-view-submit-an-issue-emp-roster" >
                EmpRoster
              </div>
              
              <div className="bo-report-issues-view-submit-an-issue-report-an-issue" >
                MC Details
              </div>
              
              <div className="bo-report-issues-view-submit-an-issue-t-form-contact" >
                <div className="container-form">
                    <div className="bo-report-issues-view-submit-an-issue-form-contact" >
                    <div className="bo-report-issues-view-submit-an-issue-name">
                        Name
                    </div>
                    <div className="bo-report-issues-view-submit-an-issue-input" >
                        <div className="bo-report-issues-view-submit-an-issue-eg-anna-smores" >
                        John Smith
                        </div>
                    </div>
                    <div className="bo-report-issues-view-submit-an-issue-t-role" >
                        <div className="bo-report-issues-view-submit-an-issue-role" >
                        Date
                        </div>
                    </div>
                    <div className="bo-report-issues-view-submit-an-issue-input-1" >
                        <div className="bo-report-issues-view-submit-an-issue-eg-manager" >
                        23/02/2025
                        </div>
                    </div>
                    <div className="bo-report-issues-view-submit-an-issue-t-issue-to-report" >
                        <div className="bo-report-issues-view-submit-an-issue-issue-to-report" >
                        Reason for MC
                        </div>
                    </div>
                    <div className="bo-report-issues-view-submit-an-issue-input-2" >
                        <div className="bo-report-issues-view-submit-an-issue-eg-lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-fusce-faucibus-mollis-suscipit-ut-tincidunt-blandit-tellus-amattis-proin-sapien-diam-porta-sed-luctus-at-ornare-vel-nisi" >
                        <p>
                            Flu
                        </p>
                        </div>
                    </div>
                    <div className="bo-report-issues-view-submit-an-issue-t-attach-image-if-any" >
                        <div className="bo-report-issues-view-submit-an-issue-attach-image-if-any" >
                        Attach image (if any)
                        </div>
                    </div>
                    <div className="bo-report-issues-view-submit-an-issue-tt-bg-rectangle-13upload-choose-file" >
                        <div className="bo-report-issues-view-submit-an-issue-t-bg-rectangle-13upload-choose-file" >
                        <div className="bo-report-issues-view-submit-an-issue-wrapper-1" >
                            <div className="bo-report-issues-view-submit-an-issue-bg-rectangle" />
                        </div>
                        <div className="bo-report-issues-view-submit-an-issue-choose-file" >
                            8475932.jpeg
                        </div>
                        <Upload className="bo-report-issues-view-submit-an-issue-upload" />
                        </div>
                    </div>
                    </div>
                </div>
              </div>
              <div className="bo-report-issues-view-submit-an-issue-t-update-profile" >
                <div className="bo-report-issues-view-submit-an-issue-update-profile" >
                  <div className="bo-report-issues-view-submit-an-issue-button" >
                    Status: Pending
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bo-report-issues-view-submit-an-issue-t-2025emproster-all-rights-reserved" >
          <div className="bo-report-issues-view-submit-an-issue-emproster-all-rights-reserved" >
            <span>
              {"©  2025 "}
              <span className="bo-report-issues-view-submit-an-issue-text-1">
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

interface BODepartmentRolesViewMCRequestsViewDetailsProps {
  className?: string;
}
