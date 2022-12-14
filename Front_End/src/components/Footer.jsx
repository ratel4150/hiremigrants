import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs"

function Footer() {
  return (
    <div className="text-center text-white" style={{
      backgroundColor: "#369962",
    }}>
      <div class="btn-group p-3" role="group" aria-label="Basic example">
      <Nav.Link as={Link} to='/migrants' style={{ fontFamily: "Roboto" }}>
  <button type="button" class="btn text-white" style={{
      backgroundColor: "#369962"}}>Migrante</button>
      </Nav.Link>
      <Nav.Link as={Link} to='/company' style={{ fontFamily: "Roboto" }}>
  <button type="button" class="btn text-white" style={{
      backgroundColor: "#369962"}}>Compañia</button>
      </Nav.Link>
      <Nav.Link as={Link} to='/login' style={{ fontFamily: "Roboto" }}>
  <button type="button" class="btn text-white" style={{
      backgroundColor: "#369962"}}>LogIn</button>
      </Nav.Link>
</div>
      <div>
        <img
          src="https://migracode.openculturalcenter.org/wp-content/uploads/2020/10/Migracode-Barcelona-Logo-Transparant.png"
          style={{ width: "120px" }}
        />
        <div className="p-2">Migracode Proyecto 2022</div>
        <div className="p-2">
          Elaborado por Vanessa Marin - Joao Albitrez - Yhenifer Pulido - Arturo Chavez -
          Jorgelina Donquis.
        </div>
         < FaFacebookSquare size={25} style={{marginLeft: "10"}}/>
         < BsInstagram size={25} style={{marginLeft: "10"}}/>
         < FaTwitterSquare size={25} style={{marginLeft: "10"}}/>
         < BsLinkedin size={25} style={{marginLeft: "10"}}/>
      </div>
    </div>
  );
}

export default Footer;