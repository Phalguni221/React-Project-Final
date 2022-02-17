import './App.css';
import React, {useState} from 'react'
import Bar from './components/NavBar'
import ColorBlock from './components/ColorBlock'

import ColorForm from './components/ColorForm'


function App() {
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
      <div className="App">
      <header>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Bar />
    </header>

    </div>
    );
}

export default App;


