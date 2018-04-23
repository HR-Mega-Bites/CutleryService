import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import styles from '../styles/list.css';


export const List = props => (
  <ListGroup>
    {props.tools.map((tool, index) =>
      <SingleTool 
        tool={tool} 
        active={tool===props.currentTool} 
        key={tool.id} 
        index = {index} 
        changeTool = {props.changeTool}
      />
    )}
  </ListGroup>
);

const SingleTool = props => (
  <ListGroupItem
    href='#'
    onClick={() => props.changeTool(props.index)} 
    active={props.active}
    className={props.active ? styles.listItemActive : styles.listItem}
  >
    {props.tool.name}
  </ListGroupItem>

);
