import Link from "next/link";

export default function AppHeader() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <Link href="/" className="text-lg font-bold text-gray-900">
                    Team Task & Support Hub
                </Link>
                <nav className="flex items-center gap-4 text-sm text-gray-700">
                    <Link href="/">Home</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/tasks">Tasks</Link>
                    <Link href="/tickets">Tickets</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </nav>

            </div>
        </header>
    )
}