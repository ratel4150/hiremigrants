import React from "react";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import Migrant2 from '../../Photos/Migrants/Migrant_2.png';
import Migrant4 from '../../Photos/Migrants/Migrant_4.PNG';
import Migrant1 from '../../Photos/Migrants/Migrant_1.png';

function GroupExample() {
  return (
    <div className="d-flex justify-content-around">
     <CardGroup>
      <Card >
        <Card.Img variant="top" src= {Migrant2} class="img-fluid"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src= {Migrant4} class="img-fluid"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.{' '}
          </Card.Text>
        <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src= {Migrant1} class="img-fluid"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  </div>
  );
}

export default GroupExample;