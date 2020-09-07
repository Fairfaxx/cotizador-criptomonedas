import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error';


const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3 ease;

    &:hover{
        background-color: #326ac0;
        cursor:pointer;
    }
`;

const Formulario = ({ setMoneda, setCriptomoneda }) => {

    //Pasar el listado de las criptomonedas al useCriptomonedas
    const [listaCripto, setListaCripto] = useState([]);

    //State de error para validar el formulario
    const [error, setError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dólar de Estados Unidos' },
        { codigo: 'ARS', nombre: 'Peso Argentino' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
    ]

    //Utilizar useMoneda
    const [state, Seleccionar] = useMoneda('Elegí tu moneda', '', MONEDAS);

    //Utilizar useCriptomoneda
    const [criptomoneda, SelecCripto] = useCriptomoneda('Elegí la Criptomoneda', '', listaCripto);

    //Llamado a la API
    useEffect(() => {

        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await axios.get(url);
            setListaCripto(respuesta.data.Data);
        }

        consultarApi()


    }, [])

    //Cuando el usuario hace el submit
    const cotizarMoneda = e => {
        e.preventDefault();

        //Validar ambos campos
        if (state.trim() === '' || criptomoneda.trim() === '') {
            setError(true)
            return
        }
        //Pasar los datos al componente principal
        setError(false)
        setMoneda(state);
        setCriptomoneda(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
            <Seleccionar />

            <SelecCripto />

            <Boton
                type='submit'
                value='Calcular'
            />
        </form>
    )
}

export default Formulario;
