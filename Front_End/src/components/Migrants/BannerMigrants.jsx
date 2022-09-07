import React from "react";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

import { BiBold, BiBriefcase, BiFontSize } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaBold } from "react-icons/fa";

function BannerMigrants() {
  return (
    <Card
      className="text-center text-white"
      style={{
        backgroundImage: "url(./banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card.Body>
        <p class="h2" style={{ fontSize: 60, lineHeight: 1.1 }}>
          <strong>
            <p>Encuentra empleo en las empresas</p>
            <p>más interesantes de España</p>
          </strong>
        </p>
        <p class="h5" style={{ padding: "20px" }}>
          <p>Ahora el empleo lo eliges tú, más de 105.798 ofertas</p>
        </p>
        <div xs="auto" class="mbr-section-btn mt-3" style={{ padding: "20px" }}>
        <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Jane Doe"
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Username" />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
      </Row>
          <button
            type="button"
            className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white border-white"
            style={{
              backgroundColor: "#369962",
              marginTop: "1rem!important",
              marginRight: "2rem",
              marginLeft: "-0.6rem",
            }}
          >
            Modalidad <BsClock size={22} style={{ marginLeft: "10" }} />
          </button>
          <button
            type="button"
            className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white border-white"
            style={{
              backgroundColor: "#369962",
              marginTop: "1rem!important",
              marginRight: "2rem",
              marginLeft: "-0.6rem",
            }}
          >
            Lugar <BsGeoAlt size={22} style={{ marginLeft: "10" }} />
          </button>
          <button
            type="button"
            className="btn btn-ligth d-inline-flex btn-lg rounded-pill text-white"
            style={{
              backgroundColor: "#0d3878",
              marginTop: "1rem!important",
              marginRight: "2rem",
              marginLeft: "-0.6rem",
            }}
          >
            Buscar Empleo <BsSearch size={22} style={{ marginLeft: "10" }} />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BannerMigrants;
