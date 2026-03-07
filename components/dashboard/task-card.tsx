type Props = {
  title: string
  onDelete: () => void
}

export default function TaskCard({ title, onDelete }: Props) {
  return (
    <div className="border-2 border-slate-300 rounded-lg p-4 flex justify-between items-center">
      <span>{title}</span>

      <button
        onClick={onDelete}
        className="text-red-500 text-sm"
      >
        Delete
      </button>
    </div>
  )
}