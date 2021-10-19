import React from 'react'
import { Global, Container } from './styles/GlobalStyle';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { CounterProvider} from './Hook/useCounter';


export const App = () => {
  return (
    <CounterProvider>

        <Container>
            <Header/>
            <Main/>

            <Global/>
        </Container>


    </CounterProvider>
  );
};

