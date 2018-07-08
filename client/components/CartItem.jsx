import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../styles/cartItem.css';

export const CartItem = (props) => (
  //image //Title //# items and increment/decrementer/ 
  <div className={styles.item}>
    <div className= {styles.square}>
     <img className= {styles.image} src={props.item.imageurls[0]||''}></img> 
    </div> 
    <div className={styles.itemDetail}>
      <div className={styles.itemName}> {props.item.name} </div>
      <div className={styles.lastLine}>
        <span> ${props.item.price} x <input className = {styles.countMod} type='number' min='0' max ='99' value={props.count} onChange={(e) =>props.updateCart(props.index, e.currentTarget.value)}></input> </span>
        <span> Product Total: ${props.item.price * props.count} </span>
      </div>
    </div>
  </div>

)