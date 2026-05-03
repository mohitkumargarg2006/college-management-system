import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 const handleLogin = () => {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (
    savedUser &&
    username === savedUser.username &&
    password === savedUser.password
  ) {
    setIsLogin();
    navigate("/dashboard");
  } else {
    alert("Wrong Username or Password");
  }
};

  return (
    <div style={container}>
      {/* Background Glow */}
      <div style={blur1}></div>
      <div style={blur2}></div>

      {/* Login Card */}
      <div style={card}>
        <h1 style={title}>College CMS</h1>
        <p style={subtitle}>Admin Login Portal</p>

        <input
          style={input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={btn} onClick={handleLogin}>
          Login
        </button>
        <p
        style={{ color: "white", marginTop: "15px", cursor: "pointer" }}
        onClick={() => navigate("/register")}
          >
        New user? Register here
        </p>
        <p style={hint}>Use: admin / 1234</p>
      </div>
    </div>
  );
}

/* Styles */

const container = {
  minHeight: "100vh",
  background:
    "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
};

const blur1 = {
  position: "absolute",
  width: "220px",
  height: "220px",
  background: "#2563eb",
  borderRadius: "50%",
  filter: "blur(90px)",
  top: "10%",
  left: "10%",
  opacity: 0.35,
};

const blur2 = {
  position: "absolute",
  width: "260px",
  height: "260px",
  background: "#9333ea",
  borderRadius: "50%",
  filter: "blur(100px)",
  bottom: "10%",
  right: "10%",
  opacity: 0.3,
};

const card = {
  width: "380px",
  padding: "35px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  zIndex: 2,
};

const title = {
  color: "white",
  margin: 0,
  fontSize: "32px",
  textAlign: "center",
};

const subtitle = {
  color: "#cbd5e1",
  textAlign: "center",
  marginTop: "8px",
  marginBottom: "25px",
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white",
  fontSize: "15px",
  outline: "none",
};

const btn = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(90deg, #2563eb, #3b82f6)",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "5px",
};

const hint = {
  textAlign: "center",
  color: "#94a3b8",
  marginTop: "18px",
  fontSize: "13px",
};

export default Login;