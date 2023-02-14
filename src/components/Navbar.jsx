import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to='#'>Overview</Link></li>
            <li><Link to='#'>Students</Link></li>
            <li><Link to='#'>Marks</Link></li>
            <li><Link to='#'>Teachers</Link></li>
            <li><Link to='#'>Stock</Link></li>
            <li><Link to='#'>Library</Link></li>
            <li><Link to='#'>Finance</Link></li>
            <li><Link to='#'>Classes</Link></li>
            <li><Link to='#'>Trades/Options</Link></li>
            <li><Link to='#'>Discipline</Link></li>
        </ul>
    </div>
  )
}

export default Navbar