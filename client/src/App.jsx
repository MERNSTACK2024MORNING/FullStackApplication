import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProjectedRoute from './components/ProjectedRoute'
import HomePage from './pages/HomePage';
const App = () => {
  return (
  <Router>
<Routes>
  <Route path='/' element={<HomePage/>} />
  <Route path='/login' element={<LoginPage/>} />
  <Route path='/dashboard'
  element={
  <ProjectedRoute>
    <DashboardPage/>
  </ProjectedRoute>
  } />
</Routes>
    </Router>
  )
}

export default App