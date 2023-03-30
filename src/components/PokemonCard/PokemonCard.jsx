import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getColors } from '../../util/ReturnCardColor'
import { getTypes } from '../../util/ReturnPokemonType'
import { CatchButton, Container, DetalhesContainer, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from './styled'
import pokeball from '../../assets/images/fundo.png'
import { GlobalContext } from '../../contexts/GlobalContext'
import { goToDetailsPage } from '../../routes/cordinator'
import useModal from '../../hooks/useModal'

export default function PokemonCard({ pokemon }) {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const {addPokedex, inPokedex, removePokedex} = context.pokedex
    const { modal, openModal, action } = useModal()
    const { id, name, types, sprites } = pokemon
    const onPokedex = ()=>{
        return (
            <CatchButton 
            background={"#FF6262"}
            color={"#FFF"}
            onClick={()=>{
                openModal(action.delete)
                removePokedex(pokemon)
            }}
            >
                Excluir!
            </CatchButton>
        )
    }

    const offPokedex = ()=>{
        return (
            <CatchButton 
            background={"#FFF"}
            color={"#000"}
            onClick={()=>{
                openModal(action.add)
                addPokedex(pokemon)
            }}
            >
                Capturar!
            </CatchButton>
        )
    }

    return (
        <>
        {modal()}
        <Container color={getColors(types[0])}>
            <div>
                <PokemonNumber>
                    #{id}
                </PokemonNumber>
                <PokemonName>
                    {name}
                </PokemonName>
                <TypesContainer>
                    {types.map((type)=>{
                        return <PokemonType key={`${id}${type}`} src={getTypes(type)} alt={type}/>
                    })}
                </TypesContainer>
                <DetalhesContainer>
                    <Link onClick={(e)=>{
                        e.preventDefault()
                        goToDetailsPage(navigate,{state:pokemon})
                    }}>
                        Detalhes
                    </Link>
                </DetalhesContainer>
            </div>
            <div>
                <Pokemon src={sprites.default} alt={name}/>
                {inPokedex(id)? offPokedex() : onPokedex()}
            </div>
            <Pokeball src={pokeball} alt="Pokeball"/>
        </Container>
        </>
    )
}
