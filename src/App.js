import { useState, useEffect } from "react";
import Todo from "./Todo.js";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads , we need to listen to the database and fetch new todos as we add/remove the todos from the database

  useEffect(() => {
    // this code here ... fires when the app.js loads
    db.collection("todos").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.data().todo),
      setTodos(snapshot.docs.map((doc) => ({id:doc.id,todo:doc.data().todo})));
    });

    console.log(setTodos);
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo:input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    // if (setInput.size() > 0) {
    setTodos([...todos, input]);
    // }
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo(❁´◡`❁)</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul className="app__list">
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
