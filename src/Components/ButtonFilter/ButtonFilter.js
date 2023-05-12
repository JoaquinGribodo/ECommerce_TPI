import React from 'react'
import "./ButtonFilter.css"

//tampoco borra los filtros

const ButtonFilter = () =>{
  return (
    <div className='button'>
        <button type="button" className="btn btn-primary">
            Borrar todos los filtros
        </button>
    </div>
  )
}

export default ButtonFilter