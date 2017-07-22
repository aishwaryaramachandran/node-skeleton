import React, {Component} from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

class SignInIndex extends Component {
  constructor(props) {
    super(props);
  }

  responseGoogle (response) {
    const user = {
        givenName: response.profileObj.givenName,
        familyName: response.profileObj.familyName,
        googleId: response.googleId,
        email: response.profileObj.email,
        token: response.accessToken,
      }
    console.log('user is', user);
    console.log("RESPONSE", response.accessToken)
    fetch('/auth', {
      method: 'POST',
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then((result) => {
      if (result) {
        return this.props.route.setCurrentUser(user);
        console.log("get fetched", result);
      }
    })
  }

  failureGoogle (response){
    alert('Login failed. Please register with Google and try again.')
  }

  componentDidUpdate(){
    this.props.route.getCurrentUser()
  }


  render() {
    document.getElementById('googleButton')
    return (
      <div className="login" onClick={this.props.getCurrentUser}>
        <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        scope={'https://www.googleapis.com/auth/calendar'}
        onSuccess={this.responseGoogle.bind(this)}
        onFailure={this.failureGoogle.bind(this)}/>
      </div>
    );
  }
}

export default SignInIndex;


