import React from "react"

// Code EyesOnMe Component Here

function EyesOnMe () {
    return <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
}

function handleFocus () {
    console.log("Good!")
}

function handleBlur () {
    console.log("Hey! Eyes on me!")
}

export default EyesOnMe;