import React, { Component } from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
class Header extends Component {
    
     constructor(props) {
         super(props)
     
         this.state = {
               loginStatus:localStorage.getItem("loginStatus")
         }
     }
     
    componentDidUpdate(){

    }

    render() {
        return (
            
            <div>
              <div className="topnav">
              
                <div className="link" > <Link to ="/" >Home</Link></div>
            
                {this.props.loggedIn ? <div className="link" > <Link to ="/" onClick={this.props.logoutHandler} >Logout</Link></div> 
                                    : <div className="link" > <Link to ="/Login" >Login</Link></div>}
                
                <div className="link" > <Link to="/AboutUS">About Us</Link></div>
                <div className="link" > <Link to="/Cart">cart {this.props.qty}</Link></div>
               
                
                </div>
            </div>    
        )
    }
}

export default Header;
