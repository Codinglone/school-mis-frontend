import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
     <Navbar />
    </div>
  );
};

export default Dashboard;
