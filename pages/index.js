import Layout from "../componentes/Layout"
import ReactPlayer from "react-player"
import Cards from "../componentes/Cards"
import Footer from "../componentes/Footer"





export default function Home() {
  return (
    <div>
      <Layout>
        <div className="container-player">
            <div className="player-wrapper">
                <ReactPlayer
                    loop="true"
                    playing="true"
                    className='react-player'
                    url="https://www.portaldeartesanos.com/uploads/Video_animado_explicativo_Matu_Aromaterapia_f7a9460204.mp4"
                    width='100%'
                    height='100%'
                    controls="false"
                />
            </div>             
        </div>
        <Cards/>
        <Footer/>
      </Layout>  
    </div>
  )
}
