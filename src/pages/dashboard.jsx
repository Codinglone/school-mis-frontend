import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  useEffect(() => {
  if(!user){
    navigate('/')
  }
  })
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <div>
      <button className='bg-blue-600 my-3 ml-5 px-2 py-1 text-white font-semibold rounded-sm hover:bg-blue-400' onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Dashboard