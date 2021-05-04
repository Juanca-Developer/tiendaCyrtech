import React from "react";
import { Link } from "react-router-dom";


export default function Item({ data }) {
  return (
    <div className="col-sm-6 col-xl-4">
      <div className="card ">
        <p className="card-text detailTitle">{data.titulo}</p>
        <img src={data.img} className="card-img-top" alt={data.categoria}/>
        
        <div className="card-body">
          <p>{data.descripcion}</p>
          <p>Precio $ {data.precio}</p>
        </div>
        
          
        
      </div>
    </div>
  );
}
