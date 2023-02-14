import React from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({children, user}) => {
  const navigate = useNavigate();
    if(!user){
        navigate('/')
    }
  return (
    <div>Protected</div>
  )
}

export default Protected