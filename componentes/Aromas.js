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
                <h3 className="titulo-seccion">AROMATERAPIA</h3>
                <h2 className="sub-titulo"> Nuestra colección de hierbas aromáticas incluye aquellas que ayudan en el alivio del dolor el estrés y aquellas que ayudan a la relajación</h2>
                <br/>
                <br/>
                <div className="imagenes-aromas">
                    <div className="one">
                    <div className="card">
                        <div className="imgBx">
                        <Image src={eucalipto}  alt="logo"  layout="fill"/>
                        </div>
                        <div className="contenBx1">
                            <div className="content1">
                                <h3>EUCALIPTO</h3>
                                <br/>
                                <p>
                                        Es un descongestionante natural especial para afecciones respiratorias
                                        <br/>
                                        <br/>
                                        Tiene propiedades analgésicas,antibacterianas y antiinflamatorias.
                                        <br/>
                                        
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={menta} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx1">
                            <div className="content1">
                                <h3>MENTA</h3>
                                <p>
                                <br/>
                                Es ideal para disipar mareos, alivia dolores de cabeza y ayuda en casos de congestión nasal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={limoncillo} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx1">
                            <div className="content1">
                                <h3>LIMONCILLO</h3>
                                <br/>
                                <br/>
                                <p>
                                Alivia dolores estomacales,cólicos,<br/>moretones,dolores de cabeza,dolores musculares y éstres.
                                <br/>
                                
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="one">
                    <div className="card">
                        <div className="imgBx">
                        <Image src={romero} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx1">
                            <div className="content1">
                                <h3>ROMERO</h3>
                                <br/>
                                <p>
                                Provee un efecto calmante y trabaja contra la fatiga,tristeza,ansiedad,dolores musculares y dolores digestivos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={lavanda} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx1">
                            <div className="content1">
                                <h3>LAVANDA</h3>
                                <br/>
                                <p>
                                Está flor es ideal para la relación ayuda a disminuir el estrés y actúa como un sedante suave y promueve el sueño. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={poleo} className="img-inicio" alt="logo" layout="fill"/>    
                        </div>
                        <div className="contenBx1">
                            <div className="content1">
                                <h3>POLEO</h3>
                                <br/>
                                <p>
                                Se usa tradicionalmente para los problemas respiratorios y las afecciones estomacales.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="one">
                    <div className="card">
                        <div className="imgBx">
                        <Image src={trigo} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx1">
                            <div className="content1">
                                <h3>TRIGO</h3>
                                <p>
                                Es uno de los componentes térmicos de nuestras terapias.
                                <br/>
                                Nuestro trigo orgánico,tratado sin químicos,es el que mantiene la temperatura y se acomoda fácilmente al cuerpo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={linaza} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx1">
                            <div className="content1">
                                <h3>LINAZA</h3>
                                <p>
                                Su calor suave y húmedo favorece la cicatrización y retiene el calor y frío de manera efectiva.
                                <br/>
                                Por su tamaño pequeño y peso ligero se acomoda a las articulaciones del rostro. 
                                <br/>
                                (Encuentralo en nuestro Lavender Eye Pillow)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={calendula} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx1">
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
