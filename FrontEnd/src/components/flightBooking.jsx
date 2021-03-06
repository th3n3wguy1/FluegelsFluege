import React, { Component } from 'react';
import "./Wrapper.css"

class BookingOverview extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            first_name: "",
            last_name:"",
            birthdate: "",
            citizenship: "",
            gender: "",
            numberPassport: "",
            datePassport: "",
            dataToSubmit: [],
            passengersPushed:0
         }

         this.onChange = this.onChange.bind(this);
         this.pushToConst = this.pushToConst.bind(this);
         this.addState = this.addState.bind(this);
         this.submitBooking = this.submitBooking.bind(this);
    }

    async submitBooking() {

        if (this.state.passengersPushed < this.props.passengerCount ) {
            alert("Bitte geben Sie die Informationen für alle Passagiere ein")
        } else {
            /*
            const response = await fetch('http://localhost:5050/api/flights/search', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'charset':'utf-8'},
            body: JSON.stringify(dataToSubmit)
            })
    
            if (response.ok) {
                alert("Buchung erfolgreich!")
            } else {
                alert("Buchung nicht erfolgreich!")
            }
            */
           alert("Buchung wird durchgeführt")
        }
    }

    pushToConst() {

        let temper = [...this.state.dataToSubmit]

        if ( this.state.passengersPushed < parseInt(this.props.passengerCount)) {
            temper.push({
                "id": this.state.passengersPushed,
                "first_name": this.state.first_name,
                "last_name": this.state.last_name,
                "birthdate": this.state.birthdate,
                "citizenship": this.state.citizenship,
                "gender": this.state.gender,
                "numberPassport": this.state.numberPassport,
                "datePassport": this.state.datePassport
            })

            this.setState(() => {
                return {dataToSubmit: temper}
            })
            this.setState(prevState => {
                return {passengersPushed: prevState.passengersPushed + 1}
                });
        }
    }

    onChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    addState() {
        this.setState(prevState => {
            return {passengersPushed: prevState.passengersPushed}
         });
    }

    render() { 
        return(
        <div className="wrapper">
            <div>
                Daten für Passergier Nr.: {this.state.passengersPushed + 1} eingeben.
            </div>
            <div>
                <input
                    type="text"
                    name="first_name"            
                    value={this.state.first_name}           
                    onChange={this.onChange}
                    placeholder="first_name"
                />
            </div>
            <div>                    
                <input            
                    type="text"            
                    name="last_name"           
                    value={this.state.last_name}            
                    onChange={this.onChange}  
                    placeholder="last_name"        
                />        
            </div>
            <div>                   
                <input            
                    type="text"            
                    name="birthdate"           
                    value={this.state.birthdate}            
                    onChange={this.onChange} 
                    placeholder="birthdate"         
                />        
            </div>     
            <div>                
                <input            
                    type="text"            
                    name="citizenship"           
                    value={this.state.citizenship}            
                    onChange={this.onChange}     
                    placeholder="citizenship"     
                />        
            </div>     
            <div>               
                <input            
                    type="text"            
                    name="gender"           
                    value={this.state.gender}            
                    onChange={this.onChange}  
                    placeholder="gender"        
                />        
            </div>
            <div>                
                <input            
                    type="text"            
                    name="numberPassport"           
                    value={this.state.numberPassport}            
                    onChange={this.onChange}     
                    placeholder="numberPassport"     
                />        
            </div>     
            <div>               
                <input            
                    type="text"            
                    name="datePassport"           
                    value={this.state.datePassport}            
                    onChange={this.onChange}  
                    placeholder="datePassport"        
                />        
            </div>
            <button onClick={this.pushToConst}>Personenbezogene Daten für Passagier hinterlegen</button>
            <button onClick={this.submitBooking}>Buchung durchführen</button>
            <div>
                
            </div>
            <div>
                Sie haben bisher folgende Infos pro Passagier hinterlegt:
                {this.state.dataToSubmit.map((data, i) => {
                    return (
                        <div style={{border: "2px solid grey"}} >
                            <p>Passagier {data.id + 1}</p>
                            <p>Vorname: {data.first_name}</p>
                            <p>Nachname: {data.last_name}</p>
                            <p>Birthdate: {data.birthdate}</p>
                            <p>Citizenship: {data.citizenship}</p>
                            <p>Gender: {data.gender}</p>
                            <p>NumberPassport: {data.numberPassport}</p>
                            <p>DatePassport: {data.datePassport}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        )
    }
}
 
export default BookingOverview;