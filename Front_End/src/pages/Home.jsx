import React from 'react'
import Banner from '../components/Body/Banner'
import BannerWorkPosition from '../components/Body/BannerWorkPosition'
import BannerCompany from '../components/Body/Forms/BannerCompany'
import Card from '../components/Body/CardMigrant'

function Home() {
  return (
    <div>
        <Banner/>
        <BannerWorkPosition/>
        <BannerCompany/>
        <Card/>
    </div>
  )
}

export default Home