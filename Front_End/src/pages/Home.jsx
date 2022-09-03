import React from 'react'
import Banner from '../components/Body/Banner'
import BannerWorkPosition from '../components/Body/BannerWorkPosition'
import BannerCompany from '../components/Body/Forms/BannerCompany'
import CardMigrant from '../components/Migrants/CardMigrant'

function Home() {
  return (
    <div>
        <Banner/>
        <BannerWorkPosition/>
        <BannerCompany/>
        <CardMigrant/>
    </div>
  )
}

export default Home