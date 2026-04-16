import PageHeader from "@/components/shared/PageHeader";

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <PageHeader
        title="Register"
        description="Create an account to start managing tasks and tickets."
      />

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-600">Register form will go here.</p>
      </div>
    </main>
  );
}