import { Fragment } from "react";
import React, { Component } from 'react';

import BasicScreen from './components/startScreen';
import LoginScreen from './components/login';
import FlightOverview from "./components/flightOverview";

import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      primePage: <BasicScreen/>
    };

    
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onButtonClicked(e, toOpen){
    this.setState({ primePage: toOpen})
  }

  render() { 
    return( 
    <Fragment>
      <div className="app-bar" style={{ font: 'bold'}}>
        <h1 className="app-bar-title">Flügels Flüge</h1>
        <h4 className="app-bar-title-low">Wir haltens simpel</h4>
      </div>

      <section className="app-section container">

        <Content clickHandler = {this.onButtonClicked}/>

        <div className="chosen-Page">
          {this.state.primePage}
        </div>
        

      </section>
    </Fragment>
  )}

  
}

class Content extends React.Component {
  render() { 
    return (
      <div className='chosse-Field'>
        <div>
          <button onClick = {(e) => this.props.clickHandler(e, <LoginScreen />)}>Zum Login</button>
        </div>
        <div>
          <button onClick = {(e) => this.props.clickHandler(e, <FlightOverview />)}>Zu den Flügen</button>
        </div>
      </div>
    );
  }
}
 
export default App;

/*
function App() {
  return()
    <div className="App">
      <p>Hello, world from the Front-End!</p>
    </div>
  )
}

export default App;

*/