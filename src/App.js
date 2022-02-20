import './App.css';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Entrada from './components/calcu/Entrada';
import Salida from './components/calcu/Salida';
import { useState } from 'react';

function App() {

  const [numero, setNumero] = useState('0')
  const [multi, setMulti] = useState('0');
  const [final, setFinal] = useState('0');
  const addNumero = (numero) => {
    setNumero(numero);
  };

  const cambiarMulti = (multi) => {
    setMulti(multi);
  };

  const actualizarHandler = (n, r) => {
    setFinal(n * r);
  }

  return (
    <div>
      <Header />
      <Entrada setear={addNumero} actualizar={actualizarHandler} multi={multi}/>
      <Salida algo={final} cambiarMulti={cambiarMulti} multi={multi} numero={numero} actualizar={actualizarHandler}/>
      <Footer />
    </div>
  );
}

export default App;