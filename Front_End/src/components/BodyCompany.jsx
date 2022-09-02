import React from "react";

function BodyCompany () {
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
              Las empresas multiculturales crecen alrededor del 42%
             más, y tienen una rentabilidad superior al 36%{" "}
            </strong>
          </h4>
          <p className="display-6 d-flex justify-content-center fw">
            Accede a cientos de personas que buscan trabajo
           y encuentra a tu empleado ideal.
          </p>
          </div>
          <div>
            <img src="https://r.mobirisesite.com/239652/assets/images/mira-c1-3-612x408.png?v=1OnHG5" alt="" />
          </div>
        </div>
    </div>
    );
};

export default BodyCompany;