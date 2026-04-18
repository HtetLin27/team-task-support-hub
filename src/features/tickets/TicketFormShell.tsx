import FormSectionCard from "@/components/shared/FormSectionCard";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import TextAreaField from "@/components/shared/TextAreaField";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";

type TicketFormShellProps = {
  onCancel?: () => void;
};

export default function TicketFormShell({ onCancel }: TicketFormShellProps  ) {
  return (
    <FormSectionCard
      title="Create Ticket"
      description="Add a support ticket with subject, priority, and details."
    >
      <InputField label="Subject" placeholder="Enter ticket subject" />
      <SelectField label="Priority" options={["Low", "Medium", "High"]} />
      <SelectField label="Status" options={["Open", "In Review", "Closed"]} />
      <TextAreaField
        label="Description"
        placeholder="Describe the issue or request"
      />
      <div className="flex items-center gap-2">
        <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
        <PrimaryButton>Create Ticket</PrimaryButton>
      </div>
    </FormSectionCard>
  );
}