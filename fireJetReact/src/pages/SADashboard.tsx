import LogoNavbar from "../components/assets_SADash/LogoNavbar";
import Logout from "../components/assets_SADash/Logout";
import Zr18Cls2 from "../components/assets_SADash/Zr18Cls2";
import BgZr18Cls from "../components/assets_SADash/BgZr18Cls";
import Zr18Cls3 from "../components/assets_SADash/Zr18Cls3";
import Zr18Cls1 from "../components/assets_SADash/Zr18Cls1";
import Zr18Cls from "../components/assets_SADash/Zr18Cls";
import Zr18Cls4 from "../components/assets_SADash/Zr18Cls4";
import Zr60Cls from "../components/assets_SADash/Zr60Cls";
import T from "./T2";
import UserDetail from "../components/assets_SADash/UserDetail";
import UserDetail1 from "../components/assets_SADash/UserDetail1";
import UserDetail2 from "../components/assets_SADash/UserDetail2";
import "./SADashboard.css";
import SysAdminSideMenu from './SysAdminSideMenu';

export default function Dashboard({ className = "" }: DashboardProps) {
  return (
    <div className={`${className} dashboard-dashboard`}>
      <div className="dashboard-nav-bar-system-admin">
        <div className="dashboard-tt-logo-navbar-welcome-back-system-admin">
          <LogoNavbar className="dashboard-logo-navbar" />
          <div className="dashboard-welcome-back-system-admin">
            Welcome Back, System Admin
          </div>
        </div>
        <Logout className="dashboard-logout" />
      </div>
      <div className="dashboard-t-side-menu-main-content">
        <div className="dashboard-side-menu">
          <div><SysAdminSideMenu /></div>
        </div>
        <div className="dashboard-main-content">
          <div className="dashboard-tt-rating-tsubscription-plans-total-users-tttenterprise-tfree-tbg-zr-60cls-961zr-60cls-962tttregistration-request-no-of-request-tcard-card-card-treported-issues" >
            <div className="dashboard-t-rating-tsubscription-plans-total-users-tttenterprise-tfree-tbg-zr-60cls-961zr-60cls" >
              <div className="dashboard-rating">
                <div className="dashboard-t-rating-total-rating">
                  <div className="dashboard-rating-1">Rating</div>
                  <div className="dashboard-component">30</div>
                </div>
                <div className="dashboard-tttt-zr-18cls-1553ttzr-18cls-1552tbg-zr-18cls-1549tbg-zr-18cls-1550zr-18cls-1551zr-18cls-1554ttzr-18cls-1555ttt0t1t234t" >
                  <div className="dashboard-ttt-zr-18cls-1553ttzr-18cls-1552tbg-zr-18cls-1549tbg-zr-18cls-1550zr-18cls-1551zr-18cls" >
                    <div className="dashboard-t-zr-18cls-1553ttzr-18cls-1552tbg-zr-18cls-1549tbg-zr-18cls-1550zr-18cls" >
                      <div className="dashboard-tt-zr-18cls-1552tbg-zr-18cls-1549tbg-zr-18cls-1550zr-18cls" >
                        <div className="dashboard-t-zr-18cls-1552tbg-zr-18cls-1549tbg-zr-18cls-1550zr-18cls" >
                          <Zr18Cls2 className="dashboard-zr-18cls" />
                          <div className="dashboard-t-bg-zr-18cls-1549tbg-zr-18cls-1550zr-18cls" >
                            <BgZr18Cls className="dashboard-bg-zr-18cls" />
                            <div className="dashboard-t-bg-zr-18cls-1550zr-18cls" >
                              <Zr18Cls3 className="dashboard-zr-18cls-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Zr18Cls1 className="dashboard-zr-18cls-2" />
                    </div>
                    <Zr18Cls className="dashboard-zr-18cls-3" />
                  </div>
                  <div className="dashboard-t-zr-18cls-1555ttt0t1t234t">
                    <Zr18Cls4 className="dashboard-zr-18cls-4" />
                    <div className="dashboard-tt-t0t1t234t">
                      <div className="dashboard-t-t0t1t234t">
                        <div className="dashboard-component-1">0</div>
                        <div className="dashboard-component-2">1</div>
                        <div className="dashboard-component-3">2</div>
                        <div>3</div>
                        <div>4</div>
                        <div className="dashboard-component-6">5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-t-subscription-plans-total-users">
                <div className="dashboard-subscription-plans">
                  Subscription plans
                </div>
                <div className="dashboard-component-7">30</div>
              </div>
              <div className="dashboard-ttt-enterprise-tfree-tbg-zr-60cls-961zr-60cls" >
                <div className="dashboard-tt-enterprise-tfree">
                  <div className="dashboard-t-enterprise-tfree">
                    <div>Enterprise</div>
                    <div className="dashboard-t-free">
                      <div className="dashboard-free">Free</div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-t-bg-zr-60cls-961zr-60cls">
                  <Zr60Cls className="dashboard-zr-60cls" />
                </div>
              </div>
            </div>
            <div className="dashboard-ttt-registration-request-no-of-request-tcard-card-card-treported-issues" >
              <T
                container2="dashboard-tt-registration-request-no-of-request-0-type"
                text="Registration Request"
                text1="3"
               />
              <div className="dashboard-t-card-card">
                <div className="dashboard-card">
                  <div className="dashboard-t-cell-tuser-detail">
                    <div className="dashboard-cell">
                      <div className="dashboard-text">
                        FUSIONTECH INNOVATIONS PTE. LTD.
                      </div>
                    </div>
                    <div className="dashboard-t-user-detail">
                      <UserDetail className="dashboard-user-detail" />
                    </div>
                  </div>
                  <div className="dashboard-tt-text-text-ttext-text">
                    <div className="dashboard-t-text-text">
                      <div>UEN:</div>
                      <div>Reg. ID</div>
                    </div>
                    <div className="dashboard-t-text-text-1">
                      <div>202452226G</div>
                      <div>PIqFM4diDQ</div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-card-1">
                  <div className="dashboard-t-cell-tuser-detail-1">
                    <div className="dashboard-cell-1">
                      <div className="dashboard-text-5">
                        'A' STAR TECHNOLOGIES PTE. LTD.
                      </div>
                    </div>
                    <div className="dashboard-t-user-detail-1">
                      <UserDetail1 className="dashboard-user-detail-1" />
                    </div>
                  </div>
                  <div className="dashboard-tt-text-text-ttext-text-1">
                    <div className="dashboard-t-text-text-2">
                      <div>UEN:</div>
                      <div>Rg. ID</div>
                    </div>
                    <div className="dashboard-t-text-text-3">
                      <div>201329345G</div>
                      <div>3oto8QCJdy</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-card-2">
                <div className="dashboard-t-cell-tuser-detail-2">
                  <div className="dashboard-cell-2">
                    <div className="dashboard-text-10">
                      A GOOD HELPER PTE. LTD.
                    </div>
                  </div>
                  <div className="dashboard-t-user-detail-2">
                    <UserDetail2 className="dashboard-user-detail-2" />
                  </div>
                </div>
                <div className="dashboard-tt-text-text-ttext-text-2">
                  <div className="dashboard-t-text-text-4">
                    <div>UEN:</div>
                    <div>Reg. ID</div>
                  </div>
                  <div className="dashboard-t-text-text-5">
                    <div>202410317N</div>
                    <div>3u0UzhmoYJ</div>
                  </div>
                </div>
              </div>
              <T
                container1="dashboard-t-reported-issues-0-type"
                container2="dashboard-t-reported-issues-1-type"
                text="reported issues"
                text1="0"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DashboardProps {
  className?: string;
}
