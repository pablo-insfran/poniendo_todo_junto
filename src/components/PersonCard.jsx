
import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {age: props.age}
    }

    sumaedad = () =>{
        this.setState({age: this.state.age + 1})
    }

  render() {

    const {fristName, lastName, hairColor } = this.props

    return (
        <div>
            <h1>{fristName}, {lastName} </h1>
            <h2>Age: {this.state.age}</h2>
            <h2>Hair Color: {hairColor}</h2>
            <button onClick={this.sumaedad}>Brithday Button for {lastName} {fristName} </button>
        </div>
    )
  }
}

export default PersonCard