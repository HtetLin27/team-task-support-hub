type SectionCardProps = {
  children: React.ReactNode;
};

export default function SectionCard({ children }: SectionCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}