type SecondaryButtonProps = {
  children: React.ReactNode;
};

export default function SecondaryButton({
  children,
}: SecondaryButtonProps) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
      {children}
    </button>
  );
}