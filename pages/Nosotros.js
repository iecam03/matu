import React from "react";
import Layout from "../componentes/Layout";
import Footer from "../componentes/Footer";
import Image from 'next/image'
// import inicioP1 from "../public/inicioP1.png"

export default function Nosotros() {
  return (
    <Layout>
      <div>
        <h2 className="title-nosotros">¿QUIÉNES SOMOS?</h2>    
        <div className="container-nosotros">
          <div>
          <p>
            Somos una empresa colombiana fundada desde el año 2014, ofrecemos
            compresas térmicas herbales para diferentes partes del cuerpo,
            ideales para el alivio de dolores, terapias de choque y reducir
            niveles de estrés.
            <br/>
            <br/>
            En nuestro portafolio también incluimos aceites
            esenciales, esencias de aceite e hidrosolubles, con los estándares
            más altos de calidad.
            <br/><br/>
            <spam>Encuéntranos de manera presencial en:
            <br/>
            Colombia: Bogotá,Cali y Cúcuta.
            <br/>
            Ecuador: Ibarra
            </spam>
          </p>
          
          </div>
          <div className="img-nosotros">
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
