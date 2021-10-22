import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../.next/static/media/logo.jpg'

export default function Diseño(props) {
    let menu = useRef(null)
    let navigation = useRef(null)
    let itemHome= useRef(null)
    let itemTienda = useRef(null)
    let itemHierbas= useRef(null)
    let itemNosotros= useRef(null)
    let itemContacto = useRef(null)
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
      }
    })
    

    return (
      <div className="layout">
      <Head>
      <title>Matuaromaterapia</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <link rel="icon" href="/favicon.ico" />
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <section>
        <header>
          <a href="#"><Image src={Logo} className="logo" alt="logo" height="60" width="120"/></a>
            <div className="toggle" onClick={menuToggle} ref={menu}></div>
            <ul className="navigation" ref={navigation}>
              <li><Link href="/"><a className="" ref={itemHome} >Inicio</a></Link></li>
              <li><Link href="/Tienda"><a className=""  ref={itemTienda} >Matú-tienda</a></Link></li>
              <li><Link href="/Hierbas" ><a className="" ref={itemHierbas} >Hierbas aromaticas</a></Link></li>
              <li><Link href="/Nosotros"><a className="" ref={itemNosotros} >Nosotros</a></Link></li>
              <li><Link href="/Contacto"><a className="" ref={itemContacto} >Contacto</a></Link></li>
            </ul>
        </header>
      </section>
      <div className="children">
      {props.children}
      </div>
      </div>
    )
}
