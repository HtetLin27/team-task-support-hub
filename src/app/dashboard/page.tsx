import PageHeader from "@/components/shared/PageHeader";
import StatCard from "@/components/shared/StatCard";
import { mockTickets } from "@/constants/mockTickets";
import { mockTasks } from "@/constants/mockTasks";
import TaskCard from "@/features/tasks/TaskCard";
import TicketCard from "@/features/tickets/TicketCard";
import SectionTitle from "@/components/shared/SectionTitle";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Dashboard"
        description="Overview of tasks, tickets, and team activity."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Total Tasks" count={mockTasks.length} />
        <StatCard title="Open Tickets" count={mockTickets.length} />
        <StatCard title="Team Members" count={0} />
      </div>
      <div className="mt-2 space-y-2">
        <SectionTitle title="Recent Tasks" />
        <div className="grid gap-4">
          {mockTasks.slice(0,2).map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          ))}
        </div>
        <SectionTitle title="Recent Tickets" />
        <div className="grid gap-4">
          {mockTickets.slice(0,2).map((ticket) => (
            <TicketCard
              key={ticket.id}
              subject={ticket.subject}
              priority={ticket.priority}
              status={ticket.status}
            />
          ))}
        </div>
      </div>
    </main>
  );
}