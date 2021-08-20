import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"

export default class Estimatedtotal extends Component {
    render() {
        return (
            <div>
              <Row>
              <Col md={6}>
                <h1>Est. total</h1>
                </Col>
        <Col col={6}>
            <h2>{`$${this.props.estimatedTotal}`}</h2>
        </Col>
              </Row>
            </div>
        )
    }
}
