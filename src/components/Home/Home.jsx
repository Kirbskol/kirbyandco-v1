import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PageContainer } from '../../Design/Container'
import { HomeWelcome, HomeReel, HomeContact } from './HomeComponents'

export const Home = () => {

  return (
    <>
      <div className="flex justify-center">
        <PageContainer>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex flex-col">
              <HomeReel />
            </div>
            <HomeWelcome />
            <HomeContact />
          </div>
        </PageContainer>
      </div>
    </>
  )
}