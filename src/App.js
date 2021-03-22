
import React  ,{ Component } from 'react';
import './index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Homepage from './home/Homepage';
import Trial from './trial';
import { Navbar } from 'react-bootstrap';
import Routes from './routes/Homeroutes'
import Productroutes from './routes/productsroutes'
import Newroutes from './routes/newroutes'
import Aboutroutes from './routes/aboutroutes'
import Galleryroutes from './routes/galleryroutes'

function App() {


  return (
    <div>
    <Routes></Routes>
    <Productroutes></Productroutes>
    <Newroutes></Newroutes>
    <Aboutroutes></Aboutroutes>
    <Galleryroutes></Galleryroutes>
    </div>
  );
}

export default App;
