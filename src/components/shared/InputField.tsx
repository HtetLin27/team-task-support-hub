type InputFieldProps = {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export default function InputField({ label, type = "text", placeholder, value, onChange }: InputFieldProps) {
    return (
        <div className="space-y-2">
            <label htmlFor={label} className="text-sm font-medium text-gray-700">{label}</label>
            <input 
                id={label}
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
             />
        </div>
    )
}