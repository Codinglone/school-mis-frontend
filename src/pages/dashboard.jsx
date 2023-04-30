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
  const token = localStorage.getItem("token");

  const baseUrl  = 'http://localhost:8000/api/v1/categories';

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
   
  },[]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  
 useEffect(() => {
  const categoriesCall = async() => {
    const categories = await fetch(baseUrl);
    console.log(categories.data)
    return categories
  }
  // console.log(categoriesCall());
 }, [])
  
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
