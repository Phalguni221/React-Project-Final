import ColorBlock from './ColorBlock'

import ColorForm from './ColorForm'

import React, {useState} from 'react'

export default function Uses () {
    let [colors, setColors] = useState ([

    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }
    return (
        <div className="uses">
             <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>Uses of REST-RANT</title>
            <p>
        <ul>
            <li>Informs users of different restaurants of various cuisines</li>
            <li>Users can easily comment about the restaruant that they have eaten at</li>
            <li>Showcases the advancement and usage of Back-End development techniques and APIs for realife application</li>
        </ul>
            </p>
         <p>What other uses do you think are relevant? List them below</p>
         <p>{colorMap}
            <ColorForm addColor={addColor} /></p>
        </div>
    )

    }