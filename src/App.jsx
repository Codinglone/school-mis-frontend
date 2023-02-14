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
import { useState, CSSProperties, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {

  return (
    <>
    <Loader>
    <PropagateLoader color="#376cd7" />
    </Loader>

    <Container className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
    </>
  );
}

const Container = styled.div`
  overflow: hidden;
`;



export default App;
