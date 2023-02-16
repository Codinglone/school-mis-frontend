import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OverviewCard = ({ title, value, link }) => {
  return (
    <Container className="text-blue-700 font-semibold">
      <h1
        className="text-2xl hover:tracking-wider"
        style={{ transition: "0.5s ease-in-out" }}
      >
        {title}
      </h1>
      <h1
        className="text-4xl hover:text-5xl"
        style={{ transition: "0.5s ease-in-out" }}
      >
        {value}
      </h1>
      <Link to={link} className="underline text-2xl hover:text-blue-600 hover:tracking-widest" style={{transition: '0.5s ease-in-out'}}>
        View all
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  width: 25%;
  text-align: center;
`;

export default OverviewCard;
