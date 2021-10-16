import React from 'react'
import { Global, Container } from './styles/GlobalStyle';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const App = () => {
  return (
    <Container>
        <Header/>
        <Main/>

        <Global/>
    </Container>
  );
};

