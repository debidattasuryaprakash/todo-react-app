import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText } from "@material-ui/core";
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
  
  // console.log(DeleteForeverIcon);
  return (
    <List classname="todo__list">
      <ListItem>
        <ListItemText primary={props.text.todo} secondary="Deadline" />
      </ListItem>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.text.id).delete()} />
    </List>
  );
}

export default Todo;
