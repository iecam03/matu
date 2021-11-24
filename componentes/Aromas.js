import React from 'react'
import Image from 'next/image'
import eucalipto from "../public/eucalipto.jpeg"
import menta from "../public/menta.jpeg"
import limoncillo from "../public/limoncillo.jpeg"
import romero from "../public/romero.jpeg"
import lavanda from "../public/lavanda.jpeg"
import poleo from "../public/poleo.jpeg"
import trigo from "../public/trigo.jpeg"
import linaza from "../public/linaza.jpeg"
import calendula from "../public/calendula.jpeg"

export default function Aromas() {
    return (
        <div>
            <div className="inicio-productos">
            <div className="inicio-productos">
                <h3 className="titulo-seccion">TERAPIA DE FRIO Y CALOR</h3>
                <h2 className="sub-titulo"> Nuestra colección de hierbas aromaticas incluye aquellas que ayudan en el alivio del dolorm el éstres y aquellas que ayudan a la relajación</h2>
                <div className="imagenes-productos">
                    <div className="one">
                    <div className="card">
                        <div className="imgBx">
                        <Image src={eucalipto}  alt="logo"  layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>EUCALIPTO</h3>
                                <p>
                                        Es un descongestionante natural especial para afecciones respiratorias
                                        <br/>
                                        Tiene propiedades analgésicas,antibacterianas y antiinflamatorias.
                                        <br/>
                                        Ayuda a sanar lesiones de la piel.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={menta} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>MENTA</h3>
                                <p>
                                Tiene un estimulante antiséptico.
                                <br/>
                                El aroma mentolado disipa mareos,alivia dolores de cabeza y ayuda en casos de congestión nasal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={limoncillo} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>LIMONCILLO</h3>
                                <p>
                                Alivia dolores estomacales,cólicos,reduce grasa corporal(celulitis),moretones,dolores de cabeza,dolores musculares y éstres.
                                <br/>
                                Estimulante para la lactancia.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="two">
                    <div className="card">
                        <div className="imgBx">
                        <Image src={romero} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>ROMERO</h3>
                                <p>
                                Previene el envejecimiento prematuro,Tiene efecto calmante y trabaja contra la fatiga,tristeza,ansiedad,dolores musculares y dolores digestivos secundarios al éstres.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={lavanda} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>LAVANDA</h3>
                                <p>
                                Se usa para relajación.
                                <br/>
                                Ayuda a atenuar comportamientos agitados.
                                <br/>
                                Es particularmente efectiva para el alivio temporal del dolor lumbar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={poleo} className="img-inicio" alt="logo" layout="fill"/>    
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>POLEO</h3>
                                <p>
                                Se usa tradicionalmente para los problemas respiratorios,las afecciones digestivas problemas de higado y vesicula.
                                <br/>
                                Es un diurético,antibacterial y estimulante de origen natural.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="three">
                    <div className="card">
                        <div className="imgBx">
                        <Image src={trigo} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>TRIGO</h3>
                                <p>
                                Es uno de los componentes térmicos de nuestras terapias.
                                <br/>
                                Nuestro trigo orgánico,tratando sin químicos,es el que mantiene la temperatura y se acomoda fácilmente al cuerpo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={linaza} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>LINAZA</h3>
                                <p>
                                Su calor suave y húmedo favorece la cicatrización y retien el calor y frío de marena efectiva.
                                <br/>
                                Por su tamaño pequeño y peso ligero se acomoda a las articulaciones de la cara.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={calendula} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content1">
                                <h3>CALÉNDULA</h3>
                                <p>
                                La caléndula es ideal para controlar los procesos inflamatorios, contribuye a regenerar la piel.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
