import React from "react";

type TypeTasks = {
  id: number;
  title: string;
  isDone: boolean;
};

type TypeProps = {
  tasks: Array<TypeTasks>;
  title: string;
};

export default function Todolist(props: TypeProps) {
  return (
    <div className="todolist">
      <h1 className="todo">{props.title}</h1>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <div>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
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
