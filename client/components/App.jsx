import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { List } from './List.jsx';
import { Detail } from './Detail.jsx';
import styles from '../styles/appStyle.css';

const emptyTool = {
  id: -1,
  name: '',
  description: '',
  manufacturer: '',
  price: 0.00,
  imageurls: [],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeId: 0,
      tools: [],
      currentTool: emptyTool,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000' + document.location.pathname + 'tools')
      .then(response => this.setState({
        tools: response.data,
        currentTool: response.data[0] || emptyTool,
      }));
  }

  changeTool(index) {
    this.setState({ currentTool: this.state.tools[index] });
  }

  render() {
    return this.state.tools.length ?
      (
        <Grid className={styles.overall}>
          <Row>
            <Col md={8}>
              <div className={styles.headerMinor}>
                tried-and-true
               </div>
              <div className={styles.headerMajor}>
                Kitchen Tools
              </div>
            </Col>
          </Row>
          <Row className="show-grid">
            {/* TODO hide this and show drop down when v small */}
            <Col md={4}>
              <List tools={this.state.tools} changeTool={this.changeTool.bind(this)} currentTool = {this.state.currentTool}/>
            </Col>
            <Col xs={12} md={8}>
              <Detail tool={this.state.currentTool} />
            </Col>
          </Row>
        </Grid>
    )
    : (
        <div className={styles.headerMajor}>
          No kitchen tools needed 🔪
        </div>
    )
  }

}
export default App;
