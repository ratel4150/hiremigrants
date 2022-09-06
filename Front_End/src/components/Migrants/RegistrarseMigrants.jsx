import React from "react";
import chicaRubia from "../Images/chicaRubia.png";
import Button from 'react-bootstrap/Button';

function RegistrarseMigrants() {
  return (
    <div
      className="container-fluid text-white text-center p-3"
      style={{
        backgroundColor: "#369962",
      }}
    >
      <div className="container-fluid text-white d-inline-flex">
        <div>
          <h4
            className="display-3 d-flex justify-content-center fw p-5"
            style={{ fontFamily: "League Spartan" }}
          >
            <strong>¿Eres nuev@?</strong>
          </h4>
          <h5
            className="display-4 d-flex justify-content-center fw"
            style={{ fontFamily: "League Spartan" }}
          >
            Muestra a las empresas todo tu talento
          </h5>
          <ul
            className="display-6 list-group list-group-flush p-4"
            style={{ fontFamily: "League Spartan" }}
          >
            <li
              className="list-group-item text-white"
              style={{
                backgroundColor: "#369962",
              }}
            >
              Crea tu CV{" "}
            </li>
            <li
              className="list-group-item text-white"
              style={{
                backgroundColor: "#369962",
              }}
            >
              Inscríbete en las ofertas que te gustan
            </li>
            <li
              className="list-group-item text-white"
              style={{
                backgroundColor: "#369962",
              }}
            >
              Mantén actualizado tu CV
            </li>
          </ul>
        </div>
        <div style={{ alignSelf: "center"}}>  
          <img className="img-fluid" src={chicaRubia} alt="chicaRubia" height={"600px"} />
        </div>
      </div>
      <div className="container d-flex justify-content-center">
      <Button type= "button" className="btn  btn-lg rounded-pill" style={{backgroundColor: "#0d3878",color: "white",borderColor:"#ffffff"}} a href="/fromprofilemigrantscv"><strong>Registrarse</strong></Button>
      </div>
    </div>
  );
}

export default RegistrarseMigrants;
