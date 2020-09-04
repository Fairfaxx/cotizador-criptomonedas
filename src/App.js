import React from 'react';
import styled from '@emotion/styled';
import imagen from './robots.png';
import Formulario from './components/Formulario';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
  }
`;

const Heading = styled.h1`
    font-family: 'Bebas Neue';
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;

    &::after{
        content: '';
        width: 100px;
        height: 7px;
        background-color: #66a2fe;
        display: block;
    }
`;


const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

function App() {
    return (
        <Contenedor>
            <div>
                <Imagen
                    src={imagen}
                    alt='Imagen Cripto'
                />
            </div>
            <div>
                <Heading>Cotiza Criptomonedas al instante</Heading>
                <Formulario />
            </div>
        </Contenedor>
    );
}

export default App;