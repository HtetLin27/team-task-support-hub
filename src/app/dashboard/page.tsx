import PageHeader from "@/components/shared/PageHeader";
import StatCard from "@/components/shared/StatCard";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Dashboard"
        description="Overview of tasks, tickets, and team activity."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Total Tasks" count={0} />
        <StatCard title="Open Tickets" count={0} />
        <StatCard title="Team Members" count={0} />
      </div>
    </main>
  );
}