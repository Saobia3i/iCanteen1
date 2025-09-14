// src/pages/auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css';

// Dummy staff credentials
const staffDummy = { email: "staff@canteen.com", password: "staff123", name: "John Staff" };

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    let user = null;

    if (role === "staff") {
      // Check staff dummy credentials
      if (email === staffDummy.email && password === staffDummy.password) {
        user = { ...staffDummy, userType: "staff" };
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        // Redirect to StaffHome page
        navigate("/staffhome"); // new
 // Make sure your route is "/staff" pointing to StaffHome
      } else {
        setError("Invalid staff credentials!");
        return;
      }
    } else {
      // Customer login dummy (you can expand later)
      user = { name: "Demo Customer", email, userType: "customer" };
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      // Redirect to CustomerHome page
      navigate("/customerhome"); // Make sure your route is "/customer" pointing to CustomerHome
    }
  };

  return (
    <div className="auth-page">
      {/* Decorative panel */}
      <div className="auth-decorative-panel">
        <div className="auth-content">
          <h1>Welcome Back!</h1>
          <p>Log in to continue managing your canteen experience.</p>
        </div>
      </div>

      {/* Form panel */}
      <div className="auth-form-panel">
        <div className="auth-card">
          <h2 className="auth-title">Login</h2>

          {error && (
            <p style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="login-form">
            {/* Email */}
            <div style={{ marginBottom: "1rem" }}>
              <label>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "1rem" }}>
              <label>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
              />
            </div>

            {/* Role */}
            <div style={{ marginBottom: "1rem" }}>
              <label>Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="auth-input"
              >
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Don’t have an account?{" "}
            <span
              style={{ color: "#1677ff", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
