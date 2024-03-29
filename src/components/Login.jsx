import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios, { AxiosError } from "axios";
import Message from "./Message";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [bg, setBg] = useState('red');

  const navigate  = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
    const response = await axios
      .post("http://localhost:8000/api/v1/users/login", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(function (response) {
        if (response.status === 200) {
          setMessage("Welcome back!!");
          setIsMessage(true);
          setBg('#19c22f')
          localStorage.setItem('token',response.data.token)
          setTimeout(() => {
            setIsMessage(false)
            navigate('/dashboard')
          }, 2000);

        }
      })
      .catch(function (error) {
        console.log(error);
        setMessage(error);
          setIsMessage(true);
          setBg('#d61919');
          setTimeout(() => setIsMessage(false), 2000);
      });
    
  };



  return (
    <Container>
      {isMessage && <Message title={message} bg={bg} />}
      <h1 className={`text-blue-600 font-medium`} style={{position: 'absolute',top:'150px',fontSize: '1.5rem'}}>Account Login</h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/4 shadow-lg text-lg text-blue-600 bg-white"
      >
        <Label className="py-12">
          <label htmlFor="email" id="emailLabel" className="mx-4 py-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mx-4 outline-0 border-b-2 border-blue-600"
            required
          />
        </Label>
        <Label>
          <label htmlFor="password" id="passwordLabel" className="mx-4 py-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mx-4 outline-0 border-b-2 border-blue-600"
            required
          />
        </Label>

        <Label>
          <button
            type="submit"
            className="mx-auto my-8 bg-blue-600 text-white px-8 py-1 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <span className="text-sm mx-4 mb-4" style={{ alignSelf: "flex-end" }}>
            New here?<Link to="/signup" className="text-blue-900">sign up</Link>
          </span>
        </Label>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Login;
