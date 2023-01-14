import Login from './components/Login'
import Banner from './components/Banner'
import './App.css'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'

function App() {

  return (
    <Container className="App">
      <Banner />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`;

export default App
