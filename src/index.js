import React from 'react'
import ReactDom from 'react-dom'

// import FirstComponent from './components/FirstComponent'//single element exported
// import { CompB, CompA } from './components/TwoComponents'//multiple components exported
// import MultiElements from './components/MultipleElements'//multiple elements exported
// import Family from './components/Family'
// import Member from './components/Member'
// import ComponentsFunctional from './components/ComponetComFuncao'
// import Father from './components/Father'
// import Classe from './components/ComponentClass'//component based in class
// import Contador from './components/Counter'//component based in class
import Hook from './components/Hook'//component based in class

ReactDom.render(
  <div>
    <Hook/>
    {/* <Contador number={0}/> */}
    {/* <Classe value="123"/>
    <Classe /> */}
    {/* <Father></Father> */}
    {/* <ComponentsFunctional/> */}
    {/* <MultiElements /> */}
    {/* <Family lastName="Rosa">
      <Member name="mayk"/>
      <Member name="nara"/>
      <Member name="bia"/>
      <Member name="Ben"/>
    </Family> */}
    {/* <CompB value="value1" />
    <CompA value="value2" />
    <FirstComponent value="bom dia" /> */}
  </div>
  ,
  document.getElementById('App')
)