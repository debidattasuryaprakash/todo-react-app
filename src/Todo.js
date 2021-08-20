import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText } from "@material-ui/core";

function Todo(props) {
  
  return (
    <List classname="todo__list">
      <ListItem>
        <ListItemText primary={props.text} secondary="Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
