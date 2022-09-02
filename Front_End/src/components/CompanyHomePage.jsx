import React from "react";
import { FaSearch } from "react-icons/fa";

function CompanyHomePage() {
  return (
    <div
      className="container-fluid text-white"
      style={{
        backgroundColor: "#0D3878",
      }}
    >
      <div className="container d-flex justify-content-center p-3"></div>
      <div className="container p-4">
        <div className="container m-4">
          <h1
            className="display-1 d-flex justify-content-center"
            style={{ fontFamily: "League Spartan" }}
          >
            <strong>¿Eres una empresa?</strong>
            <br />
          </h1>
          <h2
            className="display-3 d-flex justify-content-center text-center"
            style={{ fontFamily: "League Spartan" }}
          >
            <strong>
              Aquí encontrarás la
              <br /> persona que necesitas
              <br /> sea cual sea el empleo
            </strong>
          </h2>
          <p className="display-6 d-flex justify-content-center text-center">
            Contrata hoy mismo historias de vida y sueños que enriquezcan el
            ambiente laboral y multicultural de tu empresa.
          </p>
        </div>

        <div className="container d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-warning btn-lg rounded-pill fw-bold"
            style={{ backgroundColor: "#FF5B00", color: "white" }}
          >
            Encontrar candidatos <FaSearch />
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default CompanyHomePage;
