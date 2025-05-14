import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <Routes>
        {AppRoutes}
      </Routes>
    </Router>
  )
}

export default App
