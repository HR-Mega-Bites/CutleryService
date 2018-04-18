import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {ProductDetail} from './ProductDetail.jsx'
import {ProductImages} from './ProductImages.jsx'

export const Detail = (props) => (
  <Grid fluid>
    <Row className="show-grid">
      <Col sm={6} md={6}>
        <ProductImages images = {props.tool.imageurls}/>
      </Col>
      <Col sm={6} md={6}>
        <ProductDetail tool = {props.tool}/>
      </Col>
    </Row>
  </Grid>

)