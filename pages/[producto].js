import React from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../componentes/Layout";
import Footer from "../componentes/Footer";
import Image from "next/image";
import inicioP1 from "../public/inicioP1.png";
import inicioP2 from "../public/inicioP2.png"
import inicioP3 from "../public/inicioP3.png"
import inicioP4 from "../public/inicioP4.png"
import inicioP5 from "../public/inicioP5.png"
import inicioP6 from "../public/inicioP6.png"
import inicioP7 from "../public/inicioP7.png"
import inicioP8 from "../public/inicioP8.png"
import Topbody, { toponlybtn } from "../utils/top"
import Spine, {spineonlybtn} from "../utils/spine"
import Lavender, {lavenderonlybtn} from "../utils/lavender"
import Mint , {mintonlybtn} from "../utils/mint"
import Pantuflas, {pantuflasonlybtn} from "../utils/pantuflas"
import Lumbar,{ lumbaronlybtn } from '../utils/lumbar'
import Knee, {kneeonlybtn} from "../utils/knee"
import Wrist, {wristonlybtn} from "../utils/wrist"
import Script from 'next/script'

export default function producto() {
    const router = useRouter();
    console.log(router.query.producto);
    return (
        <Layout>
            <div>
                {router.query.producto == "topbodywrap" ?
                <div className="producto-pag">
                <Script id="top" strategy="lazyOnload">
                    {`${toponlybtn}`}
                </Script>
                    <div className="imagen-p-page">
                        <Image
                            src={inicioP1}
                            width="450"
                            height="600"
                            priority
                            objectFit="cover"
                            fill
                            blur
                        />
                    </div>
                    <div className="descripcion">
                        <h3>TOP BODY WRAP</h3>
                        <p>
                            Este producto esta diseñado para colocarse alrededor del cuello,
                            hombros y espalda superior.
                            <br />
                            <br /> Contiene en su interior caléndula, limoncillo, romero,
                            lavanda, poleo y trigo. Alivia dolores en hombros, cuello y pecho.
                            <br />
                            <br />
                            Puedes utilizar el producto en caliente y en frio.
                        </p>
                        <div className="btn-only">
                            <div  id='product-component-1639109187201'></div>
                        </div>
                        
                    </div>
                    
                </div> : null}
                        {router.query.producto == "spineandabdomentbelt" ?
                <div className="producto-pag">
                <Script id="top" strategy="lazyOnload">
                    {`${spineonlybtn}`}
                </Script>
                    <div className="imagen-p-page">
                        <Image
                            src={inicioP2}
                            width="450"
                            height="600"
                            priority
                            objectFit="cover"
                            fill
                            blur
                        />
                    </div>
                    <div className="descripcion">
                        <h3>SPINE & ABDOMEN BELT</h3>
                        <p>
                        Este producto esta diseñado para aliviar dolores en espalda, cintura y
                                abdomen, tiene dos tiras de velcro para sujetar de forma segura el
                                producto, lo cual permitirá utilizarlo mientras se realiza cualquier tipo de
                                actividad.
                                <br/>
                                Contiene en su interior caléndula, limoncillo, romero, lavanda, poleo y trigo.
                                <br/>
                                Puedes utilizar el producto en caliente y en frio.
                        </p>
                        <div className="btn-only">
                            <div id='product-component-1639111320201'></div>
                        </div>
                        
                    </div>
                </div> : null}
                {router.query.producto == "lavendereyepillow" ?
                <div className="producto-pag">
                <Script id="top" strategy="lazyOnload">
                    {`${lavenderonlybtn}`}
                </Script>
                    <div className="imagen-p-page">
                        <Image
                            src={inicioP6}
                            width="450"
                            height="600"
                            priority
                            objectFit="cover"
                            fill
                            blur
                        />
                    </div>
                    <div className="descripcion">
                        <h3>LAVENDER EYE PILLOW</h3>
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
                        <div className="btn-only">
                            <div id='product-component-1639112105308'></div>
                        </div>
                        
                    </div>
                </div> : null}
                {router.query.producto == "mintpillow" ?
                <div className="producto-pag">
                <Script id="top" strategy="lazyOnload">
                    {`${mintonlybtn}`}
                </Script>
                    <div className="imagen-p-page">
                        <Image
                            src={inicioP3}
                            width="450"
                            height="600"
                            priority
                            objectFit="cover"
                            fill
                            blur
                        />
                    </div>
                    <div className="descripcion">
                        <h3>MINT PILLOW</h3>
                        <p>
                            El Mint Pillow es un producto que en su interior contiene
                            semillas y hierbas trituradas de menta, eucalipto y
                            linaza, su función principal es penetrar profundamente
                            en las vías respiratorias y descongestionarlas, este
                            producto esta diseñado para utilizarse frio o caliente.
                        </p>
                        <div className="btn-only">
                            <div id='product-component-1639112382209'></div>
                        </div>
                        
                    </div>
                </div> : null}
                {router.query.producto == "pantuflastermicas" ?
                <div className="producto-pag">
                <Script id="top" strategy="lazyOnload">
                    {`${pantuflasonlybtn}`}
                </Script>
                    <div className="imagen-p-page">
                        <Image
                            src={inicioP4}
                            width="450"
                            height="600"
                            priority
                            objectFit="cover"
                            fill
                            blur
                        />
                    </div>
                    <div className="descripcion">
                        <h3>PANTUFLAS TÉRMICAS</h3>
                        <p>
                            Las Pantuflas térmicas, contienen en su
                            interior hierbas, flores y semillas, ideales para
                            mejorar la circulación y desinflamar, proporciona
                            un descanso inmediato, pueden utilizare en
                            caliente o en frío.
                        </p>
                        <div className="btn-only">
                            <div id='product-component-1639112705712'></div>
                        </div>
                        
                    </div>
                </div> : null}
                {router.query.producto == "lumbarpack" ?
                <div className="producto-pag">
                <Script id="top" strategy="lazyOnload">
                    {`${lumbaronlybtn}`}
                </Script>
                    <div className="imagen-p-page">
                        <Image
                            src={inicioP7}
                            width="450"
                            height="600"
                            priority
                            objectFit="cover"
                            fill
                            blur
                        />
                    </div>
                    <div className="descripcion">
                        <h3>LUMBAR PACK</h3>
                        <p>
                            El Lumbar Pack, es una almohada
                            multifuncional que se puede utilizar en cualquier
                            parte del cuerpo, es ideal para trabajar, cólicos,
                            dolores lumbares, cervicales, dolores en los
                            hombros, dolores en las articulaciones y dolores
                            musculares.
                        </p>
                        <div className="btn-only">
                            <div id='product-component-1639113044098'></div>
                        </div>
                        
                    </div>
                </div> : null}
                {router.query.producto == "kneepack" ?
                <div className="producto-pag">
                <Script id="top" strategy="lazyOnload">
                    {`${kneeonlybtn}`}
                </Script>
                    <div className="imagen-p-page">
                        <Image
                            src={inicioP5}
                            width="450"
                            height="600"
                            priority
                            objectFit="cover"
                            fill
                            blur  
                        />
                    </div>
                    <div className="descripcion">
                        <h3>NKEE PACK</h3>
                        <p>
                            El Knee Pack, es una almohada diseñada para
                            aliviar dolores producidos en la rodilla, el tobillo y
                            el codo, trae dos tiras de velcro para ajustar el
                            producto a la zona deseada sin que este se
                            caiga, puedes utilizarlo en caliente y en frío.
                        </p>
                        <div className="btn-only">
                            <div id='product-component-1639113373011'></div>
                        </div>
                        
                    </div>
                </div> : null}
                {router.query.producto == "wristpack" ?
                <div className="producto-pag">
                <Script id="top" strategy="lazyOnload">
                    {`${wristonlybtn}`}
                </Script>
                    <div className="imagen-p-page">
                        <Image
                            src={inicioP8}
                            width="450"
                            height="600"
                            priority
                            objectFit="cover"
                            fill
                            blur  
                        />
                    </div>
                    <div className="descripcion">
                        <h3>WRIST PACK</h3>
                        <p>
                            Este producto contiene una mezcla de hierbas,
                            flores y semillas antiinflamatorias, es ideal para
                            tratar el síndrome del túnel carpiano, artritis,
                            tendinitis, retracción muscular, inflamación,
                            quemaduras o cualquier tipo de dolor en la mano o
                            la muñeca, lo puedes utilizar en caliente o en frio.
                        </p>
                        <div className="btn-only">
                            <div id='product-component-1639113618284'></div>
                        </div>
                        
                    </div>
                </div> : null}
            </div>

            <Footer />
        </Layout>
    );
}
