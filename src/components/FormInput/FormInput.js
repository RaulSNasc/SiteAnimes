//CONST DO  INPUT DO FORMULARIO DANDO OS DADOS DE CADA ITEM

const FormInput = ({inputName, ...props}) => {

    return(
        <div className="form-input">
        <label htmlFor={props.id}>{inputName}:</label>
        <input type={props.type} />
    </div>
    )

}

export default FormInput;