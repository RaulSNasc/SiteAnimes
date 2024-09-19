import Saudacao from '../Saudacao/saudacao';
import './header.css';
const Header = () => {
    return (
        <header className="header">
            <h1>RECOMENDAÇÕES DE ANIMES</h1>
            <Saudacao nome="Jovem" sobrenome="Otaku."/>
        </header>
    )
}

export default Header;
