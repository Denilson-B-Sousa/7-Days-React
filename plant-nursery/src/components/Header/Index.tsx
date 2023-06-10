import {HeaderContainer } from "./styles";
import Logo from '../../assets/logo.svg'
export function Header(){
    return(
        <HeaderContainer>
            <img src={Logo} alt="Folha verde com o nome da loja Casa verde "/>
            <nav>
                <ul>
                    <li><a href="#">Como Fazer</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Depoimentos</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Meu Carrinho</a></li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}