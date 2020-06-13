import React from 'react'

// function Greet(){
//     return <h1>Aldo love Manu</h1>
// }

/*const Greet = props => {
        console.log(props)
        //Adding parenthesis to split the return in multiples lines
        return (
            <div>
                <h1>Hello {props.name} a.k.a {props.heroName}</h1>
                {props.children}
            </div>
        )
}*/
//Using destructuring in the parameter from ES6
/*const Greet = ({name, heroName}) => {
        //Adding parenthesis to split the return in multiples lines
        return (
            <div>
                <h1>Hello {name} a.k.a {heroName}</h1>
            </div>
        )
}*/

//Using destructuring in the function body from ES6
const Greet = (props) => {
    const {name, heroName} = props
    //Adding parenthesis to split the return in multiples lines
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}
    
export default Greet