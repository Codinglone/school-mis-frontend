import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <form action="" className='w-1/4 shadow-lg text-lg text-blue-500'>
            <Label className='py-12'>
                <label htmlFor="email" id="emailLabel" className='mx-4 py-2'>Email Address</label>
                <input type="email" name="email" id="email" className='mx-4 outline-0 border-b-2 border-blue-400' />
            </Label>
            <Label>
                <label htmlFor="password" id="passwordLabel" className='mx-4 py-2'>Password</label>
                <input type="password" name="password" id="password" className='mx-4 outline-0 border-b-2 border-blue-400' />
            </Label>

            <Label>
                <button type='submit' className='mx-auto my-8 bg-blue-500 text-white px-8 py-1 rounded hover:bg-blue-600'>Login</button>
            </Label>
        </form>
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Login