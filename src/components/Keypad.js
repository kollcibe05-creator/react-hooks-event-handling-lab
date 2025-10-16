import React from "react"
// Code Keypad Component Here

function Keypad (){
    return (
        <div onChange={handleInput}>
        <input 
        type="password"
        name="password"
        placeholder="Enter your Password"
        />
        </div>
    )
}

function handleInput (event) {
console.log("Entering password...")

}

export default Keypad;