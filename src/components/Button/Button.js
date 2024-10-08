//CONST PARA A UTILIZAÇÃO DO BOTÃO
const Button = ({text, onClick, ...props}) => {
    return (
        <button className="button" type={props.type} onClick={(event)=>{
            event.preventDefault();
            onClick();

        }}>{text}</button>
    )
}

export default Button;