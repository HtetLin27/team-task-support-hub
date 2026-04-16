import PageHeader from "@/components/shared/PageHeader";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <PageHeader
        title="Login"
        description="Sign in to access your dashboard and workspace."
      />

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-600">Login form will go here.</p>
      </div>
    </main>
  );
}