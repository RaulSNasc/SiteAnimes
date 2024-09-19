import './saudacao.css';
//FUNÇÃO DE SAUDAÇÃO PARA CLIENTES, RETORNA  NOME E SOBRENOME.
function Saudacao({nome = 'Usuário', sobrenome}) {

    return (
      <h2 className='title' >Olá, {nome} {sobrenome}</h2>
    )
}

export default Saudacao;