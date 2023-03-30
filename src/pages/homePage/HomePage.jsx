import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import TitlePage from '../../components/titlePage/TitlePage'
import { GlobalContext } from '../../contexts/GlobalContext'
import useRequestPokemons from '../../hooks/useRequestPokemons'
import { CardsContainer, HomePageContainer } from './styled'

export default function HomePage() {
  const { pokemons, onLoad, error } = useRequestPokemons()
  const context = useContext(GlobalContext);
  const { changeHeader, headerAllPokemons } = context.headerSettings

  useEffect(() => {
    changeHeader(headerAllPokemons)
  }, [])

  return (
    <HomePageContainer>
      <Header />
      <TitlePage title={"Todos Pokémons"} />
      <CardsContainer>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} />
        })}
      </CardsContainer>

    </HomePageContainer>
  )
}

