import PageHeader from "@/components/shared/PageHeader";

export default function TicketsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Tickets"
        description="Track support issues, priorities, and status updates."
      />

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-600">Ticket list will appear here.</p>
      </div>
    </main>
  );
}