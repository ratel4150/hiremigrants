import React from 'react'
import Body from '../components/Body/Body'
import BannerWorkPosition from '../components/Body/BannerWorkPosition'
import BannerCompany from '../components/Body/Forms/BannerCompany'
import Card from '../components/Body/CardMigrant'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Body/>
        <BannerWorkPosition/>
        <BannerCompany/>
        <Card/>
        <Footer/>
        

        
    </div>
  )
}

export default Home