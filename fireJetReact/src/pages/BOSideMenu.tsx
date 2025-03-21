// BOSideMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BOSideMenu() {
  const navigate = useNavigate();

  const handleReportIssuesClick = () => {
    navigate('/bo-report-issues-view');
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
        className="bo-dashboard-view-report-issues"
        onClick={handleReportIssuesClick}
        style={{ cursor: 'pointer' }}
      >
        View Reported Issues
      </div>
      <div className="bo-dashboard-view-bo-side-menu">
        <div 
          onClick={handleDashboardClick} 
          style={{ cursor: 'pointer' }}
        >
          Dashboard
        </div>
        <div 
          onClick={handleScheduleClick} 
          style={{ cursor: 'pointer' }}
        >
          View Timeline
        </div>
        <div 
          onClick={handleDepartmentRolesClick} 
          style={{ cursor: 'pointer' }}
        >
          Department/Roles
        </div>
        <div 
          onClick={handleTeaamAvailabilityClick} 
          style={{ cursor: 'pointer' }}
        >
          Team Availability
        </div>
      </div>
    </div>
  );
}
