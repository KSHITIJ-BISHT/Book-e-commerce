import React, { Component } from 'react';
import './Signup.css';
import { Link,Redirect } from 'react-router-dom';
class Signup extends Component {
    render() {
        return (
              <div className="Signup-form"> 
                
                <form>
                <strong>SIGNUP</strong>
                <label className ="form-content" >
                    <input className="signup-details" type="text" name="Username"  placeholder="Username"/>
                </label>
                <br></br>
                <label className ="form-content" >
                    <input className="signup-details" type="password" name="Password" placeholder="Password"/>
                </label>
                <br></br>
                <label className ="form-content" >
                    <input className="signup-details" type="password" name="reconfirmPassword"  placeholder="confirm Password"  />
                </label>
                <br></br>
                <div className="button-container">
                <button className="signup-button" type="reset">Reset</button>
                <button className="signup-button"  type="submit" >Submit</button>
                
                </div>
                </form>  
                </div> 
        )
    }
}

export default Signup;
