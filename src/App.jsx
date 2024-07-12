 
import Logsign from './components/log/Logsign.jsx'
 import Home from './components/home/Home.jsx'
 import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import './App.css'
import Sign from './components/log/Sign'

function App() {
   
  return (
    <div className='app'>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path="/" element={<Logsign />} /> */}
        <Route path="/register" element={<Sign />} />
      </Routes>
    </Router>
     </div>
     
  )
}

export default App
