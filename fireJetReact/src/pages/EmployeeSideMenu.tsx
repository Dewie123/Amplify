// EmpSideMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmployeeSideMenu() {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    // Redirect to the desired route (e.g., "/report-issues")
    navigate('/employee-dashboard');
  };

  const handleProjectViewClick = () => {
    // Redirect to the desired route (e.g., "/report-issues")
    navigate('/employee-projects');
  };

  const handleTimeSwapClick = () => {
    // Redirect to the desired route (e.g., "/report-issues")
    navigate('/employee-main-view-time-swap-request');
  };

  return (
    <div className="emp-dashboard-view-t-rectangle-8boside-menu">
      <div 
        className="emp-dashboard-view-dashboard" 
        onClick={handleDashboardClick}
        style={{ cursor: 'pointer' }} // Indicates it's clickable
      >
        Dashboard
      </div>
      <div 
        className="emp-dashboard-view-dashboard" 
        onClick={handleProjectViewClick}
        style={{ cursor: 'pointer' }} // Indicates it's clickable
      >
        Project View
      </div>
      <div 
        className="emp-dashboard-view-dashboard" 
        onClick={handleTimeSwapClick}
        style={{ cursor: 'pointer' }} // Indicates it's clickable
      >
        Time Swap
      </div>
    </div>
  );
}
