import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Company() {
  return (
    <Card className="text-center text-white bg-primary">
      <Card.Body>
        <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1 animate__animated animate__delay-1s animate__fadeInUp">
          <strong>
            Aquí encontrarás la persona que necesitas sea cual sea el empleo
          </strong>
        </h1>
        <h3 class="mbr-section-subtitle mbr-fonts-style mb-3 display-5 animate__animated animate__delay-1s animate__fadeInUp">
          <strong>
            Contrata hoy mismo historias de vida y sueños que enriquezcan el
            ambiente laboral y multicultural de tu empresa
          </strong>
        </h3>
        <p class="mbr-text mbr-fonts-style display-7 animate__animated animate__delay-1s animate__fadeInUp">
          Accede a cientos de personas que buscan trabajo y encuentra a tu
          empleado ideal.
        </p>
        <Button variant="outline-white text-white display-4">Categoría</Button>{" "}
        <Button variant="outline-white text-white display-4">Modalidad</Button>{" "}
        <Button variant="outline-white text-white display-4">Lugar</Button>{" "}
        <Button variant="outline-white text-white display-4">Encontar Candidatos</Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default Company;
