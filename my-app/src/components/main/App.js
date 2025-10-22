import MiLista from '../MiLista.js'
import './App.css';
import Header from '../header/Header.js'
import Footer from '../footer/Footer.js';

function App() {
  return (
    <>
      <Header/>
      <h2>Este es mi primer componente React</h2>
      <div id='parrafo'>
        <p>Bienvenido</p>
      </div>

    <MiLista/>
    <Footer/>
    </>
  )
}



export default App;
