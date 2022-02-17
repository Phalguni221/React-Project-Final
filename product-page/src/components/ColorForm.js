import React, { useState } from 'react'


function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        setInput("")
        // addColor, the function we just built, should be available within props.
        props.addColor(input)
    }

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <h1>Add a suggestion that would get updated </h1>
            <h3>(Fun Surprise: Watch what happens if you add a color name and hit submit!)</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" minLength="3" maxLength="20" 
                onChange={(e) => setInput(e.target.value)}
                value={input} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm;


