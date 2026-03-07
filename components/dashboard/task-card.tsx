export default function TaskCard() {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <span>Sample Task</span>

      <button className="text-red-500 text-sm">
        Delete
      </button>
    </div>
  );
}