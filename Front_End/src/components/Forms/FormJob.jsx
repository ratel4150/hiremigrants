import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

function FormJob() {
    return (
<div class="container  ">
    <div class="text-center ">
            <h2 class=""><strong>Postea una vacante</strong></h2>
            <h4><strong>Y accede a cientos de personas que buscan trabajo y encuentra tu empleado ideal.</strong></h4>
    </div >
    <div class="container row justify-content-center mt-4 ">
      <Form className="mb-3">

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Rellena el siguiente formulario </Form.Label>
        <Form.Control type="Job" placeholder="Nombre de la vacante" />
      </Form.Group>

        <Form.Select  className="mb-3" aria-label="Default select example">
            <option>Tipo de Contrato</option>
            <option value="1">Contrato Indefinido</option>
            <option value="2">Contrato Determinado</option>
            <option value="3">Contrato de Formación </option>
            <option value="4">Contrato en Prácticas</option>    
        </Form.Select>

        <Form.Select className="mb-3" aria-label="Default select example">
            <option>Categoria</option>
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

        <Form.Select className="mb-3" aria-label="Default select example">
            <option>Modalidad</option>
            <option value="1">Presencial</option>
            <option value="2">Remoto</option>
            <option value="3">Hibrido</option>
        </Form.Select>

        <InputGroup className="mb-3">
            <InputGroup.Text>Descripcion de la vacante </InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>Habilidades necesarias   </InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>

        <Form.Select className="mb-3" aria-label="Default select example">
            <option>Localizacion</option>
            <option value="1">Andalucía</option>
            <option value="2">Aragón</option>
            <option value="3">Islas Baleares</option>
            <option value="4">Canarias</option>
            <option value="5">Cantabria</option>
            <option value="6">Castilla-La Mancha</option>
            <option value="7">Castilla y León</option>
            <option value="8">Cataluña</option>
            <option value="9">Comunidad de Madrid</option>
            <option value="10">Comunidad Foral de Navarra</option>
            <option value="11">Comunidad Valenciana</option>
            <option value="12">Extremadura</option>
            <option value="13">Galicia</option>
            <option value="14">País Vasco</option>
            <option value="15">Principado de Asturias</option>
            <option value="16">Región de Murcia</option>
            <option value="17">La Rioja</option>
        </Form.Select>

        <Form.Check 
        type="switch"
        id="custom-switch"
        label=" Vacante activa "
      />
      <Form.Check 
        disabled
        type="switch"
        label="Vacante inactiva"
        id="disabled-custom-switch"
      />

        <Button variant="primary" type="submit">
          Postear Vacante
        </Button>


      </Form>
      </div>
</div>
    );
  }

export default FormJob; 