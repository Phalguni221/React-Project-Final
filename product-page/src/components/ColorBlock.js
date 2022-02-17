import React, { useState } from 'react'

function ColorBlock(props){
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock;