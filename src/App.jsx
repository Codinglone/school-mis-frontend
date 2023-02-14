import Login from "./components/Login";
import Banner from "./components/Banner";
import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard";
import Protected from "./components/Protected";

function App() {
  return (
    <Container className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`;

export default App;
