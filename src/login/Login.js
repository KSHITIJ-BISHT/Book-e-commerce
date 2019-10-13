import React, { Component } from 'react'
import './Login.css';
import { tsConstructorType, thisTypeAnnotation } from '@babel/types';
import { Link,Redirect } from 'react-router-dom';
import Signup from '../signup/Signup';


import { axios } from 'axios';

class Login extends Component {
   
    
    constructor(props) {
        super(props)
         this.state = {
             username:'',
            password:'',
        //     logged:this.props.loggedIn
             
         }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username , password} =this.state

        if(username=== "a" && password==="b"){ 
              this.props.loginHandler(this.state.username,this.state.password)
        }
    }

  componentDidUpdate(prevProps) {
    if(prevProps.value !== this.props.value) {
      this.setState({value: this.props.value});
    }
  }

    render() {
        
        if(this.props.loggedIn){
            //loginStatus=JSON.stringify(true);
            localStorage.setItem("loginStatus",this.props.loggedIn);
            
            return <Redirect to="/"/>


        }

        return (
                <div className="login-form"> 
                
                <form >
                <strong>LOGIN</strong>
                <label className ="form-content" >
                    <input  className="login-details" type="text" name="username"  placeholder="Username" value={this.state.username} onChange={this.onChange}/>
                </label>
                <br></br>
                <label className ="login-details" >
                    <input className="login-details" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </label>
                <br></br>
                <div className="login-button-container">

               
                <button className="submit-button" onClick={this.submitForm}>Submit</button>
                <button className="submit-button" ><Link to="/Signup">Sign up</Link></button>
                </div>
                </form>
            
                
            </div>
        )
    }
}

export default Login
