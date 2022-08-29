import React from "react";
import Button from "react-bootstrap/Button";

function BannerSearch() {
  return (
    <div class="text-light">
      <div
        class="text-center mx-auto img-fluid"
        style={{
          backgroundImage: "url(./banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{padding: "0 0 30px 0"}}>
          <h1>HireMigrants</h1>
        </div>
        <div style={{padding: "0 0 30px 0"}}>
          <h3>
            Encuentra el en las empresas <br />
            mas interesates de España
          </h3>
        </div>
        <div style={{padding: "20px"}}>
          <Button variant="primary" size="lg" active>
          Buscar Empleo
        </Button>
        </div>
        <div style={{padding: "30px 0 10px 0"}}>
          <h3>
            Ahora el empleo lo elige tú.
            <br />
            Mas de 105,798 oportunidades!
          </h3>
        </div>
      </div>
    </div>
  );
}
export default BannerSearch;
