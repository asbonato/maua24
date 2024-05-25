import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            estacao: null,
            data: null,
            icone: null
        }
    }
    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        //new Date(ano, mês(0 a 11), dia(1 a 31))
        //01/01 - norte: inverno - sul: verão
        const d0 = new Date(anoAtual, 0, 1)
        //21/03 - norte: primavera - sul: outono
        const d1 = new Date(anoAtual, 2, 21)
        //21/06 - norte: verão - sul: inverno
        const d2 = new Date(anoAtual, 5, 21)
        //24/09 - norte: outono - sul: primavera
        const d3 = new Date(anoAtual, 8, 24)
        //22/12 - norte: inverno - sul: verão
        const d4 = new Date(anoAtual, 11, 22)
        const sul = latitude < 0

        if( data >= d0 && data < d1) return sul?'Verão':'Inverno'
        else if (data >= d1 && data < d2) return sul?'Outono':'Primavera'
        else if (data >= d2 && data < d3) return sul?'Inverno':'Verão'
        else if (data >= d3 && data < d4) return sul?'Primavera':'Outono'
        else return sul?'Verão':'Inverno'
    }

    icones = {
        'Primavera':'fa-seedling',
        'Verão':'fa-umbrella-beach',
        'Outono':'fa-tree',
        'Inverno':'fa-snowman'
    }

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (posicao) => {
                let data = new Date()
                let estacao = this.obterEstacao(data, posicao.coords.latitude)
                let icone = this.icones[estacao]
                console.log('obterLocalizacao', estacao)
                this.setState(
                    {
                        latitude: posicao.coords.latitude,
                        longitude: posicao.coords.longitude,
                        estacao: estacao,
                        data: data.toLocaleDateString(),
                        icone: icone
                    }
                )
            }
        )
    }

    render(){
        return (
            //responsividade, margem acima
            <div className='container mt-2'>
                {/** uma linha, conteúdo centralizado, display flex */}
                <div className='row justify-content-center'>
                    {/** oito colunas das doze disponíveis são usadas para 
                         telas médias em diante */}
                    <div className='col-md-8'>
                         {/** um cartão bootstrap */}
                         <div className='card'>
                            {/** corpo do cartão */}
                            <div className='card-body'>
                                {/** centraliza verticalmente, margem abaixo */}
                                <div className='d-flex align-items-center border rounded mb-2'
                                     style={{height:'6rem'}}>
                                     {/** ícone obtido do estado do componente */}
                                    <i className={`fas fa-5x ${this.state.icone}`}></i>  
                                    {/** largura 75%, margem à esquerda (start), 
                                         fs aumenta a fonte */}  
                                    <p className='w-75 ms-3 text-center fs-1'>{this.state.estacao}</p> 
                                </div>
                                <p className='text-center'>
                                {/** renderização condicional */}
                                {
                                    this.state.latitude?
                                    `Coordenadas: ${this.state.latitude}, ${this.state.longitude}, Data: ${this.state.data}`
                                    :
                                    'Clique no botão para saber a sua estação climática.'
                                }
                                </p>
                                {/** botão azul (outline, 100% de largura, margem acima) */}
                                <button onClick={this.obterLocalizacao}
                                        className='btn btn-outline-primary w-100 mt-2'>
                                    Qual a minha estação?        
                                </button>
                            </div>
                         </div>
                    </div>
                </div>    
            </div>
        )
    }
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)