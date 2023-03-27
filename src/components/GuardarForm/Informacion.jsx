import React from 'react'
import "./styles.css";

function Informacion({page, setPage, formData, setFormData}) {
  return (
    <div className="card">
    <div className="step-title">Información</div> 
      <input
        type="text"
        placeholder="Información"
        // className="form-group"
        value={formData.informacion} 
        onChange={(event) =>
            setFormData({ ...formData, informacion: event.target.value }) 
          }
      />
    <div className="buttonContainer">

      <button onClick={() => {
            setPage(page - 1);
          }}>
        Previous
      </button>
      <button onClick={() => {
            setPage(page + 1);
          }}>
        Next
      </button>
    </div>  
    </div>
  )
}

export default Informacion
