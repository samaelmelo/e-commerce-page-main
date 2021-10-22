import React, {useState} from 'react'
import { Global, Container } from './styles/GlobalStyle'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { CounterProvider } from './Hook/useCounter'
import { ModalWrapper } from './components/Modal'
import Modal from "react-modal"


Modal.setAppElement('#root')

export const App = () => {

  const [modalIsOpen,setModalIsOpen] = useState(false)

  const handleOpenModal = () =>{
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <CounterProvider>
      <Container>
        <Header />
        <Main openModal={handleOpenModal}/>

        <Global />

        <ModalWrapper 
            modalIsOpen={modalIsOpen} 
            handleCloseModal={handleCloseModal}
        />
      </Container>
    </CounterProvider>
  )
}
