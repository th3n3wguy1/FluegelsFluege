import React, { Component, useState } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import "./Wrapper.css"

class FlightOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      numbers: [],
      startAirport: "",
      destAirport: "",
      selectedStartDate: new Date(),
      anzahlReisende: 0
    };

    this.handleChangePassenger = this.handleChangePassenger.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeDest = this.handleChangeDest.bind(this);

  }

  handleChange = (anzahlReisende) => {
    this.setState({ anzahlReisende });
  };

  handleChangePassenger(event) {    
    this.setState({anzahlReisende: event.target.value}) 
  }

  handleChangeStart(event) {    
    this.setState({startAirport: event.target.value});  
  }

  handleChangeDest(event) {    
    this.setState({destAirport: event.target.value});  
  }
  
  handleChangeStartDate(day) {
    this.setState({selectedStartDate: day});
  }

  handleSubmit(event) {
    //Daten an Backend um Flüge zu erhalten
  }

  componentDidMount() {
    this.setState({
      countries: [
        {id: 'AFG', name: 'Afghanistan'},
        {id: 'ALA', name: 'Åland Islands'},
        {id: 'ALB', name: 'Albania'}
      ],
      numbers: [ 
        {label: "1", value: 1},
        {label: "2", value: 2},
        {label: "3", value: 3},
        {label: "4", value: 4},
        {label: "5", value: 5},
        {label: "6", value: 6},
        {label: "7", value: 7},
        {label: "8", value: 8}
      ] 
    });
  }

  render () {
    const { countries } = this.state;

    const { numbers } = this.state;

    let numbersList = numbers.map((item, i) => {
      return (
        <option key={i} value={item.label}>{item.value}</option>
      )
    }, this);

    let countriesList = countries.length > 0
    	&& countries.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          Wo wollen Sie starten:
          <select value={this.state.startAirport} onChange={this.handleChangeStart}>
            {countriesList}
          </select>
        </div>
        <div>
          Wo wollen Sie landen:
          <select value={this.state.destAirport} onChange={this.handleChangeDest}>
            {countriesList}
          </select>
        </div>
        <div>
          Anzahl an Reisenden:
          <select value={this.state.anzahlReisende} onChange={this.handleChangePassenger}>
            {numbersList}
          </select>
        </div>
        <div>
          Wann wollen soll der Flug starten:
          <DayPicker onDayClick={this.handleChangeStartDate} />
        </div>
      <input type="submit" value="Nach Flug suchen" />
      <div>
        <p>Ausgewählter Start: {this.state.startAirport}</p>
        <p>Ausgewähltes Ziel: {this.state.destAirport}</p>
        <p>Anzahl Passagiere: {this.state.anzahlReisende}</p>
        <p>Ausgewähltes Datum: {this.state.selectedStartDate.toLocaleDateString()}</p>
      </div>
    </form>

    );
  }
}

export default FlightOverview;




