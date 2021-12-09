import React from 'react'
import Layout from "../componentes/Layout"
import Script from 'next/script'
import Footer from '../componentes/Footer'
import banner from "../public/banner-envios.png"
import Image from "next/image"
import Topbody, { topbody } from "../utils/top"
import Spine, {spine} from "../utils/spine"
import Lavender, {lavender} from "../utils/lavender"
import Mint , {mint} from "../utils/mint"
import Kit , {kit} from "../utils/kit"
import Pantuflas, {pantuflas} from "../utils/pantuflas"
import Wrist, {wrist} from "../utils/wrist"
import Knee, {knee} from "../utils/knee"
import Herb, {herb} from "../utils/herb"
import Lumbar,{ lumbar } from '../utils/lumbar'
import Manta ,{manta} from "../utils/manta"
import TopandLower, {topandlower} from "../utils/topandlower"

export default function Tienda() {
    return (
        <div>
      <Script id="top" strategy="lazyOnload">
        {`${topbody}`}
      </Script>
      <Script id="spine" strategy="lazyOnload">
        {`${spine}`}
      </Script>
      <Script id="lavender" strategy="lazyOnload">
        {`${lavender}`}
      </Script>
      <Script id="mint" strategy="lazyOnload">
        {`${mint}`}
      </Script>
      <Script id="kit" strategy="lazyOnload">
        {`${kit}`}
      </Script>
      <Script id="pantuflas" strategy="lazyOnload">
        {`${pantuflas}`}
      </Script>
      <Script id="wrist" strategy="lazyOnload">
        {`${wrist}`}
      </Script>
      <Script id="knee" strategy="lazyOnload">
        {`${knee}`}
      </Script>
      <Script id="lumbar" strategy="lazyOnload">
        {`${lumbar}`}
      </Script>
      <Script id="herb" strategy="lazyOnload">
        {`${herb}`}
      </Script>
      <Script id="manta" strategy="lazyOnload">
        {`${manta}`}
      </Script>
      <Script id="topandlower" strategy="lazyOnload">
        {`${topandlower}`}
      </Script>
        <Layout>
        <div className="banner-envios">
        <Image src={banner} alt="Los envios tiene un costo de 7.500, por compras superiores a 75.000 el envio es gratis"/>
        </div>
        <div className="producto-container">
        <div id='product-component-1637724397588'></div>
        <div id='product-component-1637724703012'></div>
        </div>
        <div className="producto-container">
        <div id='product-component-1637725463272'></div>
        <div id='product-component-1637725592028'></div>
        </div>
        <div className="producto-container">
        <div id='product-component-1637725801734'></div>
        <div id='product-component-1637725933681'></div>
        </div>
        <div className="producto-container">
        <div id='product-component-1637726095304'></div>
        <div id='product-component-1637727104149'></div>
        </div>
        <div className="producto-container">
        <div id='product-component-1637732993290'></div>
        <div id='product-component-1637733223388'></div>
        </div>
        <div className="producto-container">
        <div id='product-component-1637734520071'></div>
        <div id='product-component-1637734682848'></div>
        </div>
        <Footer/>
        </Layout>
        </div>
    )
}
