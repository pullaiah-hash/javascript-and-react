import React, { Component } from 'react'
import {Row,Col,Tooltip,OverlayTrigger} from "react-bootstrap"
import "./savings.css"





export default class Picupsavings extends Component {
    render() {
        let style={
            picupSavings:{
        textDecoration:'underline'
            },
            totalSavings:{
                color:"red",
                fontWeight:"200px"
            }
        }
       let tooltip=(
           <Tooltip>
               <p>picup u r order in the store helf cut costs.we pass the savings on you</p>
           </Tooltip>
       )
    // const renderTooltip = () => (
    //     <Tooltip id="button-tooltip" >
    //       Simple tooltip
    //     </Tooltip>
    //   );
       
        return (
           <Row className="show-grid mt-4" style={style.picupSavings}>
         <Col md={6}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
        <div style={style.picupSavings} >
picupSavings
             </div>
        </OverlayTrigger>
             </Col >
        <Col md={6} style={style.totalSavings}>{`$${this.props.picupSavings}`}</Col>
           </Row>
        )
    }
}
