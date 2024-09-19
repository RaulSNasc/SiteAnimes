import './AnimeItem.css';
//ITENS SEPARANDO OS COMPONENTES DO ANIME
const AnimeItem = ({anime}) => {
    return(
        <li className ="animeItem">
            <img src={anime.poster} alt={anime.nome}/>
            <h4>{anime.nome}</h4>
            <p> Ano: {anime.anoLancamento}</p>
        </li>
    )
}

export default AnimeItem;