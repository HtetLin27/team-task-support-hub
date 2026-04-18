import StatusBadge from "@/components/shared/StatusBadge";

type TaskCardProps = {
  title: string;
  description: string;
  status: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function TaskCard({
  title,
  description,
  status,
  isSelected = false,
  onClick,
}: TaskCardProps) {
  return (
    <div className={`rounded-xl border bg-white p-5 shadow-sm transition cursor-pointer ${
        isSelected
            ? "border-gray-900 ring-1 ring-gray-900"
            : "border-gray-200"
        }`} onClick={onClick}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <StatusBadge label={status} />
      </div>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}