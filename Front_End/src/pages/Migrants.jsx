import React from 'react'
import BannerMigrants from '../components/Migrants/BannerMigrants'
import BannerWorkPosition from '../components/Body/BannerWorkPosition'
import RegistrarseMigrants from '../components/Migrants/RegistrarseMigrants'
import AccedeMigrants from '../components/Migrants/AccedeMigrants'

function Migrants() {
  return (
    <div>
        <BannerMigrants/>
        <BannerWorkPosition/>
        <RegistrarseMigrants/>
        <AccedeMigrants/>
    </div>
  )
}

export default Migrants