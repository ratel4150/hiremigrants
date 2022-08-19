import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        <Card.Img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV44X3CbM2TFxZaT3-TXkh-kbIkzCVi0umuA&usqp=CAU"
          style={{ width: "150px" }}
        />
      </Card.Body>
    </Card>
  );
}

export default Footer;

