import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

import './Wrapper.css'

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
            password_check: "",
            phone: "",
            credit_card: "",
            isVerified: false
         }
         this.handleChange = this.handleChange.bind(this);
         this.verifiyCaptcha = this.verifiyCaptcha.bind(this);
         this.captchaLoaded = this.captchaLoaded.bind(this);
         this.startRegister = this.startRegister.bind(this);
    }

    startRegister() {
        if (this.state.isVerified) {
            alert("Register wird durchgeführt!")
        } else {
            alert("Bitte Captcha durchführen!")
        }
    }

    verifiyCaptcha() {
        this.setState({isVerified: true})
    }

    captchaLoaded() {
        console.log("Captcha has loaded.")
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    render() { 
        return ( 
        <div className="wrapper">
            <h1>Neuen Benutzer Erstellen</h1>
            <form>
                <div>
                    <input
                        type="text"
                        name="first_name"            
                        value={this.state.first_name}           
                        onChange={this.handleChange}
                        placeholder="Vorname"
                    />
                </div>{" "}
                <div>                    
                    <input            
                        type="text"            
                        name="last_name"           
                        value={this.state.last_name}            
                        onChange={this.handleChange}  
                        placeholder="Nachname"        
                    />        
                </div>
                <div>                   
                    <input            
                        type="text"            
                        name="username"           
                        value={this.state.username}            
                        onChange={this.handleChange} 
                        placeholder="Username"         
                    />        
                </div>     
                <div>                
                    <input            
                        type="email"            
                        name="email"           
                        value={this.state.email}            
                        onChange={this.handleChange}     
                        placeholder="Email-Adresse"     
                    />        
                </div>     
                <div>               
                    <input            
                        type="password"            
                        name="password"           
                        value={this.state.password}            
                        onChange={this.handleChange}  
                        placeholder="Passwort"        
                    />        
                </div><div>                   
                    <input            
                        type="password"            
                        name="password_check"           
                        value={this.state.password_check}            
                        onChange={this.handleChange}   
                        placeholder="Passwort bestätigen"       
                    />        
                </div>
                <div>                    
                    <input            
                        type="text"            
                        name="phone"           
                        value={this.state.phone}            
                        onChange={this.handleChange}  
                        placeholder="Telefonnummer"       
                    />        
                </div>     
                <div>                
                    <input            
                        type="text"            
                        name="credit_card"           
                        value={this.state.credit_card}            
                        onChange={this.handleChange}        
                        placeholder="Kreditkartennummer"  
                    />        
                </div>      
            </form>
            <div>
                <div>
              Name: {this.state.first_name} {this.state.last_name}
                </div>     
                <div>
              Username: {this.state.username}
                </div>     
                <div>
              Email: {this.state.email}
                </div>     
                <div>
              Telefon: {this.state.phone}
                </div>     
                <div>
              Kreditkarte: {this.state.credit_card}
                </div>     
                <div>
              Passwort: {this.state.password}   
                </div>     
            </div> 

            <Recaptcha
                sitekey="6LeTBkkdAAAAADLu8NW6AZXaGF2CfhXMxgviRX0U"
                render="explicit"
                onloadCallback={this.captchaLoaded}
                verifyCallback={this.verifiyCaptcha}
            />

            <button onClick={this.startRegister}>Registrieren</button>
        </div> 
        );
            
    }
}
 
export default CreateUser;

