"use client"

import { useState, useEffect } from "react"

export type Task = {
  id: number
  title: string
  completed: boolean
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks")

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title: string) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  }
}

