import React from 'react';
import Layout from "../componentes/Layout";
import {Air,Micro,Nevera,Olla} from "../public/svg/index"
import Image from "next/image";

export default function Beneficios() {
  return (
    <Layout>
    <div className='beneficios'>
    <div className='container-beneficios'>
      <h1>Frío</h1>
      <div>
        <Image
          src={Nevera}
          className="img-beneficios"
          alt="logo"
          width="100px"
          height="100px"
          
      />
      </div>
      <li>Reduce Inflamación</li>
      <li>Dolor de Cabeza</li>
      <li>Moretones</li>
      <li>Quemaduras</li>
      <li>Picaduras de Insectos</li>
      <li>Dolor de Muela</li>
      <li>Dolores de Pié</li>
      <li>Insolación</li>
      <li>Fiebre</li>
      <li>Insomnio</li>
      <li>Fatiga Ocular</li>
      <li>Hinchazón</li>
      <li>Urticaria</li>
      </div>
      <div className='container-beneficios'>
        <h1>Caliente</h1>
        <div>
        <Image
          src={Air}
          className="img-beneficios"
          alt="logo"
          width="100px"
          height="100px"
          
      />
      <Image
          src={Micro}
          className="img-beneficios"
          alt="logo"
          width="100px"
          height="100px"
      />
      <Image
          src={Olla}
          className="img-beneficios"
          alt="logo"
          width="100px"
          height="100px"
      />
      </div>
        <li>Artritis</li>
        <li>Bursitis</li>
        <li>Estrés</li>
        <li>Cólicos</li>
        <li>Tortícolls</li>
        <li>Tendinitis</li>
        <li>Migraña</li>
        <li>Sinusitis</li>
        <li>Dolor Cervical</li>
        <li>Dolor de Espalda</li>
        <li>Dolor de Cuello</li>
        <li>Dolor de Lumbar</li>
        <li>Dolor de Cabeza</li>
        <li>Congestión Nasal</li>
        <li>Espasmos Musculares</li>
        <li>Rigidez de Articulación</li>
        <li>Síndrome del Manguito Rotador</li>
        <li>Síndrome del tunel Carpiano</li>
        <li>Epicondilitis (codo de tenista o golfista)</li>
      </div>
      
    </div>
    </Layout>
  ) 
}
