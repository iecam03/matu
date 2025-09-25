import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Logo from '../public/Logo.jpg'

export default function Diseño(props) {
    let menu = useRef(null)
    let navigation = useRef(null)
    let itemHome= useRef(null)
    let itemTienda = useRef(null)
    let itemHierbas= useRef(null)
    let itemNosotros= useRef(null)
    let itemContacto = useRef(null)
    let itemBeneficios = useRef(null)
     const menuToggle = ()=>{
      menu.current.classList.toggle("active")
      navigation.current.classList.toggle("active")
    }
    
    useEffect(()=>{
      if (window.location.pathname == "/"){
        itemHome.current.classList.toggle("active")
      }else if (window.location.pathname == "/Tienda"){
        itemTienda.current.classList.toggle("active")
      }else if(window.location.pathname == "/Hierbas"){
        itemHierbas.current.classList.toggle("active")
      }else if(window.location.pathname == "/Nosotros"){
        itemNosotros.current.classList.toggle("active")
      }else if(window.location.pathname == "/Contacto"){
        itemContacto.current.classList.toggle("active")
      }else if(window.location.pathname == "/Beneficios"){
        itemBeneficios.current.classList.toggle("active")
      }
    })
    

    return (
      <div className="layout">
      <Head>
      <title>Matuaromaterapia</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" strategy="afterInteractive" />
      <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" strategy="afterInteractive" />
      <section>
        <div className="bg-header">
        <header>
          <a className="header-logo" href="/"><Image src={Logo} className="logo" alt="logo" height="60" width="120"/></a>
            <div className="toggle" onClick={menuToggle} ref={menu}></div>
            <ul className="navigation" ref={navigation}>
              <li><Link legacyBehavior href="/"><a className="" ref={itemHome} >Inicio</a></Link></li>
              <li><a href="/Tienda" className=""  ref={itemTienda} >Matú-tienda</a></li>
              <li><Link legacyBehavior href="/Hierbas" ><a className="" ref={itemHierbas} >Hierbas aromaticas</a></Link></li>
              <li><Link legacyBehavior href="/Beneficios"><a className="" ref={itemBeneficios} >Beneficios</a></Link></li>
              <li><Link legacyBehavior href="/Nosotros"><a className="" ref={itemNosotros} >Nosotros</a></Link></li>
              
            </ul>
        </header>
        </div>
      </section>
      <div className="children">
      {props.children}
      </div>
      <div>
      <a href="https://api.whatsapp.com/send?phone=573045823787" className="float" target="_blank" rel="noreferrer">
      <i className="fa fa-whatsapp my-float"></i>
      </a>
      </div>
      </div>
    )
}
