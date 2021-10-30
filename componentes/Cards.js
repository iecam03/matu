import React from 'react'
import Image from 'next/image'
import inicioP1 from "../public/inicioP1.png"
import inicioP2 from "../public/inicioP2.png"
import inicioP3 from "../public/inicioP3.jpeg"
import inicioP4 from "../public/inicioP4.jpg"
import inicioP5 from "../public/inicioP5.png"
import inicioP6 from "../public/inicioP6.png"
import inicioP7 from "../public/inicioP7.png"
import inicioP8 from "../public/inicioP8.jpeg"
import banner from "../public/banner.png"
import descuento1 from "../public/lavander-mint-knee-wrist-lumbar.png"
import descuento2 from "../public/topboddie-spine-kits.png"
import descuento3 from "../public/pantuflas.png"


export default function Cards() {
    return (
        <div className="inicio-productos">
            <div className="inicio-productos">
                <h3 className="titulo-seccion">NUESTROS PRODUCTOS</h3>
                <div className="imagenes-productos">
                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP6}  alt="logo"  layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>LAVANDER EYE PILLOW</h3>
                                <p>
                                        Este producto tiene por dentro flores
                                        de lavanda la cual es flor sedante de
                                        origen natural y semillas de linaza que
                                        actúan como un conductor de calor y
                                        frio, el producto esta diseñado para
                                        ajustarse alrededor de los ojos, se
                                        utiliza para reducir dolores de cabeza,
                                        migraña, estrés, fatiga ocular y actúa 
                                        como un sedante suave y natural para promover el sueño.
                                </p>
                            </div>
                        </div>
                        <div className="descuento"><Image src={descuento1}  alt="logo" /></div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP1} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>TOP BODY WRAP</h3>
                                <p>
                                Este producto esta diseñado para colocarse alrededor del
                                cuello, hombros y espalda superior. Contiene en su interior
                                caléndula, limoncillo, romero, lavanda, poleo y trigo.
                                <br/>
                                <br/>
                                Alivia dolores en hombros, cuello y pecho.
                                <br/>
                                <br/>
                                Puedes utilizar el producto en caliente y en frio.
                                </p>
                            </div>
                        </div>
                        <div className="descuento"><Image src={descuento2}  alt="logo" /></div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP3} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>MINT PILLOW</h3>
                                <p>
                                El Mint Pillow es un producto que en su interior contiene
                                semillas y hierbas trituradas de menta, eucalipto y
                                linaza, su función principal es penetrar profundamente
                                en las vías respiratorias y descongestionarlas, este
                                producto esta diseñado para utilizarse frio o caliente.
                                </p>
                            </div>
                        </div>
                        <div className="descuento"><Image src={descuento1}  alt="logo" /></div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP2} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>SPINE & ABDOMEN BELT</h3>
                                <p>
                                Este producto esta diseñado para aliviar dolores en espalda, cintura y
                                abdomen, tiene dos tiras de velcro para sujetar de forma segura el
                                producto, lo cual permitirá utilizarlo mientras se realiza cualquier tipo de
                                actividad.
                                <br/>
                                <br/>
                                Contiene en su interior caléndula, limoncillo, romero, lavanda, poleo y trigo.
                                <br/>
                                <br/>
                                Puedes utilizar el producto en caliente y en frio.
                                </p>
                            </div>
                        </div>
                        <div className="descuento"><Image src={descuento2}  alt="logo" /></div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP4} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>SPLIPPERS FOOTREST</h3>
                                <p>
                                Las Slippers Footrest, contienen en su
                                interior hierbas, flores y semillas, ideales para
                                mejorar la circulación y desinflamar, proporciona
                                un descanso inmediato, pueden utilizare en
                                caliente o en frío.
                                </p>
                            </div>
                        </div>
                        <div className="descuento"><Image src={descuento3}  alt="logo" /></div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP7} className="img-inicio" alt="logo" layout="fill"/>    
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>LUMBAR PACK</h3>
                                <p>
                                El Lumbar Pack, es una almohada
                                multifuncional que se puede utilizar en cualquier
                                parte del cuerpo, es ideal para trabajar, cólicos,
                                dolores lumbares, cervicales, dolores en los
                                hombros, dolores en las articulaciones y dolores
                                musculares.
                                </p>
                            </div>
                        </div>
                        <div className="descuento"><Image src={descuento1}  alt="logo" /></div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP5} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>KNEE PACK</h3>
                                <p>
                                El Knee Pack, es una almohada diseñada para
                                aliviar dolores producidos en la rodilla, el tobillo y
                                el codo, trae dos tiras de velcro para ajustar el
                                producto a la zona deseada sin que este se
                                caiga, puedes utilizarlo en caliente y en frío.
                                </p>
                            </div>
                        </div>
                        <div className="descuento"><Image src={descuento1}  alt="logo" /></div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP8} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>WRIST PACK</h3>
                                <p>
                                Este producto contiene una mezcla de hierbas,
                                flores y semillas antiinflamatorias, es ideal para
                                tratar el síndrome del túnel carpiano, artritis,
                                tendinitis, retracción muscular, inflamación,
                                quemaduras o cualquier tipo de dolor en la mano o
                                la muñeca, lo puedes utilizar en caliente o en frio.
                                </p>
                            </div>
                        </div>
                        <div className="descuento"><Image src={descuento1}  alt="logo" /></div>
                    </div>
                </div>
                <button className="calltoaction"><a href="/Tienda">COMPRAR</a></button>
            </div>
            <Image src={banner}  alt="logo" width="1090"/>
        </div>
    )
}
