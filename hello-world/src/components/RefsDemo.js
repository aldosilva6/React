import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        //1) First approach
        //this.inputRef = React.createRef()
        //2) Second approach
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    
    componentDidMount(){
        //Callback ref React will call the ref callback with the Dom element mount
        //and call it with null when it unmount, that the reason to check if the value exist
        if(this.cbRef){
            this.cbRef.focus()
        }
        //Access reference can access directly   
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
