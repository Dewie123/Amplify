import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import Row from "../components/Row3";
import "./BOScheduleView.css";

export default function BOTeamAvailabilityView({
  className = "",
}: BOTeamAvailabilityViewProps) {
  return (
    <div className={`${className} bo-schedule-view-wrapper`}>
      <div className="bo-schedule-view-bo-schedule-view">
        <div className="bo-schedule-view-nav-bar-system-admin">
          <LogoTransparent className="bo-schedule-view-logo-transparent" />
          <div className="bo-schedule-view-text">
            Welcome Back, Business Owner
          </div>
          <Logout className="bo-schedule-view-logout" />
        </div>
        <div className="bo-schedule-view-tt-rectangle-8boside-menu-mid-white-container" >
          <div className="bo-schedule-view-t-rectangle-8boside-menu">
            <div className="bo-schedule-view-report-issues">
              Report Issues
            </div>
            <div className="bo-schedule-view-bo-side-menu">
              <div>Dashboard</div>
              <div>Schedule</div>
              <div>Department/Roles</div>
            </div>
          </div>
          <div className="bo-schedule-view-mid-white-container">
            <div className="bo-schedule-view-emp-roster">EmpRoster</div>
            <div className="bo-schedule-view-t-calendar-logo-calendar-date-container" >
              <div className="bo-schedule-view-calendar-logo" />
              <div className="bo-schedule-view-calendar-date-container">
                <div className="bo-schedule-view-t-mar-172025mar">
                  <div className="bo-schedule-view-mar-172025mar">
                    Mar 17, 2025-Mar 23, 2025
                  </div>
                </div>
              </div>
            </div>
            <div className="bo-schedule-view-t-view-week">
              <div className="bo-schedule-view-view-week">
                <div className="bo-schedule-view-row">
                  <div className="bo-schedule-view-t-cell-cell-cell-cell-cell-cell-cell-cell" >
                    <div className="bo-schedule-view-cell">
                      <div className="bo-schedule-view-t-text">
                        <div className="bo-schedule-view-text-1">
                          <p className="bo-schedule-view-para">
                            placeholder
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-1">
                      <div className="bo-schedule-view-text-2">
                        Monday
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-2">
                      <div className="bo-schedule-view-text-3">
                        Tuesday
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-3">
                      <div className="bo-schedule-view-text-4">
                        Wednesday
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-4">
                      <div className="bo-schedule-view-text-5">
                        Thursday
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-5">
                      <div className="bo-schedule-view-text-6">
                        Friday
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-6">
                      <div className="bo-schedule-view-text-7">
                        Saturday
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-7">
                      <div className="bo-schedule-view-text-8">
                        Sunday
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bo-schedule-view-row-1">
                  <div className="bo-schedule-view-t-cell-cell-cell-cell-cell-cell-cell-cell-1" >
                    <div className="bo-schedule-view-cell-8">
                      <div className="bo-schedule-view-text-9">
                        John Smith
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-9" />
                    <div className="bo-schedule-view-cell-10">
                      <div className="bo-schedule-view-text-10">
                        <span>
                          <p className="bo-schedule-view-para-1">
                            UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-2">
                            9pm-10pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-11" />
                    <div className="bo-schedule-view-cell-12">
                      <div className="bo-schedule-view-text-11">
                        <span>
                          <p className="bo-schedule-view-para-3">
                          UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-4">
                          9pm-10pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-13" />
                    <div className="bo-schedule-view-cell-14">
                      <div className="bo-schedule-view-text-12">
                        <span>
                          <p className="bo-schedule-view-para-5">
                          UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-6">
                          9pm-10pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-15" />
                  </div>
                </div>
                <div className="bo-schedule-view-row-2">
                  <div className="bo-schedule-view-t-cell-cell-cell-cell-cell-cell-cell-cell-2" >
                    <div className="bo-schedule-view-cell-16">
                      <div className="bo-schedule-view-text-13">
                        Sally Kim
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-17">
                      <div className="bo-schedule-view-text-14">
                        <span>
                          <p className="bo-schedule-view-para-7">
                          UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-8">
                          9pm-10pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-18" />
                    <div className="bo-schedule-view-cell-19">
                      <div className="bo-schedule-view-text-15">
                        <span>
                          <p className="bo-schedule-view-para-9">
                            PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-10">
                            9pm-10pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-20">
                      <div className="bo-schedule-view-text-16">
                        <span>
                          <p className="bo-schedule-view-para-11">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-12">
                          9pm-10pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-21">
                      <div className="bo-schedule-view-text-17">
                        <span>
                          <p className="bo-schedule-view-para-13">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-14">
                          9pm-10pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-22" />
                    <div className="bo-schedule-view-cell-23" />
                  </div>
                </div>
                <Row
                  className="bo-schedule-view-row-3"
                  container2="bo-schedule-view-row-3-0-type"
                  text="Janet Paua"
                  container3="bo-schedule-view-row-3-2-type"
                  text1="5.30pm-10pm"
                  text2="Sound Tech"
                  container4="bo-schedule-view-row-3-5-type"
                  text3="5.30pm-10pm"
                  text4="Sound Tech"
                  container5="bo-schedule-view-row-3-8-type"
                  text5="5.30pm-10pm"
                  text6="Sound Tech"
                  container6="bo-schedule-view-row-3-11-type"
                  text7="5.30pm-10pm"
                  text8="Sound Tech"
                  container7="bo-schedule-view-row-3-14-type"
                  text9="5.30pm-10pm"
                  text10="Sound Tech"
                 />
                <Row
                  className="bo-schedule-view-row-4"
                  container1="bo-schedule-view-row-4-0-type"
                  text="Zachary Law"
                  text1="9am-5.30pm"
                  text2="DJ"
                  text3="9am-5.30pm"
                  text4="DJ"
                  text5="9am-5.30pm"
                  text6="DJ"
                  text7="9am-5.30pm"
                  text8="DJ"
                  text9="9am-5.30pm"
                  text10="DJ"
                 />
                <div className="bo-schedule-view-row-5">
                  <div className="bo-schedule-view-t-cell-cell-cell-cell-cell-cell-cell-cell-3" >
                    <div className="bo-schedule-view-cell-24">
                      <div className="bo-schedule-view-text-18">
                        Earn Tian Low
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-25">
                      <div className="bo-schedule-view-text-19">
                        <span>
                          <p className="bo-schedule-view-para-15">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-16">
                            1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-26">
                      <div className="bo-schedule-view-text-20">
                        <span>
                          <p className="bo-schedule-view-para-17">
                            PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-18">
                            1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-27" />
                    <div className="bo-schedule-view-cell-28" />
                    <div className="bo-schedule-view-cell-29" />
                    <div className="bo-schedule-view-cell-30">
                      <div className="bo-schedule-view-text-21">
                        <span>
                          <p className="bo-schedule-view-para-19">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-20">
                          1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-31">
                      <div className="bo-schedule-view-text-22">
                        <span>
                          <p className="bo-schedule-view-para-21">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-22">
                          1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bo-schedule-view-row-6">
                  <div className="bo-schedule-view-t-cell-cell-cell-cell-cell-cell-cell-cell-4" >
                    <div className="bo-schedule-view-cell-32">
                      <div className="bo-schedule-view-text-23">
                        Ashley Yeo
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-33">
                      <div className="bo-schedule-view-text-24">
                        <span>
                          <p className="bo-schedule-view-para-23">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-24">
                          1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-34">
                      <div className="bo-schedule-view-text-25">
                        <span>
                          <p className="bo-schedule-view-para-25">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-26">
                          1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-35">
                      <div className="bo-schedule-view-text-26">
                        <span>
                          <p className="bo-schedule-view-para-27">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-28">
                          1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-36">
                      <div className="bo-schedule-view-text-27">
                        <span>
                          <p className="bo-schedule-view-para-29">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-30">
                          1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-37" />
                    <div className="bo-schedule-view-cell-38">
                      <div className="bo-schedule-view-text-28">
                        <span>
                          <p className="bo-schedule-view-para-31">
                          PREFERRED
                          </p>
                          <p className="bo-schedule-view-para-32">
                          1pm-2pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-39" />
                  </div>
                </div>
                <div className="bo-schedule-view-row-7">
                  <div className="bo-schedule-view-t-cell-cell-cell-cell-cell-cell-cell-cell-5" >
                    <div className="bo-schedule-view-cell-40">
                      <div className="bo-schedule-view-text-29">
                        Dawson Ooi
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-41" />
                    <div className="bo-schedule-view-cell-42">
                      <div className="bo-schedule-view-text-30">
                        <span>
                          <p className="bo-schedule-view-para-33">
                              UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-34">
                          6pm-10.30pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-43">
                      <div className="bo-schedule-view-text-31">
                        <span>
                          <p className="bo-schedule-view-para-35">
                          UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-36">
                          6pm-10.30pm
                          </p>
                          
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-44">
                      <div className="bo-schedule-view-text-32">
                        <span>
                          <p className="bo-schedule-view-para-37">
                          UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-38">
                          6pm-10.30pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-45" />
                    <div className="bo-schedule-view-cell-46">
                      <div className="bo-schedule-view-text-33">
                        <span>
                          <p className="bo-schedule-view-para-39">
                          UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-40">
                          6pm-10.30pm
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="bo-schedule-view-cell-47">
                      <div className="bo-schedule-view-text-34">
                        <span>
                          <p className="bo-schedule-view-para-41">
                          UNAVAILABLE
                          </p>
                          <p className="bo-schedule-view-para-42">
                          6pm-10.30pm
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bo-schedule-view-t-2025emproster-all-rights-reserved">
          <div className="bo-schedule-view-emproster-all-rights-reserved">
            <span>
              {"©  2025 "}
              <span className="bo-schedule-view-text-35">
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

interface BOTeamAvailabilityViewProps {
  className?: string;
}
