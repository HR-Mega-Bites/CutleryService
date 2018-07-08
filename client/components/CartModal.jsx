import React from 'react';
import { Button } from 'react-bootstrap';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CartItem } from './CartItem.jsx';
import styles from '../styles/cartModal.css';

export class CartModal extends React.Component{

  constructor(props){
    super(props)
  }
render(props){

return (
  <MuiThemeProvider>
   <Drawer
      open={this.props.show}
      width={450}
      openSecondary={true}
      onRequestChange={this.props.handleModalHide}
      docked={false}
     
    >
    <div  className={styles.shell}>
      <div className={styles.header}>
        Your Mega Bites Basket
      </div>
      <div className={styles.cartContents}>
        <div className={styles.cartItems}>
          {Object.entries(this.props.cart).map((item) => <CartItem key={item[0]} item={this.props.tools[item[0]]} index = {item[0]} count = {item[1]} updateCart={this.props.updateCart} />)}
        </div>
        <div className={styles.subtotal}>
          <span> Subtotal: </span>
          <span className={styles.subPrice}>
           ${Object.entries(this.props.cart).reduce((memo, item) => {
            return memo + (this.props.tools[item[0]].price * item[1]);
          },0)}
          </span>
        </div>
        <div className={styles.nav}>
          <Button 
            className={`${styles.button} ${styles.continue}`}  
            onClick={this.props.handleModalHide} 
            bsSize="large">
            Continue 
          </Button>
          <Button className={styles.button}  bsSize="large"> checkout </Button>
        </div>
      </div>
      <div className={styles.footer}>
        To manage your Mega Bites membership, <span className={styles.link}> Log in </span> or <span className={styles.link}>Sign up </span> here.
      </div>
    </div>

   
  </Drawer>
  </MuiThemeProvider>
)
}
}