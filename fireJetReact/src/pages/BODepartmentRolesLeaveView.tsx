import LogoTransparent from "../components/assets/LogoTransparent";
import Logout from "../components/assets/Logout";
import "./BODepartmentRolesLeaveView.css";
import BOSideMenu from './BOSideMenu';
import AccountLogout from './AccountLogout';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import InputField from "./InputField"; 

export default function BODepartmentRolesLeaveView({ className = "" }: BODepartmentRolesLeaveView) {
  const navigate = useNavigate();
  return (
    <div className={`${className} bo-department-roles-view-wrapper`}>
      <div className="bo-department-roles-view-bo-department-roles-view">
        <div className="bo-department-roles-view-nav-bar-system-admin">
          <LogoTransparent className="bo-department-roles-view-logo-transparent" />
          <div className="bo-department-roles-view-text">Welcome Back, Business Owner</div>
          <AccountLogout className="bo-department-roles-view-logout" />
        </div>
        <div className="bo-department-roles-view-tt-rectangle-8boside-menu-mid-white-container">
          <div className="bo-department-roles-view-t-rectangle-8boside-menu">
            <div className="bo-department-roles-view-bo-side-menu">
              <div><BOSideMenu /></div>
            </div>
          </div>
          <div className="bo-department-roles-view-mid-white-container">
            <div className="bo-department-roles-view-title">
              <h2>EMP Roster</h2>
            </div>
            <div>
              <h2>Leave Requests</h2>
            </div>
            
            <div className="bo-department-roles-view-table">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Reason for Leave</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Button not working</td>
                    <td>Lorem ipsum dolor sit amet...</td>
                    <td>Pending</td>
                    <td>
                      <button 
                        onClick={() => navigate('/bo-department-roles-view-leave-requests-view-details')}
                        style={{ cursor: 'pointer' }}
                      >
                        View Details
                      </button>
                      <button 
                        onClick={() => alert('Approved!')}
                        style={{ cursor: 'pointer', marginLeft: '8px' }}
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => alert('Rejected!')}
                        style={{ cursor: 'pointer', marginLeft: '8px' }}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Slow response time</td>
                    <td>Lorem ipsum dolor sit amet...</td>
                    <td>Pending</td>
                    
                    <button 
                        onClick={() => navigate('/bo-department-roles-view-leave-requests-view-details')}
                        style={{ cursor: 'pointer' }}
                      >
                        View Details
                      </button>
                      <button 
                        onClick={() => alert('Approved!')}
                        style={{ cursor: 'pointer', marginLeft: '8px' }}
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => alert('Rejected!')}
                        style={{ cursor: 'pointer', marginLeft: '8px' }}
                      >
                        Reject
                    </button>
                  </tr>
                  <tr>
                    <td>New hire Andy not shown</td>
                    <td>Lorem ipsum dolor sit amet...</td>
                    <td>Resolved</td>
                    <td>
                      <button 
                        onClick={() => navigate('/bo-department-roles-view-leave-requests-view-details')}
                        style={{ cursor: 'pointer' }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Page layout misaligned</td>
                    <td>Lorem ipsum dolor sit amet...</td>
                    <td>Resolved</td>
                    <td>
                      <button 
                        onClick={() => navigate('/bo-department-roles-view-leave-requests-view-details')}
                        style={{ cursor: 'pointer' }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bo-department-roles-view-t-2025emproster-all-rights-reserved">
          <div className="bo-department-roles-view-emproster-all-rights-reserved">
            <span>
              {"©  2025 "}
              <span className="bo-department-roles-view-text-14">{"EmpRoster. "}</span>
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BODepartmentRolesLeaveView {
  className?: string;
}
