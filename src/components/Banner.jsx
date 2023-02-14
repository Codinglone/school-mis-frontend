import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Container className='bg-blue-700'>
        <h1 className='text-white font-bold text-2xl py-4'>ISHURI +</h1>
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export default Banner