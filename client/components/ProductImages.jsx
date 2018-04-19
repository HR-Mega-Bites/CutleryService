import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export const ProductImages = ({ images }) =>
  (
  <Grid fluid>
    <Row className="show-grid">
      <Col md={12} className= "no-gutter">
        <Image src={images.length ? images[0] : null} responsive />
      </Col>
    </Row>
    <Row>
      {images.map(image =>
        (
          <Col md={3} sm={6} xs= {6} className="no-gutter">
            <Image src={image} responsive />
          </Col>
        )
      )}
    </Row>
  </Grid>
  );
