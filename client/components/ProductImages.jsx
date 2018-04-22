import React from 'react';
import { Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import styles from '../styles/productImages.css';

export class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: props.images.length ? 0 : null,
      direction: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ currentImageIndex: 0 });
  }
  clickHandler(index) {
    const newDirection = index<this.state.currentImageIndex? 'prev' : 'next';
    this.setState({
       currentImageIndex: index, 
       direction: newDirection,
      });
  }

  render() {
    const { images } = this.props;
    const { currentImageIndex, direction } = this.state; 
    return (
      <div>
        <Row className="show-grid">
            <Carousel
              activeIndex={currentImageIndex}              
              direction={direction}
              indicators={false}
              controls={false}
            >
              {images.map( (image, index) => (
                <Carousel.Item className={styles.outerImgDiv}  >
                <img key={index} src={image} className={styles.imgsquareLg} />
                </Carousel.Item>
              ))}
             </Carousel>
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
