import PageHeader from "@/components/shared/PageHeader";
import SectionCard from "@/components/shared/SectionCard";

export default function TasksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Tasks"
        description="Manage task creation, progress, and completion."
      />

      <SectionCard>
        <p className="text-sm text-gray-600">Task list will appear here.</p>
      </SectionCard>
    </main>
  );
}