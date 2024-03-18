import React, { useState } from "react";
import { v1 } from "uuid";

export type TypeTasks = {
  id: string;
  title: string;
  isDone: boolean;
};

type TypeProps = {
  tasks: Array<TypeTasks>;
  title: string;
  removeTask: (taskId: string) => void;
  addTask: (newPost: TypeTasks) => void;
};

export default function Todolist(props: TypeProps) {
  const [taskValue, setTaskValue] = useState("");
  const addTask = () => {
    let newTask = {
      id: v1(),
      title: taskValue,
      isDone: false,
    };
    props.addTask(newTask);
    setTaskValue("");
  };

  return (
    <div className="todolist">
      <h1 className="todo">{props.title}</h1>
      <div>
        <input
          type="text"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button onClick={addTask}>+</button>
      </div>
      <div>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button onClick={() => props.removeTask(t.id)}>x</button>
          </li>
        ))}
      </div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
