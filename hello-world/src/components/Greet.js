import React from 'react'

// function Greet(){
//     return <h1>Aldo love Manu</h1>
// }

const Greet = props => {
        console.log(props)
        //Adding parenthesis to split the return in multiples lines
        return (
            <div>
                <h1>Hello {props.name} a.k.a {props.heroName}</h1>
                {props.children}
            </div>
        )
}
    
export default Greet