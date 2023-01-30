import React from 'react'
import styled from 'styled-components'

const Message = ({title, bg}) => {
  return (
    <Container><div className={`mt-4`} style={{backgroundColor: bg}}>{title}</div></Container>
  )
}

const Container = styled.div`
 
    position: absolute;
    top: 100px;
    transition: 500ms ease-in-out;

    div{
    width: 200px;
    text-align: center;
    padding: 10px 0;
    color: #fff;
    font-weight: 600;
}   
`;

export default Message