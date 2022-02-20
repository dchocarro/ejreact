import './App.css';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Entrada from './components/calcu/Entrada';
import Salida from './components/calcu/Salida';
import { useState } from 'react';

function App() {

  const [numero, setNumero] = useState('')

  const addNumero = (numero) => {
    setNumero(numero);
  };

  return (
    <div>
      <Header />
      <Entrada setear={addNumero}/>
      <Salida algo={numero}/>
      <Footer />
    </div>
  );
}

export default App;
