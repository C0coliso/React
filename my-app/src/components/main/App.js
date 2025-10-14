import React from 'react';
import MiLista from '../../MiLista.js'
import './App.css';
import Header from '../header/Header.js'
import footer from '../footer/Footer.js'
import Footer from '../footer/Footer.js';

function App() {
  return (
    <div>
      <Header/>
      <h2>Este es mi primer componente React</h2>
      <div className='parrafo'>
        <p>Bienvenido</p>
      </div>

      <br/>
      <MiLista titulo="Clientes" nombre1="Santiago" nombre2="Mateo" nombre3="Micaela" nombre4="Fabian"/>
      <br/>
      <MiLista titulo="Amigos" nombre1="Santiago" nombre2="Mateo" nombre3="Micaela" nombre4="Fabian"/>
      <br/>
      <MiLista titulo="Familiares" nombre1="Santiago" nombre2="Mateo" nombre3="Micaela" nombre4="Fabian"/>
    
    <Footer/>
    </div>
  );
}



export default App;
