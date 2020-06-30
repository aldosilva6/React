import React, { Component } from 'react'
//Class component
class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }

    //One time when the component is created
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times `
    }

    //Everytime the component is update
    //To uptimize performance whe can use prevProps and preState to not update everytime the title
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }

    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}}/>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
                Click {this.state.count} times
            </div>
        )
    }
}

export default ClassCounter
