import React from 'react'
import './SizeFilter.css'

const SizeFilter = () =>{
  return (
    <>
    <div className="row justify-content-center" id="basic-example-filters" data-mdb-items=".basic-example-item" data-mdb-auto-filter="true">
        <div className="col-md-6" data-mdb-filter="color">
          <span className="text-center fa-lg fw-bold">Talles:</span>

          <div className="form-check mt-3">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="black"/>
            <label className="form-check-label" for="inlineRadio1">S</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="red"/>
            <label className="form-check-label" for="inlineRadio2">M</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="blue"/>
            <label className="form-check-label" for="inlineRadio3">L</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="white"/>
            <label className="form-check-label" for="inlineRadio3">XL</label>
          </div>

        </div>
        </div>
      </>
  )
}

export default SizeFilter