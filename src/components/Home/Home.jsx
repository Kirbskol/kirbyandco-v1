import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PageContainer } from '../../Design/Container'
import { WelcomeContainer } from './HomeComponents'

export const Home = () => {

  return (
    <>
    <div className="flex justify-center">
      <PageContainer>
        <WelcomeContainer />
      </PageContainer>
    </div>
    </>
  )
}