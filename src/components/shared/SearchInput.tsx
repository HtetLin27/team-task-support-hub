type SearchInputProps = {
  placeholder?: string;
};

export default function SearchInput({
  placeholder = "Search...",
}: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
    />
  );
}