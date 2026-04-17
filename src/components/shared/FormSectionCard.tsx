type FormSectionCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function FormSectionCard({
  title,
  description,
  children,
}: FormSectionCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        ) : null}
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
}