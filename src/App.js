import React , {Component} from 'react';
import Login from "./login/Login";
import Signup from "./signup/Signup";
import AboutUs from "./aboutUs/AboutUs";
import Header from "./header/Header";
import Card from "./card/Card";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import ApiCall from "./ApiCall/ApiCall";
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      qty:0,
      username: '',
      password:'',
      loggedIn:false
  }
  }
  loginHandler=(username,password)=>
  {
    this.setState({
      username,password,loggedIn:true
    })
    alert("loggedIn")

  }
  logoutHandler=()=>{
    this.setState({
      username:'',password:'',loggedIn:false
    })
    localStorage.setItem("loginStatus",false)
  }
  cartHandler=(qty,inc)=>{
    this.setState({
      qty:qty+inc
    })
  }
  
  
  render() {
    return (
      
      <div className="App">
      
      <Router>
       
      <Route  render={(props) => <Header {...props} loggedIn={this.state.loggedIn} qty={this.state.qty} logoutHandler={this.logoutHandler}/>}/>
      <Switch>
      <Route path="/" exact render={(props) => <Card {...props}  qty={this.state.qty} cartHandler={this.cartHandler}/>} />
      
      <Route path="/AboutUs" component={AboutUs} />
    <Route path="/Login"  render={(props) => <Login {...props} loggedIn={this.state.loggedIn} loginHandler={this.loginHandler}/>}/>     

      <Route  path="/Signup"  component={Signup}/>

      <Route path="/Cart"  render={(props) => <ShoppingCart {...props} qty={this.state.qty} cartHandler={this.cartHandler}/>}/> 
      </Switch>
      </Router>

      </div>
    
    )
  }
}

export default App
