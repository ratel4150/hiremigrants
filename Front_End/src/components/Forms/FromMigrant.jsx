import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormRange from "react-bootstrap/esm/FormRange";

function FormMigrant() {
    return (
<div class=" container justify-content-center  padin: ">
<div class="text-center ">
        <h2 class=""><strong>Crea tu CV/perfil</strong></h2>
        <h4><strong>Miles de ofertas de empleo están esperándote.</strong></h4>
        </div >

    <div class="container row justify-content-center mt-4 ">
      <Form  style={{ backgroundColor: "#369962" }} className="form-control">
      <h2 class=""><strong>Datos personales </strong></h2>
        <InputGroup className="mb-3">
        <InputGroup.Text>Nombre y Apellido</InputGroup.Text>
        <Form.Control type="text" name="First name" aria-label="First name" placeholder="Nombre" />
        <Form.Control type="text" name="Last name"aria-label="Last name" placeholder="Apellido"/>
        </InputGroup>

        <InputGroup className="mb-3" >
        <InputGroup.Text>Cuenta tu historia de vida  </InputGroup.Text>
        <Form.Control as="textarea" type="text" name="History_Migrant" aria-label="With textarea" />
        </InputGroup>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefono </Form.Label>
        <Form.Control type="number" name= "phone" placeholder="Telefono de contacto" />
        </Form.Group>

         
        <Form.Label className="t"> Donde vives  </Form.Label>
        <Form.Select className="mb-3" aria-label="Default select example">
            <option>Comunidad</option>
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


        <Form.Label className="t"> Selecciona la modalidad de trabajo que prefieres  </Form.Label>
        <Form.Select className="mb-3" aria-label="Default select example">
            <option> Modalidad</option>
            <option value="1">Presencial</option>
            <option value="2">Remoto</option>
            <option value="3">Hibrido</option>
        </Form.Select>

        <Form.Label htmlFor="basic-url"> Comparte tus perfiles   </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        https://linkedin.com/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        https://www.facebook.com/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        https://github.com/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
    
      <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label> Carga tu curriculum </Form.Label>
            <Form.Control type="file" name="Cv" multiple />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label> Carga una imagen de perfil </Form.Label>
            <Form.Control type="file" name="imgMigrant" multiple />
        </Form.Group>
      
        <h2 class=""><strong>Educación </strong></h2>
        
        <Form.Label className="t"> Seleccione su maximo nivel de titulación  </Form.Label>
        <Form.Select className="mb-3" aria-label="Default select example">
            <option>Títulos oficial</option>
            <option value="1">Graduado en ESO</option>
            <option value="2">Bachiller</option>
            <option value="3">CFGM o grados medios de FP</option>
            <option value="4">CFGS o grados superiores de FP</option>
            <option value="5">Grado universitario</option>
            <option value="6">Máster universitario</option>  
        </Form.Select>
      
        <InputGroup className="mb-3">
        <InputGroup.Text> Titulacion  </InputGroup.Text>
        <Form.Control type="text" name="certificate_degree_name " aria-label="" placeholder="Certificado - Título " />
        <Form.Control type="text" name="instituto_universidad_nombre" aria-label="" placeholder="Instituto - Escuela - Universidad "/>
        <Form.Control type="number" name="finalización_fecha " aria-label="" placeholder=" Año de finalización"/>
        </InputGroup>
        
        <Form.Label className="t"> Relacione otros titulos, especializaciones o cursos realizados  </Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text> Otro </InputGroup.Text>
        <Form.Control type="text" name="certificate1" aria-label="" placeholder="Certificado - Título " />
        <Form.Control type="text" name="instituto1"aria-label="" placeholder="Instituto - Escuela - Universidad "/>
        <Form.Control type="number" name="finalización_fecha1 " aria-label="" placeholder=" Año de finalización"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <InputGroup.Text> Otro </InputGroup.Text>
        <Form.Control type="text" name="certificate2" aria-label="" placeholder="Certificado - Título " />
        <Form.Control type="text" name="instituto2"aria-label="" placeholder="Instituto - Escuela - Universidad "/>
        <Form.Control type="number" name="finalización_fecha2 " aria-label="" placeholder=" Año de finalización"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <InputGroup.Text> Otro </InputGroup.Text>
        <Form.Control type="text" name="certificate3" aria-label="" placeholder="Certificado - Título " />
        <Form.Control type="text" name="instituto3"aria-label="" placeholder="Instituto - Escuela - Universidad "/>
        <Form.Control type="number" name="finalización_fecha3 " aria-label="" placeholder=" Año de finalización"/>
        </InputGroup>

       

        <h2 class=""><strong>Experiencia profesional  </strong></h2>
        
        
        <Form.Label className="t"> Relacione la información de su ultimo u actual empleo  </Form.Label>
        <InputGroup className="mb-3" >
           <InputGroup.Text> Nombre  de la compañia </InputGroup.Text>
           <Form.Control as="textarea" type="text" name="company_name " aria-label="With textarea" />
           </InputGroup>
   
           <Form.Label className="t"> Selecciona el sector economico al que perfenece la compañia  </Form.Label>
           <Form.Select className="mb-3" aria-label="Default select example">
               <option>Sector  </option>
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
   
           <InputGroup className="mb-3" >
           <InputGroup.Text> Posición  o cargo  </InputGroup.Text>
           <Form.Control as="textarea" type="text" name="job_title" aria-label="With textarea" />
           </InputGroup>
   
           <InputGroup className="mb-3" >
           <InputGroup.Text> Descripción de la  tareas relizadas  </InputGroup.Text>
           <Form.Control as="textarea" type="text" name="job_description" aria-label="With textarea" />
           </InputGroup>
   
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label> Localizacion de la empresa </Form.Label>
           <Form.Control type="text" name= "job_location" placeholder="Pais - cuidad   " />
           </Form.Group>
   
        
      <h2 class=""><strong>Habilidades </strong></h2>
      <p> Indica el conjunto de tus habilidades y nivel de cada una de 0 a 10 </p>

      <Form.Label className=""> Idiomas </Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text>Ingles</InputGroup.Text>
            <Form.Control type="number" min="0" max="10" name="idioma" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>Castellano</InputGroup.Text>
            <Form.Control type="number" min="0" max="10" name="idioma" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>Catalan</InputGroup.Text>
            <Form.Control type="number" min="0" max="10" name="idioma" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>Frances</InputGroup.Text>
            <Form.Control type="number" min="0" max="10" name="idioma" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>Aleman</InputGroup.Text>
            <Form.Control type="number" min="0" max="10" name="idioma" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>Otro</InputGroup.Text>
            <Form.Control type="text" name="idioma" aria-label="" placeholder="Idioma" />
            <Form.Control type="number" min="0" max="10" name="idioma" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>

        <Form.Label> Mas habilidades </Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text>Habilidad</InputGroup.Text>
            <Form.Control type="text" name="skill" aria-label="" placeholder="Skill" />
            <Form.Control type="number" min="0" max="10" name="skill_level" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>Habilidad</InputGroup.Text>
            <Form.Control type="text" name="skill" aria-label="" placeholder="Skill" />
            <Form.Control type="number" min="0" max="10" name="skill_level" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>Habilidad</InputGroup.Text>
            <Form.Control type="text" name="skill" aria-label="" placeholder="Skill" />
            <Form.Control type="number" min="0" max="10" name="skill_level" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>Habilidad</InputGroup.Text>
            <Form.Control type="text" name="skill" aria-label="" placeholder="Skill" />
            <Form.Control type="number" min="0" max="10" name="skill_level" aria-label=" " placeholder="Nivel 0 - 10" />
        </InputGroup>

      <Button variant="primary" type="submit">
          Crear Perfil 
      </Button>

      </Form>
       
    </div>
</div>
    );
  }
  
  export default FormMigrant;  

  //<Form.Select className="mb-3" aria-label="Default select example">
  //<option>Idiomas </option>
  //<option value="1">Ingles</option>
  //<option value="2">Castellano</option>
  //<option value="3">Catalan</option>
  //<option value="4">Frances</option>
  //<option value="5">Aleman</option>  
  //</Form.Select>


<Form>
<Form.Select className="mb-3" aria-label="Default select example">
      <option>Idiomas </option>
      <option value="1">Ingles</option>
      <option value="2">Castellano</option>
      <option value="3">Catalan</option>
      <option value="4">Frances</option>
      <option value="5">Aleman</option>  
  </Form.Select>

{['checkbox',].map((type) => (
  <div key={`inline-${type}`} className="mb-3">
    <Form.Check 
      inline
      label="Bajo"
      name="idioma"
      type={type}
      id={`inline-${type}-1`}
    />
    <Form.Check
      inline
      label="Medio"
      name="idioma"
      type={type}
      id={`inline-${type}-2`}
    />
    <Form.Check
      inline
      label="Alto "
      name="idioma"
      type={type}
      id={`inline-${type}-3`}
    />
  </div>
))}
</Form>