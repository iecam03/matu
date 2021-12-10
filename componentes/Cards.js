import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import inicioP1 from "../public/inicioP1.png"
import inicioP2 from "../public/inicioP2.png"
import inicioP3 from "../public/inicioP3.png"
import inicioP4 from "../public/inicioP4.png"
import inicioP5 from "../public/inicioP5.png"
import inicioP6 from "../public/inicioP6.png"
import inicioP7 from "../public/inicioP7.png"
import inicioP8 from "../public/inicioP8.png"
import banner from "../public/banner.png"
import descuento1 from "../public/lavander-mint-knee-wrist-lumbar.png"
import descuento2 from "../public/topboddie-spine-kits.png"
import descuento3 from "../public/pantuflas.png"


export default function Cards() {
    return (
        <div className="inicio-productos">
            <div className="inicio-productos">
            <button className="calltoaction"><a href="/Tienda">COMPRAR</a></button>
                <div className="imagenes-productos">

                <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP1} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>TOP BODY WRAP<br/><a href="/topbodywrap"><h6>Ver Más</h6></a></h3>
                            </div>
                        </div>
                        {/* <div className="descuento"><Image src={descuento2}  alt="logo" /></div> */}
                    </div>  

                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP2} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>SPINE & ABDOMEN BELT<br/><a href="/spineandabdomentbelt"><h6>Ver Más</h6></a></h3>
                            </div>
                        </div>
                        {/* <div className="descuento"><Image src={descuento2}  alt="logo" /></div> */}
                    </div>

                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP6}  alt="logo"  layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>LAVENDER EYE PILLOW<br/><a href="/lavendereyepillow"><h6>Ver Más</h6></a></h3>
                            </div>
                        </div>
                        {/* <div className="descuento"><Image src={descuento1}  alt="logo" /></div> */}
                    </div>

                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP3} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>MINT PILLOW<br/><a href="/mintpillow"><h6>Ver Más</h6></a></h3>
                            </div>
                        </div>
                        {/* <div className="descuento"><Image src={descuento1}  alt="logo" /></div> */}
                    </div>

                    

                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP4} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>PANTUFLAS TÉRMICAS<br/><a href="/pantuflastermicas"><h6>Ver Más</h6></a></h3>
                            </div>
                        </div>
                        {/* <div className="descuento"><Image src={descuento3}  alt="logo" /></div> */}
                    </div>

                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP7} className="img-inicio" alt="logo" layout="fill"/>    
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>LUMBAR PACK<br/><a href="/lumbarpack"><h6>Ver Más</h6></a></h3>
                            </div>
                        </div>
                        {/* <div className="descuento"><Image src={descuento1}  alt="logo" /></div> */}
                    </div>

                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP5} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>KNEE PACK<br/><a href="/kneepack"><h6>Ver Más</h6></a></h3>
                                
                            </div>
                        </div>
                        {/* <div className="descuento"><Image src={descuento1}  alt="logo" /></div> */}
                    </div>

                    <div className="card">
                        <div className="imgBx">
                        <Image src={inicioP8} className="img-inicio" alt="logo" layout="fill"/>
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>WRIST PACK<br/><a href="/wristpack"><h6>Ver Más</h6></a></h3>
                            </div>
                        </div>
                        {/* <div className="descuento"><Image src={descuento1}  alt="logo" /></div> */}
                    </div>
                </div>
                {/* <button className="calltoaction"><a href="/Tienda">COMPRAR</a></button> */}
            </div>
            <Image src={banner}  alt="logo" width="1090"/>
        </div>
    )
}
