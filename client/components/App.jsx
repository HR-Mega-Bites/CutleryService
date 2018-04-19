import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { List } from './List.jsx';
import { Detail } from './Detail.jsx';

const emptyTool = {
  "id": -1,
  "name": "",
  "description": "",
  "manufacturer": "",
  "price": 0.00,
  "imageurls": []
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeId: 10,
      tools: [],
      currentTool: emptyTool,
    };
  }

  componentDidMount() {
    axios.get(`/recipes/${this.state.recipeId}`)
      .then(response => this.setState({
        tools: response.data,
        currentTool: response.data[0] || emptyTool,
      }));
  }


  changeTool(index) {
    this.setState({ currentTool: this.state.tools[index] });
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
