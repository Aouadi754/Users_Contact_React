import React from 'react';
import './App.css';
import Add from './wassim';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


function App() {
  return (
    <div className='List'>
    <div className="App">
      <Button> Submit</Button>     
       <Button> Cancel</Button>
       </div>
     <Add/>
   
    </div>
  );
}

export default App;
