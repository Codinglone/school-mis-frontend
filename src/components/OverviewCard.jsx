import React from 'react'
import styled from 'styled-components'

const OverviewCard = ({title}) => {
  return (
    <Container className='text-blue-700 font-semibold'>{title}</Container>
  )
}

const Container = styled.div`
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px;
    width: 25%;
    text-align: center;
    
`;

export default OverviewCard