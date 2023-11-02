import './App.css'
import UserContextProvider from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider >
      <h1>React Tutorial</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
