import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

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
      <Grid fluid>
        <Row className="show-grid">
          <Col md={12} className= "no-gutter">
            <Image src={images.length ? images[this.state.currentImageIndex] : null} responsive />
          </Col>
        </Row>
        <Row>
          {images.map((image, index) =>
            (
              <Col md={3} sm={6} xs= {6} className="no-gutter" key={index}>
                <Image src={image} responsive onClick={() => this.clickHandler.call(this, index)}/>
              </Col>
            ))}
        </Row>
      </Grid>
    );
  }
}
