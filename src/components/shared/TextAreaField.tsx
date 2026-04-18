type TextAreaFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export default function TextAreaField({
  label,
  placeholder,
  value,  onChange,
}: TextAreaFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-400"
      />
    </div>
  );
}