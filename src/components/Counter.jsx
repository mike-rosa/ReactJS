import React, { Component } from 'react'

export default class counter extends Component {

    state ={
        number: 0
    }

    ADD = () => {
        this.setState({number:this.state.number+1})
        // this.state.number++
    }
    SUB = () => {
        this.setState({number:this.state.number-1})
        // this.state.number--
    }

    render() {
        return (
            <div>
                <div>Number: {this.state.number}</div>
                <button onClick={this.ADD}>+</button>
                <button onClick={this.SUB}>-</button>
            </div>
        )
    }

}