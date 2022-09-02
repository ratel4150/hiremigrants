import React from "react";
import sorprendido from "../Images/sorprendido.png";

function BodyCompany() {
  return (
    <div
      className="container-fluid text-white"
      style={{
        backgroundColor: "#0D3878",
      }}
    >
      <div className="container-fluid text-white d-inline-flex">
        <div>
          <h4
            className="display-4 d-flex justify-content-center fw p-3"
            style={{ fontFamily: "League Spartan" }}
          >
            <strong>
              Las empresas multiculturales crecen alrededor del 42% más, y
              tienen una rentabilidad superior al 36%{" "}
            </strong>
          </h4>
          <p className="display-6 d-flex justify-content-center fw">
            Accede a cientos de personas que buscan trabajo y encuentra a tu
            empleado ideal.
          </p>
        </div>
        <div>
          <img className="img-fluid" src={sorprendido} alt="" width={"600px"} />
        </div>
      </div>
    </div>
  );
}

export default BodyCompany;
