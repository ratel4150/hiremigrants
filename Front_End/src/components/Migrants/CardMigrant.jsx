import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


import Migrant1 from '../../Photos/Migrants/Migrant_Izq.jpeg';
import Migrant2 from '../../Photos/Migrants/Migrant_Center.jpeg';
import Migrant3 from '../../Photos/Migrants/Migrant_Der.jpeg';

// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { RiFacebookCircleLine } from "react-icons/ti";
// import { SiGithub } from "react-icons/si";


function CardMigrant() {
  return (
    <div className="container, row justify-content-center text-center" style={{ paddingLeft:"75px", paddingRight: "25px", position: "relative", wordWrap: "break-word", width:"100%", marginLeft: "auto", marginRight: "auto", display:"block"}}>
      <div className="col-12">
          <h3 style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "4.6rem", lineHeight: "1.1", textAlign: "center", display: "1"}} >
            <strong>Candidatos</strong>
          </h3>
          <p style={{ fontFamily: "sans-serif", fontSize: "2.2rem", lineHeight: "1.5", textAlign: "center", display: "5"}}>
            Comienza a Formar tu Equipo
          </p>
        </div>


<Row xs={1} md={2} className="g-1" style={{justifyContent: "center"}}>  
      <Card class= "wrap" border="light" style={{ width: '25rem' }}>
        <Card.Img class= "wrap" variant="top" src= {Migrant1} />
        <Card.Body className="text-light" style={{backgroundColor: "#0d3878"}}>
          <Card.Title class="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
            <strong>Nombre del Candidato</strong>
          </Card.Title>
          <Card.Subtitle className="mb-5">
            <strong>Profesión</strong></Card.Subtitle>
          <Card.Text class="card-text mbr-fonts-style align-center display-7">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
          </Card.Text>
          <Button type= "button" style={{backgroundColor: "#ff5b00"}} a href="#!">View Profile</Button>
        </Card.Body>
      </Card>
      <Card border="light" style={{ width: '25rem' }}>
        <Card.Img class= "wrap" variant="top" src= {Migrant2} />
        <Card.Body className="text-light" style={{backgroundColor: "#0d3878"}}>
          <Card.Title class="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
            <strong>Nombre del Candidato</strong>
          </Card.Title>
          <Card.Subtitle className="mb-5">
            <strong>Profesión</strong></Card.Subtitle>
          <Card.Text class="card-text mbr-fonts-style align-center display-7">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
          </Card.Text>
          <Button type= "button" style={{backgroundColor: "#ff5b00"}} a href="#!">View Profile</Button>
        </Card.Body>
      </Card>
      <Card border="light" style={{ width: '25rem' }}>
        <Card.Img class= "wrap" variant="top" src= {Migrant3} />
        <Card.Body className="text-light" style={{backgroundColor: "#0d3878"}}>
          <Card.Title class="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
            <strong>Nombre del Candidato</strong>
          </Card.Title>
          <Card.Subtitle className="mb-5">
            <strong>Profesión</strong></Card.Subtitle>
          <Card.Text class="card-text mbr-fonts-style align-center display-7">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
          </Card.Text>
          <Button type= "button" style={{backgroundColor: "#ff5b00"}} a href="#!">View Profile</Button>
        </Card.Body>
      </Card>
      </Row>
   </div>
  );
}

export default CardMigrant;