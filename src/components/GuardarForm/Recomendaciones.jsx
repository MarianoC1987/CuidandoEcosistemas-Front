import React from 'react';
import { motion } from "framer-motion";

import "./styles.css";

function Recomendaciones({page, setPage, formData, setFormData, x,setX }) {
  return (
    <div className="card"
    // initial={{ x: x }}
    // transition={{ duration: 0.5 }}
    // animate={{ x: 0 }}
    >
    <div className="step-title">Recomendaciones</div> 
      <input
        type="text"
        placeholder="Recomendaciones"
        // className="form-group"
        value={formData.recomendaciones} 
        onChange={(event) =>
            setFormData({ ...formData, recomendaciones: event.target.value }) 
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
            setX(1000);
          }}>
        Next
      </button>
    </div>  
    </div>
  );
}

export default Recomendaciones;
