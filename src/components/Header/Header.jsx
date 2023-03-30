import React, { useContext } from 'react'
import { ButtonContainer, DetalhesContainer, FigureContainer, HeaderContainer } from './styled'
import pokemonHeader from '../../assets/images/pokemonHeader.svg'
import ButtonHeader from '../ButtonHeader/ButtonHeader.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import { goToHomePage } from '../../routes/cordinator'

export default function Header({pokemon}) {
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const { headerSettings } = context.headerSettings

  return (
    <HeaderContainer>
      <DetalhesContainer >
        <Link 
        hidden={headerSettings.hiddenAllPokemons}
          onClick={(e) => {
            e.preventDefault();
            goToHomePage(navigate);
          }}
        >
          Todos Pokémons
        </Link>
      </DetalhesContainer>
      <FigureContainer>
        <img src={pokemonHeader} alt="Pokémon" />
      </FigureContainer>
      <ButtonContainer >
        <ButtonHeader hid={headerSettings.hiddenButtonPokedex} pokemon={pokemon} />
      </ButtonContainer>
    </HeaderContainer>
  )
}
