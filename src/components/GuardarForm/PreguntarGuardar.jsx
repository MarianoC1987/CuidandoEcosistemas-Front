import React, {useEffect} from 'react'
import { motion } from "framer-motion";

import "./styles.css";

function PreguntarGuardar({page, setPage, x,setX, saved, setSaved }) {

    const buttonHandler = () => {
        setSaved(current => !current)
        console.log(saved) 
      }
      useEffect( () => {
        console.log(saved);
    }, [saved]);
  return (
    <motion.div className="card-preguntar"
    initial={{ x: x }}
    transition={{ duration: 0.8 }}
    animate={{ x: 0 }}
    >
        <div className="step-title">¿Desea guardar la planta? </div> 
        <div className='buttonContainer-preguntar'>
        <button onClick={() => {
            setPage(page - 1);
            setX(-1000);

          }}>
        Previous
      </button>
      <button onClick={()=>{
        setSaved(true);
        setPage(page + 1);
        setX(1000);
        }} type="button">
        Submmit
      </button>
      </div>
    </motion.div>
  )
}

export default PreguntarGuardar
