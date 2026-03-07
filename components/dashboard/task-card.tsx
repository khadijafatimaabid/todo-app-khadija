"use client"

import { useState } from "react"

type Props = {
  title: string
  completed: boolean
  onDelete: () => void
  onToggle: () => void
  onEdit: (title: string) => void
}

export default function TaskCard({
  title,
  completed,
  onDelete,
  onToggle,
  onEdit,
}: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const handleSave = () => {
    onEdit(newTitle)
    setIsEditing(false)
  }

  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />

        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        ) : (
          <span className={completed ? "line-through text-gray-400" : ""}>
            {title}
          </span>
        )}

      </div>

      <div className="flex gap-2">

        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 text-sm"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 text-sm"
          >
            Edit
          </button>
        )}

        <button
          onClick={onDelete}
          className="text-red-500 text-sm"
        >
          Delete
        </button>

      </div>

    </div>
  )
}