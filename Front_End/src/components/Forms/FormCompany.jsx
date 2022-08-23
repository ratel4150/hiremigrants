import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
  
  function FormCompany() {
    return (
<div class="container  ">
    <div class="text-center ">
            <h2 class=""><strong>Crea tu perfil de Empresa</strong></h2>
            <h4><strong>Accede a cientos de personas que buscan trabajo y encuentra tu empleado ideal.</strong></h4>
    </div >
    <div class="container row justify-content-center mt-4 ">
      <Form >
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Nombre de la compañia</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Descripcion </InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <Form.Label htmlFor="basic-url"> Seleccione el sector economico al  que  pertenece </Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Sector</option>
        <option value="1">Administracion pública</option>
        <option value="2">Aeronautica</option>
        <option value="3">Agricultura/Ganaderia</option>
        <option value="4">Alimentación</option>
        <option value="5">Arte/cultura/Deporte</option>
        <option value="6">Audivisualesa</option>
        <option value="7">Automoción</option>
        <option value="8">Banca/Seguros</option>
        <option value="9">Contact Center</option>
        <option value="10">Educación/Formación</option>
        <option value="11">Farma/Quimica</option>
        <option value="12">Healthcare</option>
        <option value="13">Hostelería/Turismo</option>
        <option value="14">Industria</option>
        <option value="15">Informática y Telecomunicaciones</option>
        <option value="16">Construción e Inmobiliaria</option>
        <option value="17">Marketing y Comunicación</option>
        <option value="18">Retail / Distribución</option>
        <option value="19">Transporte y Logística</option>
        <option value="20">RRHH</option>
        <option value="21">Otros</option>
    
      </Form.Select>

      <Form.Label htmlFor="basic-url">Pagina web de la compañia </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Acepta las condiciones " />
      </Form.Group>

        <Button variant="primary" type="submit">
          Crear Perfil 
        </Button>
      </Form>
      </div>
</div>
    );
  }
  
  export default FormCompany;  







