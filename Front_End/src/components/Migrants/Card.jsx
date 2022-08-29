import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


import Migrant2 from '../../Photos/Migrants/Migrant_2.png';
import Migrant4 from '../../Photos/Migrants/Migrant_4.PNG';
import Migrant1 from '../../Photos/Migrants/Migrant_1.png';

function CardMigrant() {
  return (
    <div className="container">
  <div className="row justify-content-center text-center">
        <div className="col-12">
          <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-1">
            <strong>Candidatos</strong>
          </h3>
          <p className="mbr-section-subtitle mbr-fonts-style align-center mb-5 display-5">
            Comienza a Formar tu Equipo
          </p>
        </div>


<Row xs={1} md={2} className="g-1">  
      <Card border="light" style={{ width: '25rem' }}>
        <Card.Img variant="top" src= {Migrant2} />
        <Card.Body className="bg-primary text-light">
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
          <Button variant="warning" a href="#!">Learn More</Button>
        </Card.Body>
      </Card>
      <Card border="light" style={{ width: '25rem' }}>
        <Card.Img variant="top" src= {Migrant4} />
        <Card.Body className="bg-primary text-light">
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
          <Button variant="warning" a href="#!">Learn More</Button>
        </Card.Body>
      </Card>
      <Card border="light" style={{ width: '25rem' }}>
        <Card.Img variant="top" src= {Migrant1} />
        <Card.Body className="bg-primary text-light">
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
          <Button variant="warning" a href="#!">Learn More</Button>
        </Card.Body>
      </Card>
      </Row>
   </div>
   </div> 
  );
}

export default CardMigrant;