// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/*
  IMPORTANT: imports must match your folder structure:
  src/auth/Login
  src/auth/Register
  src/pages/customer/CustomerHome
  src/pages/staff/StaffHome
*/
import Login from "./auth/Login";
import Register from "./auth/Register";
import CustomerHome from "./pages/customer/CustomerHome";
import StaffHome from "./pages/staff/StaffHome";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* default -> login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* app pages (match the navigate() calls in your auth files) */}
        <Route path="/customerhome" element={<CustomerHome />} />
        <Route path="/staffhome" element={<StaffHome />} />

        {/* fallback */}
        <Route
          path="*"
          element={
            <div style={{ padding: 40, textAlign: "center" }}>
              <h2>404 — Page Not Found</h2>
              <p>The route you requested does not exist.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
