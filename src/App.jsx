import Login from "./components/Login";
import Banner from "./components/Banner";
import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard";
import Protected from "./components/Protected";
import NotFound from "./components/NotFound";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     setTimeout(() => {
      setLoading(false)
     }, 1000)
  },[])

  return (
    <>
    {loading ? <Loader>
    <PropagateLoader color="#376cd7" />
    </Loader> : <Container className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>}
  
    </>
  );
}

const Container = styled.div`
  overflow: hidden;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  left: 50%;

`;

export default App;
