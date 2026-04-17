import FilterBar from "@/components/shared/FilterBar";
import PageHeader from "@/components/shared/PageHeader";
import { mockTasks } from "@/constants/mockTasks";
import TaskCard from "@/features/tasks/TaskCard";

export default function TasksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Tasks"
        description="Manage task creation, progress, and completion."
      />

      <FilterBar  
        searchPlaceholder="Search tasks..."
        primaryActionLabel="Create Task"
      />

      <div className="grid gap-4">
        {mockTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </div>
    </main>
  );
}