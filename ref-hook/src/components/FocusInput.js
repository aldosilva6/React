import React, {useEffect, useRef} from 'react'

function FocusInput() {

    //useRef hook make possible to access Dom nodes directly within functional components
    const inputRef = useRef(null)

    useEffect(() =>{
        //focus the input element
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text"></input>
        </div>
    )
}

export default FocusInput
