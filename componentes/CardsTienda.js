import React from "react";
import Image from "next/image";
import inicioP1 from "../public/inicioP1.png";
import inicioP2 from "../public/inicioP2.png";
import inicioP3 from "../public/inicioP3.png";
import inicioP4 from "../public/inicioP4.png";
import inicioP5 from "../public/inicioP5.png";
import inicioP6 from "../public/inicioP6.png";
import inicioP7 from "../public/inicioP7.png";
import inicioP8 from "../public/inicioP8.png";
import inicioP9 from "../public/inicioP9.png";
import herb2 from "../public/herb/image3.jpeg";
import { manta1 } from "../public/mantatermica/index";
import banner from "../public/banner.png";
import { topandlower1 } from "../public/topandlowerimagenes/index";
import {shoulder1} from "../public/Shoulder/index"
import { back1 } from "../public/backbelt/index";
import {body1} from "../public/body therapy/index"


export default function CardsTienda() {
    return (
        <div className="inicio-productos">
            <div className="inicio-productos">
                <div className="imagenes-productos">
                    <br/>
                    <br/>
                    <br/>

                    <div className="d-card">
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={inicioP1}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    TOP BODY WRAP
                                    <br />
                                    <h4>Precio: $120.000</h4>
                                    <a href="/topbodywrap">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <h4>Precio: $120.000</h4>
                    </div>
                    

                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={inicioP2}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    SPINE & ABDOMEN BELT
                                    <br />
                                    <h4>Precio: $120.000</h4>
                                    <a href="/spineandabdomentbelt">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    

                    <div className="card">
                        <div className="imgBx">
                            <Image src={inicioP6} alt="logo" layout="fill" />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    LAVENDER EYE PILLOW
                                    <br />
                                    <h4>Precio: $60.000</h4>
                                    <a href="/lavendereyepillow">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={inicioP3}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    MINT PILLOW
                                    <br />
                                    <h4>Precio: $60.000</h4>
                                    <a href="/mintpillow">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="d-card">
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={inicioP9}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    PREMIUM TREATMENT SET
                                    <br />
                                    <h4>Precio: $300.000</h4>
                                    <a href="/premiumset">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={inicioP4}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    PANTUFLAS TÉRMICAS
                                    <br />
                                    <h4>Precio: $200.000</h4>
                                    <a href="/pantuflastermicas">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={inicioP7}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    LUMBAR PACK
                                    <br />
                                    <h4>Precio: $80.000</h4>
                                    <a href="/lumbarpack">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={inicioP5}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    KNEE PACK
                                    <br />
                                    <h4>Precio: $80.000</h4>
                                    <a href="/kneepack">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="d-card">
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={inicioP8}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    WRIST PACK
                                    <br />
                                    <h4>Precio: $80.000</h4>
                                    <a href="/wristpack">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={herb2}
                                className="img-inicio"
                                alt="herb pack"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    HERB PACK
                                    <br />
                                    <h4>Precio: $70.000</h4>
                                    <a href="/herbpack">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={manta1}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    MANTA TÉRMICA
                                    <br />
                                    <h4>Precio: $320.000</h4>
                                    <a href="/manta">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={topandlower1}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    TOP AND LOWER
                                    <br />
                                    <h4>Precio: $320.000</h4>
                                    <a href="/topandlower">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    
                    <div className="d-card">
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={shoulder1}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    SHOULDER PACK
                                    <br />
                                    <h4>Precio: $110.000</h4>
                                    <a href="/shoulder">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={back1}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    BACK AND ABDOMENT BELT
                                    <br />
                                    <h4>Precio: $80.000</h4>
                                    <a href="/backandabdoment">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <Image
                                src={body1}
                                className="img-inicio"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    BODY THERAPY
                                    <br />
                                    <h4>Precio: $140.000</h4>
                                    <a href="/bodytherapy">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <Image src={banner} alt="logo" width="1090" />
        </div>
    );
}
