import React, { Component } from 'react';

import BasicTableNoSelectFlight from './basicTableNoSelectFlight';
import BasicTableNoSelectUser from './basicTableNoSelectUser';

import Data_User from './test-data-user.json'
import Data_Flight from './test-data.json'

class SettingsAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputCreateOrigin: "",
            inputCreateDestination: "",
            inputCreateTime: "",
            inputCreateSeats: "",

            inputEditID: "",
            inputEditOrigin: "",
            inputEditDestination: "",
            inputEditTime: "",
            inputEditSeats: "",

            inputDeleteID: "",

            inputSearchNameFirst: "",
            inputSearchNameLast: "",

            inputSearchFlightUID: "",

            userData: [],
            flightData: [],

            foundUserID: ""
         }

         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    async createNewFlight(e) {

        const newFlightData={
            "origin": this.state.inputCreateOrigin,
            "destination": this.state.inputCreateDestination,
            "time": this.state.inputCreateTime,
            "seats": this.state.inputCreateSeats
        }

        const response = await fetch('http://localhost:5050/api/flights/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'charset':'utf-8'},
        body: JSON.stringify(newFlightData)
        })
    
        const data = await response.json()
    
        if (data == "Create") {
            alert("Flight created!")
        } else {
            alert("Flight could not be created!")
        }

        alert(JSON.stringify(newFlightData))
    
    }

    async updateFlight(e) {

        const editFlightDate={
            "find": {
                "_id": this.state.inputEditID
            },
            "update": {            
                "origin": this.state.inputCreateOrigin,
                "destination": this.state.inputCreateDestination,
                "time": this.state.inputCreateTime,
                "seats": this.state.inputCreateSeats
            }
        }

        
        const response = await fetch('http://localhost:5050/api/flights/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'charset':'utf-8'},
        body: JSON.stringify(editFlightDate)
        })
    
        const data = await response.json()
    
        if (data == "OK") {
            alert("Flight updated!")
        } else {
            alert("Flight could not be updated!")
        }
        
        alert(JSON.stringify(editFlightDate));
    }
    
    async deleteFlight(event) {
        
        const toDelete = {
            "_id": this.state.inputDeleteID
        }

        const response = await fetch('http://localhost:5050/api/flights/delete', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'charset':'utf-8'},
        body: JSON.stringify(toDelete)
        })
    
        const data = await response.json()
    
        if (data == "OK") {
            alert("Flight deleted!")
        } else {
            alert("Flight could not be deleted!")
        }

        
        alert(JSON.stringify(toDelete));

    }
    
    async getIdByName(event) {

        const toSearch ={
            "first_name": this.state.inputSearchNameFirst,
            "last_name": this.state.inputSearchNameLast
        }
        
        const response = await fetch('http://localhost:5050/api/user/read', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'charset':'utf-8'},
        body: JSON.stringify(toSearch)
        })
    
        const data = await response.json()

        this.setState({userData: data});
    }
    
    async createOverview(event) {
    
        const toSearch = {
            "passengers": [this.state.inputSearchFlightUID]
        }

        const response = await fetch('http://localhost:5050/api/flights/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'charset':'utf-8'},
        body: JSON.stringify(toSearch)
        })
    
        const data = await response.json()
         
        this.setState({flightData: data})

        }

    render() { 
        return ( 
        <div>
            <div style={{border: "3px solid green", textAlign: 'center'}} >
                Neuen Flug erstellen
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        name='inputCreateOrigin'
                        placeholder="Origin" 
                        value={this.state.inputCreateOrigin}
                        onChange={this.handleChange}
                    />
                </div>  
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Destination" 
                        name ='inputCreateDestination'
                        value={this.state.inputCreateDestination}
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Time" 
                        name ='inputCreateTime'
                        value={this.state.inputCreateTime}
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Seats" 
                        name ='inputCreateSeats'
                        value={this.state.inputCreateSeats}
                        onChange={this.handleChange}
                    />
                </div> 
                <button onClick={ (event) => this.createNewFlight(event)}> Neuen Flug erstellen </button>
            </div>
            <div style={{border: "3px solid green", textAlign:'center'}}>
                Flug bearbeiten
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="ID" 
                        name ='inputEditID'
                        value={this.state.inputEditID}
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Origin" 
                        name ='inputEditOrigin'
                        value={this.state.inputEditOrigin}
                        onChange={this.handleChange}
                    />
                </div>  
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Destination" 
                        name ='inputEditDestination'
                        value={this.state.inputEditDestination}
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Time" 
                        name ='inputEditTime'
                        value={this.state.inputEditTime}
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Seats" 
                        name ='inputEditSeats'
                        value={this.state.inputEditSeats}
                        onChange={this.handleChange}
                    />
                </div> 
                <button onClick={(event) => this.updateFlight(event)}> Neuen Flug erstellen </button>
            </div>
            <div style={{border: "3px solid green", textAlign:'center'}}>
                Flug löschen 
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="ID to delete" 
                        name ='inputDeleteID'
                        value={this.state.inputDeleteID}
                        onChange={this.handleChange}
                    />
                </div> 
                <button onClick={ (event) => this.deleteFlight(event)}> Flug mit angegebener ID löschen </button> 
            </div>
            <div style={{border: "3px solid green", textAlign:'center'}}>
                Infos über User per Vorname und Nachname. Gibt ID zurück
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Search First-Name" 
                        name ='inputSearchNameFirst'
                        value={this.state.inputSearchNameFirst}
                        onChange={this.handleChange}
                    />
                </div> 
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="Search Last-Name" 
                        name ='inputSearchNameLast'
                        value={this.state.inputSearchNameLast}
                        onChange={this.handleChange}
                    />
                </div> 
                <button onClick={ (event) => this.getIdByName(event)}> User ID finden </button> 
                <BasicTableNoSelectUser data={Data_User}/>
            </div>
            <div style={{border: "3px solid green", textAlign:'center'}}>
                Übersicht zu Flügen pro User (input user-id). Falls keine ID eingeben wird, werden alle Flüge ausgegeben.
                <div>
                    <input 
                        style={{marginLeft: '20%',width: '60%'}} 
                        type="text" 
                        placeholder="ID des User" 
                        name ='inputSearchFlightUID'
                        value={this.state.inputSearchFlightUID}
                        onChange={this.handleChange}
                    />
                </div>
                <button onClick={ (event) => this.createOverview(event)}> Flüge anzeigen </button>
                <BasicTableNoSelectFlight data={Data_Flight}/>  
            </div>
        </div> );
    }
}
 
export default SettingsAdmin;



