import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CompanyParteII() {
  return (
    <Card className="text-center bg-primary text-white">
      <Card.Body>
        <h4 class="card-title mbr-fonts-style mb-4 display-1 animate__animated animate__delay-1s animate__fadeInUp">
          <strong>¡Únete a nosotros y publica tu oferta de empleo !</strong>
        </h4>
        <p class="mbr-text mbr-fonts-style mb-4 display-5 animate__animated animate__delay-1s animate__fadeInUp">
          Publica una oferta en pocos minutos y empieza a recibir candidaturas
          hoy. Más del 70% de empresas encuentran un candidato para contratar en
          menos de 24 horas.
        </p>
        <Button variant="warning text-white">Publica tu Oferta</Button>{" "}
      </Card.Body>
      <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <Card
          border="primary"
          style={{ width: "18rem" }}
          className="mbr.flex p-4 bg-primary mb-3 col"
        >
          <Card.Body>
            <h1>1</h1>
            <Card.Title>Publica tu vacante</Card.Title>
            <Card.Text>
              Crea fácilmente tu oferta de trabajo y publícala en un click..
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          border="primary"
          style={{ width: "18rem" }}
          className="mbr.flex p-4 bg-primary mb-3 col"
        >
          <Card.Body>
            <h1>2</h1>
            <Card.Title>Revisa las postulaciones</Card.Title>
            <Card.Text>
              Selecciona a los mejores candidatos entre todos los CVs recibidos.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          border="primary"
          style={{ width: "18rem" }}
          className="mbr.flex p-4 bg-primary col"
        >
          <Card.Body>
            <h1>3</h1>
            <Card.Title>Contrata</Card.Title>
            <Card.Text>
              Encuentra al candidato que mejor se adapta al perfil buscado.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Card.Footer>
        <div className=" bg-primary text-center inline-block">
        <h4 class="card-title mbr-fonts-style mb-4 display-2">
            <strong>¿ Aun no esta registrada tu empresa ?</strong></h4>
            <h4>Registrate y accede a cientos de candidatos que buscan trabajo y encuentra a tu empleado ideal.</h4>
            <p class="mbr-text mbr-fonts-style mb-4 display-5">
                            Publica una oferta en pocos minutos y empieza a recibir candidaturas hoy.</p>
                        <div class="mbr-text mbr-fonts-style counter-container display-7">
  
                                <p class="animate__animated animate__delay-1s animate__fadeInUp">Más del 70% de empresas encuentran un candidato para contratar en menos de 24 horas.</p>
                          
                        </div>

                        <Button variant="warning text-white">Registrarse</Button>{" "}
                        </div>
                        <img src="https://r.mobirisesite.com/239652/assets/images/mira-c1-3-612x408.png?v=1OnHG5" class="rounded float-end" alt="..."></img>
      </Card.Footer>
    </Card>
  );
}

export default CompanyParteII;
