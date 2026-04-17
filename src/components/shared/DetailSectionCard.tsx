type DetailSectionCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function DetailSectionCard({
  title,
  children,
}: DetailSectionCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}