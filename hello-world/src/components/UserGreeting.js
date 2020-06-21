import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {

        //4)Short circuit - One thing or nothing - Most of the cases - More readable
        return this.state.isLoggedIn && <div>Welcom Aldo</div>

        //3) Ternary operator - Most of the cases - More readable
        // return(
        //     this.state.isLoggedIn ? <div>Welcome Aldo</div> : <div>Welcome Guest</div>
        // )

        //2) Element Variable - let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Aldo</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        //return <div>{message}</div>

        //1) Defaults - This is one way to use
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Aldo</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Aldo</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
