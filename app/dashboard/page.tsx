import DashboardHeader from "@/components/dashboard/dashboard-header"
import TaskCard from "@/components/dashboard/task-card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-300 p-6 ">
      <DashboardHeader />

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}