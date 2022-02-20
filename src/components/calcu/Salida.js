import { useState } from 'react';
import './Salida.css';

const SalidaCalcu = (props) => {


    const [result, setResult] = useState('');

    const submitHandler37 = (event) => {
        event.preventDefault();
        setResult(props.algo*37);
        setEstados({
            boton1: 'ok',
            boton2: 'nok'
        })
    }
    const submitHandler43 = (event) => {
        event.preventDefault();
        setResult(props.algo*43);
        setEstados({
            boton1: 'nok',
            boton2: 'ok'
        })
    }
    
    const [estados, setEstados] = useState({
        boton1: 'predet',
        boton2: 'predet'
    });

    return (
        <>
            <form onSubmit={submitHandler37}>
                <div className='nuevoproducto__controls'>
                    <div className='nuevoproducto__actions'>
                        <button id={estados.boton1} type='submit'>37</button>
                    </div>
                </div>
            </form>
            <form onSubmit={submitHandler43}>
                <div className='nuevoproducto__controls'>
                    <div className='nuevoproducto__actions'>
                        <button id={estados.boton2} type='submit'>43</button>
                    </div>
                </div>
            </form>
                <div className='nuevoproducto__controls'>
                    <div className='nuevoproducto__control'>
                        <label>Salida: </label>
                        <input type='number' value={result} />
                    </div>
                </div>
        </>
    )
}

export default SalidaCalcu;