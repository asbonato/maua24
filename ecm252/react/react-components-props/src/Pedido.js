import React from 'react'
//import ReactDOM from 'react-dom'

const Pedido = ({icone, titulo, descricao}) => {
    return (
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <i className={icone}></i>
          </div>
          {/** flex-grow 1: tomar todo o espaço remanescente */}
          <div className="flex-grow-1 ms-2 border">
            <h4 className="text-center">{titulo}</h4>
            <p className="text-center">{descricao}</p>
          </div>
        </div>
    )
}
export default Pedido