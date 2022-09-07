import React , { useState } from 'react';

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

function FormCompany() {

  
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [url, setUrl] = useState("");
  
  const [createdAt, setCreatedAT] = useState("");
  const [updatedAt, setUpdatedAT] = useState("");
  const [business, setBusiness] = useState("");

  


  function handleIdChange(event) {
    console.log(event);
    if (event.target.name === "id") {
        setID(event.target.value);
      } else if (event.target.name === "name") {
        setName(event.target.value);
      } else if (event.target.name === "description") {
        setDescription(event.target.value);
        
      }else if (event.target.name === "date") {
        setDate(event.target.value);
        
        
        
      }
      else if (event.target.name === "contact") {
        setContact(event.target.value);
        
      }
      else if (event.target.name === "url") {
        setUrl(event.target.value);
        
      }
      
       else if (event.target.name === "createdAt") {
        setCreatedAT(event.target.value);
      }
      else if (event.target.name === "updatedAt") {
        setUpdatedAT(event.target.value);
      }
      else if (event.target.name === "option") {
        setBusiness(event.target.value)
        
      }

    }

    function handleSubmit(event) {
      event.preventDefault();
  
      console.log("Sending data to server");
  
      fetch("http://localhost:8080/company-register", {
        method: "POST",
        body: JSON.stringify({
          newIdCompany:id,
          name:name,
          description:description,
          date:date,
          contact:contact,
           url:url,
           createdAt:createdAt,
           updatedAt:updatedAt,
           business:business
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    console.log(business)
    console.log(name);
  return (
    <div className="container  ">
      <div className="text-center ">
        <h2 className="">
          <strong>Crea tu perfil de Empresa</strong>
        </h2>
        <h4>
          <strong>
            Accede a cientos de personas que buscan trabajo y encuentra tu
            empleado ideal.
          </strong>
        </h4>
      </div>
      <div className="container row justify-content-center m-4 ">


        <form onSubmit={handleSubmit}  style={{display:"block"}}>
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Id:</label>
          <input className="form-control"    style={{display:"block"}} type="text" name="id" id="id"  value={id}  onChange={handleIdChange}/>
          <label className="form-label"     style={{display:"block"}}  htmlFor="">Nombre de compañia:</label>
          <input className="form-control"    style={{display:"block"}} type="text" name="name" id="name"  value={name}  onChange={handleIdChange}/>
          <label  className="form-label"   style={{display:"block"}} htmlFor="description">Descripcion de la compañia:</label>
          <textarea className="form-control"    style={{display:"block"}} name="description" id="description" cols="30" rows="10" value={description}  onChange={handleIdChange}></textarea>
          <label className="form-label"    style={{display:"block"}} htmlFor="date">Fecha de creacion:</label>
          <input  className="form-control"   style={{display:"block"}} type="date" name="date" id="date" value={date}  onChange={handleIdChange} />
          <label className="form-label"    style={{display:"block"}} htmlFor="contact">Numero de Contacto:</label>
          <input  className="form-control"   style={{display:"block"}} type="text" name="contact" id="contact"  value={contact}  onChange={handleIdChange}/>
          <label  className="form-label"   style={{display:"block"}} htmlFor="url">Url de la empresa:</label>
          <input  className="form-control"   style={{display:"block"}} type="url" name="url" id="url"  value={url}  onChange={handleIdChange}/>
          <label className="form-label"     style={{display:"block"}}  htmlFor="">creado:</label>
          <input className="form-control"    style={{display:"block"}} type="date" name="createdAt" id="createdAt" value={createdAt} onChange={handleIdChange} />
          <label className="form-label"     style={{display:"block"}}  htmlFor="">actualizado:</label>
          <input className="form-control"    style={{display:"block"}} type="date" name="updatedAt" id="updatedAt" value={updatedAt} onChange={handleIdChange} />
          <select className="form-select m-2" name='option' id='option'   value={business} onChange={handleIdChange} >
  <option value="1">1</option>
  <option value="2">2</option>
  
</select>
          

          <button  className='btn btn-primary m-2 bt'><Link style={{color:"white",textDecoration:"none"}} to="">Enviar Datos</Link></button>



        </form>
     
      </div>
    </div>
  );
}

export default FormCompany;
