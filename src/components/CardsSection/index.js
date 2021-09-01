import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from '../../services/pokemon'
import Navbar from '../Navbar';
import { Container, Content, Items, ContainerP, SearchInput, SearchLabel,  PokemonCard, PokemonImg, PokemonName, PokemonInfo, PokemonTypes, TypeContainer, PokemonP, FavoriteButton, CatchButton, PokemonInfoContainer} from './CardsElements';
import Sidebar from '../Sidebar';


const Cards = () => {
    const[isOpen, setIsOpen] = useState (false);
    const toggle= () => {

        setIsOpen(!isOpen)
    };
    const [pokemonData, setPokemonData] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [searchParam] = useState(["name"]);

    useEffect(() => {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      async function fetchData () {
          try {
            const response = await getAllPokemon(url);
            const pokemon= await completingPokemon (response.results);
          } catch (error) {
            console.log("error", error);
          }
        };
  
        fetchData();
    
  
      }, []);
      
      function search(pokemonData) {
        return pokemonData.filter((pokemon) => {
            return searchParam.some((newPokemon) => {
                return (
                    pokemon[newPokemon]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchPokemon.toLowerCase()) > -1
                );
            });
        });
    };
                 
      const completingPokemon =async (data) =>{
        const _pokemonData = await Promise.all(data.map(async pokemon =>{
        const pokemonInfo= await getPokemon(pokemon.url);
        return pokemonInfo;
    } ));

    setPokemonData(_pokemonData);
} ;

    console.log(pokemonData);


    return (
      
        <Container>
            <Navbar toggle={toggle}  />
            <Sidebar isOpen={isOpen} toggle={toggle}  />
         <Content>
         <ContainerP>Gotta catch'em all</ContainerP>
         <SearchLabel htmlFor="search-form">Nombre:</SearchLabel>
         <SearchInput type="search" name="search-form" placeholder="Buscar Pokemon" id="search" value={searchPokemon} onChange={(e) => setSearchPokemon(e.target.value)} />
         <Items>   
         {search (pokemonData).map ((pokemon,index) => {
      return(
            <PokemonCard key= {index} pokemon={pokemon}>
            <PokemonImg src={pokemon.sprites.front_default} alt=""/>
            <PokemonInfoContainer>
            <PokemonInfo> 
                <PokemonName>{pokemon.name} </PokemonName>
                <PokemonTypes>
                    {pokemon.types.map ((type) => {
                        return(
                            <TypeContainer>
                           type: {type.type.name}        
                            </TypeContainer>
                        )
                    })}
                </PokemonTypes>
                 <PokemonP>
                  weight: {pokemon.weight}
                 </PokemonP>
                 <PokemonP>
                  height: {pokemon.height}
                 </PokemonP>
                 <PokemonP>
                 ability: {pokemon.abilities[0].ability.name}
                 </PokemonP>
                 </PokemonInfo>
                 <FavoriteButton>Agregar a Favoritos</FavoriteButton>
                 <CatchButton>Capturar</CatchButton>
                 </PokemonInfoContainer>
                </PokemonCard>
             )

            } ) }
          </Items>  
            
          </Content>   
          </Container>
          );
          
};

export default Cards;
