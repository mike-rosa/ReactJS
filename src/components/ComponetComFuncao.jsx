import React from 'react'

const aprovados = ['paulo','nara','thiago','bia','benjamin']

export default props => {

    const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}