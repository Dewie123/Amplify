import LogoTransparent from "../components/assets/BOLogoTransparentDashboard";
import Logout from "../components/assets/BOLogoutDashboard";
import Row from "../components/BORowDashboard";
import Line from "../components/assets/BOLineDashboard";
import "./BODashboardView.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BOSideMenu from './BOSideMenu';
import AccountLogout from './AccountLogout';

export default function BODashboardView({
  className = "",
}: BODashboardViewProps) {
  const navigate = useNavigate();
  return (
    <div className={`${className} bo-dashboard-view-wrapper`}>
      <div className="bo-dashboard-view-bo-dashboard-view">
        <div className="bo-dashboard-view-nav-bar-system-admin">
          <LogoTransparent className="bo-dashboard-view-logo-transparent" />
          <div className="bo-dashboard-view-text">
            Welcome Back, Business Owner
          </div>
          <AccountLogout className="bo-dashboard-view-logout" />
        </div>
        <div className="bo-dashboard-view-tt-rectangle-8boside-menu-tmid-white-container-ttable-for-upcoming-completed-jobs-tright-sidebar" >
          <div className="bo-dashboard-view-t-rectangle-8boside-menu">
            <div className="bo-dashboard-view-bo-side-menu">
              <div><BOSideMenu /></div>
            </div>
          </div>
          <div className="bo-dashboard-view-t-mid-white-container-ttable-for-upcoming-completed-jobs-tright-sidebar" >
            <div className="bo-dashboard-view-mid-white-container">
              <div className="bo-dashboard-view-edit-details" />
              <div 
                className="bo-dashboard-view-text-1"
                onClick={() => navigate('/edit-company-profile')} //Change path here
                style={{ cursor: 'pointer' }}
              >
                Update Company Details
              </div>
              <div className="bo-dashboard-view-emp-roster">
                EmpRoster
              </div>
              <div className="bo-dashboard-view-rectangle">
                <div className="bo-dashboard-view-tt-text-text">
                  <div className="bo-dashboard-view-t-text-text">
                    <div className="bo-dashboard-view-text-2">
                      Now & Upcoming (1)
                    </div>
                    <div className="bo-dashboard-view-text-3">
                      Completed (6)
                    </div>
                  </div>
                </div>
              </div>
              <div className="bo-dashboard-view-t-table-for-upcoming-completed-jobs" >
              <div className="bo-dashboard-view-table-for-upcoming-completed-jobs" >
                <div className="bo-dashboard-view-table">
                  <Row
                    className="bo-dashboard-view-row"
                    container1="bo-dashboard-view-row-0-type"
                    text="26 October 2025                     "
                    text1=" Upcoming"
                   />
                  <Row
                    className="bo-dashboard-view-row"
                    container1="bo-dashboard-view-row-1-0-type"
                    text="26 February 2025                    "
                    text1=" Completed"
                   />
                  <Row
                    className="bo-dashboard-view-row"
                    container1="bo-dashboard-view-row-2-0-type"
                    text="22 February 2025                    "
                    text1=" Completed"
                   />
                  <Row
                    className="bo-dashboard-view-row"
                    container1="bo-dashboard-view-row-3-0-type"
                    text="13 February 2025                     "
                    text1=" Completed"
                   />
                  <Row
                    className="bo-dashboard-view-row"
                    container1="bo-dashboard-view-row-4-0-type"
                    text="27 January 2025                      "
                    text1=" Completed"
                   />
                  <Row
                    className="bo-dashboard-view-row"
                    container1="bo-dashboard-view-row-5-0-type"
                    text="25 January 2025                      "
                    text1=" Completed"
                   />
                  <Row
                    className="bo-dashboard-view-row"
                    container1="bo-dashboard-view-row-6-0-type"
                    text="24 January 2025                      "
                    text1=" Completed"
                   />
                  
                </div>
              </div>
            </div>


            </div>
            
            <div className="bo-dashboard-view-t-right-sidebar">
              <div className="bo-dashboard-view-right-sidebar">
                <div className="bo-dashboard-view-tt-needs-review-line">
                  <div className="bo-dashboard-view-t-needs-review-line">
                    <div className="bo-dashboard-view-needs-review">
                      Needs Review
                    </div>
                    <Line className="bo-dashboard-view-line" />
                  </div>
                </div>
                <div className="bo-dashboard-view-table-1">
                  <div className="bo-dashboard-view-row-8">
                    <div className="bo-dashboard-view-cell-1">
                      <div className="bo-dashboard-view-text-9">
                        Pending MC Request: Sean
                      </div>
                    </div>
                  </div>
                  <div className="bo-dashboard-view-cell-2">
                    <div className="bo-dashboard-view-text-10">
                      Run Payroll for Mar 17-22
                    </div>
                  </div>
                  <div className="bo-dashboard-view-cell-3">
                    <div className="bo-dashboard-view-text-11">
                      Pending MC Request: Sally
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bo-dashboard-view-t-2025emproster-all-rights-reserved" >
          <div className="bo-dashboard-view-emproster-all-rights-reserved">
            <span>
              {"©  2025 "}
              <span className="bo-dashboard-view-text-12">
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

interface BODashboardViewProps {
  className?: string;
}
