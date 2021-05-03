import React from "react";
import { Link } from "react-router-dom";


export default function Item({ data }) {
  return (
    <div className="col-sm-6 col-xl-4">
      <div className="card ">
        <p className="card-text detailTitle">{data.categoria}</p>
        <img
          type="image"
          className="card-img-top btn image"
          src={data.img}
          alt="..."
        ></img>
        <div className="card-body"></div>
        <Link to = {`/categorias/${data.categoria}`}>Ver Categorias</Link>
          
        
      </div>
    </div>
  );
}
