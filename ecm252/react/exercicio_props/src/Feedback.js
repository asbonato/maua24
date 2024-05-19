import React from 'react'

const Feedback = ({funcaoOK, funcaoNOK, textoOK, textoNOK}) => {
    return (
        <div className='d-flex'>
            <button
                onClick={funcaoOK}
                className='mx-2 btn btn-outline-primary'>
                {textoOK}
            </button>
            <button
                onClick={funcaoNOK}
                className='btn btn-outline-danger'>
                {textoNOK}
            </button>
        </div>
    )
}

export default Feedback