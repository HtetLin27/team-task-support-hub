import AuthCard from "@/components/shared/AuthCard";
import InputField from "@/components/shared/InputField";
import PageHeader from "@/components/shared/PageHeader";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <PageHeader
        title="Register"
        description="Create an account to start managing tasks and tickets."
      />

      <AuthCard>
        <div className="space-y-4">
          <InputField
            label="Name"
            placeholder="Enter your full name"
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Create a password"
          />
          <PrimaryButton>Create Account</PrimaryButton>
        </div>
      </AuthCard>
    </main>
  );
}