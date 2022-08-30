import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs"

function Footer() {
  return (
    <Card className="text-center bg-dark text-white">
      <Card.Header>
        <Button variant="dark" size="sm" href="">
          Migrants
        </Button>
        <Button variant="dark" size="sm" href="">
          Company
        </Button>
        <Button variant="dark" size="sm" href="">
          Login
        </Button>
        </Card.Header>
      <Card.Body>
        <Card.Img
          src="https://migracode.openculturalcenter.org/wp-content/uploads/2020/10/Migracode-Barcelona-Logo-Transparant.png"
          style={{ width: "120px" }}
        />
        <Card.Title>Migracode Project 2022</Card.Title>
        <Card.Text>
          Produced by Vanessa Marin - Joao Albitrez - Yhenifer Pulido - Arturo Chavez -
          Jorgelina Donquis.
        </Card.Text>
         < FaFacebookSquare />
         < BsInstagram />
         < FaTwitterSquare />
         < BsLinkedin />
      </Card.Body>
    </Card>
  );
}

export default Footer;

