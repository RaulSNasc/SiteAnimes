import './saudacao.css';
function Saudacao({nome = 'Usuário', sobrenome}) {

    return (
      <h2 className='title' >Olá, {nome} {sobrenome}</h2>
    )
}

export default Saudacao;