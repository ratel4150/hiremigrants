


import React , { useState } from 'react';
import {Link} from "react-router-dom";

function FormJobPost() {

  
  const [id, setID] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [modality, setModality] = useState("");
  const [create, setCreate] = useState("");
  const [state, setState] = useState("");
  const [createdAt, setCreatedAT] = useState("");
  const [updatedAt, setUpdatedAT] = useState("");
  const [typeId, setTypeId] = useState("");
  const [jobLocationId, setJobLocationId] = useState("");
  const [companyId, setCompanyId] = useState("");
  function handleIdChange(event) {
    if (event.target.name === "id") {
        setID(event.target.value);
      } else if (event.target.name === "description") {
          setDescription(event.target.value);
        } else if (event.target.name === "category") {
          setCategory(event.target.value);
        } else if (event.target.name === "modality") {
          setModality(event.target.value);
        } else if (event.target.name === "create") {
          setCreate(event.target.value);
        } else if (event.target.name === "state") {
          setState(event.target.value);
        
      } else if (event.target.name === "createdAt") {
        setCreatedAT(event.target.value);
      }
      else if (event.target.name === "updatedAt") {
        setUpdatedAT(event.target.value);
      } else if (event.target.name === "typeId") {
      setTypeId(event.target.value);
    } else if (event.target.name === "jobLocationId") {
      setJobLocationId(event.target.value);}
      else if (event.target.name === "companyId") {
        setCompanyId(event.target.value);
  
    }}


    function handleSubmit(event) {
      event.preventDefault();
  
      console.log("Sending data to server");
  
      fetch("http://localhost:8080/record-job-post", {
        method: "POST",
        body: JSON.stringify({
          id: id,
          description:description,
          category:category,
          modality:modality,
          create:create,
          state:state,
          createdAt: createdAt,
          updatedAt:updatedAt,
          typeId:typeId,
          jobLocationId:jobLocationId,
          companyId:companyId
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
        <input className="form-control"    style={{display:"block"}} type="text" name="id" id="id" value={id} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Descripcion del trabajo:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="description" id="description" value={description} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Categoria de trabajo:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="category" id="category" value={category} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Modalidad de trabajo:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="modality" id="modality" value={modality} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Creacion del trabajo:</label>
        <input className="form-control"    style={{display:"block"}} type="date" name="create" id="create" value={create} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Estado del trabajo:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="state" id="state" value={state} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">creado:</label>
        <input className="form-control"    style={{display:"block"}} type="date" name="createdAt" id="createdAt" value={createdAt} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">actualizado:</label>
        <input className="form-control"    style={{display:"block"}} type="date" name="updatedAt" id="updatedAt" value={updatedAt} onChange={handleIdChange} />
       
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Tipo de trabajo:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="typeId" id="typeId" value={typeId} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Lugar de trabajo:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="jobLocationId" id="jobLocationId" value={jobLocationId} onChange={handleIdChange} />
        <label className="form-label"     style={{display:"block"}}  htmlFor="">Empresa:</label>
        <input className="form-control"    style={{display:"block"}} type="text" name="companyId" id="companyId" value={companyId} onChange={handleIdChange} />
        <button  className='btn btn-primary m-2 bt'><Link style={{color:"white",textDecoration:"none"}} to="">Enviar Datos</Link></button>



      </form>
  
    </div>
  </div>
  )
}

export default FormJobPost