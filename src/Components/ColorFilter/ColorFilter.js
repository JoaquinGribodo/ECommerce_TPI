import React from 'react'
import "./ColorFilter.css"

const ColorFilter = () =>{
  return (
    <>
    <div className="row justify-content-center" data-mdb-items=".color-example-item" data-mdb-auto-filter="true" >
        <div className="col-md-12 text-center mb-3" data-mdb-filter="color" style={{padding: 20}}>
          <span className="text-center fa-lg fw-bold" style={{display: 'block'}}>Color:</span>

          <div className="form-check form-check-inline" style={{paddingLeft: 3}}>
            <input className="btn-check" type="radio" name="colorRadio" value="red"/>
            <label className="btn bg-danger btn-rounded p-3"></label>
          </div>

          <div className="form-check form-check-inline" style={{paddingLeft: 3}}>
            <input className="btn-check" type="radio" name="colorRadio"  value="blue"/>
            <label className="btn bg-primary btn-rounded p-3"></label>
          </div>

          <div className="form-check form-check-inline" style={{paddingLeft: 3}}>
            <input className="btn-check" type="radio" name="colorRadio" value="gray"/>
            <label className="btn btn-rounded p-3" style={{backgroundColor: '#bdbdbd'}}></label>
          </div>
          
          <div className="form-check form-check-inline" style={{paddingLeft: 3}}>
            <input className="btn-check" type="radio" name="colorRadio"  value="black"/>
            <label className="btn bg-dark text-white btn-rounded p-3"></label>
          </div>

          
        </div>
      </div>
      </>
  )
}

export default ColorFilter

