import { useState } from 'react';
import './Salida.css';

const SalidaCalcu = (props) => {


    const [estados, setEstados] = useState({
        boton1: 'predet',
        boton2: 'predet'
    });

    const submitHandler37 = (event) => {
        event.preventDefault();
        setEstados({
            boton1: 'ok',
            boton2: 'nok'
        })
        props.cambiarMulti(37)
        props.actualizar(props.numero, 37)
    }
    const submitHandler43 = (event) => {
        event.preventDefault();
        setEstados({
            boton1: 'nok',
            boton2: 'ok'
        })
        props.cambiarMulti(43)
        props.actualizar(props.numero, 43)
    }

    return (
        <>
            <form>
                <div className='nuevoproducto__controls'>
                    <div className='nuevoproducto__actions'>
                        <br />
                        <button onClick={submitHandler37} id={estados.boton1} type='submit'>37</button>
                        <button onClick={submitHandler43} id={estados.boton2} type='submit'>43</button>
                        <br />
                        <br />
                    </div>
                </div>
            </form>
            <div className='nuevoproducto__controls'>
                <div className='nuevoproducto__control'>
                    <label>Salida: </label>
                    <p>{props.algo}</p>
                </div>
            </div>
        </>
    )
}

export default SalidaCalcu;