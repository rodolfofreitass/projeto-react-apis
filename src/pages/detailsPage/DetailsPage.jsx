import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CardDetails from '../../components/CardDetails/CardDetails'
import Header from '../../components/Header/Header'
import TitlePage from '../../components/titlePage/TitlePage'
import { GlobalContext } from '../../contexts/GlobalContext'
import { goToErrorPage } from '../../routes/cordinator'
import { DetailsContainer, MainDetails } from './styled'

export default function DetailsPage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const context = useContext(GlobalContext);
  const { changeHeader, headerDetails } = context.headerSettings

  useEffect(() => {
    changeHeader(headerDetails)
    if (state === null) {
      goToErrorPage(navigate)
    }
  }, [])
  return (
    <>
      {state ?
        <DetailsContainer>
          <Header pokemon={state} />
          <MainDetails>
            <TitlePage title={"Detalhes"}/>
            <CardDetails pokemon={state}/>
          </MainDetails>
        </DetailsContainer> : <></>}
    </>
  )
}
