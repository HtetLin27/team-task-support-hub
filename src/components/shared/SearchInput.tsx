type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string)=>void
};

export default function SearchInput({
  placeholder = "Search...",
  value,
  onChange
}: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e)=> onChange?.(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
    />
  );
}