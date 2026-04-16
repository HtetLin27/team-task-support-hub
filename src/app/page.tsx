import FeatureCard from "@/components/shared/FeatureCard"

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
        <FeatureCard title="Frontend" description="Next.js, TypeScript, Tailwind CSS" />
        <FeatureCard title="Backend" description=" APIs, auth, validation, database integration" />
        <FeatureCard title="Production Features" description="Uploads, caching concepts, queue patterns, deployment" />
      </div>
    </main>
  );
}