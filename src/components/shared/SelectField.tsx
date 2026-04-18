type SelectFieldProps = {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
};

export default function SelectField({
  label,
  options,
  value,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select 
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}