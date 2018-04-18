import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
export const ProductDetail = (props) =>

(
  <Grid fluid>
    <Row>
      <Col md={12}>
        <h3>{props.tool.name}</h3> by <h4>{props.tool.manufacturer}</h4>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <p> {props.tool.description} </p>
      </Col>
    </Row>
    <Row>
      <Col md={2} mdPush= {4}>
        ${props.tool.price}
      </Col>
      <Col md={6} mdPush= {4}>
        <Button bsSize="large">Add To Basket</Button>
      </Col>
    </Row>
  </Grid>
)