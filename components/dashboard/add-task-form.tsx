"use client"

import { useState } from "react"

type Props = {
  onAdd: (title: string) => void
}

export default function AddTaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return

    onAdd(title)
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Add
      </button>
    </form>
  )
}