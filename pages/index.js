import Layout from "../componentes/Layout"
import ReactPlayer from "react-player"
import {Container} from "semantic-ui-react"
import Cards from "../componentes/Cards"
import Footer from "../componentes/Footer"



export default function Home() {
  return (
    <div>
      <Layout>
        <Container centered align="center" >
            <Container className="player-wrapper">
                <ReactPlayer
                    loop="true"
                    playing="true"
                    className='react-player'
                    url="https://www.youtube.com/watch?v=mANmaPQ4GXw"
                    width='100%'
                    height='100%'
                    controls="false"
                />
            </Container>             
        </Container>
        <Cards/>
        <Footer/>
      </Layout>  
    </div>
  )
}
