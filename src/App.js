import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Sports from './components/Sports'; 
import Business from './components/Business';  
import Entertainment from './components/Entertainment'; 
import Health from './components/Health'; 
import LoadingBar from "react-top-loading-bar"; // Top Loading Bar component for showing loading progress


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  pageSize = 15;                        //Number of news items to be shown on each page

  state = {
    progress: 0                         //State to manage the progress of the loading bar
  }

  setProgress = (progress) => {                       // This function can be used to update the progress of the loading bar
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <Router>
        <Navbar />

        {/* Top Loading Bar */}
        <LoadingBar
          color='#ffffff'
          height={2}
          progress={this.state.progress} // You can manage the progress state in your component
        />

        {/* The Routes container holds all your different page options */}
        <Routes>
          {/* Route for the Home page */}
          <Route exact path="/"
            element={<News setProgress={this.setProgress} key="general" headline="General" pageSize={this.pageSize} category="general" />}
          />

          <Route exact path="/Sports"
            element={<Sports setProgress={this.setProgress} key="sports" headline="Sports" pageSize={this.pageSize} category="sports" />}
          />

          <Route exact path="/Business"
            element={<Business setProgress={this.setProgress} key="business" headline="Business" pageSize={this.pageSize} category="business" />}
          />

          <Route exact path="/Entertainment"
            element={<Entertainment setProgress={this.setProgress} key="entertainment" headline="Entertainment" pageSize={this.pageSize} category="entertainment" />}
          />

          <Route exact path="/Health"
            element={<Health setProgress={this.setProgress} key="health" headline="Health" pageSize={this.pageSize} category="health" />}
          />

        </Routes>
      </Router>
    )
  }
}

export default App;