"use client";

import { ItemSingle } from "@/app/shared/Interfaces/Interface";
import React, { useState } from "react";

const TodoSingle = ({ item, tasks, setTasks }: ItemSingle) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(item.task);

  const deleteTask = (ind: string) => {
    const item = tasks.filter((item, i) => i.toString() !== ind);
    setTasks(item);
  };

  const saveEdit = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === item.id ? { ...task, task: editText } : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  const toggleComplete = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === item.id ? { ...task, completed: !task.completed } : task
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setTasks(updatedTasks as any);
  };

  return (
    <div style={{ border: "1px solid red" }}>
      <p>{item.id}</p>
      <p>{item.task}</p>
      <button onClick={() => deleteTask(item.id)} type="button">
        Delete
      </button>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEdit();
          }}
        />
      ) : (
        <p>{item.task}</p>
      )}
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleComplete}
      />
    </div>
  );
};

export default TodoSingle;
