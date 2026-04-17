import AuthCard from "@/components/shared/AuthCard";
import InputField from "@/components/shared/InputField";
import PageHeader from "@/components/shared/PageHeader";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <PageHeader
        title="Login"
        description="Sign in to access your dashboard and workspace."
      />

      <AuthCard>
        <div className="space-y-4">
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <PrimaryButton>Sign In</PrimaryButton>
        </div>
      </AuthCard>
    </main>
  );
}