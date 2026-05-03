import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("isLogin");

    if (session === "true") {
      setIsLogin(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");
    setIsLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            isLogin ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login setIsLogin={handleLogin} />
            )
          }
        />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            isLogin ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;