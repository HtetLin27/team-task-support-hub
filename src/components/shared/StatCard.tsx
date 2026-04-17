type StatCardProps = {
    title: string;
    count: number;
}

export default function StatCard({ title, count }: StatCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm text-gray-500">{title}</h2>
            <p className="mt-2 text-2xl font-bold">{count}</p>
        </div>
    )
}