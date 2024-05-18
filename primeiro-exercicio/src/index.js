import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from "./componentes/Primeiro"
import FuncaoComParametro from './componentes/FuncaoComParametro'

const elemento = (
    <>
        <h1>React 1</h1>
        <h1>React 2</h1>
        <Primeiro/>
        <FuncaoComParametro nome="Monica Kiyota"/>
    </>
)

ReactDOM.render(elemento, document.getElementById('root'))