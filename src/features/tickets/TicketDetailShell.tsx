import DetailSectionCard from "@/components/shared/DetailSectionCard";
import InfoListCard from "@/components/shared/InfoListCard";
import StatusBadge from "@/components/shared/StatusBadge";

type TicketDetailShellProps = {
  subject: string;
  status: string;
  priority: string;
  requester: string;
  createdAt: string;
};

export default function TicketDetailShell({
  subject,
  status,
  priority,
  requester,
  createdAt,
}: TicketDetailShellProps) {
  return (
    <div className="space-y-4">
      <DetailSectionCard title={subject}>
        <div className="space-y-4">
          <StatusBadge label={status} />
          <p className="text-sm text-gray-600">
            Review the ticket details and update the support workflow.
          </p>
        </div>
      </DetailSectionCard>

      <InfoListCard
        title="Ticket Details"
        items={[
          { label: "Priority", value: priority },
          { label: "Requester", value: requester },
          { label: "Created At", value: createdAt },
        ]}
      />
    </div>
  );
}