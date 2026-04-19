"use client";
import { useState } from "react";

import EmptyState from "@/components/shared/EmptyState";
import FilterBar from "@/components/shared/FilterBar";
import PageHeader from "@/components/shared/PageHeader";
import { mockTickets } from "@/constants/mockTickets";
import TicketCard from "@/features/tickets/TicketCard";
import TicketDetailShell from "@/features/tickets/TicketDetailShell";
import TicketFormShell from "@/features/tickets/TicketFormShell";

export default function TicketsPage() {
  const [tickets, setTickets] = useState(mockTickets);
  const [selectedTicketId, setSelectedTicketId] = useState(mockTickets[0]?.id ?? null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const selectedTicket =
    tickets.find((ticket) => ticket.id === selectedTicketId) ?? tickets[0];
  const [searchText, setSearchText] = useState("");
  const filteredTickets = tickets.filter((ticket) =>
  ticket.subject.toLowerCase().includes(searchText.toLowerCase()) ||
  ticket.priority.toLowerCase().includes(searchText.toLowerCase())
);

  const visibleSelectedTicket =
    filteredTickets.find((ticket) => ticket.id === selectedTicketId) ?? filteredTickets[0] ?? null;
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <PageHeader
        title="Tickets"
        description="Track support issues, priorities, and status updates."
      />

      <FilterBar
        searchPlaceholder="Search tickets..."
        primaryActionLabel="Create Ticket"
        onPrimaryAction={()=>setShowCreateForm(true)}
        searchValue={searchText}
        onSearchChange={setSearchText}
        onSecondaryAction={() => setSearchText("")}
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="grid gap-4">
            {filteredTickets.length > 0 ? (
              <div className="grid gap-4">
                {filteredTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    subject={ticket.subject}
                    priority={ticket.priority}
                    status={ticket.status}
                    isSelected={ticket.id === selectedTicketId && !showCreateForm}
                    onClick={() => {
                      setSelectedTicketId(ticket.id);
                      setShowCreateForm(false);
                    }}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No tickets found"
                description="Try a different search keyword or create a new ticket."
              />
            )}
            {/* {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                subject={ticket.subject}
                priority={ticket.priority}
                status={ticket.status}
                isSelected={ticket.id === selectedTicketId && !showCreateForm}
                onClick={() => {
                  setSelectedTicketId(ticket.id);
                  setShowCreateForm(false);
                }}
              />
            ))} */}
          </div>
        </div>
        <div className="space-y-4">
           {showCreateForm ? (
              <TicketFormShell onCancel={() => setShowCreateForm(false)}
               onCreate={(ticketData) =>{
                const newTicket = {
                  id: Date.now(),
                  subject: ticketData.subject,
                  priority: ticketData.priority,
                  status: ticketData.status,
                  description: ticketData.description,
                  requester: "Htet",
                  createdAt: new Date().toISOString(),
                }
                setTickets((prev) => [newTicket, ...prev]);
                setSelectedTicketId(newTicket.id);
                setShowCreateForm(false);
               }}
               />
            ) : visibleSelectedTicket ? (
              <TicketDetailShell
                subject={visibleSelectedTicket.subject}
                priority={visibleSelectedTicket.priority}
                status={visibleSelectedTicket.status}
                requester={visibleSelectedTicket.requester}
                createdAt={visibleSelectedTicket.createdAt}                      />
            ) : (
              <EmptyState
                title="No ticket selected"
                description="Choose a ticket from the list or create a new one."
              />
            )}
        </div>
      </div>

      
    </main>
  );
}