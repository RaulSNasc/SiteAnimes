//CONST PARA A UTILIZAÇÃO DO BOTÃO
const Button = ({text, ...props}) => {
    return (
        <button className="button" type={props.type}>{text}</button>
    )
}

export default Button;