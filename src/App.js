import React from 'react';
// import Contador from "./components/Contador"
// import Jsx from "./components/Jsx"
// import Lista from "./components/Lista"
// import Formulario from "./components/Formulario"
// import FormuHook from "./components/FormHook"
// import EjemploUno from './components/EjemploUno';
// import Saludo from './components/Saludo';
// import Comentario from './components/Comentario'

function App() {

  const sujeto = {
    nombre: 'Pedrito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum'
  }


  return (
    <div className="container mt-5">
      <h1>Hola React</h1>
      <br></br>

      {/* <Contador />
      <br></br>

      <Jsx />
      <br></br>

      <Lista />
      <br></br>

      <Formulario />
      <br></br>

      <FormuHook />
      <br></br>

      <EjemploUno />
      <br></br>

      <Saludo persona ='Juanito'/>
      <br></br>

      <Saludo persona ='Ignacio'/>
      <br></br>

      <Comentario sujeto={sujeto}/>
      <br></br> */}
    </div>
  );
}

export default App;
