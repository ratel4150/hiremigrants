import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import Migrant1 from '../../Photos/Migrants/Migrant_Izq.jpeg';

import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";

function CardMigrantProfile() {
  return (
    <section style={{ paddingTop:"6rem",paddingBottom:"1rem",backgroundColor:"#0d3878",backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",wordWrap:"break-word",boxSizing:"border-box",display:"block",fontFamily:"sans-serif",fontStyle:"normal",lineHeight:"1.5",fontWeight:"400",color:"#232323",fontSize:"1rem" }}>
      <div class="container" style={{paddingLeft:"16px",paddingRight:"16px",position:"relative",wordWrap:"break-word",maxWidth:"1140px",width:"100%",marginLeft:"auto",marginRight:"auto"}}>
        <div class="card"style={{backgroundColor:"transparent",border:"none",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",backgroundClip:"border-box",borderRadius:"0.25rem",}}>
            <div class="card-wrapper" style={{backgroundColor:"#ffffff",borderRadius:"4px",overflow:"hidden",WebkitFlex:"1"}}>
                <div class="row align-items-center" style={{marginLeft:"-16px",marginRight:"-16px",display:"-webkit-flex",WebkitFlexWrap:"wrap"}}>
                    <div class="col-12 col-md-3" style={{paddingLeft:"16px",paddingRight:"16px",flex:"0 0 auto",width:"25%"}}>
                        <Card.Img className ="imagen-wrapper" src= {Migrant1} style= {{wordWrap:"break-word",width:"100%",objectFit:"cover",display:"block",verticalAlign:"middle"}}/>
                    </div>
                    <div class="col-12 col-md" style={{ display:"block"}}>
                        <div class="card-box" style={{ paddingLeft:"2rem", paddingRight: "4rem", width:"100%", boxSizing:"border-box"}}>
                            <h5 class="card-title fonts-style mb-3 display-5" style={{ fontWeight:"bold", boxSizing:"border-box", fontSize: "calc( 1.42rem + (2.2 - 1.42) * ((100vw - 20rem) / (48 - 20)))", lineHeight:"calc( 1.4 * (1.42rem + (2.2 - 1.42) * ((100vw - 20rem) / (48 - 20))))", wordBreak: "break-word", wordWrap: "break-word",}}>
                                <strong>John Smith</strong>
                            </h5>
                            <h6 class="card-subtitle fonts-style mb-3 display-4" style={{ fontWeight:"bold", fontSize:"1.1rem", lineHeight:"1.5", wordBreak: "break-word", wordWrap: "break-word"}}>
                                <p><strong >Programmer</strong></p>
                                <p><strong >Fulltime</strong></p>
                                <div>
                                <p><strong >Remoto How to create more items in this list?</strong></p>
                                </div>
                                <div>
                                <p><strong >Posteado 2 días</strong></p>
                                </div>
                            </h6>
                            <p class="text fonts-style display-7" style={{ wordBreak: "break-word", wordWrap: "break-word", fontWeight:"400"}}>
                                Theme in the Mobirise website builder offer multiple blocks: intros, sliders, galleries,
                                forms, articles, and so on. Start a project and click on the red plus buttons to see the
                                blocks available for your theme.
                            </p>
                            <div style={{ display:"flex", alignContent:"center", color:"#0d3878", fontSize: "1.5rem", wordBreak: "break-word", wordWrap: "break-word"}}>            
                                <TiSocialLinkedinCircular size={50} href="#"/>
                                <RiFacebookCircleLine size={50} href="#"/>
                                <AiOutlineGithub size={50} href="#"/>
                            </div>
                        </div>                                     
                    </div>      
                </div>
            </div>
        </div> 
    </div>   
             
    <div class="container" style={{ paddingTop:"1rem"}}>
        <div class="row justify-content-center">
            <div class="card col-md-12 col-lg-12">
                <div class="card-wrapper" style={{ padding:"4rem", borderRadius:"4px", overflow: "hidden", WebkitFlex:"1"}}>
                    <div class="card-box align-left">
                        <h4 class="card-title fonts-style white mb-3 display-5" style={{ fontWeight:"bold", boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"2.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left" }}>
                            <strong>Work experience</strong>
                        </h4>
                        <p class="mbr-text fonts-style display-7">
                            CThis JavaScript Developer job description template includes the list of most important JavaScript Developer’s duties and responsibilities. It is customizable and ready to post to job boards. Use it to save time, attract qualified candidates and hire best employees.
                        </p>
                        <p style={{ fontStyle:"normal", fontWeight:"400", boxSizing: "border-box", color: "#000000",fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5",wordBreak: "break-word", wordWrap: "break-word", textAlign:"left"}}><strong>Senior Frontend Engineer</strong></p>
                        <p style={{ fontStyle:"normal", boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", marginTop:"0", marginBottom:"1rem"}}><strong>Company name, 2018 – present</strong></p>
                        <p style={{ fontStyle:"normal", boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left", fontWeight:"400", marginTop:"0", marginBottom:"2rem", display:"block", marginBlockStart:"1rem", marginBlockEnd:"1rem", marginInlineStart:"0px", marginInlineEnd:"0px"}}>I am engaged in the implementation of complex projects to create commercial software for solving current industry problems, which involve the integration of calculation and engineering modules.</p>
                        <p style={{ fontStyle:"normal", boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left", fontWeight:"400", marginTop:"0", marginBottom:"0", display:"block", marginBlockStart:"1rem", marginBlockEnd:"1rem", marginInlineStart:"0px", marginInlineEnd:"0px"}}>HTML & CSS. Experience of high-quality layout</p>
                        <p style={{ fontStyle:"normal", boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left", fontWeight:"400", marginTop:"0", marginBottom:"0", display:"block", marginBlockStart:"1rem", marginBlockEnd:"1rem", marginInlineStart:"0px", marginInlineEnd:"0px"}}>Experience with React, Vue, Angular</p>
                        <p style={{ fontStyle:"normal", boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left", fontWeight:"400", marginTop:"0", marginBottom:"0", display:"block", marginBlockStart:"1rem", marginBlockEnd:"1rem", marginInlineStart:"0px", marginInlineEnd:"0px"}}>Isomorphic/SPA Application Development Experience</p>
                        <p style={{ fontStyle:"normal", boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left", fontWeight:"400", marginTop:"0", marginBottom:"0", display:"block", marginBlockStart:"1rem", marginBlockEnd:"1rem", marginInlineStart:"0px", marginInlineEnd:"0px"}}>Ability to use development management and planning tools</p>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    <div class="container" style={{ paddingTop:"1rem"}}>
        <div class="row justify-content-center">
            <div class="card col-md-12 col-lg-12">
                <div class="card-wrapper" style={{ padding:"4rem", borderRadius:"4px", overflow: "hidden", boxSizing: "border-box", WebkitFlex:"1",  }}>
                    <div class="card-box align-left">
                        <h4 class="card-title fonts-style white mb-3 display-5" style={{ fontWeight:"bold", boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"2.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left" }}>
                            <strong>Education</strong>
                        </h4>
                        <p class="text fonts-style display-7" style={{ boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left", fontWeight:"400", marginTop:"0", marginBottom:"1rem", }}>
                            Constantly raising and updating knowledge in order to professionally grow and engage in frontend. I am ready to show my skills and knowledge by completing a test task or on a probation, internship.</p>
                        <p style={{ boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left", fontWeight:"400", marginTop:"0", marginBottom:"1rem"}}>Bachelor’s Degree in Computer Science</p>
                        <p style={{ boxSizing: "border-box", color: "#000000", fontFamily: "sans-serif", fontSize:"1.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word", textAlign:"left", fontWeight:"400", marginTop:"0", marginBottom:"1rem"}}>WEBSTER UNIVERSITY, 1991 – 1996</p>
                    </div>    
                </div>
            </div>
        </div>
    </div> 
    <div class="container" style={{ paddingTop:"2rem", paddingBottom:"1rem"}}>
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-6">
                    <h3 class="section-title fonts-style mb-4 display-5" style={{ fontWeight:"bold", boxSizing: "border-box", color: "#ffffff", fontFamily: "sans-serif", fontSize:"2.2rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word"}}>
                        <strong>Skill&nbsp;</strong>
                    </h3>
                <ul class="list fonts-style display-7" style={{ fontWeight:"bold", boxSizing: "border-box", color: "#ffffff", listStyle: "none", fontFamily: "sans-serif", fontSize:"1rem", lineHeight: "1.5", wordBreak: "break-word", wordWrap: "break-word"}}>
                    <li style={{ marginBottom:"1rem", marginTop:"0"}}><strong>Expert knowledge of JavaScript</strong></li>
                    <li style={{ marginBottom:"1rem", marginTop:"0"}}><strong>An understanding of web markup</strong></li>
                    <li style={{ marginBottom:"1rem", marginTop:"0"}}><strong>Optimizing applications</strong></li>
                    <li style={{ marginBottom:"1rem", marginTop:"0"}}><strong>Implementing API designs and architecture</strong></li>
                    <li style={{ marginBottom:"1rem", marginTop:"0"}}><strong>In order to attract JavaScript Developer that best</strong></li>
                </ul>
            </div>
        </div>
    </div> 
      
    <div class="container" style={{ backgroundColor:"#ffffff", paddingTop:"2rem", paddingBottom:"2rem", backgroundPosition:"50% 50%", backgroundRepeat:"no-repeat", backgroundSize:"cover", position:"relative", wordWrap:"break-word"}}>
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-9" style={{ maxWidth: "100%", paddingLeft:"16px", paddingRight: "16px", flex: "0 0 auto", backgroundColor:"#ffffff" }}>
            <Button style={{ backgroundColor: "#ff5b00", borderRadius: "100px", borderColor:"#ff5b00", alignItems:"center", justifyContent:"center", display:"inline-flex", marginLeft:"20rem", marginRight:"20rem"}} 
            a href="#!">Contact the Migrant</Button>
            </div>
        </div>
    </div>
    </section>
  );
}

export default CardMigrantProfile;