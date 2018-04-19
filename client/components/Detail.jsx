import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { ProductDetail } from './ProductDetail.jsx';
import { ProductImages } from './ProductImages.jsx';

export const Detail = ({ tool }) => (
  <Grid fluid>
    <Row className="show-grid">
      <Col sm={6} md={6}>
        <ProductImages images={tool.imageurls}/>
      </Col>
      <Col sm={6} md={6}>
        <ProductDetail tool={tool}/>
      </Col>
    </Row>
    <Row >
      <Col md={1} mdPush= {7}>
        ${tool.price}
      </Col>
      <Col md={4} mdPush= {7}>
        <Button bsSize="large">Add To Basket</Button>
      </Col>
    </Row>
  </Grid>
);
