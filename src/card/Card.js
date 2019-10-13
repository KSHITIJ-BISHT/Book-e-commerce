import React, { Component } from 'react'
import './Card.css';
import Search from '../search/Search';
import {cartData} from '../cartData';
import {Route ,Router} from 'react-router-dom';

class Card extends Component {
    constructor(){
        super();
        this.retrived=[];
        this.arr=[];
        this.itemPresent=false;
        this.state=
        {
        listOfBookId:[],
        BookData:cartData,
        }
        
    }
    
    componentWillMount(){
         this.retrived=localStorage.getItem("BooksIds");
         if(this.retrived !== null)
         {   console.log("is not null");
             //let arr=JSON.parse(this.retrived);
             this.state.listOfBookId=[...this.arr];
         }
    }
    filterSearch=(bookName)=>{
        console.log("in card",bookName);
        let filteredBooks=cartData.filter(
            (books)=>{
             return books.name.toLowerCase().indexOf(bookName) !==-1;
            })
        this.setState({
            BookData:filteredBooks
        })


    }
    
    addToCartHandler = (id) => {
        this.retrived=localStorage.getItem("BooksIds");
        this.arr=JSON.parse(this.retrived);
        this.props.cartHandler(this.props.qty,1);
        console.log('clicked on the button');
        
        if(this.arr!== null)
        {  console.log("finding element");
            this.arr.map( (Item) => 
            {
                
                if(Item[0]===id)
                    {console.log("element found");
                    Item[1]=Item[1]+1;
                    this.itemPresent=true;
                    //update the item quantity
                    this.setState({
                                
                        listOfBookId:
                        [ 
                            ...this.arr
                        ]
                        });  
                    
                    }
            });
           
             if(this.itemPresent===false){
                console.log("element not found");
                console.log("~~~~~~~~~~~~~~");
                this.setState({
                    
                    listOfBookId:
                       [ 
                        [id,1],
                        ...this.arr
                       ]
                    });  

             }
             this.itemPresent=false;
       
        }
        if(this.arr===null){
            console.log("~~~~~found null array~~~~~~");
            this.setState({
            
                listOfBookId:
                   [ 
                    [id,1],
                    ...this.state.listOfBookId
                   ]
                });  
        }
            console.log(this.retrived);  

}
    componentDidUpdate()
    {    

        console.log(this.state.listOfBookId);
        let jsonObjectOfBooks=JSON.stringify(this.state.listOfBookId);
        console.log(jsonObjectOfBooks);
        localStorage.setItem("BooksIds",jsonObjectOfBooks);
         
    }

    render() {
        return (
            
            <div>
            
            <Route  render={(props) => <Search {...props} BookData={this.state.BookData} filterSearch={this.filterSearch}/>}/> 

                <div className="container">
                 
                 {
                 this.state.BookData.map((Data) =>
                 {
                     return <div className="card">
                       <img className="card-img" src="https://www.w3schools.com/w3images/avatar5.png" alt="Denim Jeans " />
                       <h1 >{Data.name}</h1>
                       <p class="price">Price:Rs.{Data.price}</p>
                       <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                       <p><button onClick={this.addToCartHandler.bind(this,Data.id)}>Add to Cart</button></p>
                       </div>
                     
                 } )}
              
           </div>
            </div>
             
            
        )
    }
}

export default Card;
