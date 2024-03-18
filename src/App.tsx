import React, { useState } from "react";
import "./App.css";
import Todolist, { TypeTasks } from "./components/Todolist/Todolist";
import { v1 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
  ]);

  let removeTask = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  let addTask = (newPost: TypeTasks) => {
    if (!newPost.title || !newPost.title.trim()) {
      return;
    }
    setTasks([...tasks, newPost]);
  };
  return (
    <div className="App">
      <div className="todolist-container">
        <Todolist
          tasks={tasks}
          title="What to learn"
          removeTask={removeTask}
          addTask={addTask}
        />
      </div>
    </div>
  );
}

export default App;
