import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './Form.css';
//CONST PARA CRIAR UM FORMUÁRIO COM INTERAÇÃO DO CLIENTE
const Form = () => {
    return (
        <form className="form">
            <FormInput inputName="Nome" id="nome" type="text" />
            <FormInput inputName="E-Mail" id="E-Mail" type="E-Mail"/>
            <Button text="Enviar" type="submit"/>
        </form>
    )

}


export default Form;