
import './App.css'
import Login from './app/Login'
import { Dashboard } from './app/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
          <Routes>
              <Route path='/adminlogin' element={<Login/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
    </BrowserRouter>
  
  )
}

export default App
