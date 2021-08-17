import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

function Todo(props) {
  //   console.log(props.text);
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.text} secondary="Dummy Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
