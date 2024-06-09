import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
    const [tarefas, setTarefas] = useState([])
    useEffect(() => {
        const vai = async () => {
            const resultado = await axios.get('http://localhost:50000/tarefas')
            setTarefas(tarefasOld => resultado.data)
        }
        vai()
    }, [])
    return(
        <div>
            {
                tarefas.map(t => <p>{t.texto}</p>)
            }
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)