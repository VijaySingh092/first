import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import Sign_in from './components/Sign_in.jsx'
import Sign_up from './components/Sign_up.jsx'
import Navbar from './components/Navbar.jsx'
import Container from './components/Container.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <App/>
    <Dashboard/>
    <div className='forms-container' style={{width:'1200px',  paddingLeft:'310px'}}>
      <div className='form-container' style={{paddingLeft:'50px', paddingBottom:'50px', paddingTop:'50px', paddingRight:"50px"}}>
    <Sign_in/>
    </div>
    <div className='form-container' style={{paddingLeft:'50px', paddingRight:"50px", paddingTop:'50px', paddingBottom:'50px'}}>
    <Sign_up/>
    </div>
    
    </div>
<Container/>
  </StrictMode>,
)
