import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export const List = (props) => (
  <ListGroup>
    {props.tools.map((tool, index) => <SingleTool tool={tool} key={tool.id} index = {index} changeTool = {props.changeTool}/>)}
  </ListGroup>

)

const SingleTool = props => (
  <ListGroupItem href='#' onClick={() => props.changeTool(props.index)}>
    {props.tool.name}
  </ListGroupItem>

)
