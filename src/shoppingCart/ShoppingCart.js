import React, { Component } from 'react'
import './ShoppingCart.css'
import {cartData} from '../cartData';
class ShoppingCart extends Component {
   constructor(props) {
       super(props)
       this.temp=[]

       this.state = {
         dataInCart:[],  
         Qty:0,  
         datashop: cartData  
                   
       }
   }

    componentWillMount()
    {    
        this.state.dataInCart=localStorage.getItem('BooksIds');
        this.state.dataInCart=JSON.parse(this.state.dataInCart);
       console.log("data in  dataInCart ~~~~~~~~cart:=",this.state.dataInCart[0]);

    }
    componentDidUpdate(){
        let temp=JSON.stringify(this.state.dataInCart);
        localStorage.setItem("BooksIds",temp)

    }

    increaseQty = (id) => {
        this.props.cartHandler(this.props.qty,1);
        this.temp=this.state.dataInCart;
        this.state.dataInCart.map((item)=>{
            if(item[0]===id){
                item[1]=item[1]+1;
            }

        }
        )
        this.setState(
            {
             dataInCart:this.temp
            }
        );
         
    }
    remove=(id)=>{
        this.temp=this.temp.filter(item=>item[0]!==id);
        this.setState(
            {
             dataInCart:this.temp
            }
        );
     }
    
    decreaseQty = (id) => {
        
        this.temp=this.state.dataInCart;
        this.state.dataInCart.map((item)=>{
            if(item[0]===id){
                if(item[1]===1)
                {
                    //this.temp = this.temp.filter();
                    this.remove(item[0]);
                    this.props.cartHandler(this.props.qty,-1);
                }
                else{
                item[1]=item[1]-1;
                this.props.cartHandler(this.props.qty,-1);
                 }
        }

        }
        )
        this.setState(
            {
             dataInCart:this.temp
            }
        );
       }   
       billing=()=>{
           alert("in billing ")
       }
       buyNow=()=>{
         let loginStatus =JSON.parse(localStorage.getItem("loginStatus"))
         
         //alert(localStorage.getItem("loginStatus"))
         loginStatus===true ? this.billing():alert("login First")
       }
    render() {
        const getBooksIdData  = localStorage.getItem('BooksIds');
        const parseBooksIdData = JSON.parse(getBooksIdData) || {};
        
        return (
    
                
                <div className="cart-container"  >
                <div className="heading">
                    <h1>Shopping Cart</h1>
                    <div className="cart-card">
                    
                    <table>
                    <tr>
                        <th className="cart-table"></th>

                        <th className="cart-table">Product Name</th>
                        <th className="cart-table">Price</th> 
                        <th className="cart-table">QTY</th>
                        <th className="cart-table">VAT</th>
                        <th className="cart-table">Total</th>
                    </tr>
                   
                    { // add the local storage values only
                        this.state.dataInCart.map((items)=>
                         {
                          /************************************************ */   
                            console.log( "dataInCart",items);
                            
                           return (cartData.map((data1) => {
                              if(items[0]===data1.id)
                              {

                            return  <tr key ={data1.id}>

                                <td className="cart-table"> <img className="cart-image" src="https://www.w3schools.com/w3images/avatar5.png" alt="kitten" /></td>
                                <td className="cart-table">{data1.name}</td>
                                <td className="cart-table">{data1.price}</td>
                                <td className="cart-table">
                                <button className="button-cart-qty" onClick={this.increaseQty.bind(this,data1.id,data1.qty)}>+</button>
                                    {items[1]}
                                <button className="button-cart-qty" onClick={this.decreaseQty.bind(this,data1.id,data1.qty)}>-</button>
                                </td>
                                <td className="cart-table">{data1.vat}</td>
                                <td className="cart-table">{data1.total}</td>
                            </tr>
                              }
                              return null}
                        )
                           )
                            
                            
                            
                         /************************************************ */   
                            console.log("~~~~~~~~~this.state.dataShop",cartData[0]);
                            


                         //********************************************** */   
                         } 
                        
                        )
                        
                        }

                    <tr>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td >Sub-Total</td>
                       <td >$999.9</td>
                    
                    </tr>
                    <tr>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td >discount</td>
                       <td >$999.9</td>
                    
                    </tr>
                    <tr>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td >Tax</td>
                       <td >$999.9</td>
                    
                    </tr>
                    <tr>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td >Grand-Total</td>
                       <td >$999.9</td>
                    
                    </tr>
                   
                    
                    </table>
                    <button className="BuyNow-button" onClick={this.buyNow}>BUY NOW</button>
                    </div>
                    
                    
                

            </div>
            </div>
            
        )
    }
}

export default ShoppingCart;
