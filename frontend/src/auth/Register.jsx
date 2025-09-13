// src/auth/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const staffDummy = { email: "staff@canteen.com", password: "staff123" };

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (role === "staff") {
      // Only allow the hard-coded staff credentials
      if (email === staffDummy.email && password === staffDummy.password) {
        navigate("/staffhome");
      } else {
        setError(
          "Staff sign-up requires the special staff email and password."
        );
        return;
      }
    } else {
      // Normal customer registration (dummy flow)
      navigate("/customerhome");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-6">
          iCanteen Register
        </h1>

        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}

        <form onSubmit={handleRegister} className="space-y-6 text-black">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full px-4 py-3
                border border-black
                rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-400
                hover:shadow-md
                transition
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full px-4 py-3
                border border-black
                rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-400
                hover:shadow-md
                transition
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-4 py-3
                border border-black
                rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-400
                hover:shadow-md
                transition
              "
            />
          </div>

          {/* Role */}
          <div>
            <label className="block font-semibold mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="
                w-full px-4 py-3
                border border-black
                rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-400
                hover:shadow-md
                transition
              "
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full py-3
              bg-orange-500 hover:bg-orange-600
              text-white font-semibold text-lg
              rounded-md
              transition
            "
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <span
            className="text-orange-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
