import React from 'react'
import styled from 'styled-components'
import logo from "../assets/react.svg";

const CTA = () => {
  return (
    <Container>
        <Image src={logo} />
    </Container>
  )
}

const Container = styled.div``;
const Image = styled.img`
    border-radius: 10px;
`;
const Text = styled.p`
    color: #fff;
    font-size: 16px;
    font-family: sans-serif;
`;

export default CTA