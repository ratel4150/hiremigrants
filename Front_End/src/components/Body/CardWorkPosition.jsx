import React from 'react'
import { MdPlace } from "react-icons/md";
import {SiCashapp} from 'react-icons/si'
import {BsFillBookmarkFill} from 'react-icons/bs'
import Logo from '../../Photos/Migrants/Logo/logo.png'

function CardWorkPosition() {
  return (
    <div className="card my-5  shadow" style={{ width: "400px" }}>
      <div style={{position:'absolute',left:'365px',top:'10px'}}>
            <BsFillBookmarkFill color="lightgray" size={24}/>
        </div>
        <div className="card-body"  >
          <h4 className="card-title" style={{ color: "#0D3878" }}>
            <strong>Senior Digital Marketing Manager (Base Singapore)</strong>
          </h4>
          <h5 className="" style={{ color: "gray" }}>
            <strong>HireMigrants</strong>
          </h5>
          <ul class="" style={{ color: "gray" }}>
            <li class="">Work with people who love what they do</li>
            <li class="">Passionate admin professional wanted </li>
            <li class="">Inmediate start available</li>
            <p className="" style={{ color: "gray" }}>
              <MdPlace /> Barcelona Eixample
            </p>
            <p  style={{ color: "gray" }}><SiCashapp/> Negotiable</p>
            <p><strong>3 days ago</strong></p>
            <div className="" style={{width:'100px',position:'absolute',bottom:'20px' ,left:'270px'}}>
                <img className="mx-auto d-block" src={Logo} alt="logo"  width={64} heigth={64}/>
                <p className=" lh-1" style={{position:'block'}}><strong>HireMigrants</strong></p>

            </div>
          </ul>
        </div>
      </div>
  )
}

export default CardWorkPosition