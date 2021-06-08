import React from 'react'
import Imagen from "../../../img/feature2.png" 
import './PageServicios.css'


export default function PageServicios() {
    return (
        <div>
            <div className = "container-title"> 
            <h1>Desarrollando Soluciones para los Sistemas del Mañana</h1>
            </div>
            <div className = "container-flex" > 
            <div className = "container-img"> 
                <img className= "imagen" src = {Imagen} alt = "logo-feature"/>
            </div>
            <div className = "container_subtitle"> 
            <p>  Proveemos mantenimiento de Activos IT , como Servidores, Almacenamiento, Switches de SAN y LAN, Networking, Alimentación,
            de las siguientes Marcas: <span>  HP, Sun/Oracle, Ibm, Dell, Cisco, NetApp, EMC, Hitachi, Huawei</span> 
                </p>
  <ul className= "container-list" >
      <li> 40 a 60 % de reducción de costos en nuestros servicios de mantenimiento de servidores. </li>
      <li> Soporte de Servidores de ¨End of Life¨ o ¨Fuera de Soporte¨ por los fabricantes.</li>
      <li> SLA’s flexibles, con posibilidad de dar altas y bajas de equipos durante el contrato.</li>
      <li> Gran stock de partes en inventario, y posibilidad de importar las partes faltantes.</li>
  </ul>
            
  </div>
            </div>
        </div>
    )
}