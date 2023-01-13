import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Message from "./Message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios
      .post("http://localhost:5000/users", {
        email: email,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (response) {
        setMessage("Welcome back!!")
    }
  };

    useEffect(() => {
      setIsMessage(true);
      setTimeout(() => setIsMessage(false), 2000);
    }, [message]);
  
  return (
    <Container>
      {isMessage && <Message title={message} />}
      <form
        onSubmit={handleSubmit}
        className="w-1/4 shadow-lg text-lg text-blue-600"
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
