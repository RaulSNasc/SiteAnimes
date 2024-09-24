import { useEffect, useState } from 'react'
import AnimeItem from '../AnimeItem/AnimeItem'
import './Animes.css'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

//CONST COM LISTA DE POSTER, NOME E ANO DOS ANIMES
const Animes = () => {
    const [anime, setAnimes] = useState([])

    useEffect(() => {
        getAnimes();
    },[])
   

    const [animeForm, setAnimeForm] = useState({
        nome: "",
        poster: "",
        anoLancamento: "",
    })

    const handleFieldsChange = (event) => {
        setAnimeForm({
            ...animeForm,
            [event.target.name]: event.target.value         
        })
        console.log(animeForm);
        
    }

    const handleClick = async () => {
      const response = await fetch('http://localhost:3005/animes', {
        method: 'POST',
        headers: new Headers({
                "Content-type" : "application"
            }),
            body: JSON.stringify(animeForm)
        })

        const data = await response;
        alert (` ${data.nome} cadastrado com sucesso`);
        
        getAnimes();

        setAnimeForm({
            nome: "",
            poster: "",
            anoLancamento: "",
        })
    }

    const getAnimes = async() => {
        //GET -Buscar as informações dos animes pré-cadastrados.

        const response = await fetch('http://localhost:3005/animes')
        const data = await response.json()
        setAnimes(data)
    }

//RETORNA PARA A CLASSE ANIMES COM OS DADOS DA LISTA

return (
    <section className="animes">
        <h2>MINHAS RECOMENDAÇÕES: </h2>
        <form className="forms">
            <FormInput inputName="Nome" id ="nome" name="nome" type= "text" value={animeForm.nome} onChange={event => handleFieldsChange(event)}/>
            <FormInput inputName="Poster" id ="poster" name="poster" type= "text" value={animeForm.poster} onChange={event => handleFieldsChange(event)}/>
            <FormInput inputName="Ano de lançamento" id ="anoLancamento" name="anoLancamento" type= "text" value={animeForm.anoLancamento} onChange={event => handleFieldsChange(event)}/>
            <Button text="Cadastrar" type="submit" onClick={handleClick}/>
        </form>
        <ul className="animesLista">
        {anime.map((animes, index)=>  (
            <AnimeItem anime={animes} key ={index}/>       
        ))}
     </ul> 
     </section>
    )
}

export default Animes;