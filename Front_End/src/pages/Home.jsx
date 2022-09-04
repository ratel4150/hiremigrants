import React from 'react'
import Banner from '../components/Body/Banner'
import BannerWorkPosition from '../components/Body/BannerWorkPosition'
import CompanyHomePage from '../components/CompanyHomePage'
import BodyCompany from '../components/Migrants/BodyCompany'
import CardMigrant from '../components/Migrants/CardMigrant'

function Home() {
  return (
    <div>
        <Banner/>
        <BannerWorkPosition/>
        <CompanyHomePage/>
        <BodyCompany/>
        <CardMigrant/>
    </div>
  )
}

export default Home