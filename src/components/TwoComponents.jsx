import React from 'react'


const CompA = props => <h1>compA {props.value}</h1>
const CompB = props => <h1>compB {props.value}</h1>

export { CompA, CompB }
const TwoElements = { CompA,
    CompB}
export default TwoElements 