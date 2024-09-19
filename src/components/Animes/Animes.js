import AnimeItem from '../AnimeItem/AnimeItem'
import './Animes.css'
const Animes = () => {
    const anime = [
    {
        nome:'One Piece',
        poster:'https://bancaconect.com.br/wp-content/uploads/2021/03/Livro-ilustrado-Oficial-One-Piece.jpg',
        anoLancamento:'1999'
    },
    {
        nome:'Naruto',
        poster:'https://cdn.ome.lt/xvr4Ou-sVAXtty_i_PO2-7CYV4g=/fit-in/837x500/smart/uploads/conteudo/fotos/naruto-anime-poster.jpg',
        anoLancamento:'2002'
    },
    {
        nome:'Mob Psycho 100',
        poster:'https://img.elo7.com.br/product/zoom/1EC7EE6/big-poster-do-anime-mob-psycho-100-tamanho-90x-0-cm-lo02-nerd.jpg',
        anoLancamento:'2016'
    },
    { nome:'Goblin Slayer',
        poster:'https://m.media-amazon.com/images/I/71ooQXkjbdL._AC_SL1104_.jpg',
        anoLancamento:'2018'
        
    },
    {
        nome:'Demon Slayer',
        poster:'https://m.media-amazon.com/images/I/71r8Wf5h0+L._AC_UF1000,1000_QL80_.jpg',
        anoLancamento:'2019'
    },
    {
        nome:'Jujutsu Kaisen',
        poster:'https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg',
        anoLancamento:'2020'
    },
]
return (
    <section class="animes">
        <h2>MINHAS RECOMENDAÇÕES: </h2>
        <ul className="animesLista">
        {anime.map((animes, index)=>  (
            <AnimeItem anime={animes} key ={index}/>       
        ))}
     </ul> 
     </section>
    )
}

export default Animes;