import './Mensagem.css'

//FUNCÇÃO DE MENSAGEM COM CHILDREN E ESTILO DIRETO DE COR

function Mensagem({cor, children}) {
    return (
    <div className="mensagem">
        <h3>Curiosidade:</h3>
        <p style={{ color: cor}}>{children}</p>
    </div>
    )
}

export default Mensagem;