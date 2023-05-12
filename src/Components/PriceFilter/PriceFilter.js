import React from 'react'
import './PriceFilter.css'
import {useState} from "react"


const PriceFilter = () => {
  
  const [value, setValue] = useState(0);

  
  const addHandler = () => {
    setValue(value + 1)
  }

  const minusHandler = () => {
    setValue(value - 1)
  }

  return (
    <>
    <section className="w-100 p-4 justify-content-center">
      <div className="row justify-content-center mb-5" id="spinner-example-filters">
        <p className="text-center fa-lg fw-bold">Precio:</p>

        <div className="col-md-3 mt-3 text-center">
          <div className="form-outline">
          <label className="form-label" for="typeNumber" >Mínimo:</label>
            <input type="number"  id="typeNumber" className="form-control active" value="0"/>
          <div className="form-notch"><div className="form-notch-leading" style={{width: 9}}></div><div className="form-notch-middle" style={{width: 61.6}}></div><div className="form-notch-trailing"></div></div></div>
        </div>

        <div className="col-md-3 mt-3 text-center">
          <div className="form-outline">
          <label className="form-label" for="typeNumber2" >Máximo:</label>
            <input type="number" id="typeNumber2" className="form-control active" value="5000"/>
          <div className="form-notch"><div className="form-notch-leading" style={{width: 9}}/><div><div className="form-notch-middle" style={{width: 64.8}}></div><div className="form-notch-trailing"></div></div></div>
        </div>
      </div>
      </div>
    </section>
   
    </>
  )
}

export default PriceFilter