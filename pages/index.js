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
                    loop
                    playing
                    className='react-player'
                    url="https://www.youtube.com/watch?v=mANmaPQ4GXw"
                    width='100%'
                    height='100%'
                    controls={false}
                />
            </div>             
        </div>
        <Cards/>
        <Footer/>
      </Layout>  
    </div>
  )
}
