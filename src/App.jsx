import Login from './components/Login'
import Banner from './components/Banner'
import './App.css'
import styled from 'styled-components'

function App() {

  return (
    <Container className="App">
      <Banner />
     <Login />
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`;

export default App
