import React, {useState} from 'react'

//Need to merge the state manually using spread operator
function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <form>
                {/*...name = copy everything from the object name and just update the firstName */}
                <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value })} />
                {/*...name = copy everything from the object name and just update the lastName */}
                <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
