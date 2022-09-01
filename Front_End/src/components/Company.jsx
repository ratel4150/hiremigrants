import React from "react";

function Company() {
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
        <button
          type="button"
          className="btn btn-warning btn-lg rounded-pill fw-bold"
          style={{ backgroundColor: "#FF5B00", color: "white" }}
        >
          Publica tu Oferta
        </button>
      </div>
      <div class="container text-center p-5">
        <div class="row align-items-start">
          <div class="col">
            <button
              type="button"
              className="btn btn-warning btn-lg rounded-circle fw-bold"
              style={{ backgroundColor: "#FF5B00", color: "white" }}
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
              style={{ backgroundColor: "#FF5B00", color: "white" }}
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
              style={{ backgroundColor: "#FF5B00", color: "white" }}
            >
              3
            </button>
            <h2>Contrata</h2>
            <p>Encuentra al candidato que mejor se adapta al perfil buscado.</p>
          </div>
        </div>
      </div>
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
      <div className="container-fluid text-white justify-content-center">
        <h4
          className="display-4 d-flex justify-content-center fw p-5"
          style={{ fontFamily: "League Spartan" }}
        >
          <strong>¿Ya estas registrado? <br/>
            Accede como Empresa
          </strong>
        </h4>
      </div>
      <div>
        <p className="display-6 d-flex justify-content-center fw">
      Publica tu oferta de empleo y contrata hoy mismo
        </p>
        </div>
      <div className="container d-flex justify-content-center p-5 rounded" style={{ backgroundColor:"white"}}>
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              aria-label="Name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div class="col">
          <button type="submit" className="btn btn-warning btn-lg rounded fw-bold"
          style={{ backgroundColor: "#FF5B00", color: "white" }}>Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
