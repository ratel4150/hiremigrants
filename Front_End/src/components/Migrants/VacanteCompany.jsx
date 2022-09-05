import React from "react";
import Card from "react-bootstrap/Card";

function VacanteCompany() {
  return (
    <div className="container-fluid text-center">
      <div>
        <h1>
          <strong>Cargo</strong>
        </h1>
      </div>
      <div className="text-white" style={{
        backgroundColor: "#369962",
      }}
      >
        <h3>Nombre de la empresa</h3>
            <h5>Jornada</h5>
            <h5>Remoto o Prsencial</h5>
            <h5>Fecha Publicación</h5>
        <Card className="text-black mx-5">
          <h3 className="p-2">Descripción del trabajo</h3>
          <p></p>
        </Card>
        <h3>Habilidades requeridas</h3>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
      <div className="container d-flex justify-content-center p-3">
        <button
          type="button"
          className="btn btn btn-lg rounded-pill fw-bold"
          style={{ backgroundColor: "#0D3878", color: "white" }}
        >
          Inscribirme en esta Oferta
        </button>
      </div>
    </div>
  );
}

export default VacanteCompany;
