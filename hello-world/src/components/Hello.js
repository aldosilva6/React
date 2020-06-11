import React from 'react'
//This React import makes avaiable JSX by importing react library

const Hello = () => {
    // return(
    //     <div className='dummyClass'>
    //         <h1>This is a JSX</h1>
    //     </div>
    // )

    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'This is without JSX')
    )
}

export default Hello