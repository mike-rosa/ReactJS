import React from 'react'
import Child from './Child'

export default props => {
    const saidaFilho = lugar => alert(`Liberado para ${lugar}`)

    return (
        <div>
            <Child sair={saidaFilho}/>
        </div>
    )
}