import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Nav className='bg-blue-500'>
            <li><Link to='/dashboard'>Overview</Link></li>
            <li><Link to='/dashboard/students'>Students</Link></li>
            <li><Link to='/dashboard/marks'>Marks</Link></li>
            <li><Link to='/dashboard/teachers'>Teachers</Link></li>
            <li><Link to='/dashboard/stock'>Stock</Link></li>
            <li><Link to='/dashboard/library'>Library</Link></li>
            <li><Link to='/dashboard/finance'>Finance</Link></li>
            <li><Link to='/dashboard/classes'>Classes</Link></li>
            <li><Link to='/dashboard/trades'>Trades/Options</Link></li>
            <li><Link to='/dashboard/discipline'>Discipline</Link></li>
        </Nav>
        <section className='my-5'></section>
    </div>
  )
}

const Nav = styled.ul`
    display: flex;
    justify-content: space-evenly;

    li {
        padding: 10px 0;
        color: white;
        font-weight: 600;
        transition: 0.4s ease;
    }

    li:hover {
        transform: rotate(-3deg);
    }
`;

export default Navbar