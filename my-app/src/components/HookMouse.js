import React, {useState, useEffect} from 'react'

function HookMouse() {

    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    //Passing the second parameter as [] to simulate a componentDidMount from class component
    //Will be execute only one time
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        //To simulate componentWillUnmount you can pass a return function to be executed when the 
        //component will unmount "() => " a cleanup function
        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
