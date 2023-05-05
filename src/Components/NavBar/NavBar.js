import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">Collapsed content</h4>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark justify-content-between ">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
           
        </nav>
      </div>
      <form className="form-inline" >
            <div className="divBuscador">
                <input className="form-control mr-sm-2" type="search" placeholder="¿Qué producto buscas?" aria-label="Search"/>
                <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
            </form>
    </nav>
  );
}

export default NavBar;