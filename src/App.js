import { useState } from "react";
import Todo from "./Todo.js";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
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

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
