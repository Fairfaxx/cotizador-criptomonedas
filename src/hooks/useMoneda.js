import React, { Fragment, useState } from 'react';

const useMoneda = () => {

    // state de nuestro custom Hook
    const [state, setState] = useState('');

    const Seleccionar = () => (


        <Fragment>
            <label>Moneda</label>
            <select>
                <option value='ARS'>Peso Argentino</option>
            </select>
        </Fragment>
    );

    //Retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda;
