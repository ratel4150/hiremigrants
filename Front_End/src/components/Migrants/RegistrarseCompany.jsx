import React from "react";

function RegistrarseCompany() {
  return (
    <div
      className="container-fluid text-white text-center p-3"
      style={{
        backgroundColor: "#0D3878",
      }}
    >
      <div className="container-fluid text-white d-inline-flex">
        <div>
          <h4
            className="display-4 d-flex justify-content-center fw p-5"
            style={{ fontFamily: "League Spartan" }}
          >
            <strong>¿Aun no esta registrada tu empresa?</strong>
          </h4>
          <h4
            className="display-5 d-flex justify-content-center fw"
            style={{ fontFamily: "League Spartan" }}
          >
            Registrate y accede a cientos de candidatos que buscan trabajo y
            encuentra a tu empleado ideal.
          </h4>
          <h5
            className="display-5 d-flex justify-content-center fw"
            style={{ fontFamily: "League Spartan" }}
          >
            Publica una oferta en pocos minutos y empieza a recibir candidaturas
            hoy.
          </h5>
        </div>
        <div>
          <img
            src="https://r.mobirisesite.com/239652/assets/images/mira-c1-3-612x408.png?v=1OnHG5"
            alt=""
            width={"600px"}
          />
        </div>
      </div>
      <div className="container-fluid">
        <p className="display-6 d-flex justify-content-center fw">
          Más del 70% de empresas encuentran un candidato para contratar en
          menos de 24 horas.
        </p>
      </div>
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-warning btn-lg rounded-pill fw-bold"
          style={{ backgroundColor: "#FF5B00", color: "white" }}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default RegistrarseCompany;
