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
import {herb2} from "../public/herb/index";
import { manta1 } from "../public/manta/index";
import banner from "../public/banner.png";
import { topandlower1 } from "../public/topandlower";
import {shoulder1} from "../public/Shoulder/index"
import { back1 } from "../public/backbelt";
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
                                    <a href="/topbodywrap">
                                        <h6>Ver Más</h6>
                                    </a>
                                </h3>
                            </div>
                        </div>
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
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        <div className="contenBx">
                            <div className="content">
                                <h3>
                                    HERB PACK
                                    <br />
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
