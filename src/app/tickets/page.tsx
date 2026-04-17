import PageHeader from "@/components/shared/PageHeader";
import SectionCard from "@/components/shared/SectionCard";

export default function TicketsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Tickets"
        description="Track support issues, priorities, and status updates."
      />

      <SectionCard>
        <p className="text-sm text-gray-600">Ticket list will appear here.</p>
      </SectionCard>
    </main>
  );
}