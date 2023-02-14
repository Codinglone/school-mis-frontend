import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loguser from "../components/Loguser";

const Dashboard = () => {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const user = localStorage.getItem("user");
  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 2000)
    if (!user) {
      navigate("/");
    }
  });
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    ready && <div>
    <Loguser handleLogout={handleLogout} />
   <Navbar />
  </div>
  );
};

export default Dashboard;
