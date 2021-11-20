import { Fragment } from "react";
import React, { Component, useState } from 'react';

import BasicScreen from './components/startScreen';
import LoginScreen from './components/login';
import FlightOverview from "./components/flightOverview";
import CreateUser from "./components/CreateUser";
import SettingsAdmin from "./components/SettingsAdmin";
import SettingsUser from "./components/SettingsUser";

import './App.css'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      primePage: <BasicScreen/>,
      isAdmin: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })

  }

  handleSettings(e) {
    if (this.state.isAdmin) {
      this.setState({ primePage: <SettingsAdmin />})
    } else {
      this.setState({ primePage: <SettingsUser />})
    }

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

        <Content clickHandler = {this.onButtonClicked} clickHandlerSettings = {this.handleSettings}/>
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
      <div class='row' >
        <div class="center">
          <button onClick = {(e) => this.props.clickHandler(e, <LoginScreen />)}>Zum Login</button>
        </div>
        <div class="center">
          <button onClick = {(e) => this.props.clickHandler(e, <CreateUser />)}>Benutzer Erstellen</button>
        </div>
        <div class="center">
          <button onClick = {(e) => this.props.clickHandlerSettings(e)}>Einstellungen/Verwaltung</button>
        </div>
        <div class="center">
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