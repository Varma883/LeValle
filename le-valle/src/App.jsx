import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import SignUp from './pages/SignUp';
import Admin from './pages/AdminBoard';
import Dashboard from './layout/Dashboard';
import AdminBoard from './pages/AdminBoard';
import ValletBoard from './pages/ValletBoard';

const App = () => {
  return (
  
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="admin" element={<AdminBoard />} />
          <Route path="valle" element={<ValletBoard />} />
          {/* <Route path="post/view/:postid" element={<ViewBlog />} />
          <Route path="create" element={<Create />} /> */}
        </Route>

       
      </Routes>
  )
}

export default App
