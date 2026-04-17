import FilterBar from "@/components/shared/FilterBar";
import PageHeader from "@/components/shared/PageHeader";
import { mockTickets } from "@/constants/mockTickets";
import TicketCard from "@/features/tickets/TicketCard";
import TicketDetailShell from "@/features/tickets/TicketDetailShell";
import TicketFormShell from "@/features/tickets/TicketFormShell";

export default function TicketsPage() {
   const selectedTicket = mockTickets[0];
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

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
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
        </div>
        <div className="space-y-4">
          {/* <TicketFormShell /> */}
          <TicketDetailShell
            subject={selectedTicket.subject}
            priority={selectedTicket.priority}
            status={selectedTicket.status}
            requester={selectedTicket.requester}
            createdAt={selectedTicket.createdAt}
          />
        </div>
      </div>

      
    </main>
  );
}