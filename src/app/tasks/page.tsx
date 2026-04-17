import FilterBar from "@/components/shared/FilterBar";
import PageHeader from "@/components/shared/PageHeader";
import { mockTasks } from "@/constants/mockTasks";
import TaskCard from "@/features/tasks/TaskCard";
import TaskDetailShell from "@/features/tasks/TaskDetailShell";
import TaskFormShell from "@/features/tasks/TaskFormShell";

export default function TasksPage() {
  const selectedTask = mockTasks[0];
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

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
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
        </div>
        <div className="space-y-4">
          {/* <TaskFormShell /> */}
          <TaskDetailShell
            title={selectedTask.title}
            description={selectedTask.description}
            status={selectedTask.status}
            priority={selectedTask.priority}
            assignee={selectedTask.assignee}
            createdAt={selectedTask.createdAt}
          />
        </div>
      </div>


    </main>
  );
}