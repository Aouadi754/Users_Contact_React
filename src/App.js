import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Link to='/contact list'><Button variant="primary">contact list</Button> </Link> 
     <Link to='/add contact'> <Button variant="primary">add contact</Button></Link>
    </div>
  );
}

export default App;
