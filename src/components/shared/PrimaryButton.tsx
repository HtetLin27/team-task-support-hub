type PrimaryButtonProps = {
  children: React.ReactNode;
};

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
        <button className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
            {children}
        </button>
  );
}