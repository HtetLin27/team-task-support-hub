type InputFieldProps = {
    label: string;
    type?: string;
    placeholder?: string;
}

export default function InputField( {label,type = "text",placeholder,}: InputFieldProps){
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-400"
             />
        </div>
    )
}