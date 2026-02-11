import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Sports from './components/Sports'; // Make sure to uncomment this when you have the component
import Business from './components/Business'; // Make sure to uncomment this when you have the component  
import Entertainment from './components/Entertainment'; // Make sure to uncomment this when you have the component
import Health from './components/Health'; // Make sure to uncomment this when you have the component  


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        
        {/* The Routes container holds all your different page options */}
        <Routes>
          {/* Route for the Home page */}
          <Route exact path="/" 
            element={<News key="general" headline="General" pageSize={8} category="general"/>} 
          />
          
          <Route exact path="/Sports" 
            element={<Sports key="sports" headline="Sports" pageSize={8} category="sports"/>} 
          />

          <Route exact path="/Business" 
            element={<Business key="business" headline="Business" pageSize={8} category="business"/>} 
          />

          <Route exact path="/Entertainment" 
            element={<Entertainment key="entertainment" headline="Entertainment" pageSize={8} category="entertainment"/>} 
          />

          <Route exact path="/Health" 
            element={<Health key="health" headline="Health" pageSize={8} category="health"/>} 
          />

        {/* </Routes> */}
      </Router>
    )
  }
}

export default App;