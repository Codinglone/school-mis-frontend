import React from 'react'
import styled from 'styled-components'
import {FaSignOutAlt} from "react-icons/fa";

const Loguser = ({handleLogout}) => {
    const user = localStorage.getItem('user');
  return (
    <div>
        <Container className='bg-blue-500 text-white'>
            <li id='user'>{user}</li>
            <li id='out' onClick={handleLogout}><span>Logout</span><FaSignOutAlt className='my-1 ml-2' /></li>
        </Container>
    </div>
  )
}

const Container  = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 4px 20px;
    cursor: pointer;

    #out {
        display: flex;
        font-weight: 600;
        font-size: 20px;
        justify-content: space-between;
    }
    #user {
        font-size: 20px;
    }
`;

export default Loguser