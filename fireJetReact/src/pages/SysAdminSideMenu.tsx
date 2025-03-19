// SysAdminSideMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SysAdminSideMenu() {
  const navigate = useNavigate();

  const handleSysUserMgntClick = () => {
    navigate('/sys-user-management');
  };

  const handleSysAdminRegClick = () => {
    navigate('/system-admin-registration-request'); // update with your actual route
  };

  const handleSysAdminDashClick = () => {
    navigate('/system-admin-dashboard'); // update with your actual route
  };

  const handleSysDemoVidsClick = () => {
    navigate('/sys-demo-vid'); // update with your actual route
  };

  const handleSysReviewRatingClick = () => {
    navigate('/sys-review-rating'); // update with your actual route
  };

  const handleSysFAQClick = () => {
    navigate('/sys-faq'); // update with your actual route
  };

  return (
    <div className="bo-dashboard-view-t-rectangle-8boside-menu">
      <div
        className="sys-user-management"
        onClick={handleSysUserMgntClick}
        style={{ cursor: 'pointer' }}
      >
        Users Management
      </div>
      <div className="bo-dashboard-view-bo-side-menu">
        <div 
          onClick={handleSysAdminRegClick} 
          style={{ cursor: 'pointer' }}
        >
          Registration List
        </div>
        <div 
          onClick={handleSysAdminDashClick} 
          style={{ cursor: 'pointer' }}
        >
          Dashboard
        </div>
        <div 
          onClick={handleSysDemoVidsClick} 
          style={{ cursor: 'pointer' }}
        >
          Management Demo Video
        </div>
        <div 
          onClick={handleSysReviewRatingClick} 
          style={{ cursor: 'pointer' }}
        >
          Management Reviews & Rating
        </div>
        <div 
          onClick={handleSysFAQClick} 
          style={{ cursor: 'pointer' }}
        >
          Manage FAQ
        </div>
      </div>
    </div>
  );
}
