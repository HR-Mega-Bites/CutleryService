import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { ProductDetail } from './ProductDetail.jsx';
import { ProductImages } from './ProductImages.jsx';

export const Detail = ({ tool, handleCartClick, index}) => (
  <div>
      <Col sm={4} md={5}>
        <ProductImages images={tool.imageurls}/>
      </Col>
      <Col sm={8} md={7}>
        <ProductDetail tool={tool} index={index} handleCartClick={handleCartClick}/>
      </Col>
  </div>
);
