type Props = {
  title: string
  completed: boolean
  onDelete: () => void
  onToggle: () => void
}

export default function TaskCard({
  title,
  completed,
  onDelete,
  onToggle,
}: Props) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />

        <span className={completed ? "line-through text-gray-400" : ""}>
          {title}
        </span>

      </div>

      <button
        onClick={onDelete}
        className="text-red-500 text-sm"
      >
        Delete
      </button>

    </div>
  )
}