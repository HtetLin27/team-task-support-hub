import FilterBar from "@/components/shared/FilterBar";
import PageHeader from "@/components/shared/PageHeader";
import { mockTickets } from "@/constants/mockTickets";
import TicketCard from "@/features/tickets/TicketCard";

export default function TicketsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Tickets"
        description="Track support issues, priorities, and status updates."
      />

      <FilterBar
        searchPlaceholder="Search tickets..."
        primaryActionLabel="Create Ticket"
      />

      <div className="grid gap-4">
        {mockTickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            subject={ticket.subject}
            priority={ticket.priority}
            status={ticket.status}
          />
        ))}
      </div>
    </main>
  );
}