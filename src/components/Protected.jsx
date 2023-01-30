import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children, user}) => {
    if(!user){
        <Navigate to='/' />
    }
  return (
    <div>Protected</div>
  )
}

export default Protected