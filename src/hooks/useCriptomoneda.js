import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.3rem;
`;

const useCriptomoneda = (label, stateInicial, monedas) => {



    // state de nuestro custom Hook
    const [state, setState] = useState(stateInicial);

    const SelecCripto = () => (


        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >

                <option value=''>--Seleccioná tu Moneda--</option>
                {monedas.map(moneda => (
                    <option key={moneda.CoinInfo.Id} value={moneda.CoinInfo.Name}>{moneda.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    //Retornar state, interfaz y funcion que modifica el state
    return [state, SelecCripto, setState];
}

export default useCriptomoneda;
