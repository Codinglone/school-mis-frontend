import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loguser from "../components/Loguser";
import OverviewCard from "../components/OverviewCard";
import styled from "styled-components";
import { fetch } from "../utils/fetchApi";
const Dashboard = () => {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const user = localStorage.getItem("user");

  const baseUrl  = 'http://localhost:7000/api/v1/categories';

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
   
  },[]);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  
  
  return (
    <div>
      <Loguser handleLogout={handleLogout} />
      <Navbar />
      <Container>
        <OverviewCard title={'Total Categories'} value={12} link={'/categories'} />
      </Container>
    </div>
  );
};

const Container =  styled.div`
    display: flex;
    padding: 20px;
`;

export default Dashboard;
