import React from "react";
import Button from 'react-bootstrap/Button';

function PublicaCompany() {
  return (
    <div
      className="container-fluid text-white text-center p-5"
      style={{
        backgroundColor: "#0D3878",
      }}
    >
      <h4
        className="display-1 d-flex justify-content-center "
        style={{ fontFamily: "League Spartan" }}
      >
        <strong>¡Únete a nosotros y publica tu oferta de empleo !</strong>
      </h4>
      <p className="display-6 d-flex justify-content-center">
        <strong>
          Publica una oferta en pocos minutos y empieza a recibir candidaturas
          hoy. Más del 70% de empresas encuentran un candidato para contratar en
          menos de 24 horas.
        </strong>
      </p>
      <div className="container d-flex justify-content-center">
      <Button type= "button" className="btn  btn-lg rounded-pill" style={{backgroundColor:"#ff5b00",color:"white",borderColor:"#ffffff"}} a href="/formjobpost"><strong>Publica tu Oferta</strong></Button>
      </div>
      <div class="container text-center p-5">
        <div class="row align-items-start">
          <div class="col">
            <button
              type="button"
              className="btn btn-warning btn-lg rounded-circle fw-bold"
              style={{ backgroundColor: "#FF5B00",color: "white",borderColor:"#ffffff" }}
            >
              1
            </button>
            <h2>Publica tu vacante</h2>
            <p>Crea fácilmente tu oferta de trabajo y publícala en un click.</p>
          </div>
          <div class="col">
            <button
              type="button"
              className="btn btn-warning btn-lg rounded-circle fw-bold"
              style={{ backgroundColor:"#FF5B00",color: "white",borderColor:"#ffffff" }}
            >
              2
            </button>
            <h2>Revisa las postulaciones</h2>
            <p>
              Selecciona a los mejores candidatos entre todos los CVs recibidos.
            </p>
          </div>
          <div class="col">
            <button
              type="button"
              className="btn btn-warning btn-lg rounded-circle fw-bold"
              style={{ backgroundColor:"#FF5B00",color: "white",borderColor:"#ffffff" }}
            >
              3
            </button>
            <h2>Contrata</h2>
            <p>Encuentra al candidato que mejor se adapta al perfil buscado.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicaCompany;
