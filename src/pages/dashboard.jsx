import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loguser from "../components/Loguser";
import OverviewCard from "../components/OverviewCard";
import styled from "styled-components";

const Dashboard = () => {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
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
      <Loguser handleLogout={handleLogout} />
      <Navbar />
      <Container>
        <OverviewCard />
      </Container>
    </div>
  );
};

const Container =  styled.div`
    display: flex;
`;

export default Dashboard;
