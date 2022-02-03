import React from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../componentes/Layout";
import Footer from "../componentes/Footer";
import Image from "next/image";
import inicioP1 from "../public/inicioP1.png";
import { top1, top2, top3 } from "../public/top/index";
import inicioP2 from "../public/inicioP2.png";
import { spine1, spine2 } from "../public/spine/index";
import inicioP3 from "../public/inicioP3.png";
import { mint1 } from "../public/mint/index";
import inicioP4 from "../public/inicioP4.png";
import { pantuflas1 } from "../public/pantuflas/index";
import inicioP5 from "../public/inicioP5.png";
import inicioP6 from "../public/inicioP6.png";
import { lavender1 } from "../public/lavender/index";
import inicioP7 from "../public/inicioP7.png";
import inicioP8 from "../public/inicioP8.png";
import { wrist1 } from "../public/wrist/index";
import inicioP9 from "../public/inicioP9.png";
import { kit1, kit2, kit3, kit4 } from "../public/kit/index";
import Topbody, { toponlybtn } from "../utils/top";
import Spine, { spineonlybtn } from "../utils/spine";
import Lavender, { lavenderonlybtn } from "../utils/lavender";
import Mint, { mintonlybtn } from "../utils/mint";
import Pantuflas, { pantuflasonlybtn } from "../utils/pantuflas";
import Lumbar, { lumbaronlybtn } from "../utils/lumbar";
import Knee, { kneeonlybtn } from "../utils/knee";
import Wrist, { wristonlybtn } from "../utils/wrist";
import Kit, { kit, onlybtnpremium } from "../utils/kit";
import Script from "next/script";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Producto() {
  const router = useRouter();
  console.log(router.query.producto);
  const cartop = [inicioP1, top1, top2, top3];
  const carspine = [inicioP2, spine1, spine2];
  const carlavender = [inicioP6, lavender1];
  const carmint = [inicioP3, mint1];
  const carpantuflas = [inicioP4, pantuflas1];
  const carwrist = [inicioP8, wrist1];
  const carkit = [inicioP9, kit1, kit2, kit3, kit4];
  const settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <Layout>
      <div>
        {router.query.producto == "topbodywrap" ? (
          <div className="producto-pag">
            <Script id="top" strategy="lazyOnload">
              {`${toponlybtn}`}
            </Script>
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {cartop.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>TOP BODY WRAP</h3>
              <p>
                Este producto esta diseñado para colocarse alrededor del cuello,
                hombros y espalda superior.
                <br />
                Contiene en su interior caléndula,limoncillo, romero, lavanda,
                poleo y trigo.
                <br />
                Alivia dolores en hombros, cuello y pecho, puede utilizarse
                caliente o frio.
              </p>
              <div className="btn-only">
                <div id="product-component-1639109187201"></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* segundo producto */}

        {router.query.producto == "spineandabdomentbelt" ? (
          <div className="producto-pag">
            <Script id="top" strategy="lazyOnload">
              {`${spineonlybtn}`}
            </Script>
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carspine.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>SPINE & ABDOMEN BELT</h3>
              <p>
                Este producto esta diseñado para aliviar dolores en espalda,
                cintura y abdomen, tiene dos tiras de velcro para sujetar de
                forma segura el producto,lo cual permite utilizarlo mientras se
                realiza cualquier tipo de actividad.
                <br />
                Contiene en su interior caléndula, limoncillo, romero, lavanda,
                poleo y trigo.
                <br />
                Puedes utilizar el producto en caliente y frió.
              </p>
              <div className="btn-only">
                <div id="product-component-1639111320201"></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* tercer producto */}

        {router.query.producto == "lavendereyepillow" ? (
          <div className="producto-pag">
            <Script id="top" strategy="lazyOnload">
              {`${lavenderonlybtn}`}
            </Script>
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carlavender.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>LAVENDER EYE PILLOW</h3>
              <p>
                Este producto tiene por dentro flores de lavanda la cual es una
                flor sedante de origen natural y semillas de linaza que actúan
                como un conductor de calor y frio, el producto esta diseñado
                para ajustarse alrededor de los ojos, se utiliza para reducir
                dolores de cabeza, migraña, estrés, insomnio,fatiga ocular y
                actúa como un sedante suave y natural para promover el sueño.
                <br />
                ❄️Utilízalo en frío metiéndolo dentro de tu congelador
              </p>
              <div className="btn-only">
                <div id="product-component-1639112105308"></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* cuarto producto */}

        {router.query.producto == "mintpillow" ? (
          <div className="producto-pag">
            <Script id="top" strategy="lazyOnload">
              {`${mintonlybtn}`}
            </Script>
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carmint.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>MINT PILLOW</h3>
              <p>
                El Mint Pillow es un producto que en su interior contiene
                semillas y hierbas trituradas de menta, eucalipto y linaza, su
                función principal es penetrar profundamente en las vias
                respiratorias y descongestionarlas.
                <br />
                Este producto esta diseñado para utilizarse frio o caliente.
              </p>
              <div className="btn-only">
                <div id="product-component-1639112382209"></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Quinto producto */}

        {router.query.producto == "pantuflastermicas" ? (
          <div className="producto-pag">
            <Script id="top" strategy="lazyOnload">
              {`${pantuflasonlybtn}`}
            </Script>
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carpantuflas.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>PANTUFLAS TÉRMICAS</h3>
              <p>
                Las Pantuflas térmicas , contienen en su interior hierbas,
                flores y semillas, ideales para mejorar la circulación y
                desinflamar, proporciona un descanso inmediato.
                <br />
                Pueden utilizarse en caliente o en frío.
              </p>
              <div className="btn-only">
                <div id="product-component-1639112705712"></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* sexto producto */}

        {router.query.producto == "lumbarpack" ? (
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
                El Lumbar Pack, es una almohada multifuncional que se puede
                utilizar en cualquier parte del cuerpo, es ideal para trabajar,
                cólicos, dolores lumbares, cervicales, dolores en los hombros,
                dolores en las articulaciones y dolores musculares.
              </p>
              <div className="btn-only">
                <div id="product-component-1639113044098"></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* septimo producto */}

        {router.query.producto == "kneepack" ? (
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
                El Knee Pack, es una almohada diseñada para aliviar dolores
                producidos en la rodilla, el tobillo y el codo, trae dos tiras
                de velcro para ajustar el producto a la zona deseada sin que
                este se caiga. 
                <br/>
                El producto está diseñado para utilizarlo en
                caliente o en frío.
              </p>
              <div className="btn-only">
                <div id="product-component-1639113373011"></div>
              </div>
            </div>
          </div>
        ) : null}

        {/* octavo producto */}

        {router.query.producto == "wristpack" ? (
          <div className="producto-pag">
            <Script id="top" strategy="lazyOnload">
              {`${wristonlybtn}`}
            </Script>
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carwrist.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>WRIST PACK</h3>
              <p>
                Este producto contiene una mezcla de hierbas, flores y semillas
                antiinflamatorias, es ideal para tratar el síndrome del túnel
                carpiano, artritis, tendinitis, retracción muscular,
                inflamación, quemaduras o cualquier tipo de dolor en la mano o
                la muñeca.
                <br />
                El producto está diseñado para utilizarlo en caliente o en frio
              </p>
              <div className="btn-only">
                <div id="product-component-1639113618284"></div>
              </div>
            </div>
          </div>
        ) : null}

        {router.query.producto == "premiumset" ? (
          <div className="producto-pag">
            <Script id="top" strategy="lazyOnload">
              {`${onlybtnpremium}`}
            </Script>
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carkit.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>PREMIUM TREATMENT SET</h3>
              <p>
                El premium treatment set es un kit que contiene 4 productos que
                proporcionan un alivio eficaz para los dolores y promueven la
                relajación, dentro de este kit encontrarás:
                <br />
                <br />
                -1 almohadilla para cuello, pecho y hombros.
                <br />
                -1 almohadilla para espalda, abdomen y cintura.
                <br />
                -1 almohadilla para ojos.
                <br />
                -Almohadilla nasal
              </p>
              <div className="btn-only">
                <div id="product-component-1641423747275"></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <Footer />
    </Layout>
  );
}
