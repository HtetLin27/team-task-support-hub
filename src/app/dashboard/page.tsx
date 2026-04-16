import PageHeader from "@/components/shared/PageHeader";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Dashboard"
        description="Overview of tasks, tickets, and team activity."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm text-gray-500">Total Tasks</h2>
          <p className="mt-2 text-2xl font-bold">0</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm text-gray-500">Open Tickets</h2>
          <p className="mt-2 text-2xl font-bold">0</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm text-gray-500">Team Members</h2>
          <p className="mt-2 text-2xl font-bold">0</p>
        </div>
      </div>
    </main>
  );
}