
import React , { useState } from 'react';

import { Link } from "react-router-dom";
function FormBusinessStream() {

    const [id, setID] = useState("");
  const [businessNameStream, setBusinessNameStream] = useState("");
  const [createdAt, setCreatedAT] = useState("");
  const [updatedAt, setUpdatedAT] = useState("");


  function handleIdChange(event) {
    if (event.target.name === "nuevoId") {
        setID(event.target.value);
      } else if (event.target.name === "business_stream_name") {
        setBusinessNameStream(event.target.value);
      } else if (event.target.name === "createdAt") {
        setCreatedAT(event.target.value);
      }
      else if (event.target.name === "updatedAt") {
        setUpdatedAT(event.target.value);
      }

    }

   /*  setID(event.target.value);
  }
  function handleBusinessChange(event) {
    setBusinessNameStream(event.target.value);
  }
  function handleCreatedChange(event) {
    setCreatedAT(event.target.value);
  }
  function handleUpdatedChange(event) {
    setUpdatedAT(event.target.value);
  } */

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Sending data to server");

    fetch("http://localhost:8080/business-stream", {
      method: "POST",
      body: JSON.stringify({
        nuevoId: id,
        business_stream_name: businessNameStream,
        createdAt: createdAt,
        updatedAt:updatedAt
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
console.log(id)
console.log(businessNameStream)
console.log(createdAt)
console.log(updatedAt)

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
          <label className="form-label"     style={{display:"block"}}  htmlFor="">business stream:</label>
          <input className="form-control"    style={{display:"block"}} type="text" name="business_stream_name" id="business_stream_name" value={businessNameStream} onChange={handleIdChange} />
          <label className="form-label"     style={{display:"block"}}  htmlFor="">creado:</label>
          <input className="form-control"    style={{display:"block"}} type="text" name="createdAt" id="createdAt" value={createdAt} onChange={handleIdChange} />
          <label className="form-label"     style={{display:"block"}}  htmlFor="">actualizado:</label>
          <input className="form-control"    style={{display:"block"}} type="text" name="updatedAt" id="updatedAt" value={updatedAt} onChange={handleIdChange} />
          
          <button  className='btn btn-primary m-2 bt'><Link style={{color:"white",textDecoration:"none"}} to="/home">Enviar Datos</Link></button>



        </form>
    
      </div>
    </div>
  )
}

export default FormBusinessStream