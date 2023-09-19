import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Index'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </BrowserRouter> 
  )
}

export default App
