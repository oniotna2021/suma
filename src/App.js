import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import sumar from "./engine/sumar.js"

function App() {

  const [suma,setSuma]=useState(0);
  const [a,setA]=useState(null);
  const [b,setB]=useState(null);

  useEffect(async()=>{
    setA(1);
    setB(2);
    console.log(a,b)

})

const calcular=()=>{
  console.log(sumar(a,b))
}


  return (
    <div className="App">
      <h1>HOLA</h1>
      <button onClick={calcular}>SUMAR</button>
    </div>
  );
}

export default App;
