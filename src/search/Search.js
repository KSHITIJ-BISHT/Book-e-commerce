import React, { Component } from 'react'
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            search:""
        }

    }
    onChange=(e)=>{
        //this.props.filterSearch(this.state.search );
       this.setState({
           search: e.target.value
       });
       this.props.filterSearch(e.target.value );
       
    }

    render() {
        return (
            <div className="Search-Bar">
            <input className="search-content" type ="text" value={this.state.search} onChange={this.onChange} name="search"></input>
            <h3>Search Book</h3>
         </div>
        )
    }
}

export default Search
