export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">
        Team Task & Support Hub
      </h1>
      <p className="mt-3 max-w-2xl text-gray-600">
        A fullstack learning project for task, ticket, and team workflow
        management.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Frontend</h2>
          <p className="mt-2 text-sm text-gray-600">
            Next.js, TypeScript, Tailwind CSS
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Backend</h2>
          <p className="mt-2 text-sm text-gray-600">
            APIs, auth, validation, database integration
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Production Features</h2>
          <p className="mt-2 text-sm text-gray-600">
            Uploads, caching concepts, queue patterns, deployment
          </p>
        </div>
      </div>
    </main>
  );
}