import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loguser from "../components/Loguser";

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
      <Loguser />
     <Navbar />
    </div>
  );
};

export default Dashboard;
