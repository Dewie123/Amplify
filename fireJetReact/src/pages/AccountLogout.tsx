// AccountLogout.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from "../components/assets/Logout";

export default function AccountLogout({ className = "" }: { className?: string }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic (clear tokens, etc.) here
    navigate('/'); // Navigate to the Login page (default route)
  };

  return (
    <div 
      onClick={handleLogout} 
      className={`${className} bo-add-team-member-view-logout`} 
      style={{ cursor: 'pointer' }}
    >
      <Logout />
    </div>
  );
}
