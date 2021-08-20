import React, { Component } from 'react'

import {Row,Col} from "react-bootstrap"

export default class Tax extends Component {
    render() {
        return (
            <div>
               <Row>

                   <Col md={6}>Est. taxes and fee (based on 94085)</Col>
        <Col md={6}>{`$${this.props.tax}`}</Col>
                   
                   </Row> 
            </div>
        )
    }
}
