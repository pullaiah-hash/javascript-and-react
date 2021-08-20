import React, { Component } from 'react'
import {Button,Collapse,Well,Media,Row,Col} from "react-bootstrap"
import "./details.css"
export default class Itemdetails extends Component {
    constructor(props){
        super(props)
        this.state={
            open:false
        }
    }
    render() {
        return (
            <div>
     <Button className="item-details-button p-0 mb-4" variant="link" onClick={()=>this.setState({open:!this.state.open})}>
        {this.state.open?"Hide":"See"} Details {this.state.open?"-":"+"}
                 </Button>

                 <Collapse in={this.state.open}>
               
                     <div >
               
                  <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="https://images-na.ssl-images-amazon.com/images/I/71KyDrKMKyL._SL1500_.jpg"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5> TCL 126 cm (50 inches) 4K Ultra HD Certified Android Smart.</h5>
    <p>
   
    </p>
  </Media.Body>
</Media>
                  
            <Row style={{marginLeft:"130px"}}>
                 <Col md={6}>
        <strong>{`$${this.props.price}`}</strong><br/>
        <strong className="price-strike">{`$${this.props.price}`}</strong>
                 </Col>
                 
             </Row>
             <Row style={{marginLeft:"130px"}}>
             <Col md={6}>Qty:1</Col>
             </Row>
                 
                     </div>
                 
                  </Collapse> 
           
                  
            </div>
        )
    }
}
