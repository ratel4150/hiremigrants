import React from "react";
import womanPrincipal from "../Images/woman-principal.png";
import manPrincipal from "../Images/manprincipal.png";
// import { RiCheckboxBlankCircleFill } from "react-icons/ri";

import { ImSearch } from "react-icons/im";

function Banner() {
  return (
    <div
      className="container-fluid  d-flex justify-content-between banner"
      style={{
        background:
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      }}
    >
      <div
        style={{
          width: "20%",
          backgroundColor: "#33FFFC",
          border: "2px solid white",
          alignSelf: "center",
          height: "100%",
        }}
        className="rounded-pill shadow-lg"
      >
        <img className="img-fluid" src={womanPrincipal} alt="" />
      </div>
      <div className="flex-column" style={{ width: "60%" }}>
        <div className="" ></div>
        <div style={{ height: "60%" }}>
          <h1
            className="text-white text-center display-1"
            style={{ textShadow: "-3px 2px 2px rgba(150, 150, 150, 0.87) ", marginTop: "10%" }}
          >
            <strong>¿Eres un migrante</strong>?
          </h1>
          <h2
            className="text-white text-center display-6"
            style={{ textShadow: "-3px 2px 2px rgba(150, 150, 150, 0.87)" }}
          >
            <strong>
              Encuentra empleo en las empresas mas interesantes de España
            </strong>
          </h2>
          <div className="container d-flex justify-content-center mt-4">
            <button
              type="button"
              className="btn  btn-lg rounded-pill "
              style={{ backgroundColor: "#0d3878", color: "white", margin: "5%" }}
            >
              <strong>Buscar empleo</strong> <ImSearch />
            </button>
          </div>
        </div>
        <div style={{ height: "20%" }}></div>
      </div>
      <div
        style={{
          width: "20%",
          backgroundColor: "orange",
          border: "2px solid white",
          alignSelf: "center",
          height: "100%",
        }}
        className="rounded-pill shadow-lg "
      >
        <img className="img-fluid" src={manPrincipal} alt="" />
      </div>
    </div>
  );
}

export default Banner;
