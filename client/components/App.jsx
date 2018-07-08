import React from 'react';
import { Grid, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import { List } from './List.jsx';
import { Detail } from './Detail.jsx';
import { CartModal } from './CartModal.jsx';
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
      tools: [],
      currentTool: emptyTool,
      currentToolIndex: null,
      showModal: false,
      cart: {},
    };

    this.handleModalHide = this.handleModalHide.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
    this.changeTool = this.changeTool.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    // axios.get('http://ec2-34-226-247-99.compute-1.amazonaws.com' + document.location.pathname + 'tools')
    axios.get('http://localhost:3000' + document.location.pathname + 'tools')
      .then(response => this.setState({
        tools: response.data,
        currentTool: response.data[0] || emptyTool,
        currentToolIndex: response.data[0] ?  0 : null,
      }));
  }

  changeTool(index) {
    this.setState({ 
      currentTool: this.state.tools[index],
      currentToolIndex: index,
    });
  }
  updateCart(index, count){
    this.state.cart[index] = count;
    this.setState({
      cart: this.state.cart
    })
  }
  handleCartClick(index) {
    this.state.cart[index] =  this.state.cart[index] ? this.state.cart[index] + 1 : 1;
    // this.state.cart[index] = this.state.cart[index] + 1;
    this.setState({
       showModal: true,
       cart: this.state.cart,
      });
  }

  handleModalHide() {
    this.setState({ showModal: false });
  }
  render() {
    return this.state.tools.length ?
      (
        <div>
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
              <List tools={this.state.tools} changeTool={this.changeTool} currentTool = {this.state.currentTool}/>
            </Col>
            <Col xs={12} md={8}>
              <Detail tool={this.state.currentTool} index = {this.state.currentToolIndex} handleCartClick={this.handleCartClick} />
            </Col>
          </Row>
        </Grid>

        <CartModal handleModalHide={this.handleModalHide} cart={this.state.cart} show={this.state.showModal} tools={this.state.tools} updateCart={this.updateCart}/>
        </div>
    )
    : (
        <div className={styles.headerMajor}>
          No kitchen tools needed 🔪
        </div>
    )
  }

}


export default App;
