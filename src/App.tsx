import React, { useState } from "react";
import "./App.css";
import Todolist from "./components/Todolist/Todolist";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ]);

  const [tasks2, setTasks2] = useState([
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "Rokki 2", isDone: false },
    { id: 3, title: "Jeyson Stetkhem", isDone: true },
  ]);

  return (
    <div className="App">
      <div className="todolist-container">
        <Todolist tasks={tasks} title="What to learn" />
        <Todolist tasks={tasks2} title="What to movie" />
      </div>
    </div>
  );
}

export default App;
