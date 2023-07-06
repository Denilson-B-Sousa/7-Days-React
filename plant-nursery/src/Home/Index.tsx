import { CardsContainer, CardsTitle, HomeContainer } from "./styles"
import vector from "../assets/vector.svg"
import Hero from "../assets/hero-image.png"
import sheets from "../assets/sheets.png"
import { Header } from "../components/Header/Index"
import  Card  from "../components/Card/Index"

export function Home(){
    interface Item {
        title: string;
        price: string;
        src: string;
      }

    const items: Item[] = [
        { title: 'Ajuda-reptans', price: 'R$20,00', src: '../../src/assets/Ajuda-reptans.png' },
        { title: 'Cordyline', price: 'R$20,00', src: '../../src/assets/Cordyline.png' },
        { title: 'Crassula', price: 'R$20,00', src: '../../src/assets/Crassula.png' },
        { title: 'Cyperus', price: 'R$20,00', src: '../../src/assets/Cyperus.png' },
        { title: 'Datura', price: 'R$20,00', src: '../../src/assets/Datura.png'},
        { title: 'Delairea', price: 'R$20,00', src: '../../src/assets/Delairea.png'}
      ];

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
                    <button type="submit" className="button-newsletter">Assinar newsletter</button>
                </div>
            </section>

            <section className="card-section">
                <div className="card-image">
                    <img src={sheets} alt="folhas verdes"/>
                </div>
                <div className="card-content">
                    <span>Como conseguir</span>
                    <h2>minha planta</h2>
                    <ul className="list">
                        <li className="list-item">Escolha suas plantas</li>
                        <li>Faça seu pedido</li>
                        <li>Aguarde na sua casa</li>
                    </ul>
                </div>
            </section>
            <CardsTitle>
                <span>Conheça nossas</span>
                <h2>Ofertas</h2>
            </CardsTitle>
            <CardsContainer>
                {items.map(item => (
                    <Card
                        key={item.title}
                        title={item.title}
                        price={item.price}
                        src={item.src}
                    />
                ))}
            </CardsContainer>
        
           
           
        </HomeContainer>
    )
}
