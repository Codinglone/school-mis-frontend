import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <div>
    <Container>
      <Big className='text-blue-700'>404</Big>
    </Container>
    <p className='text-center mb-5 text-3xl text-blue-700 font-bold'>The requested page was not found on this server</p>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Big = styled.h1`
  font-size: 10rem;
  animation: ani 5s infinite;

  @keyframes ani {
    from {
      /* transform: rotate(0deg); */
      letter-spacing: 0px;
    }
    to {
      /* transform: rotate(360deg); */
      letter-spacing: 20px;
    }
  }
`;

export default NotFound