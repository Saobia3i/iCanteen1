// src/auth/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css'; // your CSS

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Dummy registration logic (replace with backend later)
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Save user in localStorage (for demo purposes)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      setError("User with this email already exists!");
      return;
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Registration successful! Redirecting to login...");
    
    // Redirect to login after short delay
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-decorative-panel">
        <div className="auth-content">
          <h1>Join Us!</h1>
          <p>Create your account to enjoy our canteen services.</p>
        </div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-card">
          <h2 className="auth-title">Register</h2>

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

          <form onSubmit={handleRegister} className="login-form">
            <div style={{ marginBottom: "1rem" }}>
              <label>Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc", marginTop: "0.25rem" }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc", marginTop: "0.25rem" }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc", marginTop: "0.25rem" }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc", marginTop: "0.25rem" }}
              >
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            <button type="submit" className="ant-btn-primary">Register</button>
          </form>

          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Already have an account?{" "}
            <span style={{ color: "#1677ff", cursor: "pointer" }} onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
