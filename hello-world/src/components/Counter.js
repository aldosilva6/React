import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    //setState when you need to modify a state value
    increment(){
        //To better performance React calls only one time
        /*this.setState({
            count: this.state.count + 1
        }, () => {console.log('Callback value', this.state.count)})*/
        
        //If need to call 5 times is necessary to use arrow function to pass a function instead of an object
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
