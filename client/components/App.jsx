import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { List } from './List.jsx';
import { Detail } from './Detail.jsx';

const TestData = [
  {
    id: 52,
    name: 'Fantastic Soft Table',
    description: 'Ea tempore rerum assumenda et deserunt consequatur nemo eos. Omnis temporibus voluptas. Eaque veniam laboriosam iusto maxime aut ipsam voluptatum. Ad officiis cum quia hic numquam assumenda unde et. Quo cumque consequatur dolorem distinctio in rerum in at. Voluptatem quia eius velit.',
    manufacturer: 'Kling, Towne and Waelchi',
    price: '496.00',
    imageurls: [
      'https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-1.jpg',
      'https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-16a.jpg',
      'https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-1b.jpg',
    ],
  },
  {
    id: 51,
    name: 'Awesome Soft Computer',
    description: 'Ut officia et nisi maiores possimus hic nostrum. Vel et eos consequatur. Molestiae accusamus rerum eveniet dolores modi reprehenderit.',
    manufacturer: 'Konopelski - Satterfield',
    price: '458.00',
    imageurls: [
      'https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-18.jpg',
    ],
  },
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: TestData,
      currentTool: TestData[0],
    };
  }

  changeTool(e) {
    this.setState({ currentTool });
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col md={8}>
              <h4> tried-and-true </h4>
              <h2> Kitchen Tools </h2>
            </Col>
          </Row>
          <Row className="show-grid">
            {/* TODO hide this and show drop down when v small */}
            <Col md={4}>
              <List tools={this.state.tools} changeTool={this.changeTool.bind(this)}/>
            </Col>
            <Col xs={12} md={8}>
              <Detail tool={this.state.currentTool} />
            </Col>
          </Row>
        </Grid>
    );
  }
}
