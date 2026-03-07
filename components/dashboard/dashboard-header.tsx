export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">My Tasks</h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Add Task
      </button>
    </div>
  );
}