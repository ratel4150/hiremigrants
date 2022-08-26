import React from 'react'

function BannerCompany() {
  return (
    <div className='container-fluid colorazul text-white d-inline-flex'>
    <div className='container d-flex justify-content-center p-5'>
        <img src={image} alt="" width='100%'/>
    </div>
    <div className='container p-4'>
    <div className='container m-4'>
    <h1 className='display-1 d-flex justify-content-center '><strong>¿Eres una empresa?
        </strong>
        <br /></h1>
        <h2 className='display-3 d-flex justify-content-center'>
            <strong>Aqui encontraras la<br/> persona que necesitas<br/> cual sea el empleo</strong>
        </h2>
        <p className='display-6 d-flex justify-content-center'>
            Contrata hoy mismo historias de vida y sueños <br/>que enriquezcan el ambiente laboral y<br/> multicultural de tu empresa
        </p>
        </div>
        <div className='container d-flex justify-content-center'>
        
        <button type="button" class="btn btn-light">Encontrar candidatos</button>

        </div>
        <div className='container '>
            <h4 className='display-4 d-flex justify-content-center'><strong>
            Las empresas multiculturales <br/>crecen alrededor del 42%<br/> más, y tienen una rentabilidad <br/>superior al 36% </strong></h4>
            <p className='display-6 d-flex justify-content-center'>
                
            Accede a cientos de personas que buscan trabajo<br/> y encuentra a tu empleado ideal.
            </p>

        </div>
        </div>


</div>
  )
}

export default BannerCompany