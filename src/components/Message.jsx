import React from 'react'
import styled from 'styled-components'

const Message = ({title, bg}) => {
  return (
    <Container><div className={`bg-${bg === 'green' ? 'green': 'red'}-500 mt-4`}>{title}</div></Container>
  )
}

const Container = styled.div`
    /* display: flex;
    justify-content: center; */
    position: absolute;
    top: 100px;
    transition: 500ms ease-in-out;

    div{
    width: 200px;
    text-align: center;
    padding: 10px 0;
    color: white;
}   
`;

export default Message