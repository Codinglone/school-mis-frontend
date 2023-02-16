import React from 'react'
import styled from 'styled-components'

const OverviewCard = ({title}) => {
  return (
    <Container>{title}</Container>
  )
}

const Container = styled.div`
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`;

export default OverviewCard