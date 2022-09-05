import React from "react";

function AccedeCompany() {
  return (
    <div
      className="container-fluid text-white text-center p-3"
      style={{
        backgroundColor: "#0D3878",
      }}
    >
      <div className="container-fluid text-white justify-content-center">
        <h4
          className="display-4 d-flex justify-content-center fw p-5"
          style={{ fontFamily: "League Spartan" }}
        >
          <strong>
            ¿Ya estas registrado? <br />
            Accede como Empresa
          </strong>
        </h4>
      </div>
      <div>
        <p className="display-6 d-flex justify-content-center fw">
          Publica tu oferta de empleo y contrata hoy mismo
        </p>
      </div>
      <div
        className="container d-flex justify-content-center p-5 rounded"
        style={{ backgroundColor: "white" }}
      >
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
            <button
              type="submit"
              className="btn btn-warning btn-lg rounded fw-bold"
              style={{ backgroundColor: "#FF5B00", color: "white" }}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccedeCompany;
