// src/pages/staff/StaffLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import bgImage from '../../assets/s-bg.jpg'; // path to your image

export default function StaffLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
      }}
    >
      {/* Render the child page */}
      <Outlet />
    </div>
  );
}
