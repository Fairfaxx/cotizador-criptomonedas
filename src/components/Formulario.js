import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';


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

const Formulario = () => {

    //Utilizar useMoneda
    const [state, Seleccionar, setState] = useMoneda();

    return (
        <div>

            <Seleccionar />

            <Boton
                type='submit'
                value='Calcular'
            />
        </div>
    )
}

export default Formulario;
