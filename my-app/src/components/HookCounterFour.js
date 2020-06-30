import React, {useState} from 'react'

function HookCounterFour() {
    //Using state hook when the state is an array
    const [items, setItems] = useState([])

    const addItem = () => {
        //Use the spread operator to keep the old values
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>{
                items.map(item => (<li key={item.id}>{item.value}</li>))
            }</ul>
        </div>
    )
}

export default HookCounterFour
