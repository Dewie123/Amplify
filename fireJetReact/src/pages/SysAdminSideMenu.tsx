// SysAdminSideMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SysAdminSideMenu() {
  const navigate = useNavigate();

  const handleReportIssuesClick = () => {
    navigate('/sys-user-management');
  };

  const handleDashboardClick = () => {
    navigate('/bo-dashboard-view'); // update with your actual route
  };

  const handleScheduleClick = () => {
    navigate('/bo-schedule-view'); // update with your actual route
  };

  const handleDepartmentRolesClick = () => {
    navigate('/bo-department-roles-view'); // update with your actual route
  };

  const handleTeaamAvailabilityClick = () => {
    navigate('/bo-team-availability-view'); // update with your actual route
  };

  return (
    <div className="bo-dashboard-view-t-rectangle-8boside-menu">
      <div
        className="sys-user-management"
        onClick={handleReportIssuesClick}
        style={{ cursor: 'pointer' }}
      >
        Users Management
      </div>
      <div className="bo-dashboard-view-bo-side-menu">
        <div 
          onClick={handleDashboardClick} 
          style={{ cursor: 'pointer' }}
        >
          Registration List
        </div>
        <div 
          onClick={handleScheduleClick} 
          style={{ cursor: 'pointer' }}
        >
          Issues Log
        </div>
        <div 
          onClick={handleDepartmentRolesClick} 
          style={{ cursor: 'pointer' }}
        >
          Management Demo Video
        </div>
        <div 
          onClick={handleTeaamAvailabilityClick} 
          style={{ cursor: 'pointer' }}
        >
          Management Reviews & Rating
        </div>
        <div 
          onClick={handleTeaamAvailabilityClick} 
          style={{ cursor: 'pointer' }}
        >
          Manage FAQ
        </div>
      </div>
    </div>
  );
}
