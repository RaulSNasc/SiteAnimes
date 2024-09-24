import Saudacao from '../Saudacao/saudacao';
import './header.css';
//CONST PARA A SEPARAÇÃO DO NOSSO COMPONENTE HEADER
const Header = () => {
    return (
        <header className="header">
            <h1>ANIMES</h1>
            <Saudacao nome="Jovem" sobrenome="Otaku."/>
        </header>
    )
}

export default Header;
