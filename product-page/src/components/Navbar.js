
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Instructions from './Instructions';
import Descriptions from './Descriptions';
import Uses from './Uses';


export default function Bar () {

    return (
      <BrowserRouter>
        <header>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <h1 className="title">Product Page - Know More About REST-Rant!</h1>
          <nav>
          <div className="navBar">
            <ul>
              <li>
                <Link to="/descriptions">Descriptions</Link>
              </li>
              <li>
                <Link to="/instructions">Instructions </Link>
              </li>
              <li>
                <Link to="/uses">Uses</Link>
              </li>
            </ul>
          </div>
         </nav>
        </header>
     

        <div className="display">
        <Routes>
          <Route path="/descriptions" element={
            <Descriptions/>
          } />
          <Route path="/instructions" element={
            <Instructions/>
            } />
          <Route exact path="/uses" element={
          <Uses /> 
          }/>
        
        </Routes>
        </div>
        </BrowserRouter>
    )

}

