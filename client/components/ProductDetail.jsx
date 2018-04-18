import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export const ProductDetail = ({ tool }) => (
  <Grid fluid>
    <Row>
      <Col md={12}>
        <h3>{tool.name}</h3> by <h4>{tool.manufacturer}</h4>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <p> {tool.description} </p>
      </Col>
    </Row>
    <Row >
      <Col md={3} mdPush= {3}>
        ${tool.price}
      </Col>
      <Col md={6} mdPush= {3}>
        <Button bsSize="large">Add To Basket</Button>
      </Col>
    </Row>
  </Grid>
);
