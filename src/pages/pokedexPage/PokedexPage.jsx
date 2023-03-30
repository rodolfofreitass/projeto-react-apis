import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import TitlePage from '../../components/titlePage/TitlePage';
import { GlobalContext } from '../../contexts/GlobalContext'
import { CardsContainer, DetailPageContainer } from './styled'

export default function PokedexPage() {
  const context = useContext(GlobalContext);
  const { changeHeader, headerpokedex } = context.headerSettings
  const { pokedex } = context.pokedex

  useEffect(() => {
    changeHeader(headerpokedex)
  }, [])

  return (
    <DetailPageContainer>
      <Header />
      <TitlePage title={"Meus Pokémons"} />
      <CardsContainer>
        {pokedex.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />
        })}
      </CardsContainer>
    </DetailPageContainer>
  )
}
