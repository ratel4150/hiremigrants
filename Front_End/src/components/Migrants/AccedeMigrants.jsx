import React from "react";

function AccedeMigrants () {
  return (
    <div
      className="container-fluid text-white text-center p-3"
      style={{
        backgroundColor: "#fbc63a",
      }}
    >
      <div className="container-fluid text-white justify-content-center">
        <h4
          className="display-4 d-flex justify-content-center fw p-5"
          style={{ fontFamily: "League Spartan" }}
        >
          <strong>
            ¿Ya estas registrado? <br />
            Accede como Candidato
          </strong>
        </h4>
      </div>
      <div>
        <p className="display-6 d-flex justify-content-center fw">
        <strong>Hoy hay 7.485 empresas contratando con las mejores vacantes para ti</strong>
        </p>
      </div>
      <div
        className="container d-flex justify-content-center rounded"
        style={{ padding: "20px" }}
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
              placeholder="Password"
              aria-label="Email"
            />
          </div>
          <div class="col">
            <button
              type="submit"
              className="btn btn-lg rounded fw-bold"
              style={{ backgroundColor: "#0d3878", color: "white", borderColor: "white" }}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccedeMigrants;