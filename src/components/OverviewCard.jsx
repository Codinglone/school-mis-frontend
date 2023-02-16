import React from "react";
import styled from "styled-components";

const OverviewCard = ({ title, value }) => {
  return (
  <Container className="text-blue-700 font-semibold">
    <h1 className="text-2xl">{title}</h1>
    <h1 className="text-6xl">{value}</h1>
  </Container>);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:  space-between;
  height: 50vh;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  width: 25%;
  text-align: center;
`;

export default OverviewCard;
