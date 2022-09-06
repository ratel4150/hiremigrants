import React from 'react'
import BannerCompany from '../components/BannerCompany'
import CardMigrant from '../components/Migrants/CardMigrant'
import PublicaCompany from '../components/Migrants/PublicaCompany'
import RegistrarseCompany from '../components/Migrants/RegistrarseCompany'
import AccedeCompany from '../components/Migrants/AccedeCompany'

function Company() {
  return (
    <div>
        <BannerCompany/>
        <CardMigrant/>
        <PublicaCompany/>
        <RegistrarseCompany/>
        <AccedeCompany/>
    </div>
  )
}

export default Company