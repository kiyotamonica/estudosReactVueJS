import React, {Component} from 'react'

export default class ComponenteClasse extends Component {
    state = {
        nome: "Emerson",
        sobrenome: "Lino"
    }
    
    setNome(evento){
        this.setState({nome: evento.target.value})
    }

    render() {
        const {nome, sobrenome} = this.state
        return(
            <div>
                <h1>{nome} {sobrenome}</h1>
                <hr/>
                <input type='text' placeholder='O nome aqui' value={nome} onChange={evento => this.setNome(evento)}/>
                <input type='text' placeholder='O sobrenome aqui' value={sobrenome}/>
            </div>
        )
    }
}