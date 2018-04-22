import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { ProductDetail } from './ProductDetail.jsx';
import { ProductImages } from './ProductImages.jsx';

export const Detail = ({ tool }) => (
  <div>
      <Col sm={6} md={6}>
        <ProductImages images={tool.imageurls}/>
      </Col>
      <Col sm={6} md={6}>
        <ProductDetail tool={tool}/>
      </Col>
  </div>
);
