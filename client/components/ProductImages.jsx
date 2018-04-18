import React from 'react'
import {Grid, Row, Col,Image} from 'react-bootstrap'

export const ProductImages = (props) =>

(
  <Grid fluid>
    <Row className="show-grid">
      <Col md={12} className= "no-gutter">
        <Image src={props.images[0]} responsive />
      </Col>
    </Row>
    <Row>
      {props.images.map(image => 
        (
          <Col md={3} className = "no-gutter">
            <Image src={image} responsive /> 
          </Col>  
        )
      )}
    </Row>
  </Grid>
)