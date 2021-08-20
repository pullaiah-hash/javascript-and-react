import React, { Component } from 'react'
import "./promocode.css"
import{
Button,Row,Col,Collapse,Form,FormGroup,FormControl,ControlLabel
} from "react-bootstrap"
import {connect} from "react-redux"
import * as actionType from "../actions/actions"


 class promocode extends Component {
    constructor(props){
        super(props)
        this.state={
            open:false,
            // isPromoDisable:false
        }
    }
    handleChange=(e)=>{
       
 this.props.promocodeHndler(e)

//  if(e.target.name)

// 
    }
handleDiscountHandler=(e)=>{
    e.preventDefault()
    
}
    render() {
        
        return (
            <div>
                <p>{this.props.promocode}</p>
                <Button className="promo-code-button p-0" variant="link" onClick={()=>this.setState({open:!this.state.open})}>
        {this.state.open?"Hide":"Apply"} Promo Code {this.state.open?"-":"+"}
                </Button>
                <Collapse in={this.state.open}>
                   <Row>
                       <Col md={12}>
                       <Form>
                       <Form.Group controlId="formBasicEmail">
    <Form.Label>Promo Code</Form.Label>
    <Form.Control 
    name="promocode"
    style={{marginBottom:"10px"}}
    type="text" 
    placeholder="Enter Promo Code" 
    // value={this.props.promocode}
    onChange={e=>this.handleChange(e)}
    />
    <Button variant="success" type="submit" onClick={this.handleDiscountHandler} disabled={this.props.isPromoDisable} >
    Apply
  </Button>
  </Form.Group>
                       </Form>
                       </Col>
                   </Row>
                </Collapse>


            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
promocode:state.promocode
    }
}

let mapDispatchToProps=(dispatch)=>{
return{
    promocodeHndler:(e)=>dispatch(actionType.addPromocode(e.target.value))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(promocode)