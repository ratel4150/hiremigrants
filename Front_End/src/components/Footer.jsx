import React from "react";
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
  <button type="button" class="btn text-white" style={{
      backgroundColor: "#369962"}}>Migrants</button>
  <button type="button" class="btn text-white" style={{
      backgroundColor: "#369962"}}>Company</button>
  <button type="button" class="btn text-white" style={{
      backgroundColor: "#369962"}}>Login</button>
</div>
      <div>
        <img
          src="https://migracode.openculturalcenter.org/wp-content/uploads/2020/10/Migracode-Barcelona-Logo-Transparant.png"
          style={{ width: "120px" }}
        />
        <div className="p-2">Migracode Project 2022</div>
        <div className="p-2">
          Produced by Vanessa Marin - Joao Albitrez - Yhenifer Pulido - Arturo Chavez -
          Jorgelina Donquis.
        </div>
         < FaFacebookSquare />
         < BsInstagram />
         < FaTwitterSquare />
         < BsLinkedin />
      </div>
    </div>
  );
}

export default Footer;

