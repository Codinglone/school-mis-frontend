import React from 'react'
import styled from 'styled-components'
const AdminNav = () => {
  return (
    <Container>
        <nav className='bg-blue-600'>
            <ul>
                <li><a href="#">Students</a></li>
                <li><a href="#">Teachers</a></li>
                <li><a href="#">Staff</a></li>
            </ul>
        </nav>
    </Container>
  )
}

const Container = styled.div`
    background-color: white;
`;

export default AdminNav