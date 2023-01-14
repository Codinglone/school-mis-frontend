import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Message from "./Message";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [role, setRole] = useState("");

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
        setIsMessage(true);
        setTimeout(() => setIsMessage(false), 2000);
    }
  };

    // useEffect(() => {
    //   setIsMessage(true);
    //   setTimeout(() => setIsMessage(false), 2000);
    // }, [isMessage]);
  
  return (
    <Container>
      {isMessage && <Message title={message} />}
      <form
        onSubmit={handleSubmit}
        className="w-1/4 shadow-lg text-lg text-blue-600"
      >
        <Label className="py-4">
          <label htmlFor="firstName" id="firstNameLabel" className="mx-4 py-2">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mx-4 outline-0 border-b-2 border-blue-600"
            required
          />
        </Label>
        <Label className="py-4">
          <label htmlFor="lastName" id="lastNameLabel" className="mx-4 py-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mx-4 outline-0 border-b-2 border-blue-600"
            required
          />
        </Label>
        <Label className="py-4">
          <label htmlFor="school" id="schoolLabel" className="mx-4 py-2">
            School Name
          </label>
          <input
            type="text"
            name="school"
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="mx-4 outline-0 border-b-2 border-blue-600"
            required
          />
        </Label>
        <Label className="py-4">
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
            Sign Up
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

export default Signup;