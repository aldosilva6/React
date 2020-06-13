import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        //3)Binding in class constructor - React recomendations
        //this.clickHandler = this.clickHandler.bind(this)
    }
    
    /*clickHandler(){
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }*/

    //4) Class property as arrow function - React recomendations
    clickHandler = () => {
        this.setState({
            message: 'New Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*1) Binding in render <button onClick={this.clickHandler.bind(this)}>Click</button> Performance problems*/}
                {/*2) Arrow function in render <button onClick={() => this.clickHandler()}>Click</button> If need to pass parameter is the best choice*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding
