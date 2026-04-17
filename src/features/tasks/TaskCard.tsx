import StatusBadge from "@/components/shared/StatusBadge";

type TaskCardProps = {
  title: string;
  description: string;
  status: string;
};

export default function TaskCard({
  title,
  description,
  status,
}: TaskCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <StatusBadge label={status} />
      </div>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}