import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from "./componentes/Primeiro"
import FuncaoComParametro from './componentes/FuncaoComParametro'
import { MeuComponente, MeuOutroComponente } from './componentes/MultiplosComponentes'
import ComponenteClasse from './componentes/ComponenteClasse'

const elemento = (
    <>
        <h1>React 1</h1>
        <h1>React 2</h1>
        <Primeiro/>
        <FuncaoComParametro nome="Monica Kiyota"/>
        <MeuComponente carinha=":)"/>
        <MeuOutroComponente carinha=":)"/>
        <ComponenteClasse/>
    </>
)

ReactDOM.render(elemento, document.getElementById('root'))