import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { SideMenu } from './components/SideMenu/SideMenu'
import { Logo } from './Design/Logo'

function App() {
  return (
    <Router>
      <SideMenu />
      <Routes>
        {AppRoutes}
      </Routes>
    </Router>
  )
}

export default App
