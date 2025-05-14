import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Logo } from '../../Design/Logo'

export const Home = () => {

  return (
    <>
      <div className="flex w-full justify-center items-center">
        <Logo variant="large" />
      </div>
    </>
  )
}