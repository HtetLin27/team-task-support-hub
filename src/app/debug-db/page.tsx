import { prisma } from "@/lib/prisma";

export default async function DebugDbPage() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">Debug DB Page</h1>
      <p className="mt-2 text-sm text-gray-600">
        Reading tasks directly from PostgreSQL using Prisma.
      </p>

      <div className="mt-6 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{task.description}</p>
            <p className="mt-2 text-sm text-gray-500">Status: {task.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}