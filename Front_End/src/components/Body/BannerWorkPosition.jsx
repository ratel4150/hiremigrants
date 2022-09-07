
import CardWorkPosition from './CardWorkPosition'
import "@fontsource/roboto";
import "@fontsource/league-spartan";
import React, { useState, useEffect } from "react";

function BannerWorkPosition() {
  const [data,setData]= useState(null);


  useEffect(() => {
    fetch(
      `http://localhost:8080/jobs`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data)
      });
  }, []);
  return (
    <div className="container-fluid my-3">
        <div><p className="display-6 text-center" style={{color:'#0D3878',fontFamily:'Roboto',textShadow: "-1px 1px 1px rgba(150, 150, 150, 0.87)"}}> <strong>Posiciones abiertas<br/>
Ahora el empleo lo eliges tú, más de 105.798 ofertas</strong></p></div>
        <div className="d-flex justify-content-between justify-content-evenly flex-wrap ">
        <CardWorkPosition/>
        <CardWorkPosition/>
        <CardWorkPosition/>
        
        
        </div>
        
      
    </div>
  )
}

export default BannerWorkPosition