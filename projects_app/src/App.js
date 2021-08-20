import './App.css';
import Container from 'react-bootstrap/Container'
import Subtotal from "./components/subtotal/Subtotal"
import { Component } from 'react';
import Picupsavings from "./components/picupsavings/Picupsavings"
import Tax from "./components/tax/Tax"
import Estimatedtotal from "./components/estimatedtotal/Estimatedtotal"
import Itemdetails from "./components/itemdetails/Itemdetails"
import Promocode from "./components/promocode/Promocode"
import {connect }from "react-redux"
class  App extends Component {
  constructor(props){
    super(props)
    this.state={
      price:300,
      picupSavings:-30,
      tax:0,
      estimatedTotal:0,
      isPromoDisable:false
      
    }
  }
  componentDidMount =()=>{
    this.setState({tax:(this.state.price+this.state.picupSavings)*0.0875
    },
    function(){
      this.setState({estimatedTotal:this.state.price+this.state.tax+this.state.picupSavings})
    }
    )
 }

 
 getPromocodeDiscount=()=>{
  this.setState({estimatedTotal:(this.state.price+this.state.tax+this.state.picupSavings)*0.5},
  function(){
    this.setState({isPromoDisable:true})
  }
  )
}

        
  render(){ 
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.price.toFixed(2)}/>
       <Picupsavings picupSavings={this.state.picupSavings} />
       <Tax tax={this.state.tax}/>
       <hr/>
       <Estimatedtotal estimatedTotal={this.state.estimatedTotal.toFixed(2)}/>
       <Itemdetails price={this.state.estimatedTotal.toFixed(2)}/>
       <hr/>
       <Promocode  estimatedTotal={this.state.estimatedTotal} 
                  isPromoDisable={this.state.isPromoDisable}
       
                  handleDiscountHandler={this.getPromocodeDiscount}/>
        </Container>
      </div>
    );
  }
 
}

//Getting state as props from reducer
// const mapStateToProps=(state)=>{

//   return{
//     price:state.price,
//     picupSavings:state.picupSavings,
//     tax:state.tax,
//     estimatedTotal:state.estimatedTotal
//   }

// }


export default connect()(App);
