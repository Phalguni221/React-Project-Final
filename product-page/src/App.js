import './App.css';
import React, {useContext} from 'react'
import Navbar from './components/Navbar'
import React, {useContext} from 'react'

const useContext = AppContext;
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
    </div>
  );
}

export default App;
