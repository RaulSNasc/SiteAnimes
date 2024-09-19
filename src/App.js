import './App.css';
import Mensagem from './components/Mensagem/Mensagem';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';
import Animes from './components/Animes/Animes';
import Form from './components/Form/Form';

//FUNÇÃO APP COM A ESTRUTURAÇÃO DO NOSSO SITE POR COMPONENTES.

function App() {
  return (
    <>
      <Header/>
      <div className='container'>
      <Mensagem cor="white">
      Oda se tornou mangaká para evitar "um emprego de verdade".
      </Mensagem>
      <Animes/>
      <section className="contato">
        <h2>Gostaria de mais sugestões? Entre em contato conosco.</h2>
        <Form/>
      </section>
      </div>
      <Footer/>
    </>
  );
}

export default App;
