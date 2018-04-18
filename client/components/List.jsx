import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
export const List = (props) => (
  <ListGroup>
    {props.tools.map((tool) => <SingleTool tool= {tool} key={tool.id}/>)}
  </ListGroup>

)

const SingleTool = (props) => (
  <ListGroupItem> 
    {props.tool.name}
  </ListGroupItem>
)