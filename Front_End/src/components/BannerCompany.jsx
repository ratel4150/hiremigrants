import React from "react";

function BanerCompany () {
    return (
    <div
        className="container-fluid text-white"
        style={{
          backgroundColor: "#0D3878",
        }}
      >
        <div className="container d-flex justify-content-center p-5"></div>
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
              <strong> Contrata hoy mismo historias de vida y sueños
              que enriquezcan el ambiente laboral y multicultural de tu
              empresa.
              </strong>
            </h3>
            <p className="display-7 d-flex justify-content-center text-center">
              Accede a cientos de personas que buscan trabajo
              y encuentra a tu empleado ideal.
            </p>
          </div>
        </div>
      </div>

    );
};

export default BanerCompany;