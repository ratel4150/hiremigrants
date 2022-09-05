import React from "react";
import { BiBriefcase } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

function BannerCompany() {
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
            className="display-1 d-flex justify-content-center text-center"
            style={{ fontFamily: "League Spartan" }}
          >
            <strong>
              Aquí encontrarás la
              <br /> persona que necesitas sea
              <br /> cual sea el empleo
            </strong>
          </h1>
          <h3 className="display-5 d-flex justify-content-center text-center">
            <strong>
              {" "}
              Contrata hoy mismo historias de vida y sueños que enriquezcan el
              ambiente laboral y multicultural de tu empresa.
            </strong>
          </h3>
          <p className="display-7 d-flex justify-content-center text-center">
            Accede a cientos de personas que buscan trabajo y encuentra a tu
            empleado ideal.
          </p>
        </div>
      </div>
      <div class="mbr-section-btn mt-3 container-fluid d-flex justify-content-center p-4 text-white">
        <button
          type="button"
          className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white border-white"
          style={{
            backgroundColor: "#0D3878",
            marginTop: "1rem!important",
            marginRight: "2rem",
            marginLeft: "-0.6rem, ",
          }}
        >
          Categoría <BiBriefcase size={22} style={{ marginLeft: "10" }} />
        </button>
        <button
          type="button"
          className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white border-white"
          style={{
            backgroundColor: "#0D3878",
            marginTop: "1rem!important",
            marginRight: "2rem",
            marginLeft: "-0.6rem",
          }}
        >
          Modalidad <BsClock size={22} style={{ marginLeft: "10" }} />
        </button>
        <button
          type="button"
          className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white border-white"
          style={{
            backgroundColor: "#0D3878",
            marginTop: "1rem!important",
            marginRight: "2rem",
            marginLeft: "-0.6rem",
          }}
        >
          Lugar <BsGeoAlt size={22} style={{ marginLeft: "10" }} />
        </button>
        <button
          type="button"
          className="btn btn-ligth d-inline-flex btn-lg rounded-pill text-white"
          style={{
            backgroundColor: "#FF5B00",
            marginTop: "1rem!important",
            marginRight: "2rem",
            marginLeft: "-0.6rem",
          }}
        >
          Buscar Empleo <BsSearch size={22} style={{ marginLeft: "10" }} />
        </button>
      </div>
    </div>
  );
}

export default BannerCompany;
