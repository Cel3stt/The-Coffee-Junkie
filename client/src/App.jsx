
import './App.css'
import Login from './app/Login'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './app/dashboard/Dashboard'
import Layout from './Layout'


function App() {

  return (
    <BrowserRouter>
     <Layout>
          <Routes>
              <Route path='/adminlogin' element={<Login/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
   </Layout>
    </BrowserRouter>
  
  )
}

export default App
