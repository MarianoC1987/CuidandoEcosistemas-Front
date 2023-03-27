import React  from 'react';
import { Link } from "react-router-dom";
import "./styles.css";

const  SaludPlanta=({page, setPage, formData, setFormData}) => {
  return (
    <div className="card">
      <div className="step-title">Salud de la Planta</div> 
      <input
        type="text"
        placeholder="Salud de la Planta"
        className="form-group"
        value={formData.salud} 
        onChange={(event) =>
            setFormData({ ...formData, salud: event.target.value }) 
          }
      />
      <div className="buttonContainer">
      <button    onClick={() => {
            setPage(page + 1);
          }}>
        Next
      </button>
      </div>
    </div>
  )
}

export default SaludPlanta;
