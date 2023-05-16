import React from "react";
import "./ButtonFilter.css";

//tampoco borra los filtros

const ButtonFilter = () => {
  return (
    <div className="button">
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold m-3 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Borrar todos los filtros
      </button>
    </div>
  );
};

export default ButtonFilter;
