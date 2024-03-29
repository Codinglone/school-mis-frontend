import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Message from "./Message";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [role, setRole] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);

  const navigate = useNavigate();

  const baseUrl = "http://localhost:7000/api/v1/users";

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios
      .post(baseUrl, {
        firstName,
        lastName,
        email,
        password,
        role,
        school,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (response) {
      setMessage("Account created successfully!!");
      setIsMessage(true);
      setTimeout(() => {
        setIsMessage(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setRole("");
        setSchool("");
        setPassword("");
        navigate('/')
      }, 2000);

    }
  };

  return (
    <Container>
      {isMessage && <Message title={message} />}
      <h1
        className="text-blue-600 font-medium"
        style={{ position: "absolute", top: "80px", fontSize: "1.5rem" }}
      >
        Create Account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/4 shadow-lg text-lg text-blue-600 bg-white"
      >
        <Label className="py-1">
          <label htmlFor="firstName" id="firstNameLabel" className="mx-4 py-1">
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
        <Label className="py-1">
          <label htmlFor="lastName" id="lastNameLabel" className="mx-4 py-1">
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
        <Label className="py-1">
          <label htmlFor="school" id="schoolLabel" className="mx-4 py-1">
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
        <Label className="py-1">
          <label htmlFor="role" id="roleLabel" className="mx-4 py-1">
            Role
          </label>
          <input
            type="text"
            name="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mx-4 outline-0 border-b-2 border-blue-600"
            required
          />
        </Label>
        <Label className="py-1">
          <label htmlFor="email" id="emailLabel" className="mx-4 py-1">
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
          <label htmlFor="password" id="passwordLabel" className="mx-4 py-1">
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
            className="mx-auto my-4 bg-blue-600 text-white px-8 py-1 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
          <span className="text-sm mx-4 mb-2" style={{ alignSelf: "flex-end" }}>
            Have account?
            <Link to="/" className="text-blue-900">
              login
            </Link>
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

export default Signup;
