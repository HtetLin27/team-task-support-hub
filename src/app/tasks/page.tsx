import PageHeader from "@/components/shared/PageHeader";

export default function TasksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Tasks"
        description="Manage task creation, progress, and completion."
      />

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-600">Task list will appear here.</p>
      </div>
    </main>
  );
}