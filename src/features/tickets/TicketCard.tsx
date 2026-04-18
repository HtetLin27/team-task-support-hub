import StatusBadge from "@/components/shared/StatusBadge";

type TicketCardProps = {
  subject: string;
  priority: string;
  status: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function TicketCard({
  subject,
  priority,
  status,
  isSelected = false,
  onClick
}: TicketCardProps) {
  return (
    <div className={`rounded-xl border bg-white p-5 shadow-sm transition ${
        isSelected
            ? "border-gray-900 ring-1 ring-gray-900"
            : "border-gray-200"
        }`} onClick={onClick}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{subject}</h3>
        <StatusBadge label={status} />
      </div>
      <p className="mt-3 text-sm text-gray-600">Priority: {priority}</p>
    </div>
  );
}