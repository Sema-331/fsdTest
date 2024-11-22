import TaskForm from "@/app/features/FormTodo/AddTodo";
import React, { useState } from "react";
import TodoSingle from "./SingleTask";
import { Ints } from "@/app/shared/Interfaces/Interface";

export default function TaskList() {
  const [tasks, setTasks] = useState<Ints[]>([]);

  const addTask = (task: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now().toString(), task: task, completed: false },
    ]);
  };

  return (
    <div>
      <TaskForm onSubmit={addTask} />
      {tasks.map((task) => (
        <TodoSingle
          setTasks={setTasks}
          tasks={tasks}
          item={task}
          key={task.id}
        />
      ))}
    </div>
  );
}
