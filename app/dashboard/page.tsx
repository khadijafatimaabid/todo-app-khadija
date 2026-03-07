"use client"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import TaskCard from "@/components/dashboard/task-card"
import AddTaskForm from "@/components/dashboard/add-task-form"
import { useTasks } from "@/hooks/useTasks"

export default function DashboardPage() {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks()

  return (
    <div className="min-h-screen bg-slate-200 to bg-slate-300 p-6">

      <DashboardHeader />

      <div className="bg-white p-6 rounded-xl shadow">

        <AddTaskForm onAdd={addTask} />

        <div className="space-y-4">

          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              completed={task.completed}
              onDelete={() => deleteTask(task.id)}
              onToggle={() => toggleTask(task.id)}
            />
          ))}

        </div>

      </div>

    </div>
  )
}