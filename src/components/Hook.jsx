import React, { useState, useEffect } from 'react'


export default props => {
    const [counter, setCounter] = useState(100)
    const [status, setStatus] = useState('par')
   
    useEffect(() => {
        counter % 2 === 0 ? setStatus('par') : setStatus('inpar')
    })

    return (
        <div>
            <h1>{counter}</h1>
            <h3>{status}</h3>
            <button onClick={() => setCounter(counter + 10)}>Add10</button>
            <button onClick={() => setCounter(counter - 1)}>Sub1</button>
        </div>
    )
}

 //this actin as a life ciclo (eg. mount, update), this will be colling evrytime the componet 
    //suffer any change
    // useEffect(() => {
    //     counter % 2 === 0 ? setStatus('par') : setStatus('inpar')
    // })