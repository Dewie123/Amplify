import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import Row from "../components/Row";
import "./EmployeeProjectView.css";

export default function EmployeeProjectView({
  className = "",
}: EmployeeProjectViewProps) {
  return (
    <div className={`${className} employee-project-view-wrapper`}>
      <div className="employee-project-view-employee-project-view">
        <div className="employee-project-view-nav-bar-system-admin">
          <LogoTransparent className="employee-project-view-logo-transparent" />
          <div className="employee-project-view-text">
            Welcome Back, Employee
          </div>
          <Logout className="employee-project-view-logout" />
        </div>
        <div className="employee-project-view-t-rectangle-4mid-white-container" >
          <div className="employee-project-view-rectangle">
            <div className="employee-project-view-rectangle-1">
              <img
                className="employee-project-view-dashboard-logo"
                src="/assets/dashboard-logo.png"
                loading="lazy"
               />
              <div className="employee-project-view-t-text">
                <div className="employee-project-view-text-1">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="employee-project-view-rectangle-2">
              <div>Schedule</div>
              <div className="employee-project-view-t-schedule-logo">
                <img
                  className="employee-project-view-schedule-logo"
                  src="/assets/schedule-logo.png"
                  loading="lazy"
                 />
              </div>
            </div>
            <div className="employee-project-view-rectangle-3">
              <img
                className="employee-project-view-department-roles-logo"
                src="/assets/department-roles-logo.png"
                loading="lazy"
               />
              <div className="employee-project-view-t-text-1">
                <div className="employee-project-view-text-3">
                  <span className="employee-project-view-text-4">
                    {"            Department/Roles"}
                  </span>
                </div>
              </div>
            </div>
            <div className="employee-project-view-rectangle-4">
              <div className="employee-project-view-t-team-availability-logo-text" >
                <div className="employee-project-view-text-5">
                  <span className="employee-project-view-text-6">
                    {"          Team Availability"}
                  </span>
                </div>
                <img
                  className="employee-project-view-team-availability-logo"
                  src="/assets/team-availability-logo.png"
                  loading="lazy"
                 />
              </div>
            </div>
          </div>
          <div className="employee-project-view-mid-white-container">
            <div className="employee-project-view-ttt-view-attendance-record-button-temproster-view-time-swap-request" >
              <div className="employee-project-view-tt-view-attendance-record-button-temproster-view-time-swap-request" >
                <div className="employee-project-view-view-attendance-record">
                  View Attendance Record
                </div>
                <div>
                  <div className="employee-project-view-emp-roster">
                    EmpRoster
                  </div>
                  <div className="employee-project-view-view-time-swap-request" >
                    <div className="employee-project-view-view-time-swap-request-1" >
                      View Time Swap Request
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="employee-project-view-ttt-calendar-logo-calendar-date-container" >
              <div className="employee-project-view-tt-calendar-logo-calendar-date-container" >
                <div className="employee-project-view-t-calendar-logo-calendar-date-container" >
                  <img
                    className="employee-project-view-calendar-logo"
                    src="/assets/calendar-logo.png"
                    loading="lazy"
                   />
                  <div className="employee-project-view-calendar-date-container" >
                    <div className="employee-project-view-t-mar-172025mar">
                      <div className="employee-project-view-mar-172025mar">
                        Mar 17, 2025-Mar 23, 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="employee-project-view-view-week">
              <div className="employee-project-view-row">
                <div className="employee-project-view-t-cell-cell-cell-cell-cell-cell-cell-cell" >
                  <div className="employee-project-view-cell">
                    <div className="employee-project-view-t-text-2">
                      <div className="employee-project-view-text-7">
                        <p className="employee-project-view-para">
                          Team Members
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-1">
                    <div className="employee-project-view-text-8">
                      Mon, 17
                    </div>
                  </div>
                  <div className="employee-project-view-cell-2">
                    <div className="employee-project-view-text-9">
                      Tues, 18
                    </div>
                  </div>
                  <div className="employee-project-view-cell-3">
                    <div className="employee-project-view-text-10">
                      Wed, 19
                    </div>
                  </div>
                  <div className="employee-project-view-cell-4">
                    <div className="employee-project-view-text-11">
                      Thurs, 20
                    </div>
                  </div>
                  <div className="employee-project-view-cell-5">
                    <div className="employee-project-view-text-12">
                      Fri, 21
                    </div>
                  </div>
                  <div className="employee-project-view-cell-6">
                    <div className="employee-project-view-text-13">
                      Sat, 22
                    </div>
                  </div>
                  <div className="employee-project-view-cell-7">
                    <div className="employee-project-view-text-14">
                      Sun, 23
                    </div>
                  </div>
                </div>
              </div>
              <div className="employee-project-view-row-1">
                <div className="employee-project-view-t-cell-cell-cell-cell-cell-cell-cell-cell-1" >
                  <div className="employee-project-view-cell-8">
                    <div className="employee-project-view-text-15">
                      John Smith
                    </div>
                  </div>
                  <div className="employee-project-view-cell-9" />
                  <div className="employee-project-view-cell-10">
                    <div className="employee-project-view-text-16">
                      <span>
                        <p className="employee-project-view-para-1">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-2">
                          Supervisor
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-11" />
                  <div className="employee-project-view-cell-12">
                    <div className="employee-project-view-text-17">
                      <span>
                        <p className="employee-project-view-para-3">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-4">
                          Supervisor
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-13" />
                  <div className="employee-project-view-cell-14">
                    <div className="employee-project-view-text-18">
                      <span>
                        <p className="employee-project-view-para-5">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-6">
                          Supervisor
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-15" />
                </div>
              </div>
              <div className="employee-project-view-row-2">
                <div className="employee-project-view-t-cell-cell-cell-cell-cell-cell-cell-cell-2" >
                  <div className="employee-project-view-cell-16">
                    <div className="employee-project-view-text-19">
                      Sally Kim
                    </div>
                  </div>
                  <div className="employee-project-view-cell-17">
                    <div className="employee-project-view-text-20">
                      <span>
                        <p className="employee-project-view-para-7">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-8">
                          Videographer
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-18" />
                  <div className="employee-project-view-cell-19">
                    <div className="employee-project-view-text-21">
                      <span>
                        <p className="employee-project-view-para-9">
                          12pm-5.30pm
                        </p>
                        <p className="employee-project-view-para-10">
                          Videographer
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-20">
                    <div className="employee-project-view-text-22">
                      <span>
                        <p className="employee-project-view-para-11">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-12">
                          Videographer
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-21">
                    <div className="employee-project-view-text-23">
                      <span>
                        <p className="employee-project-view-para-13">
                          6pm-10.30pm
                        </p>
                        <p className="employee-project-view-para-14">
                          Videographer
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-22" />
                  <div className="employee-project-view-cell-23" />
                </div>
              </div>
              <Row
                className="employee-project-view-row-3"
                container2="employee-project-view-row-3-0-type"
                text="Janet Paua"
                container4="employee-project-view-row-3-2-type"
                text1="5.30pm-10pm"
                text2="Sound Tech"
                container6="employee-project-view-row-3-5-type"
                text3="9am-12pm"
                text4="Sound Tech"
                container7="employee-project-view-row-3-8-type"
                container8="employee-project-view-row-3-9-type"
                text5="Sound Tech"
                container9="employee-project-view-row-3-11-type"
                container10="employee-project-view-row-3-12-type"
                text6="9am-12pm"
                text7="Sound Tech"
                container11="employee-project-view-row-3-15-type"
                container12="employee-project-view-row-3-16-type"
                text8="6pm-10.30pm"
                text9="Sound Tech"
               />
              <Row
                className="employee-project-view-row-4"
                container1="employee-project-view-row-4-0-type"
                text="Zachary Law"
                container3="employee-project-view-row-4-2-type"
                text1="9am-5.30pm"
                text2="DJ"
                container5="employee-project-view-row-4-5-type"
                text3="9am-5.30pm"
                text4="DJ"
                container7="employee-project-view-row-4-8-type"
                text5="DJ"
                container9="employee-project-view-row-4-10-type"
                text6="9am-5.30pm"
                text7="DJ"
                container11="employee-project-view-row-4-13-type"
                text8="9am-5.30pm"
                text9="DJ"
               />
              <div className="employee-project-view-row-5">
                <div className="employee-project-view-t-cell-cell-cell-cell-cell-cell-cell-cell-3" >
                  <div className="employee-project-view-cell-24">
                    <div className="employee-project-view-text-24">
                      Earn Tian Low
                    </div>
                  </div>
                  <div className="employee-project-view-cell-25">
                    <div className="employee-project-view-text-25">
                      <span>
                        <p className="employee-project-view-para-15">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-16">
                          Actress
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-26">
                    <div className="employee-project-view-text-26">
                      <span>
                        <p className="employee-project-view-para-17">
                          9am-3.30pm
                        </p>
                        <p className="employee-project-view-para-18">
                          Actress
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-27" />
                  <div className="employee-project-view-cell-28" />
                  <div className="employee-project-view-cell-29" />
                  <div className="employee-project-view-cell-30">
                    <div className="employee-project-view-text-27">
                      <span>
                        <p className="employee-project-view-para-19">
                          12pm-5.30pm
                        </p>
                        <p className="employee-project-view-para-20">
                          Actress
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-31">
                    <div className="employee-project-view-text-28">
                      <span>
                        <p className="employee-project-view-para-21">
                          12pm-2.30pm
                        </p>
                        <p className="employee-project-view-para-22">
                          Actress
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="employee-project-view-row-6">
                <div className="employee-project-view-t-cell-cell-cell-cell-cell-cell-cell-cell-4" >
                  <div className="employee-project-view-cell-32">
                    <div className="employee-project-view-text-29">
                      Ashley Yeo
                    </div>
                  </div>
                  <div className="employee-project-view-cell-33">
                    <div className="employee-project-view-text-30">
                      <span>
                        <p className="employee-project-view-para-23">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-24">
                          Logistics
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-34">
                    <div className="employee-project-view-text-31">
                      <span>
                        <p className="employee-project-view-para-25">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-26">
                          Logistics
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-35">
                    <div className="employee-project-view-text-32">
                      <span>
                        <p className="employee-project-view-para-27">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-28">
                          Logistics
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-36">
                    <div className="employee-project-view-text-33">
                      <span>
                        <p className="employee-project-view-para-29">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-30">
                          Logistics
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-37" />
                  <div className="employee-project-view-cell-38">
                    <div className="employee-project-view-text-34">
                      <span>
                        <p className="employee-project-view-para-31">
                          9am-5.30pm
                        </p>
                        <p className="employee-project-view-para-32">
                          Logistics
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-39" />
                </div>
              </div>
              <div className="employee-project-view-row-7">
                <div className="employee-project-view-t-cell-cell-cell-cell-cell-cell-cell-cell-5" >
                  <div className="employee-project-view-cell-40">
                    <div className="employee-project-view-text-35">
                      Dawson Ooi
                    </div>
                  </div>
                  <div className="employee-project-view-cell-41" />
                  <div className="employee-project-view-cell-42">
                    <div className="employee-project-view-text-36">
                      <span>
                        <p className="employee-project-view-para-33">
                          6pm-10.30pm
                        </p>
                        <p className="employee-project-view-para-34">
                          Bouncer
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-43">
                    <div className="employee-project-view-text-37">
                      <span>
                        <p className="employee-project-view-para-35">
                          6pm-10.30pm
                        </p>
                        <p className="employee-project-view-para-36">
                          Bouncer
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-44">
                    <div className="employee-project-view-text-38">
                      <span>
                        <p className="employee-project-view-para-37">
                          6pm-10.30pm
                        </p>
                        <p className="employee-project-view-para-38">
                          Bouncer
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-45" />
                  <div className="employee-project-view-cell-46">
                    <div className="employee-project-view-text-39">
                      <span>
                        <p className="employee-project-view-para-39">
                          6pm-10.30pm
                        </p>
                        <p className="employee-project-view-para-40">
                          Bouncer
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="employee-project-view-cell-47">
                    <div className="employee-project-view-text-40">
                      <span>
                        <p className="employee-project-view-para-41">
                          6pm-10.30pm
                        </p>
                        <p className="employee-project-view-para-42">
                          Bouncer
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="employee-project-view-t-2025emproster-all-rights-reserved" >
          <div className="employee-project-view-emproster-all-rights-reserved" >
            <span>
              {"©  2025 "}
              <span className="employee-project-view-text-41">
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

interface EmployeeProjectViewProps {
  className?: string;
}
