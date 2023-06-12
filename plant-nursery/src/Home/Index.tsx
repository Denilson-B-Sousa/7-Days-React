import { HomeContainer } from "./styles"
import vector from "../assets/vector.svg"
import Hero from "../assets/hero-image.png"
import { Header } from "../components/Header/Index"
export function Home(){
    return(
        <HomeContainer>
            <Header/>
            <div className="home-banner-container">
                <div className="home-banner-ImageContainer">
                        <img src={vector} alt="" className="vector-image"/>

                </div>
            </div>
        
            <div className="home-hero-container">
                <div className="home-hero-ImageContainer">
                        <img src={Hero} alt="" className="hero-image"/>
                </div>
            </div>

            <section className="hero-content">
                <span>Sua casa com as</span>
                <h1>Melhores plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

                <div className="newsletter">
                    <input type="email" placeholder="Insira seu e-mail"/>
                    <button type="submit">Assinar newsletter</button>
                </div>
            </section>
           
        </HomeContainer>
    )
}