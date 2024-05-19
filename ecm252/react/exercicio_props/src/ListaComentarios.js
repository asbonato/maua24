import React from 'react'

const ListaComentarios = ({children}) => {
    return (
        <div className={estilos.principal}>
        {children}
    </div>
    )
}

const estilos = {
    principal: 'container border border-warning rounded my-3 p-3'
}

export default ListaComentarios
