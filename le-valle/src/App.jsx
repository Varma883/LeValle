import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import SignUp from './pages/SignUp';

const App = () => {
  return (
  
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

       
      </Routes>
  )
}

export default App
