"use client"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import TaskCard from "@/components/dashboard/task-card"
import AddTaskForm from "@/components/dashboard/add-task-form"
import { useTasks } from "@/hooks/useTasks"
import { useState } from "react"

export default function DashboardPage() {

  const { tasks, addTask, deleteTask, toggleTask, editTask, clearCompleted } = useTasks()

  const [filter, setFilter] = useState("all")

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  return (
    <div className="min-h-screen bg-slate-200 to  bg-slate-300 p-6">

      <DashboardHeader />

      <div className="bg-white p-6 rounded-xl shadow">

        <AddTaskForm onAdd={addTask} />

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-4">

          <button
            onClick={() => setFilter("all")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            All
          </button>

          <button
            onClick={() => setFilter("active")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Active
          </button>

          <button
            onClick={() => setFilter("completed")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Completed
          </button>

        </div>
        <div className="text-sm text-gray-600 mb-4">
            Total Tasks: {tasks.length}</div>
            <div className="text-sm text-gray-600 mb-4">
Completed: {tasks.filter((task) => task.completed).length}
</div>
<div className="flex justify-between items-center mb-4">

<div className="text-sm text-gray-500">
Completed: {tasks.filter((task) => task.completed).length}
</div>

<button
  onClick={clearCompleted}
  className="text-sm text-red-500 hover:underline"
>
Clear Completed
</button>

</div>

        {/* Task List */}
        <div className="space-y-4">

{filteredTasks.length === 0 ? (

<div className="text-center text-gray-600 py-5">
  <p className="text-lg">No tasks yet</p>
  <p className="text-sm">Start by adding your first task 🚀</p>
</div>

) : (

filteredTasks.map((task) => (
<TaskCard
  key={task.id}
  title={task.title}
  completed={task.completed}
  onDelete={() => deleteTask(task.id)}
  onToggle={() => toggleTask(task.id)}
  onEdit={(title) => editTask(task.id, title)}
/>
))

)}

</div>
          

        </div>

      </div>
  )
}