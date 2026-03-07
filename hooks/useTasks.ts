"use client"

import { useState } from "react"

export type Task = {
  id: number
  title: string
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (title: string) => {
    const newTask = {
      id: Date.now(),
      title,
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return {
    tasks,
    addTask,
    deleteTask,
  }
}