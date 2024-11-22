"use client";

import React, { ChangeEvent, useState } from "react";

interface Ints {
  onSubmit: (value: string) => void;
}

export default function TaskForm({ onSubmit }: Ints) {
  const [title, setTitle] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(title);
    }
    setTitle("");
  };

  const setTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Название задачи"
        value={title}
        onChange={setTodo}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
