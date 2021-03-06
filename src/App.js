import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from './robots.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';


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

    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [resultado, setResultado] = useState({});

    useEffect(() => {

        const cotizarCriptomoneda = async () => {

            if (moneda === '') return;

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
            const respuesta = await axios.get(url);
            setResultado(respuesta.data.DISPLAY[criptomoneda][moneda]);
        }

        cotizarCriptomoneda();


    }, [moneda, criptomoneda])


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

                <Formulario
                    setCriptomoneda={setCriptomoneda}
                    setMoneda={setMoneda}
                />

                <Cotizacion
                    resultado={resultado}
                />
            </div>
        </Contenedor>
    );
}

export default App;
