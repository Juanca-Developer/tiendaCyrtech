import React from 'react'
import './Homepage.css'
import Image from "../../../img/feature3.png"


export default function HomePage() {
    return (
        <div className = "container_home">

            <div className = "container_home--title">
           
            <h1 >Soluciones Reales</h1>
            </div> 
            <div className = "container_flex"> 
            <div className = "container-img"> 
                <img className= "imagen" src = {Image} alt = "logo-feature"/>
            </div>
            <div className = "container_home--subtitle"> 
            <p> <h3>Misión </h3> 
                  Nuestra misión es diseñar y  proveer soluciones integrales de alta performance en el área de las Tecnologías de la Información y las Telecomunicaciones, desarrollándonos como aliados confiables de nuestros clientes.  Para ello acentuamos la formación y  la capacitación como la clave para entender las tendencias cambiantes y planificar cambios rápidos y con resultados duraderos.
                  </p>
           </div>
          <div className = "container_home--subtitle"> 
            <p><h3> Visión</h3> 
                 Llegar a ser aliados estratégicos de nuestros clientes alcanzando  una posición de liderazgo en nuestros negocios, con un sólido y sustentable desempeño, con base en la excelencia y calidad del servicio que ofrecemos, superando las expectativas de nuestros asociados-clientes, nuestra gente, accionistas y la comunidad en la que vivimos y nos desenvolvemos.</p>
            </div>
            <div className = "container_home--subtitle"> 
                <p> <h3> Objetivos</h3>
                 Nuestros principales objetivos y principios para la prestación de servicios se sustenta en ocho pilares fundamentales:
                 Respuesta, Servicio, Seguridad, Confianza, Compromiso, Integridad, Conocimiento y Respeto.</p>
           
          
</div>

 
</div>
</div>
    )
}