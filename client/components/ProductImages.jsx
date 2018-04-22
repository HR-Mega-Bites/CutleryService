import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import styles from '../styles/productImages.css'

export class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ currentImageIndex: 0 });
  }
  clickHandler(index) {
    this.setState({ currentImageIndex: index });
  }

  render() {
    const { images } = this.props;
    return (
      <div>
        <Row className="show-grid">
          <Col md={12} className={styles.outerImgDiv}>
            <Image 
              className={styles.imgsquareLg} 
              src={images.length ? images[this.state.currentImageIndex] : null} 
            />
          </Col>
        </Row>
        <Row>
          {images.map((image, index) =>
            (
              <Col md={3} sm={6} xs= {6} className={styles.outerImgDiv}>
                <Image 
                  src={image}
                  responsive
                  onClick={() => this.clickHandler.call(this, index)}
                  className={styles.imgsquareSm} />
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
