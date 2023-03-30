import React from 'react'
import { getColors } from '../../util/ReturnCardColor'
import { getTypes } from '../../util/ReturnPokemonType'
import Stats from '../Stats/Stats'
import { BackImgContainer, DataContainer, DetailsContainer, FrontImgContainer, ImgDefaultContainer, MovesContainer, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, StatsContainer, TypesContainer } from './styled'

export default function CardDetails({pokemon}) {
    const {id, name, stats, types, moves, sprites} = pokemon
  return (
    <DetailsContainer cor={getColors(types[0])}>
        <FrontImgContainer>
            <img src={sprites.frontDefault} alt={name} />
        </FrontImgContainer>
        <BackImgContainer>
            <img src={sprites.backDefault} alt={name} />
        </BackImgContainer>
        <StatsContainer>
            <h3>Base stats</h3>
            <Stats stats={stats}/>
        </StatsContainer>
        <DataContainer>
            <PokemonNumber>#{id}</PokemonNumber>
            <PokemonName>{name}</PokemonName>
            <TypesContainer>
                {types.map((type)=>{
                    return <PokemonType key={type} src={getTypes(type)} alt={type}/>
                })}
            </TypesContainer>
        </DataContainer>
        <MovesContainer>
            <h2>Moves:</h2>
            {moves.map((move)=>{
                return <p key={move}>{move}</p>
            })}
        </MovesContainer>
        <ImgDefaultContainer>
            <Pokemon src={sprites.default} alt={name}/>
        </ImgDefaultContainer>
        <Pokeball/>
    </DetailsContainer>
  )
}
