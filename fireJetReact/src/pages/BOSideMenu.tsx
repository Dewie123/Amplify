// BOSideMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BOSideMenu() {
  const navigate = useNavigate();

  const handleReportIssuesClick = () => {
    // Redirect to the desired route (e.g., "/report-issues")
    navigate('/bo-report-issues-view');
  };

  return (
    <div className="bo-dashboard-view-t-rectangle-8boside-menu">
      <div 
        className="bo-dashboard-view-report-issues" 
        onClick={handleReportIssuesClick}
        style={{ cursor: 'pointer' }} // Indicates it's clickable
      >
        Report Issues
      </div>
      <div className="bo-dashboard-view-bo-side-menu">
        <div>Dashboard</div>
        <div>Schedule</div>
        <div>Department/Roles</div>
      </div>
    </div>
  );
}
