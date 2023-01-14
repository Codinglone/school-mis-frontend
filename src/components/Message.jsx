import React from 'react'
import styled from 'styled-components'

const Message = ({title}) => {
  return (
    <Container><div className='bg-green-500 mt-4'>{title}</div></Container>
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