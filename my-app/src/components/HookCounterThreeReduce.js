import React, { useReducer } from "react";
//1)Stepe one import useReducer

//A reducer is a function that receives a currentState and an action and return a new state.
//2) Define the initialState and the reducer function
const initialState = 0;
//Similar to a javascript reducer function that receive a array and return a new value.
//This example using a simple state and a simple action
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function HookCounterThreeReducer() {
    //3) Call the reducer function with the appropriate action and initial state
    //useReducer: return a pair of values that we can hold using the array destructuring
    //count: the current state returned by useReducer hook
    //dispatch: allows to execute the code corresponding to a particular actions
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)


    return (
        <div>
            <div>Count - {count}</div>
            {/* dispatch pass the argument corresponding to the action */}
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
            <div>
                <div>Count Two - {countTwo}</div>
                <button onClick={() => dispatchTwo("increment")}>Increment</button>
                <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
                <button onClick={() => dispatchTwo("reset")}>Reset</button>
            </div>
        </div>
    );
}

export default HookCounterThreeReducer;
