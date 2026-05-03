import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ username, password })
    );

    alert("Registration Successful");
    navigate("/");
  };

  return (
    <div style={box}>
      <h1>Register</h1>

      <input
        style={input}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        style={input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={btn} onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

const box = {
  width: "350px",
  margin: "100px auto",
  padding: "30px",
  background: "#1e293b",
  color: "white",
  borderRadius: "12px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "white",
  border: "none",
};

export default Register;