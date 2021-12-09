import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Layout from "../componentes/Layout"
import Footer from '../componentes/Footer'

export default function producto() {
    const router = useRouter()
    console.log(router.query.producto)
    return (
        <Layout>
        <div>
           <h1>{router.query.producto}</h1>
        </div>
        <Footer/>
        </Layout>
    )
}
