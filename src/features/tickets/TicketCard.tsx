import StatusBadge from "@/components/shared/StatusBadge";

type TicketCardProps = {
  subject: string;
  priority: string;
  status: string;
};

export default function TicketCard({
  subject,
  priority,
  status,
}: TicketCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{subject}</h3>
        <StatusBadge label={status} />
      </div>
      <p className="mt-3 text-sm text-gray-600">Priority: {priority}</p>
    </div>
  );
}