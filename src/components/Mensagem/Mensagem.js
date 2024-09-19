import './Mensagem.css'

function Mensagem({cor, children}) {
    return (
    <div className="mensagem">
        <h3>Curiosidade:</h3>
        <p style={{ color: cor}}>{children}</p>
    </div>
    )
}

export default Mensagem;