import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DETAILS_PAGE, HOME_PAGE } from '../../constants/routeConstants'
import { GlobalContext } from '../../contexts/GlobalContext'
import useModal from '../../hooks/useModal'
import { goToPokedexPage } from '../../routes/cordinator'
import { Button } from './styled'

export default function ButtonHeader({ pokemon, hid }) {
  const location = useLocation()
  const context = useContext(GlobalContext)
  const { addPokedex, inPokedex, removePokedex } = context.pokedex;
  const { modal, openModal, action } = useModal()
  const navigate = useNavigate()
  const buttons = () => {
    switch (location.pathname) {
      case DETAILS_PAGE:
        return pokemon && inPokedex(pokemon.id) ? offPokedex() : onPokedex()
      case HOME_PAGE:
        return goPokedex()
      default:
        return goPokedex()
    }
  }

  const goPokedex = () => {
    return <Button hidden={hid} background={"#33A4F5"} onClick={() => { goToPokedexPage(navigate) }}>
      Pokédex
    </Button>
  }

  const onPokedex = () => {
    return (
      <Button
        background={"#FF6262"}
        onClick={() => {
          openModal(action.delete)
          removePokedex(pokemon)
        }}
      >
        Excluir!
      </Button>
    )
  }

  const offPokedex = () => {
    return (
      <Button
        background={"#33A4F5"}
        onClick={() => {
          openModal(action.add)
          addPokedex(pokemon)
        }}
      >
        Capturar!
      </Button>
    )
  }

  return (
    <>
    {modal()}
      {buttons()}
    </>
  )
}

