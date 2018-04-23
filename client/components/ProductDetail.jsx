import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styles from '../styles/productDetail.css';



export const ProductDetail = ({ tool }) => (
  <div className={styles.container}>
    <Row>
      <Col md={12}>
        <div className={styles.headerMajor}>
          {tool.name}
        </div> 
        <div className={styles.headerMinor}>
          by {tool.manufacturer}
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={12} >
        <p className = {styles.description}> {tool.description} </p>
      </Col>
    </Row>
    <Row className={styles.purchase}>
      <Col className={styles.colItem}>
        <Button className={styles.button} bsSize="large">Add To Basket</Button>
      </Col>
      <Col mdPull={1} className={`${styles.colItem} ${styles.price}`} >
        ${tool.price}
      </Col>
    </Row>
  </div>
);
