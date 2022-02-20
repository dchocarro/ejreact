import { useState } from 'react';

const EntradaCalcu = (props) => {
    
    const [numerico, setNumerico] = useState('0');
    
    const nombreHandler = (event) => {
        props.setear(event.target.value);
        setNumerico(event.target.value)
    }

    return (
            <div className='nuevoproducto__controls'>
                <div className='nuevoproducto__control'>
                    <label>Input: </label>
                    <input type='number' onChange={nombreHandler} value={numerico}/>
                </div>
            </div>
    )
}

export default EntradaCalcu;