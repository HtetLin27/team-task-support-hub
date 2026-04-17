import DetailSectionCard from "@/components/shared/DetailSectionCard";
import InfoListCard from "@/components/shared/InfoListCard";
import StatusBadge from "@/components/shared/StatusBadge";

type TaskDetailShellProps = {
  title: string;
  description: string;
  status: string;
  priority: string;
  assignee: string;
  createdAt: string;
};

export default function TaskDetailShell({
  title,
  description,
  status,
  priority,
  assignee,
  createdAt,
}: TaskDetailShellProps) {
  return (
    <div className="space-y-4">
      <DetailSectionCard title={title}>
        <div className="space-y-4">
          <StatusBadge label={status} />
          <p className="text-sm leading-6 text-gray-600">{description}</p>
        </div>
      </DetailSectionCard>

      <InfoListCard
        title="Task Details"
        items={[
          { label: "Priority", value: priority },
          { label: "Assignee", value: assignee },
          { label: "Created At", value: createdAt },
        ]}
      />
    </div>
  );
}