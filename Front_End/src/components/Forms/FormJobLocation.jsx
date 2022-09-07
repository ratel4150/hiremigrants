
import React , { useState } from 'react';
import {Link} from "react-router-dom";

function FormJobLocation() {

    const [id, setID] = useState("");
    const [street, setStreet] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [createdAt, setCreatedAT] = useState("");
    const [updatedAt, setUpdatedAT] = useState("");
    
    
    function handleIdChange(event) {
      if (event.target.name === "nuevoId") {
          setID(event.target.value);
        } else if (event.target.name === "calle") {
          setStreet(event.target.value);
        } else if (event.target.name === "provincia") {
            setProvince(event.target.value);
        } else if (event.target.name === "ciudad") {
            setCity(event.target.value);
        } else if (event.target.name === "codigo") {
            setZip(event.target.value);
        } else if (event.target.name === "createdAt") {
          setCreatedAT(event.target.value);
        }
        else if (event.target.name === "updatedAt") {
          setUpdatedAT(event.target.value);
        }
    
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
        console.log("Sending data to server");
    
        fetch("http://localhost:8080/record-job-locations", {
          method: "POST",
          body: JSON.stringify({
            nuevoId: id,
            calle: street,
            provincia:province,
            ciudad:city,
            codigo:zip,
            createdAt: createdAt,
            updatedAt:updatedAt
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
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


      <form onSubmit={handleSubmit} style={{display:"block"}}>
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Id:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="nuevoId" id="nuevoId" value={id} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Calle y numero:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="calle" id="calle" value={street} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Provincia:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="provincia" id="provincia" value={province} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Ciudad:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="ciudad" id="ciudad" value={city} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Codigo Postal:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="codigo" id="codigo" value={zip} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">creado:</label>
        <input className="form-control"    style={{display:"block"}} type="date" name="createdAt" id="createdAt" value={createdAt} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">actualizado:</label>
        <input className="form-control"    style={{display:"block"}} type="date" name="updatedAt" id="updatedAt" value={updatedAt} onChange={handleIdChange} />
        
        <button  className='btn btn-primary m-2 bt'><Link style={{color:"white",textDecoration:"none"}} to="">Enviar Datos</Link></button>



      </form>
  
    </div>
  </div>
  )
}

export default FormJobLocation