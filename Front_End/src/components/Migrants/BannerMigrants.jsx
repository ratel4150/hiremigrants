import React from "react";
import Card from "react-bootstrap/Card";


import { BiBold, BiBriefcase, BiFontSize } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaBold } from "react-icons/fa";


function BannerMigrants() {
  return (
  
    <Card className="text-center text-white"
      style={{
      backgroundImage: "url(./banner.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
>
      <Card.Body>
        <p class="h2" style= {{ fontSize: 60, lineHeight: 1.1, }}>
        <strong>
            <p>Encuentra empleo en las empresas</p>
            <p>más interesantes de España</p>
        </strong>
        </p>
        <p class="h5">
          <p>
            Ahora el empleo lo eliges tú, más de 105.798 ofertas
          </p>
        </p>
        <div class="mbr-section-btn mt-3">
        <button
                  type="button"
                  className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white border-white"
                  style={{ backgroundColor: "#369962", marginTop: "1rem!important", marginRight: "2rem", marginLeft: "-0.6rem, "}}
                >
                  Categoría <BiBriefcase size={22} style={{marginLeft: "10"}}/>
                </button>
                <button
                  type="button"
                  className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white border-white"
                  style={{ backgroundColor: "#369962", marginTop: "1rem!important", marginRight: "2rem", marginLeft: "-0.6rem"}}
                >
                  Modalidad <BsClock size={22} style={{marginLeft: "10"}}/>
                </button>
                <button
                  type="button"
                  className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white border-white"
                  style={{ backgroundColor: "#369962", marginTop: "1rem!important", marginRight: "2rem", marginLeft: "-0.6rem"}}
                >
                  Lugar <BsGeoAlt size={22} style={{marginLeft: "10"}}/>
                </button>
                <button
                  type="button"
                  className="btn btn-ligth d-inline-flex btn-lg rounded-pill text-white"
                  style={{ backgroundColor: "#0d3878", marginTop: "1rem!important", marginRight: "2rem", marginLeft: "-0.6rem"}}
                >
                  Buscar Empleo <BsSearch size={22} style={{marginLeft: "10"}} />
                </button>
    </div>
    </Card.Body>
    </Card>
  );
}


export default BannerMigrants;