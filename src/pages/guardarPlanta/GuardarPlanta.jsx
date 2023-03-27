import React,{ useState } from 'react';
import logo from "../../assets/images/logo-sinletras.png";


import SaludPlanta from "../../components/GuardarForm/SaludPlanta";
import Recomendaciones from '../../components/GuardarForm/Recomendaciones';
import Informacion from '../../components/GuardarForm/Informacion';
import PreguntarGuardar from "../../components/GuardarForm/PreguntarGuardar";

import "./guardarPlanta.css";



function GuardarPlanta() {

const [x, setX] = useState(0);
const [saved, setSaved] = useState(false);

const [formData, setFormData] = useState({
        salud: "",
        informacion: "",
        recomendacion: "",
      }); 

console.log(formData);

const [page, setPage] = useState(0);
const listcomponents = [
    <SaludPlanta 
    formData={formData}
    setFormData={setFormData}
    page={page}
    setPage={setPage}
    />,
    <Informacion 
    formData={formData}
    setFormData={setFormData}
    page={page}
    setPage={setPage}
    />,
    <Recomendaciones 
    formData={formData}
    setFormData={setFormData}
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}
    />,
    <PreguntarGuardar
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}
    saved={saved}
    setSaved={setSaved}
    />
];
console.log(saved); 


  return (
    <div className='guardarContainer'>
        { saved == true ? <h1 className='guardarTitle'>Planta Guardada!</h1> : (
            <h1 className='guardarTitle'>Guardar Planta</h1> 
        )
        }

    {saved==false ? <div className="progress-bar">
      <div style={{width: page === 0? "33%": page === 1? "66%": page === 2? "85%" : "100%"}}></div>
    </div> : (<div></div>) 
    } 


    <div>{listcomponents[page]}</div>

    <div className="homeLogo">
        <img src={logo} />
    </div>

    </div>
  )
}

export default GuardarPlanta;

