import React from 'react'

//Event Handler in Function React
function FunctionClick() {
    
    function clickHandler(){
        console.log('Button Clicked')
    }
    //If you put onClick={clickHandler()} the function is called before the click
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
