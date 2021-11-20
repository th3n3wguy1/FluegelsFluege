import React, { Component } from 'react';
import { View, Text } from "react-view";
import Recaptcha from 'react-recaptcha';

import "./Wrapper.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      password: "",
      isVerified: false
     }

     this.setUserName = this.setUserName.bind(this);
     this.setPassword = this.setPassword.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.verifiyCaptcha = this.verifiyCaptcha.bind(this);
     this.captchaLoaded = this.captchaLoaded.bind(this);
  }

  verifiyCaptcha() {
    this.setState({isVerified: true})
  }

  captchaLoaded() {
      console.log("Captcha has loaded.")
  }

  setUserName(event) {
    this.setState({username: event.target.value});
  }

  setPassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = loginUser(this.state.username, this.state.password);
    setToken(token);
  }

  render() { 
    return ( 
      <div className="wrapper">
        <h1>Login</h1>
          <div style={{width: '100%',height: '30%',}}>
            
            <input style={{marginLeft: '20%',width: '60%'}} type="text" placeholder="Username" onChange={this.setUserName}/>   
            <input style={{marginLeft: '20%',width: '60%'}} type="password" placeholder="Passwort" onChange={this.setPassword}/>

          </div>
          <button type="submit" onClick={this.handleSubmit}>Einloggen</button>

          <Recaptcha
            sitekey="6LeTBkkdAAAAADLu8NW6AZXaGF2CfhXMxgviRX0U"
            render="explicit"
            onloadCallback={this.captchaLoaded}
            verifyCallback={this.verifiyCaptcha}
          />
    </div>
     );
  }
}
 
export default Login;

async function loginUser(credentials) {
  return fetch('http://localhost:5050/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 'charset':'utf-8'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


/*
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <div>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
  */