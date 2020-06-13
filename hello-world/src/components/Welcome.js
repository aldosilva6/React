import React, {Component} from 'react'

class Welcome extends Component {

    //Using destructuring from ES6
    render(){
        const {name, heroName} = this.props
        return <h1>Class Component {name} a.k.a {heroName}</h1>
    }
    
    /*render(){
        return <h1>Class Component {this.props.name} a.k.a {this.props.heroName}</h1>
    }*/
}

export default Welcome