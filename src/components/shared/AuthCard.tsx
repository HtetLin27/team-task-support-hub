type AuthCardProps = {
  children: React.ReactNode;
};

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}